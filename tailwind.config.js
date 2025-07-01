/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Meme-themed color palette
        'low-risk': {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        'risky': {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        'degen': {
          50: '#fdf2f8',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
        },
        'neon': {
          green: '#00ff88',
          pink: '#ff0080',
          blue: '#0080ff',
          purple: '#8000ff',
        }
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(236, 72, 153, 0.8)',
            transform: 'scale(1.05)'
          },
        }
      }
    },
  },
  plugins: [],
} 