<script setup>
const props = defineProps({
  image:String,
  head: String,
  para: String,
  containerWraper:{
    type:String,
    required:false,
    default:''
  }
})
</script>

<template>
  <div class="flex flex-col gap-4" :class="props.containerWraper">
    <div class="flex items-center gap-4">
      <img :src="$loadImage(image)" class="w-[52px] h-[52px]" alt="image">
      <h3 class="font-sans font-semibold text-white text-lg">{{props.head}}</h3>
    </div>
      <div class="my-3"><p class="font-sans font-medium text-[#999999] text-sm">{{ props.para }}</p></div>
  </div>
</template>

<style scoped>

</style>




<!-- <template>
  <div :class="props.dadContainer">

    <div class="repeated-father">
      <img :src="$loadImage(image)" class="w-[52px] h-[52px] inline-block" alt="image">
      <h3 class="font-sans font-semibold text-white text-lg ml-4 inline-block">{{ props.head }}</h3>
    </div>
    <div class="py-6">
      <p class="font-sans font-medium text-[#999999] text-sm">{{ props.para }}</p>
    </div>

  </div>
</template> -->
