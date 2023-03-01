const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        HankenGrotesk: ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
