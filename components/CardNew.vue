<script setup lang="ts">
  defineProps<{
    title: string;
    locationText: string;
    description: string;
    imageKey: string;
    price: string;
  }>();
</script>

<template>
  <div class="bg-[#121212] border border-[#2A2A2A] rounded-2xl p-6 flex flex-col gap-4 lg:max-w-[25.8125rem]">
    <img :src="$loadImage(imageKey)" :alt="title" class="rounded-xl w-full h-56 object-cover" >
    <span class="bg-[#1D1D1D] text-white font-sans font-medium text-sm px-4 py-1 rounded-full w-max">
      {{ locationText }}
    </span>

    <h3 class="font-sans font-semibold text-xl text-white">{{ title }}</h3>

    <p class="text-[#999999] text-base font-sans font-medium leading-relaxed">
      {{ description }}
      <a href="#" class="text-white underline hover:text-purple-400">Read More</a>
    </p>
    <div class="flex justify-between items-center">
      <div class="text-white text-sm mt-auto flex-shrink-1">
        <span class="text-[#999999] block">Price</span>
        <span class="font-sans font-semibold text-xl text-white">${{ price }}</span>
      </div>
  
      <button class="flex-grow-1 bg-[#703BF7] hover:bg-purple-500 font-sans font-medium text-white text-sm px-6 py-3 rounded-xl cursor-pointer transition">
        View Property Details
      </button>
    </div>
  </div>
</template>

<style scoped></style>

<!-- Current Mission : 

# Create A PropertyCard, 
With two Templates 
First : Is this Exactly Template Called Feature Property Template 
Second : Is Home Template That Already is Finished



-->
