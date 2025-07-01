import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Marquee from './components/Marquee';
import RiskProfileToggle from './components/RiskProfileToggle';
import PortfolioChart from './components/PortfolioChart';
import TokenTable from './components/TokenTable';
import PerformanceChart from './components/PerformanceChart';
import CallToAction from './components/CallToAction';
import { portfolioData } from './data/portfolioData';

function App() {
  const [selectedProfile, setSelectedProfile] = useState('Degen');

  const currentData = portfolioData[selectedProfile];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <Marquee />
      
      {/* Professional Banner Section */}
      <section className="py-12 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="fintech-card p-8 md:p-12">
              <img 
                src="/asset/banner.png" 
                alt="DPX6900 - Believe in Degen" 
                className="max-w-full h-auto mx-auto max-h-48 md:max-h-64 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <main className="container mx-auto px-6 py-16 space-y-20">
        {/* Investment Strategy Selector */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Investment Strategy
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Select your risk tolerance to view portfolio allocation and historical performance metrics.
              </p>
            </div>
            <RiskProfileToggle 
              selectedProfile={selectedProfile}
              onProfileChange={setSelectedProfile}
            />
          </div>
        </motion.section>

        {/* Portfolio Analytics */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-display font-semibold text-white mb-2">
                Asset Allocation
              </h3>
              <p className="text-gray-400">
                Current portfolio distribution for {selectedProfile.toLowerCase()} risk strategy
              </p>
            </div>
            <PortfolioChart 
              data={currentData.tokens}
              profile={selectedProfile}
            />
          </div>
          
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-display font-semibold text-white mb-2">
                Holdings Overview
              </h3>
              <p className="text-gray-400">
                Detailed breakdown of assets and risk metrics
              </p>
            </div>
            <TokenTable 
              tokens={currentData.tokens}
              profile={selectedProfile}
            />
          </div>
        </motion.section>

        {/* Performance Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-display font-semibold text-white">
              Performance Analysis
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400">
              <span>Hypothetical $1,000 investment (6-month period)</span>
              <span className="hidden md:inline text-gray-600">•</span>
              <span className="text-primary-400 font-semibold">
                Current Value: ${currentData.performance[currentData.performance.length - 1].value.toLocaleString()}
              </span>
            </div>
          </div>
          <PerformanceChart 
            data={currentData.performance}
            profile={selectedProfile}
            totalReturn={currentData.totalReturn}
          />
        </motion.section>

        {/* Investment CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CallToAction />
        </motion.section>
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Investment Strategies</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Low Risk Portfolio</li>
                <li>Aggressive Growth</li>
                <li>Alternative Assets</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Risk Management</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Volatility Analysis</li>
                <li>Portfolio Rebalancing</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Research</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Market Analysis</li>
                <li>Performance Reports</li>
                <li>Asset Research</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Documentation</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center space-y-4">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              <strong className="text-gray-300">Risk Disclosure:</strong> This is not financial advice. 
              Cryptocurrency investments carry substantial risk of loss. Past performance does not guarantee future results. 
              This is a meme. You will probably get rekt.
            </p>
            <p className="text-gray-500 text-xs">
              © 2024 DPX6900 Asset Management. All rights reserved. | 
              Not a registered investment advisor | For entertainment purposes only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 