
<script setup lang="ts">
  const props = defineProps<{
    iconSrc: string;
    placeholder: string;
  }>();

  const model = defineModel<string>();
</script>

<template>
  <div class="cursor-pointer shadow-frame relative w-full rounded-3xl">
    <input
      v-model="model"
      type="search"
      :placeholder="placeholder"
      class="w-full rounded-2xl border border-[#262626] bg-[#141414] p-6 text-white focus:outline-none"
    >

    <div
      class="pointer-events-none absolute right-3 top-1/2 mb-4 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-3xl bg-pr shadow-md laptop:hidden"
    >
      <img :src="$loadImage(iconSrc)" alt="Icon" class="text-center cursor-pointer" >
    </div>

    <div
      class="cursor-pointer absolute right-3 top-1/2 mb-4 hidden h-14 w-44 -translate-y-1/2 transform items-center justify-center gap-4 rounded-md bg-pr shadow-md laptop:flex"
    >
      <img :src="$loadImage(iconSrc)" alt="Icon" class="text-center cursor-pointer" >
      <p class="font-sans text-sm font-medium text-white cursor-pointer">Find Property</p>
    </div>
  </div>
</template>

<style scoped>
  input[type='search']::placeholder {
    color: #666666;
  }

  .shadow-frame {
    box-shadow: 1px -1px 15px 1px #262626;
  }
</style>
