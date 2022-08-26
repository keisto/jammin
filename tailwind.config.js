const colors = require('tailwindcss/colors') // eslint-disable-line

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      green: colors.green,
      purple: colors.purple,
      yellow: colors.amber,
      pink: colors.pink,
      red: colors.red,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
}
