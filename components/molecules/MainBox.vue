<script setup>
const props = defineProps({
  headline: String,
  paraline: String,
  wrapStyle: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <div>
    <div :class="props.wrapStyle">
      <div class="stars-cont my-4">
        <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars" />
      </div>
      <div class="flex flex-col">
        <h1 class="font-sans text-3xl font-semibold text-white text-wrap">
          {{ props.headline }}
        </h1>

        <p class="font-urbanist py-4 text-sm font-medium leading-5 text-[#999999] text-wrap">
          {{ props.paraline }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>