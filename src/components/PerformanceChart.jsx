import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { motion } from 'framer-motion';

const PerformanceChart = ({ data, profile, totalReturn }) => {
  const getProfileColor = (profile) => {
    switch (profile) {
      case 'Low Risk': return '#10b981';
      case 'Risky': return '#f59e0b';
      case 'Degen': return '#ec4899';
      default: return '#6b7280';
    }
  };

  const getGradientId = (profile) => {
    switch (profile) {
      case 'Low Risk': return 'colorLowRisk';
      case 'Risky': return 'colorRisky';
      case 'Degen': return 'colorDegen';
      default: return 'colorDefault';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload[0]) {
      const value = payload[0].value;
      const returnPercent = ((value - 1000) / 1000 * 100).toFixed(1);
      const isPositive = returnPercent >= 0;
      
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl backdrop-blur-sm">
          <div className="space-y-2">
            <div className="text-white font-semibold border-b border-gray-700 pb-2">
              {label} 2024
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Portfolio Value:</span>
                <span className="text-white font-semibold">
                  ${value.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Return:</span>
                <span className={`font-semibold ${isPositive ? 'text-primary-400' : 'text-red-400'}`}>
                  {isPositive ? '+' : ''}{returnPercent}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">P&L:</span>
                <span className={`font-semibold ${isPositive ? 'text-primary-400' : 'text-red-400'}`}>
                  {isPositive ? '+' : ''}${(value - 1000).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  const formatYAxis = (value) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fintech-card p-6"
    >
      {/* Chart Header */}
      <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="space-y-2">
          <h4 className="text-xl font-semibold text-white">
            {profile} Strategy Performance
          </h4>
          <p className="text-gray-400 text-sm">
            Hypothetical $1,000 investment over 6-month period
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="text-center lg:text-right">
            <div className="text-3xl font-bold text-primary-400">
              {totalReturn}
            </div>
            <div className="text-sm text-gray-400">Total Return</div>
          </div>
          <div className="text-center lg:text-right">
            <div className="text-2xl font-bold text-white">
              ${data[data.length - 1].value.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Current Value</div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80 lg:h-96 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id={getGradientId(profile)} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={getProfileColor(profile)} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={getProfileColor(profile)} stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#9ca3af"
              fontSize={12}
              tickFormatter={formatYAxis}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={getProfileColor(profile)}
              fillOpacity={1}
              fill={`url(#${getGradientId(profile)})`}
              strokeWidth={3}
              dot={false}
              activeDot={{ 
                r: 6, 
                stroke: getProfileColor(profile), 
                strokeWidth: 2,
                fill: '#1f1f1f'
              }}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="text-lg font-bold text-white">
            ${data[data.length - 1].value.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
            Current Value
          </div>
        </div>
        
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="text-lg font-bold text-primary-400">
            +${(data[data.length - 1].value - 1000).toLocaleString()}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
            Net Profit
          </div>
        </div>
        
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="text-lg font-bold text-accent-cyan">
            ${Math.max(...data.map(d => d.value)).toLocaleString()}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
            Peak Value
          </div>
        </div>
        
        <div className="text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="text-lg font-bold text-red-400">
            ${Math.min(...data.map(d => d.value)).toLocaleString()}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
            Trough Value
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 text-center p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <div className="text-lg font-bold text-accent-magenta">
            {profile.toUpperCase()}
          </div>
          <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
            Strategy
          </div>
        </div>
      </div>

      {/* Risk Disclosure */}
      <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700/30">
        <div className="flex items-start space-x-3">
          <div className="text-orange-400 text-sm mt-0.5">⚠️</div>
          <div className="text-xs text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Performance Disclaimer:</strong> {' '}
            Hypothetical results shown for illustrative purposes only. Past performance does not guarantee future results. 
            Cryptocurrency investments involve substantial risk of loss. 
            {profile === 'Degen' && ' Maximum volatility strategy not suitable for most investors.'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceChart; 