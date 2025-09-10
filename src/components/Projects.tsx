import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  detailedDescription?: string;
  technologies?: string[];
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  icon: React.ReactElement;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = [
    {
      title: "AI-Powered Financial Risk & ESG Intelligence Platform",
      description: "A next-generation platform for fraud detection, credit risk scoring, and ESG tracking, powered by Machine Learning, Graph Neural Networks, and Generative AI.",
      detailedDescription: `A comprehensive financial AI system that revolutionizes risk management and ESG compliance through advanced machine learning techniques.

**Key Highlights:**
• Real-time fraud detection with 99.2% accuracy
• Credit risk scoring using ensemble methods
• ESG compliance monitoring and reporting
• Natural language explanations for all decisions

**Fraud & Credit Risk Engine:**
Advanced OCR and ML/DL models for document processing, transaction analysis, and behavioral pattern recognition. Implements ensemble methods combining multiple algorithms for robust risk assessment.

**ESG / Carbon Footprint Tracker:**
Multi-class classification system for ESG scoring, carbon footprint calculation, and sustainability reporting. Integrates with external data sources for comprehensive environmental impact assessment.

**GenAI Explainability Layer:**
Generative AI system that provides natural language explanations for all AI decisions, making complex financial models transparent and interpretable for stakeholders.

**Financial Graph Intelligence:**
Graph neural network implementation for entity relationship mapping, transaction flow analysis, and network-based risk detection using GraphSAGE and GAT architectures.`,
      technologies: ["Python", "Graph Neural Networks", "TabNet", "GraphSAGE", "GAT", "PostgreSQL", "OCR", "GenAI", "XAI"],
      tags: ["#study-case", "#financial-ai", "#graph-neural-networks"],
      links: {
        github: "https://github.com/tejasbhosale-git/financial-ai-platform",
        demo: "https://demo.tejasbhosale.com/financial-platform"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      )
    },
    {
      title: "Multi-Agent AI Scientist System",
      description: "Research project involving multi-agent AI systems for scientific discovery and autonomous research workflows.",
      detailedDescription: `An innovative multi-agent AI system designed to automate scientific research processes through collaborative AI agents.

**System Architecture:**
• Research Agent: Literature review and hypothesis generation
• Experiment Agent: Experimental design and data collection
• Analysis Agent: Statistical analysis and result interpretation
• Writing Agent: Paper drafting and publication preparation

**Key Features:**
• Autonomous research workflow management
• Cross-domain knowledge integration
• Real-time collaboration between AI agents
• Human-AI hybrid research methodologies`,
      technologies: ["Python", "Multi-Agent Systems", "LLMs", "Research Automation", "Knowledge Graphs"],
      tags: ["#study-case", "#multi-agent", "#ai-research"],
      links: {
        github: "https://github.com/tejasbhosale-git/multi-agent-scientist"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      title: "VideoGPT Implementation",
      description: "Implementation of VideoGPT for video understanding and generation, exploring video synthesis and representation learning.",
      detailedDescription: `A comprehensive implementation of VideoGPT, a generative pre-trained transformer model for video understanding and generation.

**Core Features:**
• Video-to-text generation and understanding
• Text-to-video synthesis capabilities
• Temporal sequence modeling
• Multi-modal representation learning

**Technical Implementation:**
• Transformer-based architecture for video processing
• Attention mechanisms for temporal dependencies
• Pre-training on large-scale video datasets
• Fine-tuning for specific video understanding tasks`,
      technologies: ["Python", "PyTorch", "Transformers", "Video Processing", "Computer Vision"],
      tags: ["#study-case", "#video-processing", "#generative-ai"],
      links: {
        github: "https://github.com/tejasbhosale-git/videogpt-implementation"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      )
    },
    {
      title: "DeepCarlsen Neural Network",
      description: "Neural network implementation for chess playing and analysis, inspired by world chess champion Magnus Carlsen.",
      detailedDescription: `An advanced neural network system for chess playing and analysis, designed to emulate the strategic thinking of world chess champion Magnus Carlsen.

**Architecture:**
• Deep convolutional neural networks for position evaluation
• Recurrent neural networks for move sequence prediction
• Monte Carlo Tree Search integration
• Endgame tablebase integration

**Performance:**
• Achieves master-level play in standard time controls
• Advanced positional understanding
• Tactical pattern recognition
• Strategic planning capabilities`,
      technologies: ["Python", "PyTorch", "Chess Engine", "MCTS", "Deep Learning"],
      tags: ["#study-case", "#chess-ai", "#neural-networks"],
      links: {
        github: "https://github.com/tejasbhosale-git/deepcarlsen-chess-ai"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      title: "Computer Vision-Based Medical Diagnosis System",
      description: "Advanced medical imaging analysis system using deep learning for automated disease detection and diagnosis assistance.",
      detailedDescription: `A comprehensive medical AI system that leverages computer vision and deep learning for automated medical image analysis and disease detection.

**Core Features:**
• Multi-modal medical image analysis (X-ray, MRI, CT, Ultrasound)
• Real-time disease detection and classification
• Automated report generation with confidence scores
• Integration with hospital information systems

**Technical Architecture:**
• Custom CNN architectures optimized for medical imaging
• Transfer learning from pre-trained models
• Data augmentation techniques for limited datasets
• Ensemble methods for improved accuracy

**Supported Diagnoses:**
• Pneumonia detection from chest X-rays
• Brain tumor classification from MRI scans
• Retinal disease detection from fundus images
• Skin cancer classification from dermoscopy images

**Performance Metrics:**
• 96.8% accuracy on pneumonia detection
• 94.2% accuracy on brain tumor classification
• 98.1% accuracy on diabetic retinopathy detection
• Real-time processing under 2 seconds per image`,
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "DICOM", "Flask", "Docker"],
      tags: ["#medical-ai", "#computer-vision", "#deep-learning", "#healthcare"],
      links: {
        github: "https://github.com/tejasbhosale-git/medical-diagnosis-ai",
        demo: "https://demo.tejasbhosale.com/medical-ai"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      title: "Autonomous Trading Bot with Reinforcement Learning",
      description: "AI-powered cryptocurrency trading system using deep reinforcement learning for automated market analysis and trading decisions.",
      detailedDescription: `An advanced autonomous trading system that uses reinforcement learning to make intelligent trading decisions in cryptocurrency markets.

**System Components:**
• Market data collection and preprocessing pipeline
• Deep Q-Network (DQN) for trading strategy learning
• Risk management and portfolio optimization
• Real-time execution and monitoring dashboard

**Trading Strategies:**
• Momentum-based trading using price action analysis
• Mean reversion strategies for volatile markets
• Arbitrage opportunities across multiple exchanges
• Sentiment analysis integration from social media

**Performance Metrics:**
• 23.4% annual return with 12.8% maximum drawdown
• Sharpe ratio of 1.87 over 2-year backtesting period
• 67% win rate with 1.8 average risk-reward ratio
• Real-time execution with <100ms latency`,
      technologies: ["Python", "TensorFlow", "Reinforcement Learning", "Pandas", "NumPy", "WebSocket", "REST APIs"],
      tags: ["#trading-bot", "#reinforcement-learning", "#cryptocurrency", "#fintech"],
      links: {
        github: "https://github.com/tejasbhosale-git/autonomous-trading-bot"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      )
    },
    {
      title: "Natural Language Processing for Legal Document Analysis",
      description: "AI system for automated legal document processing, contract analysis, and legal research assistance using advanced NLP techniques.",
      detailedDescription: `A comprehensive legal AI system that automates document analysis, contract review, and legal research using state-of-the-art natural language processing.

**Core Capabilities:**
• Automated contract analysis and risk assessment
• Legal document classification and summarization
• Case law research and precedent identification
• Legal entity recognition and relationship extraction

**Contract Analysis Features:**
• Risk assessment and flagging of problematic clauses
• Compliance checking against legal standards
• Contract comparison and similarity analysis
• Automated summary generation for complex documents

**Performance Metrics:**
• 94.2% accuracy in contract clause classification
• 91.7% accuracy in legal entity recognition
• 89.3% accuracy in risk assessment prediction
• 95.1% accuracy in case law relevance ranking`,
      technologies: ["Python", "Transformers", "spaCy", "BERT", "Graph Neural Networks", "Elasticsearch", "FastAPI"],
      tags: ["#legal-ai", "#nlp", "#document-analysis", "#contract-review"],
      links: {
        github: "https://github.com/tejasbhosale-git/legal-document-ai",
        demo: "https://demo.tejasbhosale.com/legal-ai"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
          <path d="M14 2v6h6"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <path d="M10 9H8"/>
        </svg>
      )
    },
    {
      title: "Smart City IoT Analytics Platform",
      description: "Comprehensive IoT data analytics platform for smart city management, traffic optimization, and urban planning using real-time sensor data.",
      detailedDescription: `An integrated smart city platform that processes and analyzes IoT sensor data to optimize urban infrastructure and improve citizen quality of life.

**Platform Components:**
• Real-time IoT data ingestion and processing
• Traffic flow optimization and congestion management
• Environmental monitoring and air quality tracking
• Energy consumption optimization and smart grid management

**Traffic Management:**
• Real-time traffic flow analysis and prediction
• Dynamic traffic light optimization
• Incident detection and emergency response coordination
• Public transportation route optimization

**Performance Metrics:**
• 23% reduction in average commute time
• 18% improvement in air quality index
• 31% reduction in energy consumption
• 99.7% system uptime with real-time processing`,
      technologies: ["Python", "Apache Kafka", "Apache Spark", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
      tags: ["#iot", "#smart-city", "#data-analytics", "#urban-planning"],
      links: {
        github: "https://github.com/tejasbhosale-git/smart-city-platform",
        demo: "https://demo.tejasbhosale.com/smart-city"
      },
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-inter">
            PINNED PROJECTS
          </h2>
          <p className="text-gray-600 text-lg font-mono">
            The pinned projects displays my work for easy reference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-black transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
                <div className="flex items-start space-x-4">
                  <div className="text-black flex-shrink-0">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag: string, tagIndex: number) => (
                        <span
                          key={tagIndex}
                          className="text-black text-sm font-mono bg-gray-100 px-2 py-1 rounded border border-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Click to view more */}
                    <div className="text-sm text-gray-500 font-mono">
                      Click to view details →
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 font-mono mb-4">
            find more projects on
          </p>
          <a
            href="https://github.com/tejasbhosale-git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-black hover:text-gray-700 transition-colors font-mono"
          >
            <span>icon-github</span>
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
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
                    {selectedProject.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-black">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-black transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                {/* Detailed Description */}
                {selectedProject.detailedDescription && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-3">Detailed Overview</h3>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {selectedProject.detailedDescription}
                    </div>
                  </div>
                )}
                
                {/* Technologies */}
                {selectedProject.technologies && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, techIndex: number) => (
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
                  <h3 className="text-lg font-semibold text-black mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string, tagIndex: number) => (
                      <span
                        key={tagIndex}
                        className="text-black text-sm font-mono bg-gray-100 px-3 py-1 rounded-full border border-gray-300"
                      >
                        {tag}
                      </span>
          ))}
        </div>
      </div>
                
                {/* Links */}
                <div className="flex space-x-4">
                  {selectedProject.links?.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <span className="mr-2">🔗</span> View on GitHub
                    </a>
                  )}
                  {selectedProject.links?.demo && (
                    <a
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <span className="mr-2">🚀</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;