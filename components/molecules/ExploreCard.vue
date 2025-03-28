<script setup lang="ts">
  const headerText = "Explore Estatein's World"
  const paraText =
    'Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.'
</script>

<template>
  <div class="rounded-xl border-2 border-[#262626] bg-hero-about-abst p-4">
    <div class="my-4 grid grid-cols-2 justify-center gap-x-4">
      <div class="flex w-auto flex-col gap-y-4">
        <img :src="$loadImage('/Explore/topLeft.svg')" alt="topLeft" >
        <img :src="$loadImage('/Explore/bottomLeft.svg')" alt="bottomLeft" >
      </div>

      <div class="flex w-auto flex-col gap-y-4">
        <img :src="$loadImage('/Explore/topRight.svg')" alt="topRight" >
        <div class="sre">
          <img :src="$loadImage('/Explore/halfLeft.svg')" alt="halfLeft" >
          <img :src="$loadImage('/Explore/halfRight.svg')" alt="halfRight" >
        </div>
      </div>
    </div>

    <div class="top-cont mx-auto w-11/12">
      <div class="stars-cont">
        <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars" >
      </div>
      <div class="mx-auto my-4 w-11/12 py-4">
        <h1 class="font-sans text-3xl font-semibold text-white">
          {{ headerText }}
        </h1>
        <p
          class="font-urbanist py-4 text-sm font-medium leading-5 text-[#999999]">
          {{ paraText }}
        </p>
      </div>
    </div>

    <div class="sre">
      <img :src="$loadImage('/Explore/Main.svg')" alt="main" >
    </div>
  </div>
</template>

<style scoped>
  .sre {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .sre > * {
    width: 100%;
    height: 100%;
  }
</style>
