<script setup>
const props = defineProps({
  faceImage:String,
  faceName:String,
  faceLocation:String,
  faceHead:String,
  facePara:String,
}) 

</script>




<template>
 <div class="card-box w-full rounded-xl grid row-auto gap-y-6 border-2 border-[#262626] p-4">
  <div class="stars-shape-box flex gap-4 my-2 ml-3">
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
  </div>

 <div class="text-box">
    <h2 class="text-white font-semibold">
      {{ props.faceHead }}
       <br/><br/>
    </h2>
       <p class="text-white text-sm">
        {{ props.facePara }}
       </p>
 </div>

    <div class="face-box flex gap-x-4 p-4">

      <div class="face-img-cont">
        <img :src="$loadImage(props.faceImage)" alt="face">
      </div>

      <div class="face-text">
        <p class="face-name text-white">{{ props.faceName }}</p>
        <p class="face-review text-[#999999]">{{ props.faceLocation }}</p>
        <p></p>
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