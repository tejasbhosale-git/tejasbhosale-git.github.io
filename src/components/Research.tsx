import React from 'react';
import { motion } from 'framer-motion';

const Research = () => {
  return (
    <section id="research" className="section-padding bg-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-4">My Research</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-2 text-accent">NeuroPlastic SOM</h3>
            <p className="text-sm text-text-secondary mb-4">Publishing in CIKM 2024, May (Paper Draft)</p>
            <p className="text-sm font-semibold mb-6">Guide: Prof. Kshitij Jadav, IIT Bombay</p>
            
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-accent mr-2">•</span>
                <p>Created an advanced Self-Organizing Map (SOM) with features like synaptic decay, neurogenesis, and memory forgetting to support adaptive learning for clustering and feature ranking.</p>
              </li>
              <li className="flex">
                <span className="text-accent mr-2">•</span>
                <p>Introduced a novel feature ranking approach inspired by neuroplasticity, improving selection accuracy; tested on BRCA and ROSMAP datasets with excellent results.</p>
              </li>
              <li className="flex">
                <span className="text-accent mr-2">•</span>
                <p>Compared NPSOM with traditional models like GSOM and PCA, achieving better clustering accuracy and adaptability to changing data distributions, proving its effectiveness for high-dimensional datasets.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-2 text-accent">EGD Optimizer</h3>
            <p className="text-sm text-text-secondary mb-4">Paper in Progress (Paper Draft)</p>
            
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-accent mr-2">•</span>
                <p>Developed the Exploratory Gradient Descent (EGD) optimizer, enhancing learning rate adjustments, RMSProp updates, and incorporating an evolutionary perturbation mechanism.</p>
              </li>
              <li className="flex">
                <span className="text-accent mr-2">•</span>
                <p>Tested EGD on CNN training and non-convex classification tasks, outperforming Adam and RMSProp with faster convergence and improved results.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
