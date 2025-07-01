import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.div
      id="live-tracker"
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
              Live Investing{' '}
              <span className="gradient-text">Tracker</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Follow us as we use real rewards to track our live portfolio with daily PNL updates. 
              Watch every trade, every gain, every <em className="text-red-400">epic loss</em> in real-time.
            </p>
          </motion.div>

          {/* Live Tracker CTA Button */}
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
              <span>Follow Live Portfolio</span>
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Live Tracking Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 pt-12"
          >
            <div className="text-center">
              <div className="text-primary-400 text-sm font-medium uppercase tracking-wide mb-2">
                Daily PNL Updates
              </div>
              <div className="text-gray-300">
                Real portfolio performance tracking
              </div>
            </div>
            <div className="text-center">
              <div className="text-accent-magenta text-sm font-medium uppercase tracking-wide mb-2">
                Complete Transparency
              </div>
              <div className="text-gray-300">
                Every trade, win or loss
              </div>
            </div>
            <div className="text-center">
              <div className="text-accent-cyan text-sm font-medium uppercase tracking-wide mb-2">
                Live Commentary
              </div>
              <div className="text-gray-300">
                Real-time market reactions
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Portfolio Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="fintech-card p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Current Portfolio Status
            </h3>
            <p className="text-gray-400">
              Real money, real trades, real consequences
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                $69,420
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Live Portfolio Value
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
                -$4,200
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Today's PNL
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-magenta mb-2">
                +420%
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Peak Return (RIP)
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                12
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">
                Days Since Last Profit
              </div>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fintech-card p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              X Community & Trading Chats
            </h3>
            <p className="text-gray-400">
              Exclusive access for holders with live trading insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-primary-400 rounded-full"></div>
              </div>
              <h4 className="text-lg font-semibold text-white">
                Real Money Invested
              </h4>
              <p className="text-gray-400 text-sm">
                We use actual rewards and earnings to fund our live portfolio tracking experiment.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent-magenta/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-accent-magenta rounded-full"></div>
              </div>
              <h4 className="text-lg font-semibold text-white">
                X Community Access
              </h4>
              <p className="text-gray-400 text-sm">
                Join our exclusive X community for real-time market discussions and trading insights.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-accent-cyan rounded-full"></div>
              </div>
              <h4 className="text-lg font-semibold text-white">
                Holder Exclusive Trading Chats
              </h4>
              <p className="text-gray-400 text-sm">
                Verified holders get access to exclusive trading channels with live trade calls and market analysis.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reality Check */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gray-900/40 border border-orange-600/50 rounded-xl p-8"
        >
          <div className="flex items-start space-x-4">
            <div className="text-orange-400 text-2xl mt-1">⚠️</div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">
                Reality Check: This Is Educational Entertainment
              </h4>
              <div className="text-sm text-gray-400 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-gray-300">Not Financial Advice:</strong> We're just degenerates with some money to lose. 
                  This is for educational and entertainment purposes only.
                </p>
                <p>
                  <strong className="text-gray-300">Real Consequences:</strong> The money we're tracking is real, the losses are real, 
                  and our regret will be very real when everything goes to zero.
                </p>
                <p>
                  <strong className="text-gray-300">Follow Responsibly:</strong> Don't copy our trades. We have no idea what we're doing. 
                  <em className="text-accent-magenta">This is literally a meme fund. You will probably get rekt.</em>
                </p>
              </div>
              <div className="text-xs text-gray-500 pt-4 border-t border-gray-700">
                * Past performance guarantees future losses. Current performance confirms we're idiots. Future performance will likely be worse.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Follow Along Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          id="contact"
          className="text-center"
        >
          <p className="text-gray-400 mb-6">
            Want to follow our journey to financial ruin?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
              Subscribe to Updates
            </button>
            <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
              Join Discord
            </button>
            <button className="px-6 py-3 border border-primary-600 text-primary-400 rounded-lg hover:bg-primary-900/20 transition-colors">
              Watch Live Stream
            </button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default CallToAction; 