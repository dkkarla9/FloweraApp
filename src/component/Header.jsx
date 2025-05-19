import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-2xl font-bold tracking-tight text-gray-900">
        LuxeStore
      </div>

      {/* Center: Navigation (Desktop) */}
       <div className="flex items-center gap-6">
      <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
        <a href="/" className="hover:text-black transition">Home</a>
        <a href="/shop" className="hover:text-black transition">Shop</a>
        <a href="/faq" className="hover:text-black transition">Faq</a>
        <a href="/terms&condition" className="hover:text-black transition">Terms & condition</a>
        <a href="/privacy" className="hover:text-black transition">Privacy</a>
      </nav>

      {/* Right: Icons */}
     
        <FaUser className="text-xl text-gray-600 hover:text-black cursor-pointer transition" />
        <FaShoppingCart className="text-xl text-gray-600 hover:text-black cursor-pointer transition" />

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50">
          <a href="/" className="py-2 text-gray-700 hover:text-black">Home</a>
          <a href="/shop" className="py-2 text-gray-700 hover:text-black">Shop</a>
          <a href="/faq" className="py-2 text-gray-700 hover:text-black">FAQ</a>
          <a href="/terms&condition" className="py-2 text-gray-700 hover:text-black">Terms & condition</a>
           <a href="/privacy" className="py-2 text-gray-700 hover:text-black">Privacy</a>

        </div>
      )}
    </header>
  );
};

export default Header;
