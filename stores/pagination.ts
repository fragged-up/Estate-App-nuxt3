import { defineStore } from 'pinia'

export const usePaginationStore = defineStore('pagination', () => {
  const currentPage = ref(1)
  const totalPages = ref(3)

  function setTotal(pages: number) {
    totalPages.value = pages
  }

  function goTo(page: number) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  function next() {
    if (currentPage.value < totalPages.value) currentPage.value++
  }

  function prev() {
    if (currentPage.value > 1) currentPage.value--
  }

  return {
    currentPage,
    totalPages,
    setTotal,
    goTo,
    next,
    prev,
  }
})
