/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },

      screens: {
        xs: "350px",
        xl: "1200px",
      },

      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
        appearDropDown: {
          "0%": { opacity: 0, height: 0 },
          "100%": { opacity: 100, height: 1000 },
        },
        appearLeft: {
          "0%": { opacity: 0, right: "-50%" },
          "100%": { opacity: 100, right: 0 },
        },
        disapear: {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        appear: "appear 0.3s ease-in-out",
        appearLeft: "appearLeft 0.3s ease-in-out",
        appearDropDown: "appearDropDown 0.3s ease-in-out",
        disapear: "disapear 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
