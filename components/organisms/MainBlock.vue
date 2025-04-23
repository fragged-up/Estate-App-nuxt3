<script setup lang="ts">
  import type { MainBlockProps } from '~/constants/types';
  const { deskHeader = false, override = false } = defineProps<MainBlockProps>();
</script>

<template>
  <div class="p4 my-6 w-full">
    <div :class="`${contStyle} top-cont mx-auto w-11/12`">
      <div class="stars-cont">
        <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars" >
      </div>
      <div :class="`${subContStyle} mx-auto my-4 w-11/12 py-4`">
        <h1 :class="`${headerStyle} font-sans text-3xl font-semibold text-white`">
          {{ headerText }}
        </h1>
        <div v-if="!deskHeader" class="deskBlockCnt grid-auto-cols justify-between">
          <p :class="`${paraStyle} font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]`">
            {{ paraText }}
          </p>
        </div>
        <p v-if="deskHeader && override" :class="`${paraStyle} font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]`">
          {{ paraText }}
        </p>

        <slot v-if="$slots.top" name="top" />

      </div>
    </div>

    <div class="p4 w-full">
      <slot />
    </div>

  </div>
</template>

