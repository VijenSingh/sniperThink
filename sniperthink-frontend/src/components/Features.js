import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/features')
      .then(res => res.json())
      .then(data => setFeatures(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.length ? features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-50 rounded shadow"
            >
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </motion.div>
          )) : (
            <div className="h-32 bg-gray-200 animate-pulse col-span-3"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;