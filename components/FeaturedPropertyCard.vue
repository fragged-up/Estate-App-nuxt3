<script setup lang="ts">
  defineProps<{
    imageKey: string;
    locationText: string;
    title: string;
    description: string;
    price: string;
  }>();
</script>

<template>
  <div
    class="bg-[#121212] border border-[#2A2A2A] rounded-2xl p-4 md:p-6 flex flex-col gap-4 w-full max-w-full md:max-w-[26rem]"
  >
    <img :src="$loadImage(imageKey)" :alt="title" class="rounded-xl w-full h-52 md:h-56 object-cover" >
    <span class="bg-[#1D1D1D] text-white font-sans font-medium text-sm px-3 py-1 rounded-full w-max">
      {{ locationText }}
    </span>
    <h3 class="text-white font-sans text-lg md:text-xl font-semibold">
      {{ title }}
    </h3>
    <p class="text-[#999999] text-sm leading-relaxed">
      {{ description }}
      <a href="#" class="text-white font-sans text-xs laptop:text-base underline hover:text-[#703BF7]">Read More</a>
    </p>

    <div class="flex items-strech justify-between gap-3">
      <div class="text-white text-sm">
        <span class="text-[#999999] block">Price</span>
        <span class="text-lg laptop:text-xl text-white font-sans font-semibold ">$ {{ price }}</span>
      </div>

      <button class="bg-[#703BF7] cursor-pointer font-sans hover:bg-purple-500 text-white text-sm font-medium px-6 py-3 rounded-xl transition">
        View Property Details
      </button>
    </div>
  </div>
</template>
