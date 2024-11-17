/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      yellow: '#F4D04E',
      'gray-950': '#111111',
      'gray-500': '#6B6B6B',
      white: '#FFFFFF',
    },
    fontFamily: { sans: ['Figtree', 'sans-serif'] },
    boxShadow: {
      card: '0.5rem 0.5rem hsl(0, 0%, 7%)',
      'card-hover': '0.8rem 1rem hsl(0, 0%, 7%)',
    },
  },
  plugins: [],
};
