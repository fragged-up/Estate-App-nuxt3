<script setup lang="ts">
</script>

<template>
  <div
    class="card-office h-[410px] max-w-[630px] rounded-xl border-2 border-[#262626] p-4">
    <slot v-if="$slots.first" name="first">
      <div class="my-6">
        <p class="font sans text-sm font-medium text-white">Main Headquarters</p>
        <p class="font sans my-4 text-xl font-semibold text-white">
          123 Estatein Plaza, City Center, Metropolis
        </p>
        <p class="font sans text-sm font-medium text-gl">Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
      </div>

      <div class="my-4 grid auto-rows-auto gap-y-4">
        <div class="">
          <Pod :pod-txt="'info@estatein.com'" :pod-img="'/icons/Mail.svg'" />
        </div>
        <div class="">
          <Pod
            :pod-txt="'+1 (123) 456-7890'"
            :pod-img="'/icons/metroPhone.svg'" />
          <Pod :pod-txt="'Metropolis'" :pod-img="'/icons/Metro.svg'" />
        </div>
      </div>

      <Button
        :button-styling="'bg-pr w-full mx-auto py-4 rounded-xl text-white'"
        :btn-text="'Get Direction'" />
    </slot>

    <slot v-if="$slots.second" name="second">
      <div class="my-6">
        <p class="font sans text-sm font-medium text-white">Regional Offices</p>
        <p class="font sans my-4 text-xl font-semibold text-white">
          456 Urban Avenue, Downtown District, Metropolis
        </p>
        <p class="font sans text-sm font-medium text-gl">Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.</p>
      </div>

      <div class="my-4 grid auto-rows-auto gap-y-4">
        <div class="">
          <Pod :pod-txt="'info@estatein.com'" :pod-img="'/icons/Mail.svg'" />
        </div>
        <div class="">
          <Pod
            :pod-txt="'+1 (123) 456-7890'"
            :pod-img="'/icons/metroPhone.svg'" />
          <Pod :pod-txt="'Metropolis'" :pod-img="'/icons/Metro.svg'" />
        </div>
      </div>

      <Button
        :button-styling="'bg-pr w-full mx-auto py-4 rounded-xl text-white'"
        :btn-text="'Get Direction'" />
    </slot>
  </div>
</template>

<style scoped></style>
