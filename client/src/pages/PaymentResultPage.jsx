// client/src/pages/PaymentResultPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PaymentResultPage = () => {
  const { result } = useParams();

  return (
    <div className="container mx-auto px-6 py-8 text-center">
      {result === 'success' ? (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-green-600">Payment Successful!</h1>
          <p className="mb-4">Thank you for your purchase. Your order has been confirmed.</p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-4 text-red-600">Payment Failed</h1>
          <p className="mb-4">We're sorry, but there was an issue processing your payment. Please try again.</p>
        </div>
      )}
      <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        Return to Home
      </Link>
    </div>
  );
};

export default PaymentResultPage;