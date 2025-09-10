import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    { name: "IIT Bombay", logo: "iitb" },
    { name: "AI Research", logo: "research" },
    { name: "Deep Learning", logo: "ai-lab" },
    { name: "Computer Vision", logo: "cv-lab" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-inter">
            HAVENS OF MY GROWTH
          </h2>
          <p className="text-gray-600 text-lg font-mono">
            Insights into my educational path and work experiences, reflecting the growth and lessons learned along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer"
            >
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-black transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
                <div className="text-black text-3xl font-mono mb-4">
                  {exp.logo}
                </div>
                <h3 className="text-black font-bold text-lg group-hover:text-gray-700 transition-colors">
                  {exp.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;