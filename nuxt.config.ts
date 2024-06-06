import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],

  vite: {
    // Ensure Vite HMR is enabled
    server: {
      hmr: {
        overlay:false,
        host:'localhost',
        port:3000,
      }
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },
  css: ['public/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});