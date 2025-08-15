'use client';

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              FitTrack
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="/support" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Support
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="bg-[#3d82f6] hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Download App
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
