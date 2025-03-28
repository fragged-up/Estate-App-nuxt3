<script setup lang="ts">
import CircleType from 'circletype'

const textRef = ref<HTMLElement | null>(null)

onMounted(() => {
    new CircleType(textRef.value).radius(50)
})
</script>

<template>
  <div
    ref="containerRef"
    class="relative w-full max-w-[7.3125rem] max-h-[7.3125rem] laptop:max-w-[10.9375rem] lapotop:max-h-[10.9375rem] aspect-square flex items-center justify-center rounded-full border border-gray-600 bg-[#141414]"
  >
    <div ref="textRef" class="text-white text-xs laptop:text-lg font-sans font-semibold tr text-center">
      Discover Your Dream Property ✨
    </div>

    <div class="absolute flex items-center justify-center w-[40%] aspect-square rounded-full bg-[#262626] border border-gray-500 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M17 7H9M17 7V15" />
      </svg>
    </div>
  </div>
</template>

<style scoped>

.tr{
  letter-spacing: .07em;
}
</style>