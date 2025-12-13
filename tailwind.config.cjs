/** @type {import('tailwindcss').Config} */

const typography = require("@tailwindcss/typography");
const noise = require("tailwindcss-noise");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        excalifont: ['"Excalifont"'],
      },
      colors: {
        periwinkle: {
          regular: "#B7C3F3",
          medium: "#6875ad",
          dark: "#565491",
          darker: "#201F51",
          light: "#D1DAFC",
          lighter: "#e3e8fc",
        },
        gunmetal: "#2E3842",
        "gunmetal-dark": "#242c35",
        "paynes-grey": "#4F6272",
        "light-green": "#7CEA9C",
      },
      boxShadow: {
        periwinkle: "-4px 4px 0 #B7C3F3",
        "periwinkle-hover": "-2px 2px 0 #B7C3F3",
        gunmetal: "-4px 4px 0 #242c35",
        "gunmetal-hover": "-2px 2px 0 #242c35",
      },
    },
  },
  plugins: [typography, noise],
};
