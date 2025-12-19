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
        "gunmetal-small": "-1px 1px 0 #242c35",
        "gunmetal-hover": "-2px 2px 0 #242c35",
        "gunmetal-small-hover": "0px 0px 0 #242c35",
      },
      keyframes: {
        "bouncy-header": {
          "0%": { transform: "translateY(-16px)", opacity: "0" },
          "60%": { transform: "translateY(3px)", opacity: "1" },
          "80%": { transform: "translateY(-1px)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "bouncy-btn": {
          "0%": {
            transform: "translateY(-14px) scaleY(1) scaleX(1)",
            opacity: "0",
          },
          "40%": { opacity: "0.2" },
          "60%": {
            transform: "translateY(0) scaleY(0.96) scaleX(1.02)",
            opacity: "1",
          },
          "80%": { transform: "translateY(-3px) scaleY(1.02) scaleX(0.99)" },
          "100%": {
            transform: "translateY(0) scaleY(1) scaleX(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "bouncy-header":
          "bouncy-header 260ms cubic-bezier(0.12, 0.6, 0.15, 1) both",
        "bouncy-btn": "bouncy-btn 240ms cubic-bezier(0.16, 0.7, 0.2, 1) both",
      },
    },
  },
  plugins: [typography, noise],
};
