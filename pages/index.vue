<script setup>
  //   import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  // import DesktopHeader from './components/DesktopHeader.vue';
  // import MobileHeader from './components/MobileHeader.vue';

  // const width = ref(window.innerWidth);

  // const currentComponent = computed(() => {
  //   return width.value > 1440 ? DesktopHeader : MobileHeader;
  // });

  // const updateWidth = () => {
  //   width.value = window.innerWidth;
  // };

  // onMounted(() => {
  //   window.addEventListener('resize', updateWidth);
  //   updateWidth(); // Initial check
  // });

  // onBeforeUnmount(() => {
  //   window.removeEventListener('resize', updateWidth);
  // });

  const cardOneHead = 'Featured Properties'
  const cardOneParagraph = 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.'
  const cardTwoHead = 'What Our Clients Say'
  const cardTwoParagraph = 'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'
  const cardThirdHead = 'Frequently Asked Questions'
  const cardThirdParagraph =
    "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."

  const faces = [
    {
      faceImage: '/home/wadeFace.svg',
      faceName: 'Wade Warren',
      faceLocation: 'USA, California',
      faceHead: 'Exceptional Service!',
      facePara: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
      faceImage: '/home/wadeFace.svg',
      faceName: 'Wade Warren',
      faceLocation: 'USA, California',
      faceHead: 'Exceptional Service!',
      facePara: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
      faceImage: '/home/wadeFace.svg',
      faceName: 'Wade Warren',
      faceLocation: 'USA, California',
      faceHead: 'Exceptional Service!',
      facePara: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
  ]

  const cards = [
    {
      cardImage: '/home/building.svg',
      cardTitle: 'Rustic Retreat Cottage',
      cardText: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '500,000',
    },
    {
      cardImage: '/images/MetroCard.svg',
      cardTitle: 'Metropolitan Haven',
      cardText: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
      bedRooms: 2,
      bathRooms: 2,
      cardPrice: '500,000',
    },
    {
      cardImage: '/images/SeasideCard.svg',
      cardTitle: 'Rustic Retreat Cottage',
      cardText: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '500,000',
    },
  ]

  const faqs = [
    {
      faqTitle: 'How do I search for properties on Estatein?',
      faqText: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
    },
    {
      faqTitle: 'What documents do I need to sell my property through Estatein?',
      faqText: 'Find out about the necessary documentation for listing your property with us.',
    },
    {
      faqTitle: 'How can I contact an Estatein agent?',
      faqText: 'Discover the different ways you can get in touch with our experienced agents',
    },
  ]
</script>

<template>
  <main class="w-full bg-[#141414]">
    <div class="w-full">
      <HomeHeroMobile />
    </div>

    <div class="container mx-auto grid justify-center bg-[#141414]">
      <div class="">
        <div class="mx-auto mt-32 grid w-11/12 gap-y-[50px]">
          <div class="first-template mx-auto">
            <h1 class="mb-[20px] font-sans text-3xl font-semibold text-white">
              Discover Your Dream
              <br />
              Property with Estatein
            </h1>
            <p class="mb-[20px] pt-4 text-base font-medium text-[#999999]">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>

            <button class="mx-auto my-2 w-full rounded-2xl border-2 border-[#262626] p-5 text-center font-sans text-base font-medium text-white">Learn More</button>
            <button class="mx-auto my-2 w-full rounded-2xl bg-[#703BF7] p-5 text-center font-sans text-base font-medium text-white">Browse Properties</button>
          </div>

          <CardThree />
          <CardFour />

          <div class="p4 w-full">
            <MainBlock :headerText="cardOneHead" :contStyle="'laptop:mx-0'" :subContStyle="'laptop:mx-0'" :paraText="cardOneParagraph" :deskHeader="true">
              <template #default>
                <div class="property-cont laptop:flex laptop:gap-6">
                  <PropertyCard
                    v-for="(card, index) in cards"
                    :key="index"
                    :cardImage="card.cardImage"
                    :cardTitle="card.cardTitle"
                    :cardText="card.cardText"
                    :bedRooms="card.bedRooms"
                    :bathRooms="card.bathRooms"
                    :cardPrice="card.cardPrice"
                  />
                </div>

                <ViewButton :buttonText="'View All Properites'" :totalPagesNumber="'10'" />
              </template>
            </MainBlock>
            <MainBlock :headerText="cardTwoHead" :contStyle="'laptop:mx-0'" :subContStyle="'laptop:mx-0'" :paraText="cardTwoParagraph">
              <template #default>
                <div class="cw flex flex-col gap-4 laptop:flex-row">
                  <ClientCard
                    v-for="(faces, index) in faces"
                    :key="index"
                    :faceImage="faces.faceImage"
                    :faceName="faces.faceName"
                    :faceLocation="faces.faceLocation"
                    :faceHead="faces.faceHead"
                    :facePara="faces.facePara"
                  />
                </div>
                <ViewButton :buttonText="'View All Properites'" :totalPagesNumber="'10'" />
              </template>
            </MainBlock>
            <MainBlock :headerText="cardThirdHead" :contStyle="'laptop:mx-0'" :subContStyle="'laptop:mx-0'" :paraText="cardThirdParagraph">
              <template #default>
                <div class="laptop:flex laptop:flex-row laptop:justify-between laptop:gap-6">
                  <FaqCard v-for="(faq, index) in faqs" :key="index" :faqTitle="faq.faqTitle" :faqText="faq.faqText" />
                </div>

                <ViewButton :buttonText="'View All Properites'" :totalPagesNumber="'10'" />
              </template>
            </MainBlock>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .second-template {
    box-shadow: 1px -1px 18px 1px #262626;
  }
</style>
