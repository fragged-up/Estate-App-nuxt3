<script lang="ts" setup>
  defineProps<{ highlight?: string }>();
</script>

<template>
  <span
    class="block bg-[#1D1D1D] text-white font-sans font-medium text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 max-h-7 rounded-full w-fit max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
  >
    {{ highlight }}
  </span>
</template>
