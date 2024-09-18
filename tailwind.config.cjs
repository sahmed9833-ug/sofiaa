/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                periwinkle: "#B7C3F3",
                "light-periwinkle": "#D1DAFC",
                gunmetal: "#2E3842",
                "paynes-grey": "#4F6272",
                "light-green": "#7CEA9C",
            },
            boxShadow: {
                periwinkle: "-4px 4px 0 #B7C3F3",
                "periwinkle-hover": "-2px 2px 0 #B7C3F3",
                gunmetal: "-4px 4px 0 #2E3842",
                "gunmetal-hover": "-2px 2px 0 #2E3842",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
