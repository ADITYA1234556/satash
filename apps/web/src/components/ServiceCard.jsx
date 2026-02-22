
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl p-8 h-full flex flex-col items-center text-center transition-all duration-300"
    >
      <div className="mb-6 p-5 bg-satash-blue-50 rounded-full">
        <Icon className="w-10 h-10 text-satash-blue-400" aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </motion.article>
  );
};

export default ServiceCard;
