<script setup lang="ts">
 const{ activeImage =0,}=defineProps<{
    images: string[],
    activeImage:number
  }>()

  const emit = defineEmits<{
    updateActiveIndex: [index:number]
  }>()


  const updateActiveImage = (index:number)=>{
    emit('updateActiveIndex',index)
  }

</script>

<template>
  <div class="my-6 flex max-w-[22rem] space-x-4 overflow-x-auto border border-hg bg-fgl laptop:w-full laptop:max-w-full laptop:justify-evenly">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="$loadImage(image.path)"
      :activeImage="image[index]"
      class="h-24 w-24 cursor-pointer"
      :class="['thumbnail',index===activeImage ? 'active' : 'inactive']"
      @click="updateActiveImage(index)" >
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
