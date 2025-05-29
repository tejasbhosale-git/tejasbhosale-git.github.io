import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-4">
            Tejas <span className="gradient-text">Bhosale</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-montserrat mb-6">
            Building the future with <span className="gradient-text">AI</span>
          </h2>
          <p className="text-lg mb-8 max-w-lg text-text-secondary">
            AI and Machine Learning enthusiast with expertise in Python and C++. I've worked on innovative projects like alertness detection and object recognition, and contributed to research papers. Passionate about using technology to solve real-world challenges.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start mb-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
              <span className="text-2xl">🔗</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
              <span className="text-2xl">🐙</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
              <span className="text-2xl">🐦</span>
            </a>
          </div>
          <Link to="contact" smooth={true} duration={500}>
            <motion.button 
              className="gradient-bg px-8 py-3 rounded-full text-text-primary font-semibold shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-secondary/20">
              {/* Replace '/images/profile.jpg' with your own image path */}
              <img 
                  src="/images/pic_1.jpg" 
                  alt="Tejas Bhosale" 
                  className="w-full h-full object-cover object-[60%_10%]"
              />

            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full gradient-bg flex items-center justify-center text-text-primary font-bold">
              IIT Bombay
            </div>
          </div>
        </motion.div>
      </div>
    </section>
   );
};

export default Hero;
