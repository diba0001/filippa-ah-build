"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="max-w-full mx-auto px-4 mt-24">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start w-full">
          <div className="text-xl font-normal text-left md:text-start">
                <a
              href="tel:+4512345678"
              aria-label="contact phone"
              className="text-xs mb-2"
            >
              +4512345678
            </a>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <a
              href="mailto:example@example.com"
              aria-label="contact email"
              className="text-xs mb-2"
            >
              filippa@email.com
            </a>
            <p className="text-xs">
              &copy; {new Date().getFullYear()} FILIPPA A. H. | All rights reserved.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link href="https://www.instagram.com/XXX/" target="_blank" role="button" aria-label="Instagram">
              <FaInstagram className="text-lg hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;