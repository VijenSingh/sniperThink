import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('https://studious-train-7p57jvrjpvv3p6jr-5000.app.github.dev/api/slides')
      .then(res => res.json())
      .then(data => setSlides(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  if (!slides.length) return <div className="h-96 bg-gray-200 animate-pulse"></div>;

  const { title, subtitle, cta, image } = slides[currentSlide];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-96 flex items-center bg-gray-100"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-6">{subtitle}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            {cta}
          </motion.button>
        </div>
        {console.log("vijju ", slides)}
        <img src={image} alt={title} className="md:w-1/2 h-64 object-cover rounded" />
      </div>
    </motion.section>
  );
};

export default Hero;