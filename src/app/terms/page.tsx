"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8">
              Terms & Conditions
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to TagOff. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">2. Use of Site</h2>
                <p className="text-gray-700 leading-relaxed">
                  The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">3. Products & Orders</h2>
                <p className="text-gray-700 leading-relaxed">
                  All products are subject to availability. We reserve the right to limit quantities of any products or services that we offer. Product descriptions and pricing are subject to change at any time without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">4. Payment & Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We accept various payment methods including PayPal, Visa, and Mastercard. All payments are processed securely and your payment information is encrypted.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">5. Shipping & Returns</h2>
                <p className="text-gray-700 leading-relaxed">
                  We offer free shipping on all orders. Returns are accepted within 30 days of purchase. Items must be in original condition with tags attached.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">6. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us through our contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
