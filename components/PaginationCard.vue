<script setup lang="ts">
import { usePaginationStore } from '~/stores/pagination'

const pagination = usePaginationStore()
</script>

<template>
  <div class="mt-12 flex justify-between items-center border-t border-[#2A2A2A] pt-6">
    <span class="text-sm font-medium text-white/80">
      {{ pagination.currentPage.toString().padStart(2, '0') }}
      <span class="text-white/40">of</span>
      {{ pagination.totalPages }}
    </span>

    <div class="flex items-center gap-3">
      <PaginationButton direction="left" />
      <PaginationButton direction="right" />
    </div>
  </div>
</template>
