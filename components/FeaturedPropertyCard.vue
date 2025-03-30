<script setup lang="ts">
  defineProps<{
    imageKey: string;
    locationText: string;
    title: string;
    description: string;
    price: string;
  }>();

  const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro necessitatibus reiciendis..."
</script>

<template>
  <div class="bg-[#121212] border border-[#2A2A2A] rounded-2xl p-4 md:p-6 flex flex-col gap-4 w-full max-w-full md:max-w-[26rem]">
    <img :src="$loadImage(imageKey)" :alt="title" class="rounded-xl w-full h-52 md:h-56 object-cover" >
    <span class="bg-[#1D1D1D] text-white font-sans font-medium text-sm px-3 py-1 rounded-full w-max">
      {{ locationText }}
    </span>
    <h3 class="text-white font-sans text-lg md:text-xl font-semibold">
      {{ title }}
    </h3>
    <ReadMore :preview="description" :full="lorem" />
  
    <div class="flex items-strech justify-between gap-1">
      <div class="text-white text-sm">
        <span class="text-[#999999] block">Price</span>
        <span class="text-lg laptop:text-xl text-white font-sans font-semibold ">$ {{ price }}</span>
      </div>

      <button class="bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-2 py-3 lg:px-6 rounded-xl transition">
        View Property Details
      </button>
    </div>
  </div>
</template>
