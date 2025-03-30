<script lang="ts" setup>
  const isShown = ref(false);
</script>
<template>
  <div v-show="isShown.value" class="flex items-center justify-around bg-hero-about-abst py-6">
    <p class="font-sans text-sm font-medium text-white">✨Discover Your Dream Property with Estatein</p>
    <small class="text-white underline">Learn More</small>
    <small
      class="bg-[rgba(102,102,102,0.6)] rounded-full p-[10px] text-white"
      @click="() => (isShown.value = !isShown.value)"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 13L13 1M1 1L13 13"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </small>
  </div>
</template>

