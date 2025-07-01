# DPX6900 - The Degenerate Meme Index Fund

**High Risk. Higher Rewards. Zero Risk Management.**

A responsive, interactive React web app showcasing the ultimate meme coin index fund. Built for maximum degeneracy and minimum sleep.

## 🚀 Features

- **Interactive Risk Profiles**: Toggle between Low Risk, Risky, and Degen portfolios
- **Dynamic Visualizations**: Live-updating pie charts and performance graphs using Recharts
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Powered by Framer Motion for buttery smooth interactions
- **Meme-Themed UI**: Custom color palette and design language for maximum meme appeal
- **Real-time Marquee**: Scrolling ticker with token updates and market data

## 🛠 Tech Stack

- **React 18** with Vite for lightning-fast development
- **Tailwind CSS** for utility-first styling
- **Recharts** for beautiful, responsive charts
- **Framer Motion** for smooth animations and interactions
- **Lucide React** for consistent iconography

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dpx6900
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically build and deploy on every push

### Vercel Configuration

The project is pre-configured for Vercel deployment. The build command and output directory are set in `package.json`.

## 🎨 Customization

### Risk Profiles

Edit `src/data/portfolioData.js` to modify:
- Token allocations
- Historical performance data
- Risk ratings
- Color schemes

### Styling

The app uses a custom Tailwind configuration with meme-themed colors:
- `low-risk`: Green/blue tones
- `risky`: Orange/yellow tones  
- `degen`: Pink/purple tones
- `neon`: Bright accent colors

### Components

- `Header.jsx`: Logo, title, and hero section
- `Marquee.jsx`: Scrolling ticker banner
- `RiskProfileToggle.jsx`: Interactive risk selection buttons
- `PortfolioChart.jsx`: Pie chart visualization
- `TokenTable.jsx`: Token allocation table
- `PerformanceChart.jsx`: Historical performance line chart
- `CallToAction.jsx`: CTA button and social proof

## 📱 Mobile Responsiveness

The app is fully responsive with:
- Collapsible navigation
- Responsive charts and tables
- Mobile-optimized touch interactions
- Adaptive layouts for all screen sizes

## ⚠️ Disclaimer

This is a demo application for educational purposes only. 

**Not financial advice. You will probably get rekt.**

## 📄 License

MIT License - feel free to use this for your own meme coin projects!

---

*Built with 💎🙌 by degens, for degens* 