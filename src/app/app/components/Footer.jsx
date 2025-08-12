"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8" role="contentinfo">
      <div className="max-w-4xl mx-auto px-4 mt-24">
        {/* Mobile Layout - Stacked and Centered */}
        <div className="flex flex-col items-center space-y-2 md:hidden">
          <a
            href="tel:+4550708507"
            aria-label="Call +45 50708507"
            className="text-sm hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-2 py-1"
          >
            +45 50708507
          </a>
          
          <a
            href="mailto:f@filippaah.com"
            aria-label="Email f@filippaah.com"
            className="text-sm hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-2 py-1"
          >
            f@filippaah.com
          </a>
          
          <Link 
            href="https://www.instagram.com/filippaastrup/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Instagram profile (opens in new tab)"
            className="hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded p-2"
          >
            <FaInstagram className="text-xl" />
          </Link>
          
          <p className="text-xs text-center text-gray-600">
            &copy; {new Date().getFullYear()} FILIPPA A. H. | All rights reserved.
          </p>
        </div>

        {/* Desktop Layout - Horizontal and Centered */}
        <div className="hidden md:flex md:items-center md:justify-center md:space-x-8">
          <a
            href="tel:+4550708507"
            aria-label="Call +45 50708507"
            className="text-sm hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-2 py-1"
          >
            +45 50708507
          </a>
          
          <span className="text-gray-300" aria-hidden="true">|</span>
          
          <a
            href="mailto:f@filippaah.com"
            aria-label="Email f@filippaah.com"
            className="text-sm hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-2 py-1"
          >
            f@filippaah.com
          </a>
          
          <span className="text-gray-300" aria-hidden="true">|</span>
          
          <Link 
            href="https://www.instagram.com/filippaastrup/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Instagram profile (opens in new tab)"
            className="hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded p-2"
          >
            <FaInstagram className="text-lg" />
          </Link>
        </div>
        
        {/* Copyright - Desktop Only (Centered Below) */}
        <div className="hidden md:block md:text-center md:mt-6">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} FILIPPA A. H. | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;