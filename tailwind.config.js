/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter':[ 'Inter', 'sans-serif'],
      },
      boxShadow:{
        'text':'0px 4px 28px rgba(255, 255, 255, 0.4)'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}