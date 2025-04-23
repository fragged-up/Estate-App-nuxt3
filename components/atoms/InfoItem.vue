<script setup lang="ts">
  defineProps<{
    text: string
    icon?: string
    wrapperStyle?:string
  }>()
</script>

<template>
  <div
    class="inline-flex gap-3 rounded-3xl border-2 border-[#262626] bg-[#1A1A1A] p-4 py-3 items-center text-center" :class="wrapperStyle">
    <img :src="$loadImage(icon)" class="w-5 h-5" alt="podImg">
    <p class="text-center font-sans text-xs font-medium text-white text-nowrap md:text-sm">  {{ text }} </p>
  </div>
</template>

