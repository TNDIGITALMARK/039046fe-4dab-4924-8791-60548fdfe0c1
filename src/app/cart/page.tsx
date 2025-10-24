"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/store/cart-context";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleRemove = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success("Removed from cart", {
      description: productName,
    });
  };

  const handleIncrement = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrement = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (cart.items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white pt-24 lg:pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center py-20">
              <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-black mb-4">Your Cart is Empty</h1>
              <p className="text-lg text-gray-600 mb-8">
                Add some premium streetwear to your cart to get started.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-tiffany text-white font-semibold text-lg rounded-lg hover:bg-tiffany-hover transition-colors shadow-md"
              >
                <span>Shop Now</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2">
                Shopping Cart
              </h1>
              <p className="text-lg text-gray-600">
                {cart.itemCount} {cart.itemCount === 1 ? "item" : "items"} in your cart
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cart.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <p className="text-2xl font-bold text-gray-300">
                        {item.brand.substring(0, 2).toUpperCase()}
                      </p>
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow">
                      <div className="mb-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {item.brand}
                        </p>
                      </div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                        <span>Size: {item.size}</span>
                        <span>•</span>
                        <span>{item.color}</span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleDecrement(item.id, item.quantity)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-semibold text-black">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(item.id, item.quantity)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemove(item.id, item.name)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right sm:text-left lg:text-right flex-shrink-0">
                      <p className="text-2xl font-bold text-tiffany">
                        €{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        €{item.price.toLocaleString()} each
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-semibold">€{cart.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between text-xl font-bold text-black">
                        <span>Total</span>
                        <span className="text-tiffany">€{cart.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full px-6 py-4 bg-tiffany text-white font-semibold text-lg rounded-lg hover:bg-tiffany-hover transition-colors shadow-md hover:shadow-lg"
                  >
                    Proceed to Checkout
                  </button>

                  <Link
                    href="/shop"
                    className="block text-center mt-4 text-sm font-medium text-gray-600 hover:text-tiffany transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
