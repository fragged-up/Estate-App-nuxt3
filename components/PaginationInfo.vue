<script setup lang="ts">
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()
</script>

<template>
  <span class="text-sm font-medium text-white/80">
    {{ props.currentPage.toString().padStart(2, '0') }}
    <span class="text-white/40">of</span>
    {{ props.totalPages }}
  </span>
</template>
