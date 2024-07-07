<script setup>
  const props = defineProps({
    propertyNameId: {
      type: String,
      required: true,
    },
    cardImageId: {
      type: String,
      required: true,
    },
    propertyLocationId: {
      type: String,
      required: true,
    },
    cardPriceId: {
      type: String,
      required: true,
    },
    propertyImagesId: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
  })

  const emit = defineEmits(['updateIndex'])

  const currentIndex = ref(props.activeIndex)

  const updateActiveIndex = index => {
    currentIndex.value = index
    emit('updateIndex', index)
  }

  const changeIndex = delta => {
    const newIndex = currentIndex.value + delta
    currentIndex.value = newIndex
    emit('updateIndex', newIndex)
  }

  const whiteLocationSvg = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.61646 19.1259C9.64163 19.1405 9.66141 19.1517 9.67542 19.1596L9.69869 19.1726C9.88441 19.2745 10.1148 19.2738 10.3007 19.1729L10.3246 19.1596C10.3386 19.1517 10.3584 19.1405 10.3835 19.1259C10.4339 19.0967 10.5058 19.0542 10.5963 18.9985C10.7771 18.8872 11.0323 18.723 11.3372 18.5076C11.9459 18.0776 12.7581 17.4395 13.5721 16.6061C15.1922 14.9474 16.875 12.4551 16.875 9.25C16.875 5.45304 13.797 2.375 10 2.375C6.20304 2.375 3.125 5.45304 3.125 9.25C3.125 12.4551 4.80777 14.9474 6.42788 16.6061C7.24188 17.4395 8.05409 18.0776 8.66282 18.5076C8.96771 18.723 9.22295 18.8872 9.40375 18.9985C9.49419 19.0542 9.56612 19.0967 9.61646 19.1259ZM10 11.75C11.3807 11.75 12.5 10.6307 12.5 9.25C12.5 7.86929 11.3807 6.75 10 6.75C8.61929 6.75 7.5 7.86929 7.5 9.25C7.5 10.6307 8.61929 11.75 10 11.75Z" fill="white"/>
</svg>`
</script>

<template>
  <div class="content-title mx-auto my-4 w-[90%]">
    <h1 class="font-sans text-xl font-semibold text-white">{{ props.propertyNameId }}</h1>
    <div class="mx-auto mb-2 mt-4 grid grid-flow-col">
      <div class="flex">
        <LineImg :svgIcon="whiteLocationSvg" :containerWraper="'border border-hg bg-fgl rounded-xl p-2'" :gappedValue="'gap-1'" :head="props.propertyLocationId" />
      </div>
      <div class="flex items-center justify-center gap-2">
        <p class="font-sans text-sm font-medium text-gl">Price</p>
        <p class="font-sans text-lg font-semibold text-white">${{ props.cardPriceId }}</p>
      </div>
    </div>
  </div>

  <!-- max-w-[414px] deleted for now  -->
  <div class="card-id-cont grid-flow-rows mx-auto my-6 grid max-w-[25rem] auto-rows-max items-center justify-center rounded-xl bg-mg px-4 py-8 laptop:w-[91.66%] laptop:max-w-[100%]">
    <!-- mobile BOX  -->
    <div class="mobile-box laptop:hidden">
      <div class="img-cont mx-auto w-auto min-w-full rounded-xl">
        <img :src="$loadImage(props.cardImageId)" alt="miniMainImage" class="card-img h-full min-h-[15.5rem] w-full min-w-[20rem]" />
      </div>
      <div class="gallery-cont min-w-full">
        <imageGallery :images="props.propertyImagesId" @updateActiveIndex="currentIndex" :activeIndex="currentIndex" />
      </div>
      <div class="navigator-cont"><imageNavigator @updateIndex="changeIndex" /></div>
    </div>
    <!-- END MOBILEBOX  -->

    <!-- laptop BOX  -->
    <div class="laptop-box mx-auto hidden bg-hg laptop:block">
      <div class="mx-auto">
        <imageGallery :images="props.propertyImagesId" @updateActiveIndex="updateActiveIndex" :activeIndex="currentIndex" />
      </div>
      <div class="images-cnt mx-auto flex h-auto w-full items-center gap-4 p-4">
        <img :src="$loadImage('images/leftSeaSide.svg')" style="width: 50%" class="responsive-img" alt="mini-image" />
        <img :src="$loadImage('images/rightSeaSide.svg')" style="width: 50%" class="responsive-img" alt="mini-image" />
      </div>
      <div class="navigator-cont py-8"><imageNavigator @updateIndex="changeIndex" /></div>
    </div>
    <!-- END LAPTOPBOX  -->
  </div>
</template>

<style scoped>
  .bg-filter {
    background-color: black;
    background-blend-mode: color;
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
    /* backdrop-filter: blur(55px); */
    /* Adjust the alpha value for opacity */
  }
</style>
