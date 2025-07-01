// Mock portfolio data for different risk profiles
export const portfolioData = {
  'Low Risk': {
    tokens: [
      { name: 'BTC', chain: 'Bitcoin', allocation: 40, risk: 'Low', color: '#f7931a' },
      { name: 'ETH', chain: 'Ethereum', allocation: 30, risk: 'Low', color: '#627eea' },
      { name: 'USDC', chain: 'Ethereum', allocation: 15, risk: 'Low', color: '#2775ca' },
      { name: 'SOL', chain: 'Solana', allocation: 10, risk: 'Medium', color: '#9945ff' },
      { name: 'MATIC', chain: 'Polygon', allocation: 5, risk: 'Medium', color: '#8247e5' },
    ],
    performance: [
      { month: 'Jan', value: 1000 },
      { month: 'Feb', value: 1050 },
      { month: 'Mar', value: 1120 },
      { month: 'Apr', value: 1080 },
      { month: 'May', value: 1150 },
      { month: 'Jun', value: 1200 },
    ],
    totalReturn: '+20%',
    riskLevel: 'Conservative'
  },
  'Risky': {
    tokens: [
      { name: 'DOGE', chain: 'Dogecoin', allocation: 25, risk: 'High', color: '#c2a633' },
      { name: 'SHIB', chain: 'Ethereum', allocation: 20, risk: 'High', color: '#ffa409' },
      { name: 'PEPE', chain: 'Ethereum', allocation: 15, risk: 'Very High', color: '#00d4aa' },
      { name: 'WIF', chain: 'Solana', allocation: 15, risk: 'Very High', color: '#ff6b6b' },
      { name: 'BONK', chain: 'Solana', allocation: 10, risk: 'Very High', color: '#ff8c42' },
      { name: 'FLOKI', chain: 'Ethereum', allocation: 10, risk: 'High', color: '#f39c12' },
      { name: 'MEME', chain: 'Ethereum', allocation: 5, risk: 'Very High', color: '#e74c3c' },
    ],
    performance: [
      { month: 'Jan', value: 1000 },
      { month: 'Feb', value: 1200 },
      { month: 'Mar', value: 900 },
      { month: 'Apr', value: 1800 },
      { month: 'May', value: 1400 },
      { month: 'Jun', value: 2100 },
    ],
    totalReturn: '+110%',
    riskLevel: 'Aggressive'
  },
  'Degen': {
    tokens: [
      { name: 'DPX6900', chain: 'Solana', allocation: 30, risk: 'EXTREME', color: '#ff0080' },
      { name: 'BOOK OF MEME', chain: 'Solana', allocation: 15, risk: 'EXTREME', color: '#8000ff' },
      { name: 'SLERF', chain: 'Solana', allocation: 12, risk: 'EXTREME', color: '#00ff88' },
      { name: 'BOME', chain: 'Solana', allocation: 10, risk: 'EXTREME', color: '#ff6b35' },
      { name: 'WEN', chain: 'Solana', allocation: 8, risk: 'EXTREME', color: '#4ecdc4' },
      { name: 'MYRO', chain: 'Solana', allocation: 8, risk: 'EXTREME', color: '#45b7d1' },
      { name: 'POPCAT', chain: 'Solana', allocation: 7, risk: 'EXTREME', color: '#96ceb4' },
      { name: 'RETARDIO', chain: 'Solana', allocation: 5, risk: 'EXTREME', color: '#ffeaa7' },
      { name: 'GIGA', chain: 'Solana', allocation: 3, risk: 'EXTREME', color: '#fd79a8' },
      { name: 'HARAMBE', chain: 'Solana', allocation: 2, risk: 'EXTREME', color: '#a29bfe' },
    ],
    performance: [
      { month: 'Jan', value: 1000 },
      { month: 'Feb', value: 2500 },
      { month: 'Mar', value: 800 },
      { month: 'Apr', value: 4200 },
      { month: 'May', value: 1200 },
      { month: 'Jun', value: 6900 },
    ],
    totalReturn: '+590%',
    riskLevel: 'DEGEN MODE'
  }
};

// Mock marquee data
export const marqueeData = [
  'DOGE +5.2%',
  'PEPE +12.7%',
  'DPX6900 +420.69%',
  'WIF Mooning',
  'Full Degen Mode Enabled',
  'BTC +3.1%',
  'SOL +8.9%',
  'SHIB +15.3%',
  'BONK +25.6%',
  'Market Cap: $69.420B'
]; 