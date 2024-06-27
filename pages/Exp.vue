<!-- <script setup></script>

<template>
  <div>
    <HeroDesktop />
  </div>
</template>

<style scoped></style> -->

<script setup></script>

<template>
  <div
    class="desk-about-page grid grid-cols-2 justify-center items-stretch p-8 mx-auto"
  >
    <div class="left-side-about m-auto px-8">
      <div class="flex flex-col gap-y-6">
        <div class="stars-cont">
          <img
            :src="$loadImage('/icons/stars.svg')"
            alt="stars"
            class="stars"
          />
        </div>
        <h1 class="font-sans font-semibold text-5xl text-white">Our Journey</h1>
        <p class="font-sans font-medium text-gl text-base">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary. Over the years, we've expanded
          our reach, forged valuable partnerships, and gained the trust of
          countless clients.
        </p>
      </div>
      <CardThreeDesk />
    </div>
    <div class="right-side-about h-[29.75rem] bg-about-us bg-no-repeat"></div>
  </div>
</template>

<style scoped></style>
