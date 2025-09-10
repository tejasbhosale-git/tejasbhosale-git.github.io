import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResearchPaper {
  title: string;
  description: string;
  status: string;
  advisor: string;
  detailedDescription?: string;
  technologies?: string[];
  tags: string[];
  icon: React.ReactElement;
}

const Research = () => {
  const [selectedResearch, setSelectedResearch] = useState<ResearchPaper | null>(null);
  
  const researchPapers = [
    {
      title: "NeuroPlastic SOM",
      description: "Advanced Self-Organizing Map with synaptic decay, neurogenesis, and memory forgetting for adaptive learning and feature ranking.",
      status: "Publishing in CIKM 2024, May (Paper Draft)",
      advisor: "Prof. Kshitij Jadav, IIT Bombay",
      detailedDescription: `An innovative approach to Self-Organizing Maps (SOM) that incorporates neuroplasticity principles to enhance adaptive learning capabilities.

**Key Innovations:**
• Synaptic decay mechanisms for dynamic weight adjustment
• Neurogenesis for adaptive network expansion
• Memory forgetting for improved plasticity
• Feature ranking through neuroplasticity-inspired algorithms

**Technical Implementation:**
• Advanced SOM architecture with biological neural network principles
• Dynamic topology adaptation based on data complexity
• Multi-scale feature extraction and ranking
• Robust clustering performance on high-dimensional datasets

**Experimental Results:**
• Tested on BRCA (Breast Cancer) dataset with 99.2% accuracy
• Validated on ROSMAP (Alzheimer's) dataset with superior performance
• Outperformed traditional SOM, GSOM, and PCA methods
• Demonstrated adaptability to changing data distributions

**Applications:**
• Medical diagnosis and biomarker discovery
• High-dimensional data clustering
• Feature selection in machine learning pipelines
• Adaptive learning systems for dynamic environments`,
      technologies: ["Python", "Neural Networks", "SOM", "Machine Learning", "Data Mining"],
      tags: ["#research", "#neural-networks", "#machine-learning"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      title: "EGD Optimizer",
      description: "Exploratory Gradient Descent optimizer enhancing learning rate adjustments, RMSProp updates, and incorporating evolutionary perturbation mechanism.",
      status: "Paper in Progress (Paper Draft)",
      advisor: "Independent Research",
      detailedDescription: `A novel optimization algorithm that combines gradient descent with evolutionary strategies for improved convergence and performance.

**Core Innovation:**
• Exploratory Gradient Descent (EGD) with adaptive learning rates
• Evolutionary perturbation mechanism for escaping local minima
• Enhanced RMSProp updates with momentum control
• Multi-scale optimization for different parameter groups

**Technical Features:**
• Adaptive learning rate scheduling based on gradient variance
• Evolutionary operators for parameter exploration
• Momentum-based gradient accumulation
• Robust convergence on non-convex optimization landscapes

**Performance Results:**
• Outperforms Adam optimizer by 15-20% on CNN training
• Superior to RMSProp on non-convex classification tasks
• Faster convergence on deep neural networks
• Better generalization on test datasets

**Applications:**
• Deep learning model training
• Non-convex optimization problems
• Computer vision and NLP tasks
• Reinforcement learning algorithms`,
      technologies: ["Python", "PyTorch", "Optimization", "Deep Learning", "Evolutionary Algorithms"],
      tags: ["#research", "#optimization", "#deep-learning"],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black font-inter">Research Papers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchPapers.map((paper, index) => (
          <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedResearch(paper)}
            >
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-black transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
                <div className="flex items-start space-x-4">
                  <div className="text-black flex-shrink-0">
                    {paper.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-2 text-sm">
                      {paper.status}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">
                      <strong>Advisor:</strong> {paper.advisor}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="text-black text-sm font-mono bg-gray-100 px-2 py-1 rounded border border-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 font-mono">
                      Click to view details →
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
          ))}
        </div>
      </div>

      {/* Research Detail Modal */}
      <AnimatePresence>
        {selectedResearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedResearch(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="text-black">
                    {selectedResearch.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black">
                      {selectedResearch.title}
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      {selectedResearch.status}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedResearch(null)}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-black mb-2">Advisor</h3>
                  <p className="text-gray-600">{selectedResearch.advisor}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedResearch.description}
                </p>
                
                {/* Detailed Description */}
                {selectedResearch.detailedDescription && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-3">Research Details</h3>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {selectedResearch.detailedDescription}
                    </div>
                  </div>
                )}
                
                {/* Technologies */}
                {selectedResearch.technologies && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-3">Technologies & Methods</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedResearch.technologies.map((tech: string, techIndex: number) => (
                        <span
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Tags */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-black mb-3">Research Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedResearch.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="text-black text-sm font-mono bg-gray-100 px-3 py-1 rounded-full border border-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Research;
