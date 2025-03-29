<script setup lang="ts">
import { heroSquaresHome } from '~/constants'
import CircleCTA from '../molecules/CircleCTA.vue';



</script>

<template>
 <div class="pt-12">
      <div class="relative h-[18.875rem] bg-mobile-hero bg-cover bg-center rounded-xl z-10 w-full aspect-[4/3] max-w-[22.375rem] mx-auto">
          <CircleCTA  />
      </div>
 </div>

  <div class="mx-auto mt-12 w-11/12 space-y-8">
    <div class="first-template my-18 mx-auto">
      <h1 class="mb-[20px] font-sans text-3xl font-semibold text-white">
        Discover Your Dream
        <br>
        Property with Estatein
      </h1>

      <p class="mb-[20px] pt-4 text-base font-medium text-[#999999]">
        Your journey to finding the perfect property begins here. Explore our listings to find the home that matches
        your dreams.
      </p>

      <button class="mx-auto my-2 w-full rounded-2xl border-2 border-[#262626] p-5 text-center font-sans text-base font-medium text-white">
        Learn More
      </button>

      <button class="mx-auto my-2 w-full rounded-2xl bg-[#703BF7] p-5 text-center font-sans text-base font-medium text-white">
        Browse Properties
      </button>
    </div>

    <CardThree />

    <div
      class="second-template grid max-w-[100%] grid-cols-2 grid-rows-2 gap-x-2.5 gap-y-2.5 rounded-md border-2 border-[#262626] p-4 laptop:grid-flow-col laptop:grid-cols-none laptop:grid-rows-none laptop:border-[7px]"
    >
      <BoxAtom
        v-for="(square, index) in heroSquaresHome"
        :key="index"
        :center-icon="square.centerIcon"
        :title="square.title"
      />
    </div>
  </div>
</template>

