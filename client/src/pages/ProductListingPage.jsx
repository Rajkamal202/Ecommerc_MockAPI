// client/src/pages/ProductListingPage.jsx
import ProductList from '../components/ProductList';

const ProductListingPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductListingPage;