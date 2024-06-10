<script setup>
import Button from '../atoms/Button.vue';
import Pod from '../atoms/Pod.vue';


const firstPara = "Main Headquarters";
const secondPara ="123 Estatein Plaza, City Center, Metropolis";
const thirdPara = "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.";

const first_Para = "Regional Offices";
const second_Para = "456 Urban Avenue, Downtown District, Metropolis";
const third_Para = "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.";

</script>

<template>

  <div class="card-office border-2 border-[#262626] p-4 rounded-xl max-w-[630px] h-[410px]">

   <slot v-if="$slots.first" name="first">
     <div class="my-6">
        <p class="font sans font-medium text-white text-sm">{{ firstPara }}</p>
        <p class="font sans font-semibold text-white text-xl my-4">{{ secondPara }}</p>
        <p class="font sans font-medium text-gl text-sm">{{ thirdPara }}</p>
     </div>
       
      <div class="grid auto-rows-auto my-4 gap-y-4">
        <div class="">
          <Pod :podTxt="'info@estatein.com'" :pod-img="'/assets/icons/Mail.svg'" />
  
        </div>
        <div class="">
            <Pod :podTxt="'+1 (123) 456-7890'" :pod-img="'/assets/icons/metroPhone.svg'" />
            <Pod :podTxt="'Metropolis'" :pod-img="'/assets/icons/Metro.svg'" />
         
        </div>
      </div>
  
      <Button :button-styling="'bg-pr w-full mx-auto py-4 rounded-xl text-white'" :button-txt="'Get Direction'"  />
   </slot>

   <slot v-if="$slots.second" name="second">
     <div class="my-6">
        <p class="font sans font-medium text-white text-sm">{{ first_Para }}</p>
        <p class="font sans font-semibold text-white text-xl my-4">{{ second_Para }}</p>
        <p class="font sans font-medium text-gl text-sm">{{ third_Para }}</p>
     </div>
       
      <div class="grid auto-rows-auto my-4 gap-y-4">
        <div class="">
          <Pod :podTxt="'info@estatein.com'" :pod-img="'/assets/icons/Mail.svg'" />
  
        </div>
        <div class="">
            <Pod :podTxt="'+1 (123) 456-7890'" :pod-img="'/assets/icons/metroPhone.svg'" />
            <Pod :podTxt="'Metropolis'" :pod-img="'/assets/icons/Metro.svg'" />
         
        </div>
      </div>
  
      <Button :button-styling="'bg-pr w-full mx-auto py-4 rounded-xl text-white'" :button-txt="'Get Direction'"  />
   </slot>


    
  </div>
</template>

<style scoped>

</style>