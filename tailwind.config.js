/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom-layout': 'repeat(auto-fill, minmax(min(220px, 50%), 1fr))',
      },
    },
  },
  plugins: [],
}