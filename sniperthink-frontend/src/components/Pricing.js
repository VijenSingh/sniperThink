import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pricing')
      .then(res => res.json())
      .then(data => setPlans(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="pricing" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.length ? plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white rounded shadow"
            >
              <h3 className="text-2xl font-semibold">{plan.tier}</h3>
              <p className="text-3xl font-bold mt-4">{plan.price}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          )) : (
            <div className="h-48 bg-gray-200 animate-pulse col-span-3"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;