// client/src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition duration-300">{product.title}</h3>
        </Link>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="text-blue-600 hover:text-blue-800 transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;