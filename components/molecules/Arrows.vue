<script setup lang="ts">
  import LeftArrow from '@/components/atoms/LeftArrow.vue'
  import RightArrow from '@/components/atoms/RightArrow.vue'
  import { usePageStore } from '@/stores/modalStore'

  const pageStore = usePageStore()
</script>

<template>
  <div class="flex items-center space-x-4">
    <LeftArrow @paginate-back="pageStore.updatePage('left')" />
    <span :totalPages="pageStore.totalPages" class="text-gray-500">
      Page: {{ pageStore.currentPage }} of {{ pageStore.totalPages }}
    </span>
    <RightArrow @paginate-forward="pageStore.updatePage('right')" />
  </div>
</template>

<style scoped>
  .lastActiveClick {
    background-color: #262626;
  }
</style>
