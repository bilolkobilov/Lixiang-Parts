import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#1A2B50] text-white shadow-md"
      style={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-base sm:text-lg md:text-xl font-mono font-bold tracking-[0.1em] text-white">
            Lixiang Parts
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          <motion.a
            href="https://t.me/lixiang_parts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-blue-300 transition-all duration-300"
          >
            <Send size={28} className="text-white" />
          </motion.a>

          <motion.a
            href="https://instagram.com/lixiang_parts"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-blue-300 transition-all duration-300"
          >
            <Instagram size={28} className="text-white" />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;