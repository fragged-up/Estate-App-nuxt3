<script setup>
  // import Search from '@/components/atoms/Search.vue';
  // import SortInput from '@/components/molecules/SortInput.vue';
</script>

<template>
  <div class="box-input-main-container">
    <!-- mt-8 deleted for now  -->
    <div class="mx-auto mt-8 bg-mg p-4 laptop:grid laptop:w-[50%] laptop:rounded-lg laptop:text-center">
      <Search :placeholder="'Search For A Property'" :iconSrc="'/icons/Find.svg'" />
    </div>
    <!-- w-11/12 deleted from the box below  -->
    <!-- class list before deleted<div class="py-8 laptop:py-0 px-4 laptop:px-0 text-center mx-auto rounded-3xl bg-[#1A1A1A] mt-4 mb-12 laptop:flex laptop:p-0 laptop:m-0"> -->
    <div
      class="mx-auto mb-12 mt-4 flex w-11/12 flex-col gap-y-6 rounded-3xl bg-mg p-8 text-center laptop:my-0 laptop:w-auto laptop:max-w-[79rem] laptop:flex-row laptop:items-center laptop:justify-center laptop:gap-x-4 laptop:rounded-xl laptop:px-0 laptop:py-6"
    >
      <SortInput :inputImage="'/icons/Location.svg'" :label="'Location'" />
      <SortInput :inputImage="'/icons/HouseIcon.svg'" :label="'Property Type'" />
      <SortInput :inputImage="'/icons/CamIcon.svg'" :label="'Pricing Range'" />
      <SortInput :inputImage="'/icons/CubeIc.svg'" :label="'Property Size'" />
      <SortInput :inputImage="'/icons/Calendar.svg'" :label="'Build Year'" />
    </div>
    <!-- max-w-[79rem] bg-mg p-4 flex justify-center items-center rounded-xl mx-auto -->
  </div>
</template>

<style scoped></style>
