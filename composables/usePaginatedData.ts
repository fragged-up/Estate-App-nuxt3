import { computed, watch } from '#imports'
import { usePaginationStore } from '~/stores/pagination'

export function usePaginatedData<T>(data: Ref<T[] | null | undefined>, itemsPerPage = 1) {
  const pagination = usePaginationStore()

  const paginated = computed(() => {
    if (!data.value || data.value.length === 0) return []
    const start = (pagination.currentPage - 1) * itemsPerPage
    return data.value.slice(start, start + itemsPerPage)
  })

  watch(
    data,
    (val:T[]) => {
      if (val && val.length > 0) {
        pagination.setTotal(Math.ceil(val.length / itemsPerPage))
        if (pagination.currentPage > Math.ceil(val.length / itemsPerPage)) {
          pagination.setCurrent(1) // Reset if out of range
        }
      }
    },
    { immediate: true, deep: true }
  )

  return {
    paginated,
    currentPage: computed(() => pagination.currentPage),
    totalPages: computed(() => pagination.totalPages),
    original: data,
  }
}
