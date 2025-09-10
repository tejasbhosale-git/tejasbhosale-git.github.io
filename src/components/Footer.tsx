import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-black text-2xl font-mono">
              india-flag
            </div>
            <span className="text-gray-600 font-mono text-sm">
              INDIA
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 font-mono text-sm">
              © 2025 TEJAS BHOSALE
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;