const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './projects/**/*.{html,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        light: '#d3dce6',
        DEFAULT: '#8492a6',
        dark: '#161616',
      },
      brown: '#b4ad9d',
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      neutral: colors.neutral
    },
    fontFamily: {
      sans: ['Nanum Gothic', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
  ],
}
