/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5A2D81',
          darkPurple: '#361053',
          white: '#FFFFFF',
          red: '#FF0000',
          darkGray: '#333333',
          lightGray: '#F2F2F2',
          black: '#000000',
          yellow: '#FFCA00',
        },
      },
    },
  },
  plugins: [],
}

