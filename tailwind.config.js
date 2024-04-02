/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'custom-purple': '#8C497A',
        'custom-gold': '#BF9004',
        'custom-cyan': '#0396A6',
        'custom-red': '#D93B65',
        'custom-orange': '#D98032',
      }
    },
  },
  plugins: [],
}
