<script setup lang="ts">
import type { HeroProps} from "~/types"
const props =defineProps<{ card:HeroProps }>()


</script>

<template>
  <div class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#141414] p-4 text-center laptop:flex-grow-0 laptop:bg-mg">
    <div class="flex flex-col items-center justify-center">
      <img :src="$loadImage('/icons/arrowRtop.svg')" class="mr-4 self-end" alt="Arrow-Icon" >
      <img :src="$loadImage(props.card.icon)" class="self-center" alt="Home-Icon" >
    </div>
    <p class="font-sans text-base font-semibold text-white">
      {{ props.card.title }}
    </p>
  </div>
</template>

