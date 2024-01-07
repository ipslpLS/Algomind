/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './content/**/*.html',
    './layouts/**/*.html',
    './layouts/**/*.md',
    './content/**/*.md'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}