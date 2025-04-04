<script setup lang="ts">
  defineProps<{
    preview: string;
    full: string;
  }>();
  const isVisible = ref(false);
  const toggleReadMe = () => (isVisible.value = !isVisible.value);
</script>

<template>
  <div class="">
    <p class="text-[#999999] font-sans font-medium text-sm leading-relaxed">
      {{ preview }}
    </p>
    <strong class="text-white text-xs font-sans font-medium laptop:text-base underline hover:text-[#703BF7] cursor-pointer " @click="toggleReadMe">
        {{ isVisible ? 'Read Less' : 'Read More' }}
      </strong>
      <Transition
        enter-active-class="transition-all duration-300 ease-in-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-40"
        leave-active-class="transition-all duration-300 ease-in-out"
        leave-from-class="opacity-100 max-h-40"
        leave-to-class="opacity-0 max-h-0"
      >
      <p v-if="isVisible" class="text-white text-sm break-words font-sans font-medium">
        {{ full }}
      </p>
    </Transition>

  </div>
</template>






