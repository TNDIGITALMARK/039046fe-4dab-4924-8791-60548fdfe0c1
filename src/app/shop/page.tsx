"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/lib/data/products";
import { useCart } from "@/lib/store/cart-context";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function ShopPage() {
  const { addToCart } = useCart();

  const handleQuickAdd = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(product);
      toast.success("Added to cart!", {
        description: product.name,
      });
    }
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
              Shop Collection
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover our curated selection of premium streetwear from the world&apos;s most exclusive brands.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-5xl font-bold text-gray-300 mb-2">
                        {product.brand.toUpperCase()}
                      </p>
                      <p className="text-xs text-gray-500">Product Image</p>
                    </div>
                  </div>

                  {/* Stock Badge */}
                  {product.inStock && (
                    <div className="absolute top-4 left-4 bg-tiffany text-white text-xs font-semibold px-3 py-1 rounded-full">
                      In Stock
                    </div>
                  )}

                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleQuickAdd(product.id)}
                    className="absolute bottom-4 right-4 p-3 bg-white text-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-tiffany hover:text-white"
                    aria-label="Quick add to cart"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      {product.brand}
                    </p>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Product Details */}
                  <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded">
                      Size: {product.size}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 rounded">
                      {product.color}
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-tiffany">
                      €{product.price.toLocaleString()}
                    </span>
                    <Link
                      href={`/product/${product.id}`}
                      className="text-sm font-medium text-black hover:text-tiffany transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (if no products) */}
          {products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No products available at the moment.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
