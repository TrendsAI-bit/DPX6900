import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Main CTA Section */}
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">
              Ready to{' '}
              <span className="gradient-text">Optimize</span>{' '}
              Your Portfolio?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join institutional investors who've discovered our alternative asset allocation strategies. 
              Professional risk management with <em className="text-accent-magenta">maximum alpha potential</em>.
            </p>
          </motion.div>

          {/* Investment CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <motion.a
              href="https://pump.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold text-xl rounded-lg shadow-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Access DPX6900 Platform</span>
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 pt-12"
          >
            <div className="text-center">
              <div className="text-primary-400 text-sm font-medium uppercase tracking-wide mb-2">
                Institutional Grade
              </div>
              <div className="text-gray-300">
                Professional custody & execution
              </div>
            </div>
            <div className="text-center">
              <div className="text-accent-magenta text-sm font-medium uppercase tracking-wide mb-2">
                Zero Management Fees*
              </div>
              <div className="text-gray-300">
                Direct protocol access
              </div>
            </div>
            <div className="text-center">
              <div className="text-accent-cyan text-sm font-medium uppercase tracking-wide mb-2">
                24/7 Liquidity
              </div>
              <div className="text-gray-300">
                Always-on market access
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Proof Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="fintech-card p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Institutional Adoption Metrics
            </h3>
            <p className="text-gray-400">
              Join leading investment funds already leveraging our strategies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                $69.4M
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Assets Under Management
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                42,069
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Active Accounts
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-magenta mb-2">
                420.69%
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Peak Portfolio Return
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-cyan mb-2">
                100%
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Client Satisfaction**
              </div>
            </div>
          </div>
        </motion.div>

        {/* Risk Disclosure Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gray-900/40 border border-gray-700 rounded-xl p-8"
        >
          <div className="flex items-start space-x-4">
            <div className="text-orange-400 text-2xl mt-1">⚠️</div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Important Risk Disclosures
              </h4>
              <div className="text-sm text-gray-400 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-gray-300">Investment Risk:</strong> DPX6900 employs high-volatility investment strategies 
                  involving cryptocurrency and alternative digital assets. All investments carry substantial risk of loss.
                </p>
                <p>
                  <strong className="text-gray-300">Performance Disclaimer:</strong> Past performance does not guarantee future results. 
                  Hypothetical returns shown for illustrative purposes only. Actual results may vary significantly.
                </p>
                <p>
                  <strong className="text-gray-300">Regulatory Notice:</strong> Not a registered investment advisor. 
                  This platform is for sophisticated investors only. <em>This is a meme. You will probably get rekt.</em>
                </p>
              </div>
              <div className="text-xs text-gray-500 pt-4 border-t border-gray-700">
                * Platform fees may apply. ** Satisfaction metrics based on self-reported data from users still holding positions.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Need more information before investing?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
              Download Prospectus
            </button>
            <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-6 py-3 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
              View Live Demo
            </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default CallToAction; 