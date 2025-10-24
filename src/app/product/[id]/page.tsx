"use client";

import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { products, getProductById } from "@/lib/data/products";
import { useCart } from "@/lib/store/cart-context";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { toast } from "sonner";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { addToCart } = useCart();

  const product = getProductById(resolvedParams.id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white pt-24 lg:pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-black mb-4">Product Not Found</h1>
              <p className="text-gray-600 mb-8">
                The product you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-tiffany text-white font-semibold rounded-lg hover:bg-tiffany-hover transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Shop</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.id !== product.id && p.category === product.category
  );

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!", {
      description: product.name,
      action: {
        label: "View Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-tiffany transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Shop</span>
            </Link>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-8xl font-bold text-gray-300 mb-4">
                  {product.brand.toUpperCase()}
                </p>
                <p className="text-sm text-gray-500">Product Image</p>
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  {product.brand}
                </p>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                {product.name}
              </h1>

              <p className="text-3xl font-bold text-tiffany mb-8">
                €{product.price.toLocaleString()}
              </p>

              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Specs */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-sm font-medium text-gray-700">Size</span>
                  <span className="text-sm font-semibold text-black">{product.size}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-sm font-medium text-gray-700">Color</span>
                  <span className="text-sm font-semibold text-black">{product.color}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <span className="text-sm font-medium text-gray-700">Category</span>
                  <span className="text-sm font-semibold text-black">{product.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Availability</span>
                  <span className="flex items-center space-x-2">
                    {product.inStock ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-600">In Stock</span>
                      </>
                    ) : (
                      <span className="text-sm font-semibold text-red-600">Out of Stock</span>
                    )}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-tiffany text-white font-semibold text-lg rounded-lg hover:bg-tiffany-hover transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-tiffany"
              >
                <ShoppingCart className="w-6 h-6" />
                <span>{product.inStock ? "Add to Cart" : "Out of Stock"}</span>
              </button>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift"
                  >
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <div className="text-center p-6">
                        <p className="text-4xl font-bold text-gray-300">
                          {relatedProduct.brand.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        {relatedProduct.brand}
                      </p>
                      <h3 className="text-lg font-semibold text-black mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-xl font-bold text-tiffany">
                        €{relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
