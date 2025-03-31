export const usePropertyId = () => {
    const route = useRoute()
  
    const id = computed(() => {
      const raw = route.params.id?.toString() || ''
      return raw.split('-').pop() || ''
    })
  
    if (!id.value) {
      throw createError({ statusCode: 400, message: 'Missing property ID' })
    }
  
    return { id }
  }
  