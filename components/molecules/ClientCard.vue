<script setup>

const review = defineProps({
  faceImage:String,
  faceName:String,
  faceText:String
}) 

</script>




<template>
 <div class="card-box w-full rounded-xl grid row-auto gap-y-6 border-2 border-[#262626] p-4">
  <div class="stars-shape-box flex gap-8">
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
    <img :src="$loadImage('/icons/starShape.svg')" alt="starShape" />
  </div>

 <div class="text-box">
    <h2 class="text-white font-semibold">
      Exceptional Service!
    </h2>
       <p class="text-white text-sm">
        Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!
       </p>
 </div>

    <div class="face-box flex gap-x-4 p-4">

      <div class="face-img-cont">
        <img :src="$loadImage(review.faceImage)" alt="face">
      </div>

      <div class="face-text">
        <p class="face-name text-white">{{ review.faceName }}</p>
        <p class="face-review text-[#999999]">{{ review.faceText }}</p>
        <p></p>
      </div>


    </div>


  </div>


</template>

