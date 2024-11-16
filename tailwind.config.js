/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#F4D04E',
        Gray950: '#111111',
        Gray500: '#6B6B6B',
        White: '#FFFFFF',
      },
      fontFamily: { sans: ['Figtree', 'sans-serif'] },
      boxShadow: {
        'custom-dark': '0.5rem 0.5rem hsl(0, 0%, 7%)',
      },
    },
  },
  plugins: [],
};
