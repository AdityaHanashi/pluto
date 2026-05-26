module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        secondary: '#0EA5E9',
        accent: '#6366F1',
        dark: '#0a0a0a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(139,92,246,0.5)',
        glass: '0 4px 30px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};
