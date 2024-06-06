<script setup>
const props = defineProps({
  podTxt:String,
  podImg:{
    type:String,
    required:false
  }
})
</script>

<template>
  <div class="bg-[#1A1A1A] border-2 border-[#262626] rounded-3xl text-center py-3 inline-flex gap-3 p-4">
    <img :src="props.podImg"  alt="podImg">
    <p class="text-sm font-sans font-medium text-white text-center">{{ props.podTxt }}</p>
    
  </div>
</template>

<style scoped>

</style>