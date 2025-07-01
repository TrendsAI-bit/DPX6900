import React from 'react';
import { motion } from 'framer-motion';
import { marqueeData } from '../data/portfolioData';

const Marquee = () => {
  // Duplicate the data to create seamless loop
  const duplicatedData = [...marqueeData, ...marqueeData];

  return (
    <div className="bg-gradient-to-r from-neon-pink to-neon-purple py-3 overflow-hidden border-y border-neon-pink/30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {duplicatedData.map((item, index) => (
          <span
            key={index}
            className="text-black font-bold text-lg mx-8 inline-block"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee; 