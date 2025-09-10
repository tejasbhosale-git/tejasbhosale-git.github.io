import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Transform scroll position to control animation
  const titleX = useTransform(scrollY, [0, 300], [0, -600]);
  const titleY = useTransform(scrollY, [0, 300], [0, -400]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.2]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 1]);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative">

      <div className="container mx-auto px-6 text-center">

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl p-1">
            <div className="w-full h-full bg-white rounded-full overflow-hidden">
              <img 
                src="/images/pic_1.jpg" 
                alt="Tejas Bhosale" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Title that animates to logo side on scroll */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-black mb-8 font-inter"
          style={{ 
            x: titleX, 
            y: titleY, 
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          TEJAS BHOSALE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
        >
          DATA SCIENCE AND ARTIFICIAL INTELLIGENCE SOFTWARE ENGINEER. I'm Tejas, this is a website to showcase my projects from the last few times.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center space-y-2 text-gray-500 text-sm font-mono"
        >
          <span>scroll down / use arrow down.</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;