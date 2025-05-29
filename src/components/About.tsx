import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-4">About Me</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A deep learning researcher and mechanical engineering student with a passion for AI innovation.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-secondary/30">
              {/* Replace '/images/profile.jpg' with your own image path */}
              <img 
                src="/images/pic_2.jpg" 
                alt="Tejas Bhosale" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-4 text-accent md:text-left text-center">AI and Deep Learning Enthusiast</h3>
            <p className="mb-4 text-text-secondary">
              I am a B.Tech student in Mechanical Engineering at IIT Bombay. My passion lies in exploring the intersection of AI, computer vision, and neural networks. I have hands-on experience in research and development across multiple domains, with a focus on solving real-world problems through innovative technology solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <span className="text-xl mr-2">💻</span>
                <span>Python</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">⌨️</span>
                <span>Machine Learning</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">🧠</span>
                <span>Computer Vision</span>
              </div>
              <div className="flex items-center">
                <span className="text-xl mr-2">👁️</span>
                <span>AI</span>
              </div>
            </div>
            
            <div className="mt-6">
              <blockquote className="border-l-4 border-accent pl-4 italic text-text-secondary">
                "Innovation is the ability to see change as an opportunity, not a threat."
              </blockquote>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6">Education</h3>
            
            <div className="relative border-l-2 border-accent pl-6 pb-6">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
              <h4 className="text-xl font-semibold">B.Tech Mechanical Engineering</h4>
              <p className="text-text-secondary">Indian Institute of Technology Bombay</p>
              <p className="text-sm text-accent">2021 - 2025</p>
              <p className="mt-2">CPI: 7.95</p>
            </div>
            
            <div className="relative border-l-2 border-accent pl-6 pb-6">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
              <h4 className="text-xl font-semibold">Intermediate (Class XII)</h4>
              <p className="text-text-secondary">VJHS Collage, HSC</p>
              <p className="text-sm text-accent">2021</p>
              <p className="mt-2">Percentage: 91.60%</p>
            </div>
            
            <div className="relative border-l-2 border-accent pl-6">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
              <h4 className="text-xl font-semibold">Matriculation (Class X)</h4>
              <p className="text-text-secondary">Jawahar Navodaya Vidyalaya, CBSE</p>
              <p className="text-sm text-accent">2019</p>
              <p className="mt-2">Percentage: 94.40%</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-xl text-accent mr-3">📱</span>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-text-secondary">+91-9673016092</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-xl text-accent mr-3">✉️</span>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-text-secondary">210100159@iitb.ac.in</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-xl text-accent mr-3">📍</span>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-text-secondary">Mumbai, India</p>
                  <p className="text-text-secondary">Indian Institute of Technology Bombay</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-xl text-accent mr-3">🏢</span>
                <div>
                  <h4 className="font-semibold">Department</h4>
                  <p className="text-text-secondary">Mechanical Engineering</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-secondary/20">
              <h4 className="font-semibold mb-3">Connect with me</h4>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-secondary/10 rounded-full text-accent hover:bg-secondary/20 transition-colors">
                  <span className="text-xl">💻</span>
                </a>
                <a href="#" className="p-2 bg-secondary/10 rounded-full text-accent hover:bg-secondary/20 transition-colors">
                  <span className="text-xl">⌨️</span>
                </a>
                <a href="#" className="p-2 bg-secondary/10 rounded-full text-accent hover:bg-secondary/20 transition-colors">
                  <span className="text-xl">🧠</span>
                </a>
                <a href="#" className="p-2 bg-secondary/10 rounded-full text-accent hover:bg-secondary/20 transition-colors">
                  <span className="text-xl">👁️</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
