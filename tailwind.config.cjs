/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				periwinkle: '#B7C3F3',
				gunmetal: '#2E3842',
				'paynes-grey': '#4F6272',
				'light-green': '#7CEA9C'
			},
		},
	},
	plugins: [],
}
