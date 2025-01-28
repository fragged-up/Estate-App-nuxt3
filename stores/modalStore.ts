import { defineStore } from 'pinia'

export const usePageStore = defineStore('pageStore', () => {
  const currentPage = ref<number>(0)
  const totalPages = ref<number>(5)

  const isLeftDisabled = computed(() => currentPage.value === 0)
  const isRightDisabled = computed(() => currentPage.value === totalPages.value)

  const isLeftActive = ref<boolean>(false)
  const isRightActive = ref<boolean>(false)

  const updatePage = (direction: 'left' | 'right') => {
    if (direction === 'left' && !isLeftDisabled.value) {
      currentPage.value--
      isLeftActive.value = true
      isRightActive.value = false
    } else if (direction === 'right' && !isRightDisabled.value) {
      currentPage.value++
      isRightActive.value = true
      isLeftActive.value = false
    }
  }

  return {
    currentPage,
    totalPages,
    isLeftDisabled,
    isRightDisabled,
    isLeftActive,
    isRightActive,
    updatePage,
  }
})
