"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/lib/store/cart-context";
import { CreditCard, Lock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "card">("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success("Order placed successfully!", {
        description: "Thank you for your purchase. Check your email for confirmation.",
      });
      router.push("/");
    }, 2000);
  };

  if (cart.items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white pt-24 lg:pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center py-20">
              <h1 className="text-3xl font-bold text-black mb-4">No Items to Checkout</h1>
              <p className="text-lg text-gray-600 mb-8">
                Your cart is empty. Add some items before checking out.
              </p>
              <button
                onClick={() => router.push("/shop")}
                className="px-8 py-4 bg-tiffany text-white font-semibold text-lg rounded-lg hover:bg-tiffany-hover transition-colors"
              >
                Shop Now
              </button>
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
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-2">Checkout</h1>
              <p className="text-lg text-gray-600">Complete your order securely</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h2 className="text-xl font-bold text-black mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h2 className="text-xl font-bold text-black mb-6">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                        />
                      </div>
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          required
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h2 className="text-xl font-bold text-black mb-6">Payment Method</h2>

                    {/* Payment Options */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          paymentMethod === "card"
                            ? "border-tiffany bg-tiffany-light"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <CreditCard className="w-6 h-6 mx-auto mb-2" />
                        <span className="text-sm font-medium">Credit Card</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("paypal")}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          paymentMethod === "paypal"
                            ? "border-tiffany bg-tiffany-light"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <div className="text-2xl font-bold text-blue-600 mb-2">PayPal</div>
                      </button>
                    </div>

                    {/* Card Details */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            required
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-2">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              id="cardExpiry"
                              name="cardExpiry"
                              required
                              value={formData.cardExpiry}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                            />
                          </div>
                          <div>
                            <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700 mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              id="cardCvv"
                              name="cardCvv"
                              required
                              value={formData.cardCvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tiffany focus:border-tiffany"
                            />
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-4">
                          <Lock className="w-4 h-4 mr-2" />
                          <span>Your payment information is secure and encrypted</span>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cart.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3">
                        <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-gray-400">
                            {item.brand.substring(0, 2)}
                          </span>
                        </div>
                        <div className="flex-grow min-w-0">
                          <p className="text-sm font-medium text-black truncate">{item.name}</p>
                          <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold text-black">
                          €{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-300 pt-4 space-y-3 mb-6">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal</span>
                      <span className="font-semibold">€{cart.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3">
                      <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span className="text-tiffany">€{cart.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-tiffany text-white font-semibold text-lg rounded-lg hover:bg-tiffany-hover transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Place Order</span>
                      </>
                    )}
                  </button>
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
