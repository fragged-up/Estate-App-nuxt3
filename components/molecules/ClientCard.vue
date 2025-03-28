<script setup lang="ts">
  defineProps<{
    faceImage: string
    faceName: string
    faceLocation: string
    faceHead: string
    facePara: string
  }>()
  // const props = defineProps({
  //   faceImage: String,
  //   faceName: String,
  //   faceLocation: String,
  //   faceHead: String,
  //   facePara: String,
  // })
</script>

<template>
  <div
    class="card-box row-auto grid w-full gap-y-6 rounded-xl border-2 border-[#262626] p-4">
    <div class="stars-shape-box my-2 ml-3 flex gap-4">
      <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" >
      <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" >
      <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" >
      <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" >
      <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" >
    </div>

    <div class="text-box">
      <h2 class="font-semibold text-white">
        {{ faceHead }}
        <br >
        <br >
      </h2>
      <p class="text-sm text-white">
        {{ facePara }}
      </p>
    </div>

    <div class="face-box flex gap-x-4 p-4">
      <div class="face-img-cont">
        <img :src="$loadImage(faceImage)" alt="face" >
      </div>

      <div class="face-text">
        <p class="face-name text-white">{{ faceName }}</p>
        <p class="face-review text-[#999999]">{{ faceLocation }}</p>
      </div>
    </div>
  </div>
</template>
<!-- 
{{face.faceHead}}
{{face.facePara}}
{{face.faceImage}}
{{face.faceName}}
{{face.faceText}} -->
