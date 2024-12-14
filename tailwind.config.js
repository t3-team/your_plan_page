/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE9E5',
          500: '#E84E36',
          600: '#d64730',
        },
      },
    },
  },
  plugins: [],
};