<script setup>
  // import Button from '../atoms/Button.vue';
  const props = defineProps({
    HTxt: String,
    PTxt: String,
    BTx: String,
    learnMoreButt: {
      type: String,
      required: false,
    },
  })
</script>

<template>
  <div :class="'box back max-w-[413px] rounded-xl bg-hero-about-abst bg-fixed p-4'">
    <div class="flex flex-col items-center justify-center gap-4">
      <h4 class="font-san py-2 text-lg font-bold text-white">{{ props.HTxt }}</h4>
      <Button :class="`${props.learnMoreButt} w-full rounded-xl border-2 border-[#262626] bg-[#141414] py-4 text-center text-white`" :buttonTxt="BTx" />
      <p class="font-san text-sm font-medium text-gl">{{ props.PTxt }}</p>
    </div>
  </div>
</template>

<style scoped>
  .back {
    background-color: #262626;
  }
</style>
