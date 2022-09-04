<img align="center" width="1725" alt="Screen Shot 2022-09-03 at 10 09 25 AM" src="https://user-images.githubusercontent.com/5169985/188276737-322f1e21-08a9-4b84-8a83-b394507f302d.png">


<h1 align="center">🟢 astro-pwa-starter</h1>

<p align="center">An opinionated Astro starter for building robust static websites.</p>

## ✨ Feature Set

- ✅ Full PWA support out-of-the-box.
- ✅ Achieves a 100 SEO score out-of-the-box.
- ✅ Comes with TailwindCSS pre-installed.
- ✅ Full TypeScript support.
- ✅ Framework agnostic.
- ✅ Has sensible ESLint and Prettier configurations baked-in.
- ✅ Includes recommended SEO meta tags and favicons
- ✅ Straight-forward file structure, import aliases, and developer experience.

## 📦 Dependencies

Here is a list of core dependencies that astro-pwa-starter relies on in case you need to extend the starter/look into more documentation:

| Package                                                                               | Purpose                                                                                               |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`@astrojs/sitemap` ](<[https://](https://www.npmjs.com/package/@astrojs/sitemap)>)   | Generates an accessible sitemap for Astro websites.                                                   |
| [`@astrojs/tailwind` ](<[https://](https://www.npmjs.com/package/@astrojs/tailwind)>) | Automatically sets up TailwindCSS.                                                                    |
| [`astro-compress` ](<[https://](https://www.npmjs.com/package/astro-compress)>)       | Compresses all static assets into minified files.                                                     |
| [`astro-seo` ](<[https://](https://www.npmjs.com/package/astro-seo)>)                 | Provides a helpful component for configuring SEO.                                                     |
| [`vite-plugin-pwa` ](<[https://](https://www.npmjs.com/package/vite-plugin-pwa)>)     | Configures a service-worker for offline-accessability and generates a webmanifest for PWA compliance. |

## 🤖 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |

## 👋 Getting Started Guide

### Introduction and prerequisites

astro-pwa-starter is an opinionated Astro starter, meaning it ships with a pre-determined file structure and procedure for doing things. In this getting started guide we'll walk you through how to use the starter for your project.

---

### Understanding the project structure

First, and foremost, is the project structure, in other words, how the files are laid out in the project. The starter follows a very similar convention to the one seen [in Astro's own documentation](<[https://](https://docs.astro.build/en/core-concepts/project-structure/)>). However, we've made some changes:

1. Every static asset should be placed inside `/src/assets/` instead of the public folder, there are two subfolders (`/img` and `/svg`) to distinguish between images and graphics.
2. Use the `/utils` to include any helper scripts or configuration files like GraphQL clients or TypeScript types.
3. The `src/components/globals` folder contains three premade global components: the site header, footer, and layout (we'll talk about the layout in a bit).

Most of where you'll work is directly inside `/src`. If you're curious to know what **every** file and directory in the starter does, checkout the documentation after reading this guide.

---

### Creating pages

When you create a new page, place it inside the `/src/pages/` directory and make sure it's a `.astro` file. Then, import the `<Layout />` component as such:

```html
---
import { Layout } from "@globals"
---

<Layout title="Home Page"> // ... </Layout>
```

You'll notice we imported the component from `@globals`, we'll talk about that later.

The `<Layout />` global component is responsible for rendering your website's `<header />`, `<main />`, and `<footer />` tags. Not only that, it also injects page-specific SEO such as a page title and description. Refer to the documentation on `<Layout />` to see what props you can pass to it.

Make sure to always include a layout component on every page!

---

### Creating components

Place new components inside the `/src/components` directory.

We **highly recommend** for you to follow a directory-based approach when creating new components. That is, create a new directory inside of `/src/components` such as `/src/components/HelloWorld`, then place your component logic inside. The structure should look like this:

```
components
└── HelloWorld
    ├── HelloWorld.astro
    └── index.ts
```

You'll notice we also threw in a `index.ts` file. This is where you should export the component as a **named export**:

```ts
// index.ts

export { default as HelloWorld } from "./HelloWorld.astro"
```

Doing a directory-based approach and named export is good for two reasons:

1. It compartamentalizes **all** component logic into discrete folders (including styles or extra scripts)
2. It prevents you from accidently renaming a component later on in the project (named exports help with naming consistency).

When you want to use `<HelloWorld />`, you can import it using our handy-dandy import aliases:

```ts
import { HelloWorld } from "@component/HelloWorld"
```

Again, we'll talk about import aliasing in more detail in a bit!

---

### Working with images and SVGs

We mentioned it briefly before but there exists a `/src/assets` directory where you're supposed to throw in your images and SVGs. This directoy actually has two subdirectories that look like this:

```
assets
  img
  svg
    icons
```

It's straightforward but just to make it clear:

- Add all your .png, .jpeg, .avif, .webp, etc. into the `img` directory
- Add all your SVGs into the `svg` directory or `svg/icons` directory depending on if it's an icon or regular graphic.

You can then reference your static assets using an import alias like so:

```
import MyAwesomeImage from "@img/my-awesome-image.png"
import SVGBackground from "@svg/svg-background.svg"
import SomeIcon from "@icon/some-icon.svg
```

Again we will talk about import aliases in more detail soon!

---

### Configuring the default SEO

astro-pwa-starter ships with an SEO configuration file to setup defaults for your website!

You'll find it inside the `/utils` folder (note, we put it there because it's a configuration file!). It's called `seoConfig.ts` and it exports two very important objects:

- seoConfig
- manifest

`seoConfig` is used in the `<Layout />` component to set **default SEO** values. These include values like a site-wide description, site-wide thumbnail, etc. If you pass props to `<Layout />` then those will **overwrite** the default SEO values.

`manifest` is used to generate your website manifest file, which is important for PWA-compliance.

There are helpful comments within `seoConfig.ts` that will guide you when configuring and customizing the file.

Make sure you fully customize every recommended field to take full advantage of astro-pwa-starter's built-in SEO optimization!

**Don't forget to also** customize the color themes present in `<Layout />` and `browserconfig.xml`!

If you want to learn more about `seoConfig.ts`, checkout the documentation after finishing this guide.

---

### Customizing SEO for a page

We briefly mentioned it before but the global `<Layout />` component also handles your page's SEO. You can pass it different, SEO-based props like `title`, `description`, or `image` to set the page's title, description, and OpenGraph Thumbnail:

```html
---
import { Layout } from "@globals"
---

<Layout title="Home Page" description="Welcome to my website's homepage!">
	// ...
</Layout>
```

If you're working with an error page like `404.astro`, then you can pass a `disableIndexing` prop to completely remove the page from crawlers:

```html
---
import { Layout } from "@globals"
---

<Layout title="Not Found" disableIndexing="{true}"></Layout>
```

---

### Using a custom favicon

We recommend using a service like [Favycon](https://favycon.vercel.app/) to generate your website's favicons (this is what we used). Make sure you have a 512x512 maskable icon before generating your favicons!

After generation, you can directly paste your favicons straight into `/public/favicons`. Make sure to overwrite/replace all favicons in the directory. Afterwards, you'll be up and running with your own custom favicon.

syncore-astro-starter is already pre-configured to pull favicons from `/public/favicons`, so as long as you used Favycon/have the exact same favicons we had originally then the starter will be able to automatically pull and inject your favicons in the final build.

---

### Import aliases

Finally, import aliases.

One the best features of astro-pwa-starter is its extensive list of import aliases.

For those unfamiliar with import aliases, they make working with components and external assets much easier. Instead of having to directly reference an asset like such:

```ts
import { MyComponent } from "../../components/MyComponent"
import SomeImage from "../../assets/img/some-image.png"
```

You instead can do something more streamlined:

```ts
import { MyComponent } from "@component/MyComponent"
import SomeImage from "@img/some-image.png"
```

The best part about this is that **you can use an import alias at any level in your website** and still be able to access the asset you're trying to reach. No more `../../../../` hell.

For quick reference, here's a list of all import aliases available to you:

| Alias          | Purpose                             | Example                                                 |
| -------------- | ----------------------------------- | ------------------------------------------------------- |
| `@globals`     | Fetch global components             | `import { Layout } from "@globals`                      |
| `@component/*` | Fetch regular components            | `import { PriceTable } from "@component/PriceTable`     |
| `@util/*`      | Import utilities                    | `import { seoConfig, manifest } from "@util/seoConfig"` |
| `@img/*`       | Imports images                      | `import MyImage from "@img/my-image.png"`               |
| `@svg/*`       | Imports SVGs                        | `import MySVG from "@svg/my-svg.svg`                    |
| `@icon/*`      | Imports SVG icons from `/svg/icons` | `import MyIcon from "@icon/my-icon.svg`                 |
| `@style/*`     | Fetches stylesheets                 | `import "@style/tailwind.css"`                          |

## 📖 Documentation

This documentation looks at astro-pwa-starter from a top-down perspective, providing insight into every directory and file available in the base starter.

### File structure

The base project structure looks like this:

```
.vscode
public
├── favicons
├── browserconfig.xml
├── humans.txt
└── robots.txt
src
├── assets
│   ├── img
│   └── svg
│       └── icons
├── components
│   └── global
│       ├── Footer
│       │   ├── Footer.astro
│       │   └── index.ts
│       ├── Header
│       │   ├── Header.astro
│       │   └── index.ts
│       └── Layout
│           ├── index.ts
│           └── Layout.astro
├── pages
│   └── index.astro
├── styles
│   └── tailwind.css
└── env.d.ts
utils
└── seoConfig.ts
.editorconfig
.env
.eslintrc.js
.gitignore
.npmrc
.prettierignore
.prettierrc.js
astro.config.ts
package.json
README.md
tailwind.config.js
tsconfig.json
```

---

### `/.vscode`

This directory contains VSCode-related configurations and recommended extensions.

---

### `/public`

This directory contains all public website assets. Astro will not parse any of these files and will serve them as is.

#### `/favicons`

Website favicons.

#### `browserconfig.xml`

Defines how OSs should use and theme the website's favicon.

You should only modify the `<TileColor />` tag to match with the website's primary color.

#### `humans.txt`

Defines people/organizations who worked on the website. Refer to [humans.txt](https://www.google.com/search?q=humans.txt&oq=human&aqs=chrome.0.69i59j69i57l2j0i271l3j69i60l2.739j0j4&sourceid=chrome&ie=UTF-8) for more information.

#### `robots.txt`

Defines how browser crawlers should index the website.

You do not need to modify this file.

---

### `/src`

Contains all pages and components the website utilizes. This is where most of the coding-action takes place.

Every file within src will be transformed according to Astro and Vite's build tools.

#### `/assets`

Assets contains all images, svgs, and icons used in the website. It is placed inside the `src` folder so that Vite transformations can be made to assets.

#### `/img`

Contains all images for use on the website. You should not place .svg files in this directory.

Images are accessible to the website via the `@img/*` import alias. You can import images like this:

```html
---
import BackgroundImage from "@img/background-image.png"
---

<img src="{BackgroundImage}" alt="A sunny blue sky" />
```

#### `/svg`

Contains all SVGs the website uses. You should not place .jpg | .png | .webp or other image-based files into this directory.

SVGs can be imported using the `@svg/*` import alias. You can import SVGs like this:

```html
---
import WavyPatterns from "@svg/wavy-patterns.svg"
---

<img src="{WavyPatterns}" alt="" />
```

##### `/icons`

Contains all icons that the website will use. Only .svg files should go in here.

You can import icons using the @svg/icons/\* import alias.

#### `/components/`

Defines site-wide components. Every component should be placed inside a directory that has the same name as the exported component.

Components can be imported using the `@component/*` import alias. For example:

```html
---
import {CustomComponent} from "@component/CustomComponent"
---

<CustomComponent />
```

##### `/global`

Contains components that are considered to be global across the website.

You most likely will not need to add components here.

###### `Footer.astro`

Defines the footer for the website. This component does not take any props.

###### `Header.astro`

Defines the header for the website. This component does not take any props.

###### `Layout.astro`

Defines the global layout for the website. This component will wrap every single page in the website and append the `<Header/>` and `<Footer/>` components where necessary. It will also manage SEO for the website.

Refer to the following as an example of how to set SEO:

```html
---
import {Layout} from "@utils"
---

<Layout title="Page title" description="This is the page description">
	// ...
</Layout>
```

**Props**

| Name            | Type                       | Required? | Description                                                               |     |
| --------------- | -------------------------- | --------- | ------------------------------------------------------------------------- | --- |
| title           | String                     | Yes       | Title of the page.                                                        |     |
| ogTitle         | String                     | No        | OpenGraph title for the page (can be longer than title)                   |     |
| description     | String                     | No        | Description of the page. If not set then the default description is used. |     |
| image           | {url: string, alt: string} | No        | Image thumbnail for the page. If not set then the default image is used.  |     |
| disableIndexing | Boolean                    | No        | Whether or not to disable indexing.                                       |     |

#### `/pages`

Contains all pages for the website.

Astro uses file-based routing, meaning that all .astro files inside of the pages directory will directly convert into paths on the final website.

For example, /pages/test.astro will be accessible on the final website at /test.

All pages should use the Layout component. You should also define SEO for each page through the Layout component. Refer back to the `<Layout />` component to see how to add SEO.

#### `/styles`

Contains `.css` files.

##### `tailwind.css`

Defines the default configuration for TailwindCSS as well as any custom CSS needed for the website.

#### `env.d.ts`

Defines custom typings for the environment. This is used in conjunction with `.env` to add type support for any environment variables.

Refer to [Astro's docs on typed environment variables](https://docs.astro.build/en/guides/typescript/) for more information.

---

### `/utils`

Defines external utilities for the website. These can be third-party scripts that require additional setup and configuration, packages such as `graphql-request` or `firebase`, or configuration files written in TypeScript.

All utilities can be imported into the website using the `@util/*` import alias, example:

```html
---
// ...
import { seoConfig } from "@util/seoConfig"
---

// seoConfig is now a useable object
```

#### `seoConfig.ts`

Defines the default SEO configuration for the website. This exports a large object with props that come from [astro-seo](https://www.npmjs.com/package/astro-seo). It also defines the manifest configuration for the site's PWA integration

The default configuration is:

```ts
// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://example.com", // Change this to your production URL.
	description:
		"Astro PWA Starter is an opionated Astro starter for building robust static websites.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your website's thumbnail.
		alt: "OpenGraph thumbnail description.", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Astro PWA Starter", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Astro PWA Starter",
	short_name: "Astro PWA Starter",
	description:
		"Astro PWA Starter is an opionated Astro starter for building robust static websites.",
	theme_color: "#30E130",
	background_color: "#ffffff",
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
```

---

### `.editorconfig`

Defines configurations for code indentation and end-of-line styling.

This file should not be modified so as to keep a consistent code environment across IDEs.

You don't need to modify this file.

---

### `.env`

Contains environment variables.

Vite will inject these variables into the website at runtime.

Any public-facing environment variable should be prefixed with `PUBLIC_`.

---

### `.eslintrc.js`

Defines linting rules for Astro, Svelte, and TypeScript files.

You don't need to modify this file (unless you want to extend the ESLint configuration).

---

### `.gitignore`

Ignores files and directors from git version control.

You don't need to modify this file (unless you need to ignore additional files).

---

### `.npmrc`

Specific configuration to allow pnpm to resolve Astro dependencies.

This file should not be modified.

---

### `.prettierignore`

Ignores files from Prettier linting.

This file should not be modified.

---

### `.prettierrc.js`

Defines a Prettier configuration for formatting Astro, Svelte, and TypeScript files.

This file should not be modified (unless you want to extend any Prettier rules).

---

### `astro.config.ts`

Defines the configuration used by Astro. Follow documentation for the config file [over at Astro's documentation website](https://docs.astro.build/en/reference/configuration-reference/)

---

### `package.json`

Defines all Node packages.

---

### `README.md`

README file for the starter.

---

### `tailwind.config.ts`

Configuration file for TailwindCSS.

---

### `tsconfig.json`

Defines configurations for TypeScript.

This file should not be modified.
