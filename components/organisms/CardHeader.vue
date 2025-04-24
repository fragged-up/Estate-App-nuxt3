<script setup lang="ts">
  defineProps<{
    title: string;
    description: string;
  }>();
</script>

<template>
  <div class="w-full">
    <div class="flex">
      <img :src="$loadImage('/icons/stars.svg')" alt="stars-icon" class="w-[46px] h-[20]px" >
    </div>
    <div class="flex flex-col mx-2 mt-2 gap-2">
      <h1 class="text-wrap font-sans text-3xl font-semibold text-white">
        {{ title }}
      </h1>
      <p class="font-urbanist text-wrap py-4 text-sm font-medium leading-5 text-[#999999]">
        {{ description }}
      </p>
  </div>
</div>
</template>
