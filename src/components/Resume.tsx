import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-6 text-gray-900">Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
        >
          <div className="aspect-[8.5/11] w-full bg-gray-100 rounded-lg overflow-hidden mb-8">
            {/* This creates a PDF viewer iframe with your actual PDF file */}
            <iframe
              src="/files/Tejas_Bhosale_Resume.pdf.pdf"
              className="w-full h-full"
              title="Resume Preview"
            ></iframe>
          </div>
          
          <div className="text-center">
            <a 
              href="/files/Tejas_Bhosale_Resume.pdf.pdf" 
              download
              className="bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-700 transition-colors inline-block"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
