<script setup>
  const hero_Head = 'Find Your Dream Property'
  const hero_Para =
    'Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey'
  const card_Head_1 = 'Discover a World of Possibilities'
  const card_Head_2 = "Let's Make it Happen"
  const card_Para_1 = 'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'
  const card_Para_2 =
    "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."

  const card_title = 'Seaside Serenity Villa'
  const card_text = 'Wake up to the soothing melody of waves. This beachfront villa offers..'
  const card_price = '1,250,000'
  const card_bedrooms = 7
  const card_bathrooms = 6

  const properties = ref([
    {
      cardImage: '/Beckos.svg',
      cardTitle: 'Property Title 1',
      cardText: 'Property description 1',
      bedRooms: 3,
      bathRooms: 2,
      cardPrice: '500,000',
    },
    {
      cardImage: '/Beckos.svg',
      cardTitle: 'Property Title 2',
      cardText: 'Property description 2',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '750,000',
    },
    {
      cardImage: '/Beckos.svg',
      cardTitle: 'Property Title 2',
      cardText: 'Property description 2',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '750,000',
    },
    {
      cardImage: '/Beckos.svg',
      cardTitle: 'Property Title 1',
      cardText: 'Property description 1',
      bedRooms: 3,
      bathRooms: 2,
      cardPrice: '500,000',
    },
    {
      cardImage: '/Beckos.svg',
      cardTitle: 'Property Title 2',
      cardText: 'Property description 2',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '750,000',
    },
    {
      cardImage: '/Beckos.svg',
      cardTitle: 'Property Title 2',
      cardText: 'Property description 2',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '750,000',
    },
  ])
</script>

<template>
  <div class="div">
    <BoxInput />
  </div>

  <div class="property mx-auto w-11/12">
    <MainBox :headline="card_Head_1" :paraline="card_Para_1" :wrapStyle="'mx-auto'" />
    <!-- For Visualling Better the Container border-4 border-red-600 -->
    <div class="laptop:max-w-11/12 mx-auto grid w-full auto-cols-max grid-flow-col gap-x-12 overflow-x-scroll border-4 border-red-600">
      <div class="my-6" v-for="(property, index) in properties" :key="index">
        <PropertyCard
          :card-image="property.cardImage"
          :card-title="property.cardTitle"
          :card-text="property.cardText"
          :bed-rooms="property.bedRooms"
          :bath-rooms="property.bathRooms"
          :card-price="property.cardPrice"
        />
      </div>
      <ViewButton :buttonText="'View All Properites'" :totalPagesNumber="'10'" />
    </div>

    <div class="my-8 flex items-center justify-between">
      <button class="arrows-bg text-[#808080]">&leftarrow;</button>
      <p class="pad-fix:whitespace-nowrap p-2">
        <span class="text-white">{{ (pagesNumber = '01') }}</span>
        <span class="text-[#808080]">of</span>
        <span class="text-[#808080]">{{ (totalPagesNumber = '10') }}</span>
      </p>
      <button class="arrows-bg text-white">&rightarrow;</button>
    </div>
  </div>

  <div class="form-section">
    <PropertyForm />
  </div>
</template>

<style scoped></style>
