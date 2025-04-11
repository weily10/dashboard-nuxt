// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  spaLoadingTemplate: false,
  css:['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      watch: {
        usePolling: true, // Enables file watching
        interval: 100
      }
    }
  },

  modules: ['@pinia/nuxt']
})