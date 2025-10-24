"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 lg:pt-32 pb-20 lg:pb-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Logo Display */}
              <div className="mb-8 animate-fade-in">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
                  <span className="text-black">Tag</span>
                  <span className="text-tiffany">Off</span>
                </h1>
              </div>

              {/* Slogan */}
              <div className="mb-12 animate-fade-in-delay">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 tracking-wide">
                  Streetwear. <span className="font-semibold">Redefined.</span>
                </p>
              </div>

              {/* CTA Button */}
              <div className="animate-fade-in-delay-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-tiffany text-white font-semibold text-lg rounded-lg hover:bg-tiffany-hover transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tiffany opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200 opacity-30 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Featured Products Preview */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                Premium Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our curated selection of luxury streetwear from the world&apos;s most exclusive brands.
              </p>
            </div>

            {/* Product Cards Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Palace Card */}
              <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-6xl font-bold text-gray-300 mb-4">PALACE</p>
                      <p className="text-sm text-gray-500">Image Preview</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Palace Pertex Balaclava Puffer
                  </h3>
                  <p className="text-gray-600 mb-4">Premium technical outerwear</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-tiffany">€1,100</span>
                    <Link
                      href="/shop"
                      className="text-sm font-medium text-black hover:text-tiffany transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Broken Planet Card */}
              <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="text-6xl font-bold text-gray-300 mb-4">BROKEN</p>
                      <p className="text-6xl font-bold text-gray-300">PLANET</p>
                      <p className="text-sm text-gray-500 mt-4">Image Preview</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Broken Planet Puffer Jacket
                  </h3>
                  <p className="text-gray-600 mb-4">Oversized urban styling</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-tiffany">€400</span>
                    <Link
                      href="/shop"
                      className="text-sm font-medium text-black hover:text-tiffany transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Brand Statement */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Luxury Streetwear,<br />Redefined for You
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                TagOff brings you exclusive access to the world&apos;s most sought-after streetwear brands.
                Each piece is carefully curated to represent the perfect fusion of urban culture,
                premium quality, and cutting-edge design.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}