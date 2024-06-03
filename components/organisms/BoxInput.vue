<script setup>
import Search from '@/components/atoms/Search.vue';
import SortInput from '@/components/molecules/SortInput.vue';
const additionalLabelStyle = ['ml-2', 'pl-4', 'border-l', 'border-[#666666]'];

</script>

<template>
  <div>

    <div class="p-4 text-center mt-8">
      <Search :placeholder="'Search For A Property'" :iconSrc="'/assets/icons/Find.svg'" />
    </div>

  <div class="py-8 px-4 w-11/12 text-center mx-auto rounded-3xl bg-[#1A1A1A] mt-4 mb-12">
    <SortInput :inputImage="'/assets/icons/Location.svg'" :class="additionalLabelStyle" :label="'Location'" :showDropDown="true" />
    <SortInput :inputImage="'/assets/icons/HouseIcon.svg'" :class="additionalLabelStyle" :label="'Property Type'" :showDropDown="true" />
    <SortInput :inputImage="'/assets/icons/CamIcon.svg'" :class="additionalLabelStyle" :label="'Pricing Range'" :showDropDown="true" />
    <SortInput :inputImage="'/assets/icons/CubeIc.svg'" :class="additionalLabelStyle" :label="'Property Size'"  :showDropDown="true" />
    <SortInput :inputImage="'/assets/icons/Calendar.svg'" :class="additionalLabelStyle" :label="'Build Year'" :showDropDown="true" />
  </div>

  </div>
</template>

<style scoped>

</style>