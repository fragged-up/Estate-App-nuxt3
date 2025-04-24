<script setup lang="ts">

const buildings = [{
  id: 1,
  slug: 'Sunset-Vista',
  image: '/images/Beckos.svg',
  highlight:'Coastal Escapes - Where Waves Beckon',
  title: 'Breathtaking Oceanfront Property',
  summary: 'Enjoy panoramic ocean views in this luxurious retreat.',
  readMore:"This elegant 4-bedroom villa is located in the prestigious Herzliya Pituach neighborhood...",
  bedrooms: 4,
  bathrooms: 3,
  price: 1200000,
  areaSqFt: 3200,
  location: 'Laguna Beach, California',
  description: 'This stunning property offers unmatched views of the Pacific Ocean...',
  imageGallery: [
    { path: '/imageGallery/seaSideOne.svg' },
    { path: '/imageGallery/seaSideTwo.svg' },
    { path: '/imageGallery/seaSideThree.svg' },
    { path: '/imageGallery/seaSideFour.svg' },
    { path: '/imageGallery/seaSideFifth.svg' },
    { path: '/imageGallery/seaSideSixt.svg' },
    { path: '/imageGallery/seaSideSeventh.svg' },
    { path: '/imageGallery/seaSideNine.svg' },
    { path: '/imageGallery/seaSideEight.svg' },
  ],
}]



onMounted(()=>{
 console.log(buildings);
})







const activeTab = ref(0)
const activeImage = ref(0)
const handleTabChange = (newTab: number) => {
  activeTab.value = newTab
}
const handleImageChange = (newImage: number) => {
  activeImage.value = newImage
}


</script>

<template>
  <div v-if="buildings">
    <CardId
      :images="buildings[0].imageGallery"
      :active-image="activeImage"
      @update:active-tab="handleTabChange"
      @update:active-image="handleImageChange"
    />
  </div>
</template>
