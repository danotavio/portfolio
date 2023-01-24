/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pingpong: {
          "0%": { bottom: 50 },
          "50%": { bottom: 0 },
          "100%": { bottom: -50 },
        },
      },
      fontFamily: {
        poppins: ["Chivo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
