<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const props = defineProps<{
  items: any[]
}>()

const currentPage = ref(1)

const itemsPerPage = computed(() => {
  if (width.value >= 1440) return 3
  if (width.value >= 1024) return 3
  if (width.value >= 640) return 2
  return 1
})

const totalPages = computed(() => {
  return Math.ceil(props.items.length / itemsPerPage.value)
})

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return props.items.slice(start, start + itemsPerPage.value)
})

const goLeft = () => {
  if (currentPage.value > 1) currentPage.value--
}

const goRight = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
</script>

<template>
  <div class="space-y-8 w-full touch-manipulation">
    <div class="w-full max-w-full mx-auto px-4">
      <div :class="['gap-[20px]', width >= 1024 ? 'grid grid-cols-3' :  width >= 640 ? 'grid grid-cols-2' :  'grid grid-cols-1'  ]">
        <slot :items="paginatedItems" />
      </div>
    </div>

    <div class="w-full max-w-full] mx-auto px-4">
      <div
        class="flex items-center justify-between border-t border-[#2A2A2A] pt-6"
        :class="width < 1024 ? 'justify-center gap-8' : 'justify-between'">
        <PaginationButton direction="left" @click="goLeft" />
        <PaginationInfo :current-page="currentPage" :total-pages="totalPages" />
        <PaginationButton :disabled="currentPage>=totalPages" direction="right" @click="goRight"  />
      </div>
    </div>
  </div>
</template>

