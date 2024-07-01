export function useWindowSize() {
  const width = ref<number>(window.innerWidth)

  const isDesk = computed<boolean>(() => width.value > 1440)

  const updateWidth = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return { width, isDesk }
}
