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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />
      <Marquee />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Risk Profile Toggle */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Choose Your Chaos Level
          </h2>
          <RiskProfileToggle 
            selectedProfile={selectedProfile}
            onProfileChange={setSelectedProfile}
          />
        </motion.section>

        {/* Portfolio Overview */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">
              Portfolio Allocation
            </h3>
            <PortfolioChart 
              data={currentData.tokens}
              profile={selectedProfile}
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center">
              Token Breakdown
            </h3>
            <TokenTable 
              tokens={currentData.tokens}
              profile={selectedProfile}
            />
          </div>
        </motion.section>

        {/* Performance Chart */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              Historical Performance
            </h3>
            <p className="text-gray-400">
              $1,000 invested 6 months ago would be worth{' '}
              <span className="text-neon-green font-bold text-xl">
                ${currentData.performance[currentData.performance.length - 1].value.toLocaleString()}
              </span>
            </p>
          </div>
          <PerformanceChart 
            data={currentData.performance}
            profile={selectedProfile}
            totalReturn={currentData.totalReturn}
          />
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <CallToAction />
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Not financial advice. You will probably get rekt.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2024 DPX6900. All rights reserved. DYOR.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 