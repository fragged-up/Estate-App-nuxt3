<script setup lang="ts">
  import { formatPrice } from '~/utils';
  defineProps<{ 
    cardPrice: number | string
   }>();
  const viewProperties ='bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-2 py-3 lg:px-6 rounded-xl'

</script>

<template>
  <div class="my-4 grid grid-cols-[.4fr_1fr] gap-x-2">
    <div class="text-center">
      <p class="text-start font-sans font-semibold text-[#999999]">Price</p>
      <p class="text-start font-sans font-semibold text-white">
        {{ cardPrice ? formatPrice(cardPrice) : 'There is Error With Price' }}
      </p>
    </div>
    <button class="bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-2 py-3 lg:px-6 rounded-xl" @click="NavigateToId">View Property Details</button>
  
  </div>
</template>
