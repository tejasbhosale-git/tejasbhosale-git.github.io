import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-primary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Feel free to reach out for collaborations, research opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-accent">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-accent mr-4 mt-1">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-text-secondary">+91-9673016092</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent mr-4 mt-1">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-text-secondary">210100159@iitb.ac.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent mr-4 mt-1">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-text-secondary">Mumbai, India</p>
                  <p className="text-text-secondary">Indian Institute of Technology Bombay</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-text-primary">Connect with me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/tejas-bhosale-b7b95a227/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/10 rounded-full text-accent hover:bg-secondary/20 transition-colors">
                  <span className="text-xl">🔗</span>
                </a>
                <a href="https://github.com/tejasbhosale-git" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/10 rounded-full text-accent hover:bg-secondary/20 transition-colors">
                  <span className="text-xl">🐙</span>
                </a>
                <a href="https://x.com/tejasbhosale07" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/10 rounded-full text-accent hover:bg-secondary/20 transition-colors">
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-700 p-6 rounded-lg shadow-lg border border-secondary/20"
          >
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-accent">Send a Message</h3>
            
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium text-text-primary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-primary-600 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium text-text-primary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-primary-600 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium text-text-primary">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 bg-primary-600 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary"
                  placeholder="Subject"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-text-primary">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 bg-primary-600 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-text-primary resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="gradient-bg px-6 py-3 rounded-lg text-text-primary font-semibold shadow-lg hover:shadow-xl transition-shadow w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
