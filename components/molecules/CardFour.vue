<script setup lang="ts">
  //  defineProps<{}>()
</script>

<template>
  <!-- Cont four cards  -->
  <div
    class="second-template grid max-w-[100%] grid-cols-2 grid-rows-2 gap-x-2.5 gap-y-2.5 rounded-md border-2 border-[#262626] p-4 laptop:grid-flow-col laptop:grid-cols-none laptop:grid-rows-none laptop:border-[7px]"
  >
    <div
      class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#141414] p-4 text-center laptop:flex-grow-0 laptop:bg-mg"
    >
      <div class="flex flex-col items-center justify-center">
        <img
          :src="$loadImage('/icons/arrowRtop.svg')"
          class="mr-4 self-end"
          alt="rtop"
        >
        <img
          :src="$loadImage('/icons/homeIcon.svg')"
          class="self-center"
          alt="homeIcon"
        >
      </div>
      <p class="font-sans text-base font-semibold text-white">
        Find Your Dream
        <br >
        Home
      </p>
    </div>
    <div
      class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#141414] p-4 text-center laptop:flex-grow-0 laptop:bg-mg"
    >
      <div class="flex flex-col items-center justify-center">
        <img
          :src="$loadImage('/icons/arrowRtop.svg')"
          class="mr-4 self-end"
          alt="rtop"
        >
        <img
          :src="$loadImage('/icons/cameraIcon.svg')"
          class="self-center"
          alt="homeIcon"
        >
      </div>
      <p class="font-sans text-base font-semibold text-white">
        Unlock Property
        <br >
        Value
      </p>
    </div>
    <div
      class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#141414] p-4 text-center laptop:flex-grow-0 laptop:bg-mg"
    >
      <div class="flex flex-col items-center justify-center">
        <img
          :src="$loadImage('/icons/arrowRtop.svg')"
          class="mr-4 self-end"
          alt="rtop"
        >
        <img
          :src="$loadImage('/icons/buildingIcon.svg')"
          class="self-center"
          alt="homeIcon"
        >
      </div>
      <p class="font-sans text-base font-semibold text-white">
        Effortless Property
        <br >
        Management
      </p>
    </div>
    <div
      class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#141414] p-4 text-center laptop:flex-grow-0 laptop:bg-mg"
    >
      <div class="flex flex-col items-center justify-center">
        <img
          :src="$loadImage('/icons/arrowRtop.svg')"
          class="mr-4 self-end"
          alt="rtop"
        >
        <img
          :src="$loadImage('/icons/sunIcon.svg')"
          class="self-center"
          alt="homeIcon"
        >
      </div>
      <p class="font-sans text-base font-semibold text-white">
        Smart Investments,
        <br >
        Informed Decisions
      </p>
    </div>
  </div>

  <!-- make a new slot for render another image's and text's in contact page  <slot></slot> -->
</template>

<style scoped></style>
