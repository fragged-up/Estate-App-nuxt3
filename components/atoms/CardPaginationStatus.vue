<script setup lang="ts">

  defineProps<{
    current: number;
    total: number;
    variant?: string;
  }>();
</script>

<template>
  <div :class="variant">
    <span class="text-white text-xs md:text-base font-sans">{{ current }}</span>
    <span class="text-[#808080] text-xs md:text-base font-sans">of</span>
    <span class="text-[#808080] text-xs md:text-base font-sans">{{ total }}</span>
  </div>
</template>
