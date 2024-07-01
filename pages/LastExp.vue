<script setup>
  const prName = 'Seaside Serenity Villa'
  const location = 'Malibu,California'
  const price = '$1,250,000'
  const idProper = [
    {
      image: '/Mini/BoldImage.svg',
      miniOne: '/Mini/propImageMini.svg',
      miniTwo: '/Mini/MiniTwo.svg',
      miniThree: '/Mini/MiniThree.svg',
      miniFourth: '/Mini/MiniFourth.svg',
    },
  ]

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

<template>
  <div>
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
  </div>
</template>

<style scoped></style>
