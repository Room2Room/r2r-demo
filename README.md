# React Coding Challenge

## 🚀 Quick Start

If you already have Node.js installed:

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Installing Node.js (First Time Setup)

### Option 1: Install with NVM (Recommended)

**On Mac/Linux:**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.bashrc

# Install latest Node.js
nvm install node
nvm use node
```

**On Windows:**
1. Download nvm-windows from: https://github.com/coreybutler/nvm-windows/releases
2. Install the downloaded `.exe` file
3. Open Command Prompt as Administrator and run:
```cmd
nvm install latest
nvm use latest
```

### Option 2: Direct Download
- **Mac**: Download from [nodejs.org](https://nodejs.org) (get the LTS version)
- **Windows**: Download from [nodejs.org](https://nodejs.org) (get the LTS version)

### Verify Installation
```bash
node --version
npm --version
```

## 🛠️ Running the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```
   
2. **Start development server:**
   ```bash
   npm run dev
   ```
   
3. **Open your browser:**
   Go to [http://localhost:5173](http://localhost:5173)

## 🎯 What You're Building

This is a coding challenge where you'll build a React component that:
- Displays 8 random numbers (0-9)
- Calculates their sum
- Changes background colors based on sum ranges
- Tracks results over multiple generations

## 📁 Key Files

- `src/components/ChallengeComponent.tsx` - **This is where you code!**
- `src/App.tsx` - Main app with instructions
- `src/components/SolutionComponent.tsx` - Reference solution (don't peek!)

## 🆘 Common Issues

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
npm cache clean --force
npm install
```

**Node version too old?**
```bash
nvm install node --latest-npm
nvm use node
```

## 🎨 Styling Options

You can use either:
- **Tailwind CSS** (if you know it): `className="grid grid-cols-4 gap-4"`
- **Regular CSS** (classes provided): `className="numbers-grid"`
- **Inline styles**: `style={{backgroundColor: '#fecaca'}}`

## 📝 Available Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server  
npm run build        # Build for production
npm run preview      # Preview production build
```

Good luck! 🍀
