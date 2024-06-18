// import { defineNuxtPlugin } from '#app'
// import { loadImage } from '~/utils/imageLoader'

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.mixin({
//     beforeCreate() {
//       this.$loadImage = loadImage
//     }
//   })
// })


// import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.provide('loadImage', (path:string) =>{
    const assetUrl = `${config.baseURL}/_nuxt/assets/${path}`;
    console.log('Asset URL:',assetUrl);
    return assetUrl;
  });
});

