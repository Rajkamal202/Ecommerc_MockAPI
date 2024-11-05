// client/src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import CartSidebar from './CartSidebar';

const Header = () => {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MockAmazon</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300 transition duration-300">Products</Link>
          <Link to="/about" className="hover:text-gray-300 transition duration-300">About</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-gray-300 transition duration-300"
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden hover:text-gray-300 transition duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-2">
          <Link to="/" className="block py-2 hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/products" className="block py-2 hover:text-gray-300 transition duration-300">Products</Link>
          <Link to="/about" className="block py-2 hover:text-gray-300 transition duration-300">About</Link>
        </nav>
      )}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;