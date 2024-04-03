/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js', './src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Custom Font', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

