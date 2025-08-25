"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_ITEMS = [
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "For DeFi Protocols",
      href: "#for-defi",
    },
    {
      label: "For Institutions",
      href: "#for-institutions",
    },
    {
      label: "Governance",
      href: "#governance",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  src="/brand/logo-text.svg"
                  alt="DiversiFi"
                  width={100}
                  height={24}
                  className="w-[100px] h-[24px]"
                />
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-gray-300 hover:text-textPrimary transition-colors flex items-center"
              >
                {item.label}
              </a>
            ))}

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-primary text-dark px-6 py-2 my-auto font-semibold hover:bg-primary/90 transition-colors">
                Integrate DiversiFi
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-textPrimary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-gray/95 rounded-lg mt-2">
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-300 hover:text-textPrimary"
              >
                How it works
              </a>
              <a
                href="#for-defi"
                className="block px-3 py-2 text-gray-300 hover:text-textPrimary"
              >
                For DeFi Protocols
              </a>
              <a
                href="#for-institutions"
                className="block px-3 py-2 text-gray-300 hover:text-textPrimary"
              >
                For Institutions
              </a>
              <a
                href="#governance"
                className="block px-3 py-2 text-gray-300 hover:text-textPrimary"
              >
                Governance
              </a>
              <div className="pt-4">
                <button className="w-full bg-primary text-dark px-6 py-2 rounded-lg font-semibold">
                  Integrate DiversiFi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
