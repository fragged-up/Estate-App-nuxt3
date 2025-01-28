import DOMPurify from 'dompurify'

export default defineNuxtPlugin((nuxtApp) => {
  // Sanitize function
  const sanitize = (html: string) => DOMPurify.sanitize(html)

  // Provide it to Vue and Nuxt App
  nuxtApp.vueApp.config.globalProperties.$sanitize = sanitize
  nuxtApp.provide('sanitize', sanitize)
})