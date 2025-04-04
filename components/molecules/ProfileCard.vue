<script setup lang="ts">
  defineProps<{
    imageUrl: string;
    name: string;
    title: string;
    twitterUrl: string;
    sayHelloText: string;
  }>();

</script>

<template>
  <div class="flex max-w-[20rem] flex-col items-center rounded-2xl border-2 border-[#262626] bg-[#141414] p-6 text-center shadow-[0_10px_15px_rgba(0,0,0,0.1)]">
    <img :src="$loadImage(imageUrl)" alt="Profile Picture" class="h-[268px] w-[318px]" >
    <a :href="twitterUrl" target="_blank" class="mt-[-25px] h-[40px] w-[60px] text-center">
      <img :src="$loadImage('/icons/ProfileTwitter.svg')" alt="Twitter Icon" >
    </a>
    <h3 class="py-3 text-2xl font-semibold text-white">{{ name }}</h3>
    <p class="text-sm text-gray-400">{{ title }}</p>

    <div class="mt-4 flex w-full max-w-md items-center justify-between rounded-full bg-[#262626] px-6 py-2">
      <span class="text-sm text-white">{{ sayHelloText }}</span>
      <button class="flex h-10 w-10 items-center justify-center rounded-full bg-[#703bf7] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
        <img :src="$loadImage('/icons/ProfileSend.svg')" alt="Say Hello Icon" >
      </button>
    </div>
  </div>
</template>

