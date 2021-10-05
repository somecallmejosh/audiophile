export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "audiophile",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/filters/currency", "~/plugins/dataApi"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://image.nuxtjs.org/getting-started/installation
    "@nuxt/image",
    // https://github.com/ivodolenc/nuxt-font-loader
    "nuxt-font-loader"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    "@nuxtjs/markdownit",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  axios: {},

  fontLoader: {
    url:
      "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap",

    prefetch: true,
    preconnect: true
  },
  markdownit: {
    preset: "default",
    linkify: true,
    breaks: true
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    fallback: true
  }
};
