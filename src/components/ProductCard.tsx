import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, SendIcon, ChevronDownIcon } from 'lucide-react';
import { Product } from '../types/Product';
import ImageSlider from './ImageSlider';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <motion.div
      className="bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-lg border border-[#1A2B50]/10 transform transition-all duration-300 hover:shadow-xl group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 15px 30px -5px rgba(26, 43, 80, 0.15)'
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative h-80">
        <ImageSlider images={product.images} />
        <motion.button
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="absolute top-2 right-2 text-[#1A2B50] hover:text-[#2A4365] bg-[#F5F7FA]/80 p-1 rounded-full hover:bg-[#1A2B50]/10 transition-all duration-200"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDownIcon
            className={`h-5 w-5 transform transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''
              }`}
          />
        </motion.button>
      </div>

      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-bold text-[#1A2B50] tracking-tight group-hover:text-[#2A4365]">
            {product.name}
          </h3>
          <span className="text-2xl sm:text-3xl font-mono font-bold text-[#FF6B35]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <AnimatePresence>
          {isDetailsOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[#1A2B50] text-sm leading-relaxed"
            >
              {product.description}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex space-x-3">
          <motion.a
            href={`tel:${product.contact.phone}`}
            className="flex-1 flex items-center justify-center space-x-2 bg-[#1A2B50] text-white px-4 py-2 rounded-lg hover:bg-[#2A4365] transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 16px -4px rgba(26, 43, 80, 0.2)'
            }}
          >
            <PhoneIcon className="h-5 w-5" />
            <span className="font-mono font-semibold text-sm">Call</span>
          </motion.a>

          <motion.a
            href={`https://t.me/${product.contact.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-[#2A4365] text-white px-4 py-2 rounded-lg hover:bg-[#3B5578] transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 16px -4px rgba(26, 43, 80, 0.2)'
            }}
          >
            <SendIcon className="h-5 w-5" />
            <span className="font-mono font-semibold text-sm">Telegram</span>
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
};

export default ProductCard;