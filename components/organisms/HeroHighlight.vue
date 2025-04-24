<script setup lang="ts">
import type { HeroProps} from "~/types"
const props =defineProps<{ card:HeroProps }>()
</script>

<template>
  <div class="flex flex-col gap-1 touch-manipulation sm:gap-3 rounded-lg border-2 border-[#262626] bg-[#141414] p-2 sm:p-4 text-center laptop:flex-grow-0 laptop:bg-mg">
    <div class="flex items-end justify-end">
      <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end w-[15px] h-[15px] sm:w-[18px] sm:h-[18px]" alt="Arrow-Icon" >
    </div>

    <div class="flex justify-center items-center">
      <NuxtLink :to="`${props.card.link}`" class="cursor-pointer">
        <img :src="$loadImage(props.card.icon)" class="self-center w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] cursor-pointer" alt="Home-Icon" >
      </NuxtLink>
    </div>
    <div class="flex justify-center items-center mt-2">
      <p class="font-sans text-xs sm:text-sm md:text-base font-semibold text-white text-center">
        {{ props.card.title }}
      </p>
    </div>
  </div>
</template>

ƒ
