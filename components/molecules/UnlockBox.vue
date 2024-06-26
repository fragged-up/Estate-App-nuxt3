<script setup>
// import Button from '../atoms/Button.vue';
const props = defineProps({
  HTxt: String,
  PTxt: String,
  BTx: String,
  learnMoreButt:{
    type:String,
    required:false
  }
  
})
</script>

<template>
  <div :class="'max-w-[413px] box back bg-hero-about-abst bg-fixed rounded-xl p-4'">

    <div class="flex flex-col justify-center items-center gap-4">
      <h4 class="py-2 font-san text-white text-lg font-bold">{{ props.HTxt }}</h4>
      <Button :class="`${props.learnMoreButt} w-full bg-[#141414] border-2 border-[#262626] text-white text-center rounded-xl py-4`" :buttonTxt="BTx" />
      <p class="font-san text-gl text-sm font-medium"> {{ props.PTxt }}</p>
    </div>

  </div>
</template>

<style scoped>
.back {
  background-color: #262626;
}



</style>