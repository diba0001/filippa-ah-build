"use client"; // Required for interactive components

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Link href="/" className="text-lg font-light tracking-wider">
            FILIPPA A. H.
          </Link>
        </div>

        {/* Links on the right */}
        <div className="flex items-center space-x-8">
          <Link href="/work" className="text-sm font-light hover:underline">
            Work
          </Link>
          <Link href="/about" className="text-sm font-light hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-sm font-light hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
