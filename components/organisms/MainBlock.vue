<script setup lang="ts">
import type { MainBlockProps } from '~/constants/types';

 const {deskHeader=false,override=false,}=defineProps<MainBlockProps>()
 
</script>

<template>
  <div class="p4 my-6 w-full">
    <!-- from 1440px make hook to display viewButton wrap it in container of inline-flex width 
                                    width 155px and height 49px  -->

    <div :class="`${contStyle} top-cont mx-auto w-11/12`">
      <div class="stars-cont">
        <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars" >
      </div>

      <div :class="`${subContStyle} mx-auto my-4 w-11/12 py-4`">
        <h1
          :class="`${headerStyle} font-sans text-3xl font-semibold text-white`"
        >
          {{ headerText }}
        </h1>

        <div
          v-if="!deskHeader"
          class="deskBlockCnt grid-auto-cols justify-between"
        >
          <p
            :class="`${paraStyle} font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]`"
          >
            {{ paraText }}
          </p>
          <!-- <Button
            :class="`pad-fix:text-sm bg-[#1A1A1A] border-1 border-[#262626] text-center col-span-1 py-4 px-8 text-white rounded-lg self-end`"
            :buttonTxt="'View All Properties'"
          /> -->
        </div>

        <p
          v-if="deskHeader && override"
          :class="`${paraStyle} font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]`"
        >
          {{ paraText }}
        </p>

        <slot v-if="$slots.top" name="top" />
      </div>
    </div>

    <div class="p4 w-full">
      <slot />
    </div>

    <!-- inner Card need in the styling overflow-x auto for mobile  -->
    <!-- from 1440px wrap it in container & to display additional 2 FeaturedProperties components with different props values -->

    <!-- from 1440px make hook to display none this button   -->
    <!-- <viewButton :buttonText="viewAP" /> -->
  </div>
</template>

<style></style>
