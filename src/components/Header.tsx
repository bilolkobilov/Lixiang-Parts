import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/images/li-photo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          filter: 'brightness(0.6)',
        }}
      />

      <div className="relative z-10 flex items-center justify-center h-full container mx-auto px-6">
        <motion.div
          className="text-center text-white max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-poppins font-extrabold mb-6 tracking-wide leading-tight">
            Precision Automotive Excellence
          </h1>

          <motion.button
            onClick={scrollToProducts}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A2B50] text-white px-6 py-3 rounded-full flex items-center justify-center space-x-3 mx-auto shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out"
          >
            <span className="font-poppins font-semibold text-lg">Explore Now</span>
            <ArrowRightIcon className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
