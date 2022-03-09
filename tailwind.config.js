const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unifrakturmaguntia: ['UnifrakturMaguntia'],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
