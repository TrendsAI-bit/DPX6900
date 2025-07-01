import React from 'react';
import { motion } from 'framer-motion';

const RiskProfileToggle = ({ selectedProfile, onProfileChange }) => {
  const profiles = [
    {
      name: 'Low Risk',
      label: 'Conservative',
      subtitle: 'Low Risk',
      description: 'Stable, diversified portfolio with reduced volatility',
      riskLevel: 'Low',
      expectedReturn: '15-25%',
      color: 'border-primary-600 bg-primary-900/20',
      activeColor: 'border-primary-400 bg-primary-900/40',
      textColor: 'text-primary-400'
    },
    {
      name: 'Risky',
      label: 'Aggressive',
      subtitle: 'Risky', 
      description: 'High-growth potential with moderate risk exposure',
      riskLevel: 'Medium',
      expectedReturn: '50-150%',
      color: 'border-orange-600 bg-orange-900/20',
      activeColor: 'border-orange-400 bg-orange-900/40',
      textColor: 'text-orange-400'
    },
    {
      name: 'Degen',
      label: 'Maximum Risk',
      subtitle: 'Degen',
      description: 'Ultra-high volatility with extreme return potential',
      riskLevel: 'Extreme',
      expectedReturn: '200-1000%',
      color: 'border-accent-magenta bg-pink-900/20',
      activeColor: 'border-accent-magenta bg-pink-900/40',
      textColor: 'text-accent-magenta'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {profiles.map((profile) => (
        <motion.button
          key={profile.name}
          onClick={() => onProfileChange(profile.name)}
          className={`
            professional-button text-left p-6 rounded-xl transition-all duration-300
            ${selectedProfile === profile.name 
              ? `${profile.activeColor} shadow-lg` 
              : `${profile.color} hover:bg-gray-800/50`
            }
            border-2 min-h-[180px] flex flex-col justify-between
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: profiles.indexOf(profile) * 0.1 }}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {profile.label}
                </h3>
                <p className={`text-sm font-medium ${profile.textColor}`}>
                  {profile.subtitle}
                </p>
              </div>
              <div className={`
                w-4 h-4 rounded-full border-2 transition-all duration-300
                ${selectedProfile === profile.name 
                  ? `${profile.textColor.replace('text-', 'bg-')} border-transparent` 
                  : 'border-gray-600'
                }
              `} />
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              {profile.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                Risk Level
              </div>
              <div className={`text-sm font-medium ${profile.textColor}`}>
                {profile.riskLevel}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                Expected Return
              </div>
              <div className="text-sm font-medium text-white">
                {profile.expectedReturn}
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default RiskProfileToggle; 