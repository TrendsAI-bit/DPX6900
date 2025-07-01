import React from 'react';
import { motion } from 'framer-motion';

const RiskProfileToggle = ({ selectedProfile, onProfileChange }) => {
  const profiles = [
    {
      name: 'Low Risk',
      label: 'Low Risk',
      description: 'For the cautious souls',
      color: 'from-low-risk-500 to-low-risk-600',
      textColor: 'text-white',
      glow: 'shadow-green-500/50'
    },
    {
      name: 'Risky',
      label: 'Risky',
      description: 'Some spice, some dice',
      color: 'from-risky-500 to-risky-600', 
      textColor: 'text-white',
      glow: 'shadow-orange-500/50'
    },
    {
      name: 'Degen',
      label: 'Degen',
      description: 'Full send or no send',
      color: 'from-degen-500 to-degen-700',
      textColor: 'text-white',
      glow: 'shadow-pink-500/50'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
      {profiles.map((profile) => (
        <motion.button
          key={profile.name}
          onClick={() => onProfileChange(profile.name)}
          className={`
            risk-button relative px-8 py-6 rounded-xl font-bold text-lg
            bg-gradient-to-r ${profile.color} ${profile.textColor}
            transition-all duration-300 transform hover:scale-105
            ${selectedProfile === profile.name 
              ? `risk-button-active shadow-2xl ${profile.glow} ring-4 ring-white/20` 
              : 'hover:shadow-lg'
            }
            min-w-[200px] border-2 border-white/20
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={selectedProfile === profile.name ? {
            boxShadow: [
              '0 0 20px rgba(255, 255, 255, 0.3)',
              '0 0 40px rgba(255, 255, 255, 0.5)',
              '0 0 20px rgba(255, 255, 255, 0.3)'
            ]
          } : {}}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="text-center">
            <div className="text-xl font-black">{profile.label}</div>
            <div className="text-sm opacity-90 mt-1">{profile.description}</div>
          </div>
          
          {selectedProfile === profile.name && (
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default RiskProfileToggle; 