// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://about.skypier.io", // Change this to your production URL.
	description:
		"The future of Decentralized Hybrid Cloud and Privacy Stack.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://pbs.twimg.com/profile_banners/1720780051346522112/1706826330/1500x500", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1500,
		height: 500
	},
	siteName: "Skypier", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Skypier", // Change this to your website's name.
	short_name: "Skypier", // Change this to your website's short name.
	description:
		"The future of Decentralized Hybrid Cloud and Privacy Stack.", // Change this to your websites description.
	theme_color: "#55ddff", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
