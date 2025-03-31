<script setup lang="ts">
  import { faces, cards, faqs } from '~/constants/index';
  import {
    cardTwoHead,
    cardTwoParagraph,
    cardThirdHead,
    cardThirdParagraph,
  } from '~/constants/homePage';

  useSeoMeta({ title: 'Home' });

const headerTxt ="Featured Properties"
const paraTxt="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."



  const API = [
    {
      id: 1,
      slug: 'Sunset Vista',
      image: 'images/Beckos.svg',
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
      title: 'Breathtaking Oceanfront Property',
      summary: 'Enjoy panoramic ocean views in this luxurious retreat.',
      bedrooms: 4,
      bathrooms: 3,
      price: 1200000,
      areaSqFt: 3200,
      location: 'Laguna Beach, California',
      description:
        'This stunning property offers unmatched views of the Pacific Ocean, modern architecture, and luxurious amenities.',
    },
    {
      id: 2,
      slug: 'Urban Oasis',
      image: 'images/MetroCard.svg',
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
      title: 'Modern Downtown Apartment',
      summary: 'A sleek, urban residence in the heart of the city.',
      bedrooms: 2,
      bathrooms: 2,
      price: 850000,
      areaSqFt: 1800,
      location: 'Seattle, Washington',
      description:
        'Located in the vibrant city center, this modern apartment offers convenience, style, and fantastic views.',
    },
    {
      id: 3,
      slug: 'Mountain Escape',
      image: 'images/SeasideCard.svg',
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
      title: 'Rustic Cabin with Mountain Views',
      summary: 'Experience serenity in this cozy mountain retreat.',
      bedrooms: 3,
      bathrooms: 2,
      price: 450000,
      areaSqFt: 2200,
      location: 'Aspen, Colorado',
      description:
        'A charming cabin with rustic finishes, breathtaking mountain views, and close proximity to hiking trails.',
    },
  ];
</script>

<template>
  <main class="w-full bg-[#141414]">
    <div class="w-full">
      <HomeHero />
    </div>

    <div class="container mx-auto grid justify-center bg-fgl">
      <div class="mx-auto mt-32 grid w-11/12">
        <MainBlock
          :header-text="headerTxt"
          :para-text="paraTxt"
          :cont-style="'laptop:mx-0'"
          :sub-cont-style="'laptop:mx-0'"
          >
          <template #default>

            <PaginationWrapper :items="API">
              <template #default="{ items }">
                <HomeCard 
                 v-for="item in items"
                 :id="item.id"
                 :key="item.id" 
                 :slug="item.slug"
                 :summary="item.summary"
                 :title="item.title"
                 :image="item.image"
                 :bathrooms="item.bathrooms.toString()"
                 :bedrooms="item.bedrooms.toString()"
                 :price="item.price.toString()"
                  />
                </template>
            </PaginationWrapper>
          </template>

        </MainBlock>

        <MainBlock
          :header-text="cardTwoHead"
          :cont-style="'laptop:mx-0'"
          :sub-cont-style="'laptop:mx-0'"
          :para-text="cardTwoParagraph"
        >
          <template #default>
            <div class="cw flex flex-col gap-4 laptop:flex-row">
              <ClientCard
                v-for="(face, index) in faces"
                :key="index"
                :face-image="face.faceImage"
                :face-name="face.faceName"
                :face-location="face.faceLocation"
                :face-head="face.faceHead"
                :face-para="face.facePara"
              />
            </div>

            <ViewButton :button-text="'View All Properites'" :total-pages-number="'10'" />
          </template>
        </MainBlock>

        <MainBlock
          :header-text="cardThirdHead"
          :cont-style="'laptop:mx-0'"
          :sub-cont-style="'laptop:mx-0'"
          :para-text="cardThirdParagraph"
        >
          <template #default>
            <div class="laptop:flex laptop:flex-row laptop:justify-between laptop:gap-6">
              <FaqCard v-for="(faq, index) in faqs" :key="index" :faq-title="faq.faqTitle" :faq-text="faq.faqText" />
            </div>
            <Arrows />
            <ViewButton :button-text="'View All Properites'" :total-pages-number="'10'" />
          </template>
        </MainBlock>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .second-template {
    box-shadow: 1px -1px 18px 1px #262626;
  }
</style>
