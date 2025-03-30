<script setup lang="ts">
defineProps<{
  title: string
  description: string
  buttonText: string
}>()
</script>

<template>
  <div class="w-full bg-[#121212] border border-[#2A2A2A] max-w-[35.0625rem] laptop:max-w-full rounded-xl bg-hero-about-abst bg-fixed overflow-hidden p-6 flex flex-col laptop:flex-row laptop:justify-between laptop:items-center gap-4 laptop:gap-0">
    <div class="inline-flex flex-col gap-2">
      <h3 class="text-white py-10 font-sans font-bold text-xl">{{ title }}</h3>
      <p class="text-[#999999] font-sans font-medium text-sm laptop:max-w-[70%]">{{ description }}</p>
    </div>
    <button class="bg-[#1A1A1A] hover:bg-[#525050] inline-flex items-center justify-center text-white px-6 py-6 rounded-lg font-sans text-sm font-medium transition text-center text-nowrap">
      {{ buttonText }}
    </button>
  </div>
</template>
