<script setup>
const headerText = "Explore Estatein's World";
const paraText = "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.";
</script>

<template>
  <div class="bg-hero-about-abst rounded-xl border-2 border-[#262626] p-4">

      <div class="grid grid-cols-2 gap-x-4 justify-center my-4">

           <div class="w-auto flex flex-col gap-y-4">
                <img :src="$loadImage('/Explore/topLeft.svg')"  alt="topLeft">  
                <img :src="$loadImage('/Explore/bottomLeft.svg')" alt="bottomLeft">
              </div>

           <div class="w-auto flex flex-col gap-y-4">
              <img :src="$loadImage('/Explore/topRight.svg')" alt="topRight">
               <div class="sre"><img :src="$loadImage('/Explore/halfLeft.svg')" alt="halfLeft"><img :src="$loadImage('/Explore/halfRight.svg')" alt="halfRight"></div>
              </div>
        </div>

      


     <div class="top-cont w-11/12 mx-auto">
      <div class="stars-cont">
        <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars">
      </div>
      <div class="w-11/12 py-4 my-4 mx-auto">
        <h1 class="font-sans font-semibold text-white text-3xl">
          {{ headerText }}
        </h1>
        <p class="leading-5 text-sm font-medium font-urbanist text-[#999999] py-4">
          {{ paraText }}
        </p>
      </div>
      </div>

        <div class="sre">
          <img :src="$loadImage('/Explore/Main.svg')" alt="main">
        </div>
    
  </div>
</template>

<style scoped>

.sre{
  display:flex;
  justify-content: center;
  align-items: center;
  gap:15px;
}
.sre >* {
  width:100%;
height:100%;
}
</style>