<script setup lang="ts">
  import CircleType from 'circletype';

  const textRef = ref<HTMLElement | null>(null);

  const handleScroll = () => {
    if (textRef.value) {
      textRef.value.style.transform = `rotate(${window.scrollY * 0.35}deg)`;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    if (textRef.value) {
      new CircleType(textRef.value).radius(50);
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div
    ref="containerRef"
    class="relative w-full -left-8 top-56 laptop:top-20 laptop:-left-20 max-w-[7.3125rem] max-h-[7.3125rem] laptop:max-w-[9.5rem] laptop:max-h-[9.5rem] aspect-square flex items-center justify-center rounded-full border border-gray-600 bg-[#1a1a1a]"
  >
    <div
      ref="textRef"
      class="absolute z-50 text-white text-xs laptop:text-base fill-zinc-500 tracking-custom font-medium text-center"
    >
      Discover Your Dream Property ✨
    </div>

    <div
      class="absolute flex items-center justify-center w-[50%] aspect-square rounded-full border bg-[#262626] border-gray-500 z-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-1/2 h-1/2" fill="none" viewBox="0 0 24 24" stroke="white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17M17 7H9M17 7V15" />
      </svg>
    </div>
  </div>
</template>
