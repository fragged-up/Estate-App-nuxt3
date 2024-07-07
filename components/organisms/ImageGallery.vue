<script setup>
  const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
  })

  const emit = defineEmits(['updateActiveIndex'])

  const setActive = index => {
    emit('updateActiveIndex', index)
  }
</script>

<template>
  <div class="my-6 flex max-w-[22rem] space-x-4 overflow-x-auto border border-hg bg-fgl laptop:w-full laptop:max-w-full laptop:justify-evenly">
    <img
      v-for="(images, index) in props.images"
      :key="index"
      :src="$loadImage(images.path)"
      :class="['thumbnail', index === activeIndex ? 'active' : 'inactive']"
      @click="setActive(index)"
      class="h-24 w-24 cursor-pointer"
    />
  </div>
</template>
<style scoped>
  .thumbnail {
    transition: all 0.3s ease;
  }
  .active {
    opacity: 1;
    filter: none;
  }

  .inactive {
    opacity: 0.5;
    filter: grayscale(20%);
    /* mix-blend-mode: multiply; */
  }
</style>
