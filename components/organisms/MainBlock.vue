<script setup>
const blockContent = defineProps({
  headerText: String,
  paraText: String
})
</script>

<template>
  <div class="p4 w-full my-6">
    <!-- from 1440px make hook to display viewButton wrap it in container of inline-flex width 
                                    width 155px and height 49px  -->

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

        <slot v-if="$slots.top" name="top">

        </slot>
      </div>

      </div>

      

      <div class="p4 w-full">
        <slot></slot>
      </div>


   

    <!-- inner Card need in the styling overflow-x auto for mobile  -->
    <!-- from 1440px wrap it in container & to display additional 2 FeaturedProperties components with different props values -->



    <!-- from 1440px make hook to display none this button   -->
    <!-- <viewButton :buttonText="viewAP" /> -->
  </div>

</template>


<style></style>