import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <HomePage />
      </motion.div>
    </AnimatePresence>
  );
};

export default App;