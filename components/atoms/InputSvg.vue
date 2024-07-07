<script setup>
  const props = defineProps({
    label: {
      type: String,
      required: false,
    },
    inTxt: String,
    svgImage: String,
  })
</script>

<template>
  <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
    <p v-if="props.label" class="font-sans text-base font-medium text-white">{{ props.label }}</p>
    <div class="flex w-full cursor-pointer gap-4 rounded-2xl border border-hg bg-fgl p-4 focus:outline-none">
      <p class="font-sans text-sm font-medium text-white">{{ props.inTxt }}</p>
      <div v-html="props.svgImage"></div>
    </div>
  </div>
</template>

<style scoped></style>
