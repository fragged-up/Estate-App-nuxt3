
<script setup lang="ts">

const props = defineProps<{
  images: { path: string }[];
  activeImage: number;
}>();

const emit = defineEmits<{ updateActiveIndex: [index: number] }>();
const updateActiveImage = (index: number) => {
  emit('updateActiveIndex', index);
};

const galleryContainer = ref<HTMLElement | null>(null);
const thumbnails = ref<HTMLElement[]>([]);

onMounted(() => {
  thumbnails.value = Array.from(
    galleryContainer.value?.querySelectorAll('img') || []
  );
});

watch(
  () => props.activeImage,
  (newActiveIndex:any) => {
    if (galleryContainer.value && thumbnails.value.length > 0) {
      const activeThumbnail = thumbnails.value[newActiveIndex];
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    }
  }
);
</script>

<template>
  <div
    ref="galleryContainer"
    class="flex max-w-full space-x-2.5 laptop:space-x-0 p-2.5 overflow-x-auto border rounded-xl border-hg bg-fgl laptop:w-full laptop:max-w-full laptop:justify-evenly"
  >
    <img
      v-for="(image, index) in images"
      :key="index"
      :ref="'thumbnail-' + index"
      :src="$loadImage(image.path)"
      :alt="'image-' + index"
      class="h-10 w-16 laptop:w-[7.625] laptop:h-[4.625rem] cursor-pointer transition-all duration-300"
      :class="['thumbnail',index === activeImage ? 'opacity-100 scale-110 shadow-md' : 'opacity-50 grayscale-[20%]',]"
      :aria-current="index === activeImage ? 'true' : undefined"
      @click="updateActiveImage(index)"
    >
  </div>
</template>
