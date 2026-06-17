module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9A84C',
        secondary: '#06B6D4',
        accent: '#C9A84C',
        dark: '#0E0E0E',
        light: '#F5F0E8',
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        syne: ['"Bricolage Grotesque"', 'sans-serif'], // fallback mapping
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(139,92,246,0.3)',
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};
