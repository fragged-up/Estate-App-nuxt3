import type { NuxtApp } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const loadImage = (path: string): string => {
    return `/base${path}`
  }

  nuxtApp.vueApp.config.globalProperties.$loadImage = loadImage
  nuxtApp.provide('loadImage', loadImage)
})
