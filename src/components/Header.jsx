import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-black via-purple-900 to-black">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-transparent to-neon-purple/10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <img 
              src="/asset/logo.png" 
              alt="DPX6900 Logo" 
              className="h-24 w-auto md:h-32 lg:h-40 drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight"
          >
            <span className="gradient-text">DPX6900</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-300"
          >
            The Degenerate Meme Index Fund
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl font-semibold text-neon-pink"
          >
            High Risk. Higher Rewards. Zero Risk Management.
          </motion.p>

          {/* Hero Image Placeholder - Wall Street Bull with Laser Eyes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              <img 
                src="/asset/banner.png" 
                alt="DPX6900 Banner" 
                className="max-w-full h-auto md:max-w-2xl lg:max-w-4xl rounded-lg shadow-2xl neon-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header; 