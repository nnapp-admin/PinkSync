/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'safeguard-pink': '#ff1a8c',
        'safeguard-light-pink': '#ff66b3',
        'dark-bg': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'text-light': '#e0e0e0',
        'text-gray': '#cccccc',
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(135deg, #ff1a8c 0%, #ff66b3 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        'radial-pink': 'radial-gradient(circle at 20% 80%, #ff1a8c15 0%, transparent 50%)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}