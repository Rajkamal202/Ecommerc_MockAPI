// client/src/pages/HomePage.jsx
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to MockAmazon</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;