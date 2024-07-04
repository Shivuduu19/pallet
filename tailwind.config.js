/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mtLl': { 'min': '992px', 'max': '1440px' },
      'btL': { 'max': '991px' },
      'ut': { 'max': '767px' }
    },
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite'
      },
      keyframes: {
        scroll: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(calc(-100% - 5em))' }
        }
      },
    },
  },
  plugins: [],
}