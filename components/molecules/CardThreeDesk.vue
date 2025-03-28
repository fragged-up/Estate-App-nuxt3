<script setup></script>

<template>
  <div class="main-wrapper">
    <div class="my-12 flex items-start justify-start gap-6">
      <Button
        :btn-text="'Learn More'"
        :btn-style="'py-4 px-6 bg-transparent rounded-2xl text-center text-white font-medium text-sm border-2 border-hg'" />
      <Button
        :btn-text="'Browse Properties'"
        :btn-style="'py-4 px-6 bg-pr rounded-2xl text-center text-white font-sans font-medium text-sm'" />
    </div>

    <div class="card-hero-cont items-strech flex justify-start gap-6">
      <div class="rounded-xl border-2 border-hg bg-mg px-6 py-3">
        <h2 class="font-sans text-[2.5rem] font-bold text-white">200+</h2>
        <p class="font-sans text-base font-medium text-gl">Happy Customers</p>
      </div>
      <div class="rounded-xl border-2 border-hg bg-mg px-6 py-3">
        <h2 class="font-sans text-[2.5rem] font-bold text-white">10K+</h2>
        <p class="font-sans text-base font-medium text-gl">
          Properties For Clients
        </p>
      </div>
      <div class="rounded-xl border-2 border-hg bg-mg px-6 py-3">
        <h2 class="font-sans text-[2.5rem] font-bold text-white">16+</h2>
        <p class="font-sans text-base font-medium text-gl">
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
