import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({

 runtimeConfig: {
  public: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
},
  css: ['~/assets/css/tailwind.css'],
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }],
    },
  },
  typescript: {
    typeCheck: true,
  },
  sourcemap: {
    server: true,
    client: true,
  },
  devtools: {
    enabled: true,
    vscode: {
      enabled: true,
    },
  },
  modules: ['@nuxt/devtools', '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/icon'],
  icon: {
    serverBundle: {
      collections: ['tabler', 'mdi'],
    },
  },
  plugins: ['~/plugins/imageLoader.ts', '~/plugins/mediaQueries.client.ts'],
  imports: {
    dirs: ['~/composables'],
  },
  components: {
    dirs: [
      { path: '~/components', pathPrefix: false },
      { path: '~/components/atoms', pathPrefix: false },
      { path: '~/components/molecules', pathPrefix: false },
      { path: '~/components/organisms', pathPrefix: false },
      { path: '~/components/templates', pathPrefix: false },
      { path: '~/components/sections', pathPrefix: false },
      { path: '~/components/properties', pathPrefix: false },
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2025-03-29',
});
