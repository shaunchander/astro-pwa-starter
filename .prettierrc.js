module.exports = {
	plugins: [
		require("prettier-plugin-tailwindcss"),
		require("prettier-plugin-astro")
	],
	overrides: [
		{
			files: "*.astro",
			options: { parser: "astro" }
		}
	],
	trailingComma: "none",
	semi: false,
	singleQuote: false,
	printWidth: 80
}
