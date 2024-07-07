import { useMediaQuery } from '@vueuse/core'

export default defineNuxtPlugin((nuxtApp: any) => {
  const isMobile = useMediaQuery('(max-width: 1440px)')
  const isLaptop = useMediaQuery('(min-width: 1440px)')

  nuxtApp.vueApp.config.globalProperties.$isMobile = isMobile
  nuxtApp.vueApp.config.globalProperties.$isLaptop = isLaptop
  nuxtApp.provide('isMobile', isMobile)
  nuxtApp.provide('isLaptop', isLaptop)
})
