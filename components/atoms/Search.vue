<script setup>
const props = defineProps({
  iconSrc: String,
  placeholder: String,
})
</script>

<template>
  <div class="relative w-full rounded-3xl shadow-frame">
    <input type="search" :placeholder="placeholder" class="p-6 w-full bg-[#141414] border border-[#262626] focus:outline-none rounded-2xl" />
    <div class="search-box bg-purple-500 flex items-center justify-center rounded-3xl shadow-md mb-4 absolute right-3 top-1/2 transform -translate-y-1/2 w-12 h-12 pointer-events-none">
      <img :src="iconSrc" alt="Icon" class="text-center" />
    </div>
  </div>
</template>

<style scoped>
input[type="search"]::placeholder {
  color: #666666;
}

.shadow-frame {
  box-shadow: 1px -1px 15px 1px #262626;
}
</style>
