import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string[];
  technologies?: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  category, 
  description, 
  technologies, 
  links,
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20 h-full flex flex-col"
    >
      <h3 className="text-2xl font-montserrat font-bold mb-2 text-accent">{title}</h3>
      <p className="text-gray-300 mb-4 italic">{category}</p>
      
      <div className="mb-4 flex-grow">
        {description.map((point, idx) => (
          <p key={idx} className="mb-2 text-text-secondary">{point}</p>
        ))}
      </div>
      
      {technologies && technologies.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-secondary/10 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {links && (
        <div className="flex space-x-4">
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent transition-colors flex items-center"
            >
              <span className="mr-2 text-xl">🐙</span> GitHub
            </a>
          )}
          {links.demo && (
            <a 
              href={links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent transition-colors flex items-center"
            >
              <span className="mr-2 text-xl">🔗</span> Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const aiProjects = [
    {
      title: "Multi-Agent AI Scientist System",
      category: "Project Link",
      description: [
        "Built a fully autonomous multi-agent AI platform that handles the entire research workflow—from idea refinement to manuscript drafting—using the Gemini API via GenAI.",
        "Engineered specialized agents for brainstorming, critique, coding, error resolution, literature review, citation management, writing, and self-assessment, fostering iterative collaboration.",
        "Leveraged the Gemini API for LLM-driven tasks, producing polished research papers complete with code, datasets, results, and supplementary content."
      ],
      technologies: ["Python", "Gemini API", "LLM", "Multi-Agent Systems"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "VideoGPT",
      category: "Independent Research Project (May '24 - July '24)",
      description: [
        "Created a system capable of tackling diverse tasks and responding to prompts—including generating detailed notes—from a 1.5-hour video in just 2 minutes, surpassing GPT-4o in adaptability and speed.",
        "Designed a generative LLM model integrating keyframe extraction, RRDB-enhanced frame embeddings, and a multimodal framework, enabling flexible task handling from video inputs."
      ],
      technologies: ["Python", "Computer Vision", "LLM", "RRDB"],
      links: {
        github: "#"
      }
    },
    {
      title: "DeepCarlsen",
      category: "Seasons of Code | Web and Coding Club (May '23 - July '23)",
      description: [
        "Developed a neural network for chess, reaching grandmaster-level play without pre-learned rules.",
        "Used a multi-step process, training a deep autoencoder (Pos2Vec) to predict winning positions.",
        "Optimized training with Numba's JIT compilation, boosting performance and speeding up chess program development."
      ],
      technologies: ["Python", "Neural Networks", "Numba", "JIT"],
      links: {
        github: "#"
      }
    },
    {
      title: "Project-Generator",
      category: "Independent Research Project (Jan '25 - Feb '25)",
      description: [
        "Built a Python-based Agentic AI Project Generator that interprets user prompts to dynamically create project files and directory structures, enhancing developer efficiency.",
        "Designed an adaptive template system that customizes boilerplate code and configurations based on user needs.",
        "Implemented a robust CLI for efficient prompt processing."
      ],
      technologies: ["Python", "CLI", "Templating", "Agentic AI"],
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  const otherProjects = [
    {
      title: "Language Translation Using Transformers",
      category: "Course Project (Nov '23 - Feb '24)",
      description: [
        "Constructed and deployed a GPT model for sequence-to-sequence NLP tasks, showcasing expertise in cutting-edge transformer architectures.",
        "Developed a feed-forward network with two linear layers, ReLU activation, and dropout, demonstrating skill in building effective model components.",
        "Applied multi-head attention to capture complex data dependencies, adhering to best practices in transformer design for enhanced sequence comprehension."
      ],
      technologies: ["Python", "Transformers", "NLP", "GPT"],
      links: {
        github: "#"
      }
    },
    {
      title: "Stock Market Prediction Using Pattern Recognition",
      category: "Web and Coding Club, IIT Bombay (Jun '23 - Oct '23)",
      description: [
        "Employed Python libraries (Pandas, yfinance, Scikit-learn, TensorFlow) to retrieve historical stock data.",
        "Designed a CNN with LSTM layers to detect temporal patterns in stock market data, predicting unknown stock trends with 68.9% accuracy.",
        "Trained the model on a large Reliance dataset using a training-validation split to evaluate performance effectively."
      ],
      technologies: ["Python", "CNN", "LSTM", "TensorFlow", "Pandas"],
      links: {
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-4">AI/ML Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aiProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-4">Other Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
