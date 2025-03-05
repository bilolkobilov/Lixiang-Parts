import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { PRODUCTS } from '../assets/data/products';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F6F9]">
      <Navbar />
      
      <Header />

      <div 
        id="products-section"
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;