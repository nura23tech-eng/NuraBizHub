/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0B2D5C",
        sky: "#38BDF8",
        success: "#16A34A"
      }
    }
  },

  plugins: []
};
