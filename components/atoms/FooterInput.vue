<script setup>
// const inputProps = defineProps({
//   placeHolder:{
//     type:String,
//     required:true
//   },
//   inputFirstImage:{
//     type:String,
//     required:false
//   },
//   inputSecondImage:{
//     type:String,
//     required:false
//   }
// })
</script>


<template>
  <div class="relative w-full text-center p-4">
    <img src="/assets/icons/InputLeftImage.svg" class="absolute top-1/2 left-8 transform -translate-y-1/2 w-4 h-4"
      alt="Icon 1">
    <input type="email" placeholder="Enter Your Email" class="footer-input bg-[#141414] text-white w-full py-4 pl-10 pr-10 rounded-lg border-2 border-[#262626] focus:outline-none placeholder:text-lg placeholder:text-gl focus:ring-2 focus:ring-pr" />
    <img src="/assets/icons/InputRightImage.svg" class="absolute top-1/2 right-8 transform -translate-y-1/2 w-6 h-6"
      alt="Icon 2">
  </div>



</template>

<style scoped>


</style>