<script setup lang="ts">
  defineProps<{
    preview: string;
    full: string;
  }>();
  const isVisible = ref(false);
  const toggleReadMe = () => (isVisible.value = !isVisible.value);
</script>

<template>
  <div class="space-y-2">
    <p class="text-[#999999] font-sans font-medium text-sm leading-relaxed">
      {{ preview }}
      <strong class="text-white text-xs font-sans font-medium laptop:text-base underline hover:text-[#703BF7] cursor-pointer ml-1" @click="toggleReadMe">
        {{ isVisible ? 'Read Less' : 'Read More' }}
      </strong>
    </p>
    <transition name="fade">
      <p v-show="isVisible" class="text-white text-sm break-words font-sans font-medium">
        {{ full }}
      </p>
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
