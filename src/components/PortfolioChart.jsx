import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const PortfolioChart = ({ data, profile }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload[0]) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl backdrop-blur-sm">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: data.color }}
              />
              <span className="text-white font-semibold">{data.name}</span>
            </div>
            <div className="text-sm text-gray-300 space-y-1">
              <div>Chain: <span className="text-gray-400">{data.chain}</span></div>
              <div>Allocation: <span className="text-primary-400 font-semibold">{data.allocation}%</span></div>
              <div>Risk Level: <span className="text-orange-400">{data.risk}</span></div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, allocation, name }) => {
    if (allocation < 8) return null; // Only show labels for larger slices
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {allocation}%
      </text>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="fintech-card p-6"
    >
      <div className="h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={120}
              innerRadius={40}
              fill="#8884d8"
              dataKey="allocation"
              animationBegin={0}
              animationDuration={1200}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="#1f1f1f"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {/* Asset Legend */}
      <div className="mt-6 space-y-4">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          Asset Breakdown
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.map((token, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50"
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: token.color }}
                />
                <div>
                  <span className="text-sm font-medium text-white">
                    {token.name}
                  </span>
                  <div className="text-xs text-gray-400">
                    {token.chain}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-primary-400">
                  {token.allocation}%
                </div>
                <div className="text-xs text-gray-500">
                  {token.risk}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="mt-6 p-4 bg-gray-800/20 rounded-lg border border-gray-700/30">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-white">
              {data.length}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              Assets
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-primary-400">
              {data.reduce((sum, token) => sum + token.allocation, 0)}%
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              Allocated
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold text-orange-400">
              {profile}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">
              Strategy
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioChart; 