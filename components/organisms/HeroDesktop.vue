<script setup lang="ts">
import CircleCTA from '~/components/molecules/CircleCTA.vue'
import { HERO_HIGHLIGHTS } from '~/constants/index';
</script>

<template>
  <div class="grid grid-cols-2 justify-center items-strech py-8">
    <!-- Left-Section -->
    <div class="left m-auto px-8">
      <div class="discover mx-auto space-y-10">
        <h1 class="font-sans text-5xl font-semibold text-white">
          Discover Your Dream
          <br>
          Property With Estatein
        </h1>
        <p class="font-sans text-base font-medium text-gl">
          Your journey to finding the perfect property begins here. Explore our listings to find the
          <br>
          home that matches your dreams.
        </p>
      </div>
      <CardThreeDesk />
    </div>

    <!-- Right-Section -->
    <div class="px-8">
      <div class="relative bg-desktop-hero bg-no-repeat h-full">
        <CircleCTA />
      </div>
    </div>
  </div>


</template>
