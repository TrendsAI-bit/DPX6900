import React from 'react';
import { motion } from 'framer-motion';
import { marqueeData } from '../data/portfolioData';

const Marquee = () => {
  // Duplicate the data to create seamless loop
  const duplicatedData = [...marqueeData, ...marqueeData];

  return (
    <div className="bg-gray-900 border-y border-gray-800 py-3 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920]
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {duplicatedData.map((item, index) => {
          // Parse if it contains percentage change
          const isPositive = item.includes('+');
          const isNegative = item.includes('-');
          
          return (
            <span
              key={index}
              className={`font-mono text-sm mx-8 inline-block ${
                isPositive 
                  ? 'text-primary-400' 
                  : isNegative 
                    ? 'text-red-400' 
                    : 'text-gray-300'
              }`}
            >
              {item}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Marquee; 