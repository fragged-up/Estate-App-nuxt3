<script setup lang="ts">
defineProps<{
    label?: string
    inTxt: string
    svgImage: string
  }>()



</script>

<template>
  <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
    <p v-if="label" class="font-sans text-base font-medium text-white">
      {{ label }}
    </p>
    <div
      class="flex w-full cursor-pointer gap-4 rounded-2xl border border-hg bg-fgl p-4 focus:outline-none">
      <p class="font-sans text-sm font-medium text-white">{{ inTxt }}</p>
      <div v-html="svgImage" />
    </div>
  </div>
</template>
