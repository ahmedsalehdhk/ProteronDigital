/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#0C0A0A",
      hoverDark: "#2F2F2F",
      light: "#FFFFFF",
      hoverLight: "#EFEFEF",
      accent: "#818181",
      lightAccent: "#f2f2f2",
    },
  },
  plugins: [],
});
