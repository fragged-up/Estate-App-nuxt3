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
  <div class="relative w-full p-4 text-center">
    <img
      :src="$loadImage('/icons/InputLeftImage.svg')"
      class="absolute left-8 top-1/2 h-4 w-4 -translate-y-1/2 transform"
      alt="Icon 1" >
    <input
      id="email"
      type="email"
      placeholder="Enter Your Email"
      class="footer-input w-full rounded-lg border-2 border-[#262626] bg-[#141414] py-4 pl-10 pr-10 text-white placeholder:text-lg placeholder:text-gl focus:outline-none focus:ring-2 focus:ring-pr" >
    <img
      :src="$loadImage('/icons/InputRightImage.svg')"
      class="absolute right-8 top-1/2 h-6 w-6 -translate-y-1/2 transform"
      alt="Icon 2" >
  </div>
</template>

<style scoped></style>
