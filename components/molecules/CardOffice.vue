<script setup>
  // import Button from '../atoms/Button.vue';
  // import Pod from '../atoms/Pod.vue';

  const firstPara = 'Main Headquarters'
  const secondPara = '123 Estatein Plaza, City Center, Metropolis'
  const thirdPara =
    'Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.'

  const first_Para = 'Regional Offices'
  const second_Para = '456 Urban Avenue, Downtown District, Metropolis'
  const third_Para =
    "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets."
</script>

<template>
  <div class="card-office h-[410px] max-w-[630px] rounded-xl border-2 border-[#262626] p-4">
    <slot v-if="$slots.first" name="first">
      <div class="my-6">
        <p class="font sans text-sm font-medium text-white">{{ firstPara }}</p>
        <p class="font sans my-4 text-xl font-semibold text-white">{{ secondPara }}</p>
        <p class="font sans text-sm font-medium text-gl">{{ thirdPara }}</p>
      </div>

      <div class="my-4 grid auto-rows-auto gap-y-4">
        <div class="">
          <Pod :podTxt="'info@estatein.com'" :pod-img="'/icons/Mail.svg'" />
        </div>
        <div class="">
          <Pod :podTxt="'+1 (123) 456-7890'" :pod-img="'/icons/metroPhone.svg'" />
          <Pod :podTxt="'Metropolis'" :pod-img="'/icons/Metro.svg'" />
        </div>
      </div>

      <Button :button-styling="'bg-pr w-full mx-auto py-4 rounded-xl text-white'" :button-txt="'Get Direction'" />
    </slot>

    <slot v-if="$slots.second" name="second">
      <div class="my-6">
        <p class="font sans text-sm font-medium text-white">{{ first_Para }}</p>
        <p class="font sans my-4 text-xl font-semibold text-white">{{ second_Para }}</p>
        <p class="font sans text-sm font-medium text-gl">{{ third_Para }}</p>
      </div>

      <div class="my-4 grid auto-rows-auto gap-y-4">
        <div class="">
          <Pod :podTxt="'info@estatein.com'" :pod-img="'/icons/Mail.svg'" />
        </div>
        <div class="">
          <Pod :podTxt="'+1 (123) 456-7890'" :pod-img="'/icons/metroPhone.svg'" />
          <Pod :podTxt="'Metropolis'" :pod-img="'/icons/Metro.svg'" />
        </div>
      </div>

      <Button :button-styling="'bg-pr w-full mx-auto py-4 rounded-xl text-white'" :button-txt="'Get Direction'" />
    </slot>
  </div>
</template>

<style scoped></style>
