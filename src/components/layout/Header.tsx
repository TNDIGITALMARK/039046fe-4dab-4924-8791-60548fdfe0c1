"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/store/cart-context";
import { ShoppingCart, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const { cart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-0">
            <span className="text-2xl lg:text-3xl font-bold text-black">Tag</span>
            <span className="text-2xl lg:text-3xl font-bold text-tiffany">Off</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-black hover:text-tiffany transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium text-black hover:text-tiffany transition-colors"
            >
              Shop
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-6 h-6 text-black" />
              {cart.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-tiffany text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cart.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-black hover:text-tiffany transition-colors"
              >
                Home
              </Link>
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-black hover:text-tiffany transition-colors"
              >
                Shop
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
