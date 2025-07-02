import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getMarketData } from '../utils/heliusApi';

const Header = () => {
  const [marketData, setMarketData] = useState({
    marketCap: 7992, // Default fallback value
    price: null,
    loading: true,
    error: null,
    lastUpdated: null,
    source: null,
  });

  const [copySuccess, setCopySuccess] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fetchData = async () => {
    try {
      setMarketData(prev => ({ ...prev, loading: true, error: null }));
      const data = await getMarketData();
      setMarketData({
        marketCap: data.marketCap || 7992,
        price: data.price,
        supply: data.supply,
        volume24h: data.volume24h,
        loading: false,
        error: data.error || null,
        lastUpdated: data.lastUpdated,
        source: data.source || null,
      });
    } catch (error) {
      console.error('Failed to fetch market data:', error);
      setMarketData(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to fetch live data',
      }));
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchData();

    // Set up periodic updates every 30 seconds
    const interval = setInterval(fetchData, 30000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText('4Zxwp6FmjFXBSKE7wNZPT8V5WdfMTEAhpqnEqBvDpump');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const formatMarketCap = (value) => {
    if (!value) return 'Loading...';
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value.toLocaleString()}`;
  };

  const formatPrice = (value) => {
    if (!value) return null;
    if (value < 0.01) {
      return `$${value.toFixed(6)}`;
    }
    return `$${value.toFixed(4)}`;
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
            
            {/* Contract Address */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6"
            >
              <div className="max-w-md mx-auto">
                <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                  Contract Address (CA)
                </div>
                <div className="bg-gray-900/50 border border-primary-600/50 rounded-lg p-4 flex items-center justify-between">
                  <div className="font-mono text-primary-400 text-sm md:text-base break-all">
                    4Zxwp6FmjFXBSKE7wNZPT8V5WdfMTEAhpqnEqBvDpump
                  </div>
                  <button
                    onClick={handleCopyAddress}
                    className={`ml-3 p-2 rounded-md transition-all duration-200 flex-shrink-0 ${
                      copySuccess 
                        ? 'bg-green-600 hover:bg-green-500' 
                        : 'bg-primary-600 hover:bg-primary-500'
                    }`}
                    title={copySuccess ? 'Copied!' : 'Copy Contract Address'}
                  >
                    {copySuccess ? (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center space-y-1">
                  <div className="flex items-center justify-center space-x-4">
                    <span>
                      Market Cap: {marketData.loading ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin h-3 w-3 mr-1" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Loading...
                        </span>
                      ) : (
                        <span className={marketData.error ? 'text-orange-400' : 'text-primary-400'}>
                          {formatMarketCap(marketData.marketCap)}
                          {marketData.error && ' (cached)'}
                        </span>
                      )}
                    </span>
                    {marketData.price && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span>Price: <span className="text-primary-400">{formatPrice(marketData.price)}</span></span>
                      </>
                    )}
                  </div>
                  {marketData.lastUpdated && !marketData.loading && (
                    <div className="text-gray-600 flex items-center justify-center space-x-2">
                      <span>Updated: {new Date(marketData.lastUpdated).toLocaleTimeString()}</span>
                      {marketData.source && (
                        <>
                          <span>•</span>
                          <span className="text-xs">via {marketData.source}</span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
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