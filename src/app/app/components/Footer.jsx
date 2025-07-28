"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-full mx-auto px-4 mt-24">
        <div className="flex flex-col items-center md:flex-row md:items-start w-full">
          <div className="text-xl font-normal md:flex-1 md:text-left">
            <a
              href="tel:+4512345678"
              aria-label="contact phone"
              className="text-xs mb-2"
            >
              +4512345678
            </a>
          </div>

          <div className="flex flex-col items-center justify-center text-center md:flex-1">
            <a
              href="mailto: f@filippaah.com"
              aria-label="contact email"
              className="text-xs mb-2"
            >
              f@filippaah.com
            </a>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} FILIPPA A. H. | All rights reserved.
            </p>
          </div>

          <div className="mt-4 md:mt-0 md:flex-1 md:flex md:justify-end">
            <Link href="https://www.instagram.com/filippaastrup/" target="_blank" role="button" aria-label="Instagram">
              <FaInstagram className="text-lg hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;