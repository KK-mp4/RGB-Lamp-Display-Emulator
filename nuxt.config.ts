// https://v3.nuxtjs.org/api/configuration/nuxt.config
defineNuxtConfig({
  ssr: false
})

export default defineNuxtConfig({
  // target: 'static',
  // router: {
  //   base: '/Lamp-Display-Emulator/'
  // },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },
  publicRuntimeConfig:{
    base:process.env.NODE_ENV == "production" ? "/RGB-Lamp-Display-Emulator/": "/"
  },
  app: {
    baseURL: process.env.NODE_ENV =="production" ? "/RGB-Lamp-Display-Emulator": "/",
    buildAssetsDir: "/nuxt/",
    cdnURL:"/RGB-Lamp-Display-Emulator"
  },
  router:{
    base:process.env.NODE_ENV =="production" ? "/RGB-Lamp-Display-Emulator/": "/"
  }
})
