<script setup></script>

<template>
  <div class="main-wrapper">
    <div class="flex justify-start items-start gap-6 my-12">
      <Button
        :buttonTxt="'Learn More'"
        :buttonStyling="'py-4 px-6 bg-transparent rounded-2xl text-center text-white font-medium text-sm border-2 border-hg'"
      />
      <Button
        :buttonTxt="'Browse Properties'"
        :buttonStyling="'py-4 px-6 bg-pr rounded-2xl text-center text-white font-sans font-medium text-sm'"
      />
    </div>

    <div class="card-hero-cont flex gap-6 justify-start items-strech">
      <div class="bg-mg py-3 px-6 rounded-xl border-2 border-hg">
        <h2 class="text-[2.5rem] text-white font-sans font-bold">200+</h2>
        <p class="text-base text-gl font-sans font-medium">Happy Customers</p>
      </div>
      <div class="bg-mg py-3 px-6 rounded-xl border-2 border-hg">
        <h2 class="text-[2.5rem] text-white font-sans font-bold">10K+</h2>
        <p class="text-base text-gl font-sans font-medium">
          Properties For Clients
        </p>
      </div>
      <div class="bg-mg py-3 px-6 rounded-xl border-2 border-hg">
        <h2 class="text-[2.5rem] text-white font-sans font-bold">16+</h2>
        <p class="text-base text-gl font-sans font-medium">
          Years of Experience
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
<!-- <button
  class="w-full my-2 py-4 px-6  rounded-2xl mx-auto text-center text-white font-medium text-base bg-[#703BF7]"
>
              Browse Properties
            </button> -->
