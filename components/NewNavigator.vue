<script setup lang="ts">
defineProps<{
  images: { path: string }[]
  activeIndex: number
}>()

const emit = defineEmits<{
  (e: 'update-active-index', index: number): void
}>()

const selectImage = (index: number) => emit('update-active-index', index)
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Main Image -->
    <div class="w-full overflow-hidden rounded-xl">
      <img
        :src="$loadImage(images[activeIndex]?.path)"
        alt="main"
        class="w-full h-auto object-cover transition-all duration-300"
      >
    </div>

    <!-- Thumbnails -->
    <div class="flex gap-3 overflow-x-auto">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="$loadImage(img.path)"
        :class="[
          'w-20 h-14 rounded-lg object-cover cursor-pointer transition',
          index === activeIndex ? 'ring-2 ring-pr' : 'opacity-70 hover:opacity-100'
        ]"
        @click="selectImage(index)"
      >
    </div>
  </div>
</template>


<!-- 
Usage : 
In CardId.vue : 

<script setup lang="ts">
defineProps<{
  propertyImagesId: { path: string }[]
}>()

const currentIndex = ref(0)
</script>



<template>
  <imageGallery
    :images="propertyImagesId"
    :active-index="currentIndex"
    @update-active-index="(val) => currentIndex = val"
  />
</template>


-->