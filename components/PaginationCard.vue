<script setup lang="ts">
import { usePaginationStore } from '~/stores/pagination'

const pagination = usePaginationStore()
</script>

<template>
  <div class="mt-10 flex justify-center items-center gap-6 text-white">
    <button
      :disabled="pagination.currentPage === 1"
      class="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#1a1a1a] transition disabled:opacity-30"
      @click="pagination.prev"
    >
      <Icon name="tabler:chevron-left" class="w-5 h-5" />
    </button>

    <span class="text-sm font-medium text-[#999]">
      {{ pagination.currentPage.toString().padStart(2, '0') }} of {{ pagination.totalPages }}
    </span>

    <button
      :disabled="pagination.currentPage === pagination.totalPages"
      class="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#1a1a1a] transition disabled:opacity-30"
      @click="pagination.next"
    >
      <Icon name="tabler:chevron-right" class="w-5 h-5" />
    </button>
  </div>
</template>
