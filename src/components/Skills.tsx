import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black font-inter">Skills</h2>
          <p className="text-lg text-gray-600">
            Below are some of my skills, and I'm always looking to learn more.
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Machine Learning, Artificial Intelligence</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I've worked on many projects involving machine learning and artificial intelligence. Previous research includes 
              Multi-Agent AI Scientist System, VideoGPT, and DeepCarlsen neural network for chess. Relevant personal projects 
              include my neural model implementations, transformer architectures, and various AI experiments. I have experience 
              using PyTorch, TensorFlow, and various ML libraries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Python</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the past <strong>4 years</strong>, I've had extensive experience with Python in the course of my research, 
              classwork, and personal projects. Some of my personal projects in Python include my Multi-Agent AI system, 
              VideoGPT implementation, neural network libraries, and many more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">C++</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I have over <strong>3 years</strong> of experience programming in C++. My C++ projects include various 
              machine learning implementations, computer vision applications, and performance-critical applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Computer Vision, OpenCV</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I have significant research experience in the field of computer vision, including object recognition systems, 
              video processing, and image analysis. I've created various programs using libraries such as OpenCV and 
              computer vision techniques for my projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Web Development</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              With experience in web development, I often develop full-stack applications, consisting of HTML/JavaScript/CSS, 
              various web libraries, and backend technologies. I have experience with Django, Node.js, and modern web frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="font-medium text-text-primary">{name}</span>
        </div>
        <span className="text-accent">{percentage}%</span>
      </div>
      <div className="h-3 bg-primary-600 rounded-full overflow-hidden">
        <motion.div 
          className="h-full gradient-bg rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default Skills;
