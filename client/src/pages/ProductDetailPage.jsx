// client/src/pages/ProductDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../hooks/useCart';
import { Star, ShoppingCart, CreditCard } from 'lucide-react';

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    // Navigate to checkout page
    window.location.href = '/checkout';
  };

  if (isLoading) {
    return <div className="container mx-auto px-6 py-8 text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="container mx-auto px-6 py-8 text-center">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill={i < Math.round(product.rating.rate) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-gray-600">({product.rating.count} reviews)</span>
          </div>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              <ShoppingCart className="mr-2" size={20} />
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              <CreditCard className="mr-2" size={20} />
              Buy Now
            
            </button>
          </div>
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Category: {product.category}</li>
              <li>Material: Premium Quality</li>
              <li>Shipping: Free</li>
              <li>Returns: 30-day money-back guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;