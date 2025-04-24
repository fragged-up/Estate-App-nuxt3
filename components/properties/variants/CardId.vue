lea<script setup lang="ts">
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
<!-- max-h-[28.125rem] -->
<template>
  <div class="inline-grid gap-5 space-y-6 p-5 bg-mg border-2 border-hg rounded-xl">
    <!-- <img
      :src="$loadImage(props.images[activeImage].path)"
      alt="main-property-image"
      class="w-full max-h-[15.56rem] rounded-xl object-cover"
    > -->


    <NuxtImg
      :src="`/base/${props.images[activeImage].path}`"
      alt="image"
      class="w-full max-h-[15.56rem] rounded-xl object-cover"
    />
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



    <!-- <AppImage
      :src="props.images[activeImage].path"
      :alt="`Image ${activeImage + 1}`"
      class="w-full max-h-[15.56rem] rounded-xl object-cover"
    /> -->
