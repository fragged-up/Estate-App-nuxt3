<script setup lang="ts">
  defineProps<{
    serviceData: { icon: string; title: string; description: string };
  }>();
</script>

<template>
  <div class="border border-[#2A2A2A] rounded-xl p-6 flex flex-col gap-3 bg-[#121212]">
    <div class="flex items-center gap-3">
      <div class="bg-[#1A1A1A] p-3 rounded-full">
        <img :src="$loadImage(serviceData.icon)" class="inline-block h-[52px] w-[52px]" alt="icon-description" >
      </div>
      <h3 class="text-white font-semibold text-base laptop:text-lg">{{ serviceData.title }}</h3>
    </div>
    <p class="text-[#999999] text-sm leading-relaxed">
      {{ serviceData.description }}
    </p>
  </div>
</template>
