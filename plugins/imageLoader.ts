export default defineNuxtPlugin((nuxtApp: any) => {
  const baseURL = process.env.BASE_URL || ''

  const loadImage = (path: string) => {
    const assetUrl = `${baseURL}/_nuxt/assets/${path}`
    if (!assetUrl) console.log('Failed to load Asset URL:', assetUrl)

    return assetUrl
  }

  nuxtApp.vueApp.config.globalProperties.$loadImage = loadImage
  nuxtApp.provide('loadImage', loadImage)
})
