"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full py-4 md:py-8 px-4 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center text-black">
          <div className="flex items-center space-x-12">
            <Link 
              href="/" 
              className="text-md font-light tracking-wider"
            >
              FILIPPA A. H.
            </Link>

            <Link 
              href="/work" 
              className={`text-md font-light ${
                pathname === "/work" 
                  ? "text-gray-500 italic" 
                  : "hover:line-through hover:text-gray-600"
              }`}
            >
              WORK
            </Link>
            
            <Link 
              href="/personal" 
              className={`text-md font-light ${
                pathname === "/personal" 
                  ? "text-gray-500 italic" 
                  : "hover:line-through hover:text-gray-600"
              }`}
            >
              PERSONAL
            </Link>
            
            <Link 
              href="/about" 
              className={`text-md font-light ${
                pathname === "/about" 
                  ? "text-gray-500 italic" 
                  : "hover:line-through hover:text-gray-600"
              }`}
            >
              ABOUT
            </Link>
            
            <Link 
              href="/contact" 
              className={`text-md font-light ${
                pathname === "/contact" 
                  ? "text-gray-500 italic" 
                  : "hover:line-through hover:text-gray-600"
              }`}
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center text-black">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-sm font-light tracking-wider"
            onClick={closeMenu}
          >
            FILIPPA A. H.
          </Link>

          {/* Burger Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-opacity duration-200 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
            {/* Header with logo and close button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <Link 
                href="/" 
                className="text-sm font-light tracking-wider text-black"
                onClick={closeMenu}
              >
                FILIPPA A. H.
              </Link>
              
              <button
                onClick={closeMenu}
                className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
                aria-label="Close menu"
              >
                <span className="block w-5 h-0.5 bg-black rotate-45 translate-y-1.5"></span>
                <span className="block w-5 h-0.5 bg-black opacity-0"></span>
                <span className="block w-5 h-0.5 bg-black -rotate-45 -translate-y-1.5"></span>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              <Link 
                href="/work" 
                className={`text-xl font-light ${
                  pathname === "/work" 
                    ? "text-gray-500 italic" 
                    : "hover:line-through hover:text-gray-600"
                }`}
                onClick={closeMenu}
              >
                WORK
              </Link>
              
              <Link 
                href="/personal" 
                className={`text-xl font-light ${
                  pathname === "/personal" 
                    ? "text-gray-500 italic" 
                    : "hover:line-through hover:text-gray-600"
                }`}
                onClick={closeMenu}
              >
                PERSONAL
              </Link>
              
              <Link 
                href="/about" 
                className={`text-xl font-light ${
                  pathname === "/about" 
                    ? "text-gray-500 italic" 
                    : "hover:line-through hover:text-gray-600"
                }`}
                onClick={closeMenu}
              >
                ABOUT
              </Link>
              
              <Link 
                href="/contact" 
                className={`text-xl font-light ${
                  pathname === "/contact" 
                    ? "text-gray-500 italic" 
                    : "hover:line-through hover:text-gray-600"
                }`}
                onClick={closeMenu}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;