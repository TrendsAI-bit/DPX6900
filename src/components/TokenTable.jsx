import React from 'react';
import { motion } from 'framer-motion';

const TokenTable = ({ tokens, profile }) => {
  const getRiskBadgeColor = (risk) => {
    switch (risk) {
      case 'Low': return 'bg-primary-900/30 text-primary-400 border-primary-600/50';
      case 'Medium': return 'bg-yellow-900/30 text-yellow-400 border-yellow-600/50';
      case 'High': return 'bg-orange-900/30 text-orange-400 border-orange-600/50';
      case 'Very High': return 'bg-red-900/30 text-red-400 border-red-600/50';
      case 'EXTREME': return 'bg-pink-900/30 text-accent-magenta border-pink-600/50';
      default: return 'bg-gray-900/30 text-gray-400 border-gray-600/50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fintech-card overflow-hidden"
    >
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="p-4 border-b border-gray-800">
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            Portfolio Holdings
          </h4>
        </div>
        {tokens.map((token, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="border-b border-gray-800 last:border-b-0 p-4 hover:bg-gray-800/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: token.color }}
                />
                <div>
                  <span className="font-semibold text-white">{token.name}</span>
                  <div className="text-xs text-gray-400">{token.chain}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary-400">
                  {token.allocation}%
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Risk Level:</span>
              <span className={`px-2 py-1 rounded border text-xs font-medium ${getRiskBadgeColor(token.risk)}`}>
                {token.risk}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="professional-table">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/30">
                <th className="text-left p-4 text-gray-400 font-medium text-sm uppercase tracking-wide">
                  Asset
                </th>
                <th className="text-left p-4 text-gray-400 font-medium text-sm uppercase tracking-wide">
                  Network
                </th>
                <th className="text-center p-4 text-gray-400 font-medium text-sm uppercase tracking-wide">
                  Allocation
                </th>
                <th className="text-center p-4 text-gray-400 font-medium text-sm uppercase tracking-wide">
                  Risk Rating
                </th>
                <th className="text-right p-4 text-gray-400 font-medium text-sm uppercase tracking-wide">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-gray-800/50 last:border-b-0 hover:bg-gray-800/20 transition-colors duration-200"
                >
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full shadow-sm"
                        style={{ backgroundColor: token.color }}
                      />
                      <div>
                        <span className="font-semibold text-white">{token.name}</span>
                        <div className="text-xs text-gray-500 mt-0.5">
                          Digital Asset
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-gray-300">{token.chain}</span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold text-primary-400">
                        {token.allocation}%
                      </span>
                      <div className="w-16 bg-gray-700 rounded-full h-1.5 mt-1">
                        <div 
                          className="bg-primary-400 h-1.5 rounded-full"
                          style={{ width: `${Math.min(token.allocation * 2, 100)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-md border text-xs font-medium ${getRiskBadgeColor(token.risk)}`}>
                      {token.risk}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-900/30 text-primary-400">
                      Active
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="bg-gray-900/30 p-4 border-t border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400 mb-1">
              Total Assets
            </div>
            <div className="text-lg font-bold text-white">
              {tokens.length}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400 mb-1">
              Total Allocation
            </div>
            <div className="text-lg font-bold text-primary-400">
              {tokens.reduce((sum, token) => sum + token.allocation, 0)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400 mb-1">
              Avg. Risk
            </div>
            <div className="text-lg font-bold text-orange-400">
              {profile === 'Degen' ? 'MAX' : profile === 'Risky' ? 'HIGH' : 'LOW'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-400 mb-1">
              Strategy
            </div>
            <div className="text-lg font-bold text-accent-magenta">
              {profile.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TokenTable; 