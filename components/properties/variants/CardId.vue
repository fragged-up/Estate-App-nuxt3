<script setup lang="ts">
const props = defineProps<{
  images: { path: string }[]
  activeImage: number
}>();

const emit = defineEmits<{
  (e: 'update:active-image', index: number): void;
}>();

const updateImage = (index: number) => {
  emit('update:active-image', index);
};

const handleSliderIndexChange = (newIndex: number) => {
  emit('update:active-image', newIndex);
};
</script>

<template>
  <div class="card-id space-y-6">
    <img
      :src="$loadImage(props.images[activeImage].path)"
      alt="main-property-image"
      class="w-full rounded-xl object-cover"
    >

    <GalleryImage
      :images="props.images"
      :active-image="activeImage"
      @update-active-index="updateImage"
    />

    <SliderControl
      :tabs-count="props.images"
      :active-indicator="activeImage"
      @update-active-index="handleSliderIndexChange"
    />
  </div>
</template>

<style scoped>
.card-id {
  max-width: 600px;
  margin: auto;
}
</style>
