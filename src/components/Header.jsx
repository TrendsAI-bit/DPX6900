import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative bg-gray-950 border-b border-gray-800">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="/asset/logo.png" 
              alt="DPX6900" 
              className="h-8 w-auto"
            />
            <div className="text-xl font-display font-bold text-white">
              DPX6900
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8 text-sm"
          >
            <button 
              onClick={() => scrollToSection('investment-strategy')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Investment Strategies
            </button>
            <button 
              onClick={() => scrollToSection('performance-analysis')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Performance
            </button>
            <button 
              onClick={() => scrollToSection('live-tracker')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Live Tracker
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight">
              <span className="text-white">DPX</span>
              <span className="gradient-text">6900</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
              The Degenerate Meme Index Fund
            </h2>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-primary-400 font-medium">
              High Risk. Higher Rewards. Zero Risk Management.
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Live portfolio tracking with real-time PNL updates. 
              Follow our degenerate investment journey with complete transparency.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
          >
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary-400">
                420.69%
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Peak Returns*
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-white">
                $69.4K
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Live Portfolio
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-accent-magenta">
                Daily
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                PNL Updates
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-accent-purple">
                100%
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Transparency
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xs text-gray-500 pt-8"
          >
            *Live trading results. Real money. Real losses. 
            Follow along for educational entertainment purposes.
          </motion.p>
        </div>
      </div>
    </header>
  );
};

export default Header; 