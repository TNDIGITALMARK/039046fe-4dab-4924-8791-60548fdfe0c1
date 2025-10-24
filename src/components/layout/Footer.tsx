"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Music } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center space-x-0 mb-4">
              <span className="text-2xl font-bold text-black">Tag</span>
              <span className="text-2xl font-bold text-tiffany">Off</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Streetwear. Redefined.
            </p>
            <p className="text-sm text-gray-500">
              Premium streetwear for the modern urban lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-gray-600 hover:text-tiffany transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 hover:text-tiffany transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-tiffany transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-tiffany hover:text-white rounded-full transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-tiffany hover:text-white rounded-full transition-all duration-200"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TagOff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
