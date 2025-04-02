import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full py-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-black">
        {/* Logo on the left */}
        <div className="flex items-center">
          <a href="/" className="text-lg font-light tracking-wider">FILIPPA A. H.</a>
        </div>

        {/* Links on the right */}
        <div className="flex items-center space-x-8">
          <a href="/work" className="text-sm font-light hover:underline">Work</a>
          <a href="/about" className="text-sm font-light hover:underline">About</a>
          <a href="/contact" className="text-sm font-light hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;