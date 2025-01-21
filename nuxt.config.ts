// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2022-01-01",

	future: {
		compatibilityVersion: 4,
	},

	devtools: { enabled: true },

	experimental: {
		sharedPrerenderData: false,
		compileTemplate: true,
		resetAsyncDataToUndefined: true,
		templateUtils: true,
		relativeWatchPaths: true,
		defaults: {
			useAsyncData: {
				deep: true,
			},
		},
	},

	// features: {
	// 	inlineStyles: true,
	// },
	unhead: {
		renderSSRHeadOptions: {
			omitLineBreaks: false,
		},
	},

	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"@nuxt/icon",
		"@nuxt/image",
	],

	image: {
		domains: ["https://cdn.dummyjson.com"],
	},
  
	googleFonts: {
		families: {
			Montserrat: true,
		},
	},
});
