<script setup>
const props = defineProps({
  image: String,
  head: String,
  para: String
});
</script>




<template>
  <div class="w11/12 mx-auto border-b border-[#262626]">

    <div class="inline-block-children">
      <img :src="props.image" class="w-[52px] h-[52px]" alt="image">
      <h3 class="font-sans font-semibold text-white text-lg ml-4">{{ props.head }}</h3>
    </div>

    <div class="py-6">
      <p class="font-sans font-medium text-[#999999] text-sm">{{ props.para }}</p>
    </div>

  </div>
</template>
