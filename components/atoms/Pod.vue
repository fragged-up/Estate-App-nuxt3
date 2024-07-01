<script setup>
  const props = defineProps({
    podTxt: String,
    podImg: {
      type: String,
      required: false,
    },
  })
</script>

<template>
  <div class="inline-flex gap-3 rounded-3xl border-2 border-[#262626] bg-[#1A1A1A] p-4 py-3 text-center">
    <img :src="$loadImage(props.podImg)" alt="podImg" />
    <p class="text-center font-sans text-sm font-medium text-white">{{ props.podTxt }}</p>
  </div>
</template>

<style scoped></style>
