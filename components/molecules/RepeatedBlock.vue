<script setup lang="ts">
  defineProps<{
    image: string
    head: string
    para: string
  }>()
</script>

<template>
  <div>
    <div class="repeated-father">
      <img
       :src="$loadImage(image)"
        class="inline-block h-[52px] w-[52px]"
        alt="image" >
      <h3 class="ml-4 inline-block font-sans text-lg font-semibold text-white">
        {{ head }}
      </h3>
    </div>
    <div class="py-6">
      <p class="font-sans text-sm font-medium text-[#999999]">
        {{ para }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
