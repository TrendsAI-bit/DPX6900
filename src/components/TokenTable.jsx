import React from 'react';
import { motion } from 'framer-motion';

const TokenTable = ({ tokens, profile }) => {
  const getRiskBadgeColor = (risk) => {
    switch (risk) {
      case 'Low': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'High': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'Very High': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'EXTREME': return 'bg-pink-500/20 text-pink-400 border-pink-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
    >
      {/* Mobile View */}
      <div className="md:hidden">
        {tokens.map((token, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-b border-gray-700 last:border-b-0 p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: token.color }}
                />
                <span className="font-bold text-white">{token.name}</span>
              </div>
              <span className="text-2xl font-bold text-neon-green">
                {token.allocation}%
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">{token.chain}</span>
              <span className={`px-2 py-1 rounded border text-xs font-semibold ${getRiskBadgeColor(token.risk)}`}>
                {token.risk}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-gray-300 font-semibold">Token</th>
              <th className="text-left p-4 text-gray-300 font-semibold">Chain</th>
              <th className="text-center p-4 text-gray-300 font-semibold">Allocation</th>
              <th className="text-center p-4 text-gray-300 font-semibold">Risk Rating</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-gray-800 last:border-b-0 hover:bg-gray-800/50 transition-colors duration-200"
              >
                <td className="p-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: token.color }}
                    />
                    <span className="font-bold text-white">{token.name}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-300">{token.chain}</td>
                <td className="p-4 text-center">
                  <span className="text-xl font-bold text-neon-green">
                    {token.allocation}%
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded border text-sm font-semibold ${getRiskBadgeColor(token.risk)}`}>
                    {token.risk}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="bg-gray-800/50 p-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-gray-300 font-semibold">Total Allocation:</span>
          <span className="text-xl font-bold text-neon-green">
            {tokens.reduce((sum, token) => sum + token.allocation, 0)}%
          </span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-gray-300 font-semibold">Number of Tokens:</span>
          <span className="text-lg font-bold text-white">{tokens.length}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TokenTable; 