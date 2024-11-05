// client/src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">About MockAmazon</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          MockAmazon is a cutting-edge e-commerce platform designed to provide users with a seamless online shopping experience. 
          Our mission is to connect consumers with a wide range of high-quality products at competitive prices, all from the comfort of their homes.
        </p>
        <p className="mb-4">
          Founded in 2023, MockAmazon has quickly grown to become one of the leading online marketplaces, offering everything from electronics and fashion to home goods and beyond. 
          We pride ourselves on our user-friendly interface, secure payment systems, and efficient delivery services.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Customer Satisfaction: We always put our customers first.</li>
          <li>Quality: We ensure all products meet high-quality standards.</li>
          <li>Innovation: We continuously improve our platform and services.</li>
          <li>Integrity: We operate with honesty and transparency.</li>
          <li>Sustainability: We're committed to environmentally friendly practices.</li>
        </ul>
        <p>
          Thank you for choosing MockAmazon. We're excited to be part of your online shopping journey and look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;