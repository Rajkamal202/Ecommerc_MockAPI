import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden" data-scroll-section>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative container mx-auto px-6 py-32 md:py-48">
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
            Discover a new world of shopping with unbeatable deals and endless possibilities
          </p>
          <div 
            className="space-x-4"
            data-scroll
            data-scroll-speed="3"
          >
            <Link
              to="/products"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;