import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
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
  ssr: false,
  devtools: {
    enabled: true,
    vscode: {
      enabled: false,
    },
    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxt/devtools', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
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
    ],
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
