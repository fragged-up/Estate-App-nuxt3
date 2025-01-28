<script setup lang="ts">
  defineProps<{
    hTxt: string
    pTxt: string
    bTx: string
    learnMoreButt?: string
  }>()
</script>

<template>
  <div
    :class="'box back max-w-[413px] rounded-xl bg-hero-about-abst bg-fixed p-4'"
  >
    <div class="flex flex-col items-center justify-center gap-4">
      <h4 class="font-san py-2 text-lg font-bold text-white">{{ hTxt }}</h4>
      <Button
        :class="`${learnMoreButt} w-full rounded-xl border-2 border-[#262626] bg-[#141414] py-4 text-center text-white`"
        :btn-txt="bTx"
      />
      <p class="font-san text-sm font-medium text-gl">{{ pTxt }}</p>
    </div>
  </div>
</template>

<style scoped>
  .back {
    background-color: #262626;
  }
</style>
