/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./public/**/*.html",
		"./src/**/*.{astro,html,jsx,tsx,svelte,vue,js,ts}"
	],
	theme: {
		extend: {
			screens: {
				sm: "400px"
			}
		}
	},
	plugins: []
};
