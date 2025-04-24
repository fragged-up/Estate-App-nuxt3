<script setup lang="ts">
  const props = defineProps<{
    images: { path: string }[];
    activeImage: number;
  }>();

  const emit = defineEmits<{ (e: 'update:active-image', index: number): void }>();
  const updateImage = (index: number) => emit('update:active-image', index);
  const handleSliderIndexChange = (newIndex: number) => emit('update:active-image', newIndex);

  const getSafeImagePath = (index: number): string | null => {
    return props.images[index]?.path ?? null;
  };

  const getSecondaryImagePath = (index: number): string | null => {
    if (props.images[index + 1]) return props.images[index + 1].path;
    if (props.images[index - 1]) return props.images[index - 1].path;
    return props.images[index]?.path ?? null;
  };
</script>

<template>
  <div class="flex justify-center items-center">
    <!-- Mobile Variant -->
    <div class="laptop:hidden inline-grid gap-5 p-5 bg-mg border-2 border-hg rounded-xl">
      <img
        :src="$loadImage(props.images[activeImage].path)"
        alt="main-property-image"
        class="w-full min-h-[15.56rem] rounded-xl object-cover"
      >
      <GalleryImage :images="props.images" :active-image="activeImage" @update-active-index="updateImage" />
      <SliderControl
        :tabs-count="props.images"
        :active-indicator="activeImage"
        @update-active-index="handleSliderIndexChange"
      />
    </div>

    <!-- Desktop Variant -->
    <div class="hidden w-full laptop:grid gap-8 p-10 bg-mg border-2 border-hg rounded-xl">
      <GalleryImage :images="props.images" :active-image="activeImage" @update-active-index="updateImage" />
      <div class="flex justify-between items-center gap-7">
        <img
          v-if="getSafeImagePath(activeImage)"
          :src="$loadImage(getSafeImagePath(activeImage)!)"
          alt="main-property-image"
          class="w-full min-h-[15.56rem]  object-cover"
        >

        <img
          v-if="getSecondaryImagePath(activeImage)"
          :src="$loadImage(getSecondaryImagePath(activeImage)!)"
          alt="secondary-property-image"
          class="w-full min-h-[15.56rem]  object-cover"
        >
      </div>
      <SliderControl
        :tabs-count="props.images"
        :active-indicator="activeImage"
        @update-active-index="handleSliderIndexChange"
      />
    </div>
  </div>
</template>
