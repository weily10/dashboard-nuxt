// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
      ],
    },
  },
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

  modules: ['@pinia/nuxt', 'nuxt-auth-utils']
})