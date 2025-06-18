import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-4">My Resume</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            View or download my complete professional resume
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20 max-w-3xl w-full">
            <div className="aspect-[8.5/11] w-full bg-white rounded-lg overflow-hidden mb-6">
              {/* This creates a PDF viewer iframe with your actual PDF file */}
              <iframe
                src="/files/Tejas_Bhosale_Resume.pdf.pdf"
                className="w-full h-full"
                title="Resume Preview"
              ></iframe>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="/files/Tejas_Bhosale_Resume.pdf.pdf" 
                download
                className="gradient-bg px-8 py-3 rounded-full text-text-primary font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center"
              >
                <span className="mr-2">📄</span> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
