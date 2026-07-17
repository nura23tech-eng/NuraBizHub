/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        nura: {
          navy: "#0A192F",
          card: "#112240",
          sky: "#00B4D8",
          green: "#2D6A4F",
          softGreen: "#D1FAE5",
          white: "#F8FAFC",
          gray: "#94A3B8",
        },
      },

      borderRadius: {
        nura: "24px",
      },
    },
  },

  plugins: [],
};
