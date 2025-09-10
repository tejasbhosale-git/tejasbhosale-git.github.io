import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const photos = [
    { title: "IIT Bombay Campus", location: "Mumbai, India" },
    { title: "Research Lab", location: "IIT Bombay, India" },
    { title: "Conference Presentation", location: "CIKM 2024" },
    { title: "Coding Session", location: "IIT Bombay, India" },
    { title: "AI Research", location: "Deep Learning Lab" },
    { title: "tejas-photo", location: "" }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-inter">
            A GLIMPSE INTO MY JOURNEY
          </h2>
          <p className="text-gray-600 text-lg font-mono">
            Moments captured through photos from my past experiences and adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-black transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
                <div className="text-center">
                  <div className="text-black text-2xl font-mono mb-2">
                    icon-photo
                  </div>
                  <div className="text-gray-600 text-sm mb-1">{photo.title}</div>
                  {photo.location && (
                    <div className="text-gray-500 text-xs">{photo.location}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
