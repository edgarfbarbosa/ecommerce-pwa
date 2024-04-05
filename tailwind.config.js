/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#F5F5F5',
        'body': '#1F1F1F',
        'title': '#0A0A0A',
      },
      backgroundImage: {
        'hero-mobile': "url('/src/assets/img/hero/hero-mobile.jpg')",
      }
    },
  },
  plugins: [],
}