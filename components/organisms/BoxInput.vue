<script setup>
// import Search from '@/components/atoms/Search.vue';
// import SortInput from '@/components/molecules/SortInput.vue';

</script>

<template>
  <div class="box-input-main-container">

    <div class="p-4 text-center mt-8">
      <Search :placeholder="'Search For A Property'" :iconSrc="'/icons/Find.svg'" />
    </div>

  <div class="py-8 px-4 w-11/12 text-center mx-auto rounded-3xl bg-[#1A1A1A] mt-4 mb-12">
    <SortInput :inputImage="'/icons/Location.svg'"  :label="'Location'"  />
    <SortInput :inputImage="'/icons/HouseIcon.svg'"  :label="'Property Type'"  />
    <SortInput :inputImage="'/icons/CamIcon.svg'"  :label="'Pricing Range'"  />
    <SortInput :inputImage="'/icons/CubeIc.svg'"  :label="'Property Size'"   />
    <SortInput :inputImage="'/icons/Calendar.svg'"  :label="'Build Year'"  />
  </div>

  </div>
</template>

<style scoped>

</style>