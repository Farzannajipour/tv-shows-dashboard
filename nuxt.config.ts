// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'TV Shows Dashboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'A dashboard for browsing TV shows by genre',
        },
      ],
    },
  },
  typescript: {
    strict: true,
  },
  image: {
    quality: 80,
    format: ['webp'],
  },
});
