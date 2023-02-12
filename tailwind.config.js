/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:'#24292E',
        'primary-lightest-3':'#F5F7FF',
        secondary:'#444D56',
        help:'#6A737D',
        'help-light':'#959DA5',
        success:'#8BC34A',
        'light':'#E1E4E8',
        'dark':'#D1D5DA',
        'gray-025':'#FAFBFC',
        'active':'#5D6BCE'
      }
    },
  },
  plugins: [],
}
