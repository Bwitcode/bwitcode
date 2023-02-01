/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gotu: "Gotu",
        krub: "Krub",
        playfairDisplay: "Playfair Display",
      },
      colors: {
        services: "#0EBDB8",
        about: "#22A0C8",
        works: "#047481",
        footer: "#31708B",
        line: "#90C1CC",
        alternative: "#DAF0EC",
        primary: "#EFFAF3",
      },
      backgroundColor: {
        primary: "#EFFAF3",
        card: "#EDFAFA",
        hover: "#00A9A4",
        hoverSec: "#00606B",
      },
      textColor: {
        primary: "#3C4E4D",
        secondary: "#8EA8B4",
        p: "#EFFAF3",
        h: "#DBE9EF",
      },
    },
  },
  plugins: [],
};
