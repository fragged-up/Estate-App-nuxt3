<script setup lang="ts">
  defineProps<{
    image?: string
    svgIcon?: string
    head: string
    containerWrapper?: string
    gappedValue?: string
    para?: string
  }>()
  
</script>

<template>
  <div class="flex flex-col gap-4" :class="containerWrapper">
    <div class="flex items-center gap-4" :class="gappedValue">
      <div v-if="image">
        <img :src="$loadImage(image)" class="h-[52px] w-[52px]" alt="image" >
      </div>
      <div v-if="svgIcon">
        <div v-html="svgIcon" />
      </div>
      <h3 class="font-sans text-lg font-semibold text-white">{{ head }}</h3>
    </div>
    <div v-if="para" class="my-3">
      <p class="font-sans text-sm font-medium text-[#999999]">{{ para }}</p>
    </div>
  </div>
</template>

<style scoped></style>

