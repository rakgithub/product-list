// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This glob pattern correctly includes all .js, .jsx, .ts, and .tsx files
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}