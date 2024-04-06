/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#F5F5F5',
        'body': '#212222',
        'title': '#0A0A0A',
      },
      fontFamily: {
        'garamond': ["EB Garamond", "serif"]
      },
      backgroundImage: {
        'hero-mobile-1': "url('/src/assets/img/hero/hero-mobile-model1.jpg')",
        'hero-mobile-2': "url('/src/assets/img/hero/hero-mobile-model2.jpg')",
        'hero-mobile-3': "url('/src/assets/img/hero/hero-mobile-model3.jpg')",
      }
    },
  },
  plugins: [],
}