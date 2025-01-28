<script setup>
  // import { useMediaQuery } from '@vueuse/core' no needed any more
  // const { $isMobile, $isLaptop } = useNuxtApp()
  // console.log($isMobile)

  import { useSeoMeta } from '#imports'

  useSeoMeta({
    title: 'Last Exp',
  })

  const _prName = 'Seaside Serenity Villa'
  const _location = 'Malibu,California'
  const _price = '$1,250,000'
  const _idProper = [
    {
      image: '/Mini/BoldImage.svg',
      miniOne: '/Mini/propImageMini.svg',
      miniTwo: '/Mini/MiniTwo.svg',
      miniThree: '/Mini/MiniThree.svg',
      miniFourth: '/Mini/MiniFourth.svg',
    },
  ]

  // console.log(performance.now())
  //for expand althought the card id is unique ... -_-
  //const idProper = [
  //   {
  //     image: '/images/MetroCard.svg',
  //     miniOne: '/Mini/MiniOne.svg',
  //     miniTwo: '/Mini/MiniTwo.svg',
  //     miniThree: '/Mini/MiniThree.svg',
  //     miniFourth: '/Mini/MiniFourth.svg',
  //   },

  //   {
  //     image: '/images/MetroCard.svg',
  //     miniOne: '/Mini/MiniOne.svg',
  //     miniTwo: '/Mini/MiniTwo.svg',
  //     miniThree: '/Mini/MiniThree.svg',
  //     miniFourth: '/Mini/MiniFourth.svg',
  //   },

  //   {
  //     image: '/images/MetroCard.svg',
  //     miniOne: '/Mini/MiniOne.svg',
  //     miniTwo: '/Mini/MiniTwo.svg',
  //     miniThree: '/Mini/MiniThree.svg',
  //     miniFourth: '/Mini/MiniFourth.svg',
  //   },
  //   {
  //     image: '/images/MetroCard.svg',
  //     miniOne: '/Mini/MiniOne.svg',
  //     miniTwo: '/Mini/MiniTwo.svg',
  //     miniThree: '/Mini/MiniThree.svg',
  //     miniFourth: '/Mini/MiniFourth.svg',
  //   },
  // ]
</script>

<!-- <template>
  <div class="main">
    <header>
      <nav>
        <div class="flex items-center justify-center">
          <h1 class="font-sans text-lg font-bold text-white">{{ prName }}</h1>
          <p class="font sans text-lg font-medium text-white">Price: {{ price }}</p>
        </div>
      </nav>

      <div class="p-4">
        <CardId v-for="(card, index) in idProper" :key="index" :image="card.image" :miniOne="card.miniOne" :miniTwo="card.miniTwo" :miniThree="card.miniThree" :miniFourth="card.miniFourth" />
      </div>
    </header>

    <div class="description grid-auto-rows grid auto-rows-max bg-hg">
      <h2 class="font sans font-semibold text-white">Description</h2>
    </div>
  </div>
</template> -->

<template>
  <div class="main-bg bg-hg">
    <div class="mx-auto">
      <imageGallery />
    </div>
    <div class="images-cnt mx-auto flex h-auto w-full items-center gap-4 p-4">
      <img
        :src="$loadImage('images/leftSeaSide.svg')"
        style="width: 50%"
        class="responsive-img"
        alt="mini-image"
      >
      <img
        :src="$loadImage('images/rightSeaSide.svg')"
        style="width: 50%"
        class="responsive-img"
        alt="mini-image"
      >
    </div>
    <ImageNavigator />
  </div>
</template>
<!-- bg-cover, bg-center, bg-no-repeat, and bg-fixed. -->
<!-- w-[45.8rem] h-[36.4rem]-->
<!-- w-[45.8rem] h-[36.4rem]-->
<!-- <div class="bg-sea-left h-[600px] w-full bg-contain bg-fixed bg-center bg-no-repeat"></div>
      <div class="bg-sea-right h-[600px] w-full bg-contain bg-fixed bg-center bg-no-repeat"></div> -->
<style scoped>
  /* .responsive-images {
    width: 20%;
    flex: 1;
    height: auto;
    max-width: 100%;
    object-fit: contain;
  } */
</style>
