/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "oswald": "Oswald, sans-serif",
      },
      screens: {
        sm: { 'max': '550px' },
        // sm: { 'max': '345px' },
        md: { 'max': '767px' },
      }
    },
  },
  plugins: [],
}