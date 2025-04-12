/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant file types in src
  ],
  darkMode: 'class', // Enable class-based dark mode (as used in your code)
  theme: {
    extend: {},
  },
  plugins: [],
}