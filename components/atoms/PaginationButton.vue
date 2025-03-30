<script setup lang="ts">
import { usePaginationStore } from '~/stores/pagination'

const props = defineProps<{
  direction: 'left' | 'right'
}>()

const pagination = usePaginationStore()

const isDisabled = computed(() => {
  return props.direction === 'left'
    ? pagination.currentPage === 1
    : pagination.currentPage === pagination.totalPages
})

const handleClick = () => {
  if (props.direction === 'left') pagination.prev()
  else pagination.next()
}
</script>

<template>
  <button
    :disabled="isDisabled"
    class="w-10 h-10 rounded-full border border-[#3A3A3A] flex items-center justify-center
           hover:bg-[#1A1A1A] transition-all duration-200 ease-in-out
           hover:scale-105 disabled:opacity-30 disabled:hover:scale-100"
    @click="handleClick"
  >
    <Icon
      :name="props.direction === 'left' ? 'tabler:chevron-left' : 'tabler:chevron-right'"
      class="w-5 h-5 text-white/80"
    />
  </button>
</template>
