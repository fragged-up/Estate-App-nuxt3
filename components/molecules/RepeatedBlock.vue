<script setup>
const props = defineProps({
  image: String,
  head: String,
  para: String
});

</script>




<template>
  <div :class="'repeated-cont'">

    <div class="repeated-father">
      <img :src="$loadImage(image)" class="w-[52px] h-[52px] inline-block" alt="image">
      <h3 class="font-sans font-semibold text-white text-lg ml-4 inline-block">{{ props.head }}</h3>
    </div>
    <div class="py-6">
      <p class="font-sans font-medium text-[#999999] text-sm">{{ props.para }}</p>
    </div>

  </div>
</template>


<style>

</style>