import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Truck, Headphones } from 'lucide-react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-gradient-to-r from-blue-600 to-purple-600" data-scroll-section>
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              data-scroll
              data-scroll-speed="1"
            >
              Welcome to MockAmazon
            </h1>
            <p 
              className="text-xl md:text-2xl mb-12 opacity-90"
              data-scroll
              data-scroll-speed="2"
            >
              Discover amazing products at unbeatable prices
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 m-3"
              data-scroll
              data-scroll-speed="3"
            >
              Shop Now
            </Link>
            <Link
            to = "/about" 
            className="inline-block  bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300" 
            data-scroll
            data-scroll-speed="3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50" data-scroll-section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Thousands of products to choose from</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Star className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
              <p className="text-gray-600">Curated products from top brands</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Truck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Headphones className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white" data-scroll-section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <ProductList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white" data-scroll-section>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of satisfied customers today</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
          >
            Browse All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;