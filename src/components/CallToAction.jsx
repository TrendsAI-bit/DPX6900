import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16 px-8"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main CTA Text */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-black gradient-text"
        >
          Ready to Get Rekt?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Join thousands of degens who've already discovered the ultimate meme portfolio. 
          Diamond hands only.
        </motion.p>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8"
        >
          <motion.a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-neon-pink to-neon-purple text-white font-black text-2xl md:text-3xl px-12 py-6 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 neon-border"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 40px rgba(236, 72, 153, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 40px rgba(236, 72, 153, 0.8)",
                "0 0 20px rgba(236, 72, 153, 0.5)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            BUY DPX6900 NOW
          </motion.a>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-lg text-gray-400">
            Limited time offer: First 1000 investors get exclusive Discord access
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-gray-500">
            <span>Zero fees*</span>
            <span className="hidden md:inline">•</span>
            <span>Instant liquidity</span>
            <span className="hidden md:inline">•</span>
            <span>Maximum degeneracy</span>
          </div>
        </motion.div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-red-900/20 border border-red-500/50 rounded-lg p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2 mb-3">
            <span className="text-red-400 text-xl">⚠️</span>
            <span className="text-red-400 font-bold">EXTREME RISK WARNING</span>
          </div>
          <p className="text-red-300 text-sm">
            This investment strategy is designed for maximum volatility and minimum sleep. 
            Past performance does not guarantee future results. You will probably lose money. 
            Invest only what you can afford to lose completely.
          </p>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green">$69.420M</div>
            <div className="text-gray-400 text-sm">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-pink">42,069</div>
            <div className="text-gray-400 text-sm">Active Degens</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple">∞%</div>
            <div className="text-gray-400 text-sm">Potential Upside</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToAction; 