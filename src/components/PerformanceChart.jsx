import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const PerformanceChart = ({ data, profile, totalReturn }) => {
  const getProfileColor = (profile) => {
    switch (profile) {
      case 'Low Risk': return '#22c55e';
      case 'Risky': return '#f59e0b';
      case 'Degen': return '#ec4899';
      default: return '#6b7280';
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-semibold">{`Month: ${label}`}</p>
          <p className="text-neon-green">
            {`Value: $${payload[0].value.toLocaleString()}`}
          </p>
          <p className="text-gray-300 text-sm">
            {`Return: ${((payload[0].value - 1000) / 1000 * 100).toFixed(1)}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
    >
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h4 className="text-xl font-bold text-white mb-2">
            {profile} Performance
          </h4>
          <p className="text-gray-400 text-sm">
            Initial investment: $1,000
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-3xl font-bold text-neon-green">
            {totalReturn}
          </div>
          <div className="text-sm text-gray-400">Total Return</div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#9ca3af"
              fontSize={12}
            />
            <YAxis 
              stroke="#9ca3af"
              fontSize={12}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={getProfileColor(profile)}
              strokeWidth={3}
              dot={{ fill: getProfileColor(profile), strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: getProfileColor(profile), strokeWidth: 2 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-gray-800/50 rounded-lg">
          <div className="text-lg font-bold text-white">
            ${data[data.length - 1].value.toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Current Value</div>
        </div>
        <div className="text-center p-3 bg-gray-800/50 rounded-lg">
          <div className="text-lg font-bold text-neon-green">
            ${(data[data.length - 1].value - 1000).toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Net Profit</div>
        </div>
        <div className="text-center p-3 bg-gray-800/50 rounded-lg">
          <div className="text-lg font-bold text-blue-400">
            ${Math.max(...data.map(d => d.value)).toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Peak Value</div>
        </div>
        <div className="text-center p-3 bg-gray-800/50 rounded-lg">
          <div className="text-lg font-bold text-red-400">
            ${Math.min(...data.map(d => d.value)).toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Lowest Value</div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceChart; 