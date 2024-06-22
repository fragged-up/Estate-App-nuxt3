import { defineNuxtConfig } from 'nuxt/config'



export default defineNuxtConfig({
  devtools: {
    enabled: true,
    vscode: {
      enabled: false, // Disable VS Code server integration
    },
  },
  modules: ['@nuxt/devtools',"@pinia/nuxt", "@nuxtjs/tailwindcss"],
  
  runtimeConfig:{
  public: {
    baseURL: process.env.BASE_URL
  }
  },
  plugins: ["~/plugins/imageLoader.ts"],
  components: {
    dirs: [
      {
        path: '~/components',
        extensions: ['vue'],
        pathPrefix: false,
        pattern: '**/*.vue' // Ensure all subdirectories are included
      },
      { path: "~/components/atoms", extensions: ['vue'], pathPrefix: false },
      { path: "~/components/molecules", extensions: ['vue'], pathPrefix: false },
      { path: "~/components/organisms", extensions: ['vue'], pathPrefix: false },
      { path: "~/components/templates", extensions: ['vue'], pathPrefix: false },
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  css: ["./assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});


// export default {
//   buildModules: [
//     '@nuxt/vite'
//   ],
//   vite: {
//     // התאמות אישיות לקונפיגורציה של Vite
//     server: {
//       hmr: {
//         protocol: 'wss',
//         host: 'localhost'
//       }
//     }
//   }
// }

//FIXING AUTO IMPORTING OF COMPONENTS SUPPORTING ALL FOLDERS 
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: ["@nuxtjs/tailwindcss"],
//   components: {
//     dirs: [
//       {
//         path: '~/components',
//         extensions: ['vue'],
//         pathPrefix: false,
//         pattern: '**/*.vue' // Ensure all subdirectories are included
//       },
//       { path: "~/components/atoms", extensions: ['vue'], pathPrefix: false },
//       { path: "~/components/molecules", extensions: ['vue'], pathPrefix: false },
//       { path: "~/components/organisms", extensions: ['vue'], pathPrefix: false },
//       { path: "~/components/templates", extensions: ['vue'], pathPrefix: false },
//     ],
//   },
//   css: [
//     '@/assets/css/main.css',
//   ],
//   postcss: {
//     plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//     },
//   },
// });
