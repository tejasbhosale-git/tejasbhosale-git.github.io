import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 font-inter">
            Thanks for stopping by.
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Feel free to reach me through any channel.
          </p>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            I'm excited to connect with you all.
          </p>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-12">
            <p className="text-gray-600 text-lg mb-6">
              If you have a projects and desire to<br />
              collaborate with me, I'd love to hear from you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/tejas-bhosale-b7b95a227/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors font-mono"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tejasbhosale-git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors font-mono"
              >
                GitHub
              </a>
              <a
                href="https://x.com/tejasbhosale07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors font-mono"
              >
                Twitter
              </a>
              <a
                href="mailto:210100159@iitb.ac.in"
                className="text-black hover:text-gray-600 transition-colors font-mono"
              >
                Email
                </a>
              </div>
            </div>

          <motion.div
            className="flex flex-col items-center space-y-2 text-gray-500 font-mono text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>scroll up / use arrow up.</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;