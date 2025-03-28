<script lang="ts" setup>
  defineProps<{
    centerIcon: string
    title: string
  }>()
</script>

<template>
  <div
    class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#141414] p-4 text-center laptop:flex-grow-0 laptop:bg-mg">
    <div class="flex flex-col items-center justify-center">
      <img
        :src="$loadImage('/icons/arrowRtop.svg')"
        class="mr-4 self-end"
        alt="Arrow Icon" >
      <img :src="$loadImage(centerIcon)" class="self-center" alt="Home Icon" >
    </div>
    <p class="font-sans text-base font-semibold text-white">
      {{ title.split('\n')[0] }}
      <br >
      {{ title.split('\n')[1] || '' }}
    </p>
  </div>
</template>

<style lang="css" scoped>
  /* Add custom styles here if needed */
</style>
