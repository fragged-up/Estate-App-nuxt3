<script setup>
  import { faces, cards, faqs } from '~/constants/index'
  import CircleCTA from '~/components/molecules/CircleCTA.vue'
  import {
    cardOneHead,
    cardOneParagraph,
    cardTwoHead,
    cardTwoParagraph,
    cardThirdHead,
    cardThirdParagraph,
  } from '~/constants/homePage'
  useSeoMeta({
    title: 'Home',
  })


</script>

<template>
  <main class="w-full bg-[#141414]">
    <div class="w-full">
      <HomeHeroMobile />
 <HeroDesktop />
      <CircleCTA />
    </div>

    <div class="container mx-auto grid justify-center bg-fgl">
      <div class="mx-auto mt-32 grid w-11/12">
        <MainBlock
          :header-text="cardOneHead"
          :cont-style="'laptop:mx-0'"
          :sub-cont-style="'laptop:mx-0'"
          :para-text="cardOneParagraph"
          :desk-header="true">
          <template #default>
            <div class="min-w-[100%] overflow-x-scroll">
              <div
                v-for="(card, index) in cards"
                :key="index"
                class="mx-4 my-6 inline-block w-[80%]">
                <PropertyCard
                  :card-image="card.cardImage"
                  :card-title="card.cardTitle"
                  :card-text="card.cardText"
                  :bed-rooms="card.bedRooms"
                  :bath-rooms="card.bathRooms"
                  :card-price="card.cardPrice" />

                  <!-- <PropertyCard
                  :key="index" 
                  :card-image="card.cardImage"
                  :card-title="card.cardTitle"
                  :card-text="card.cardText"
                  :bed-rooms="card.bedRooms"
                  :bath-rooms="card.bathRooms"
                  :card-price="card.cardPrice" /> -->
              </div>
            </div>

            <ViewButton
              :btn-text="'View All Properites'"
              :total-pages-number="'10'" />
          </template>
        </MainBlock>

        <MainBlock
          :header-text="cardTwoHead"
          :cont-style="'laptop:mx-0'"
          :sub-cont-style="'laptop:mx-0'"
          :para-text="cardTwoParagraph">
          <template #default>
            <div class="cw flex flex-col gap-4 laptop:flex-row">
              <ClientCard
                v-for="(face, index) in faces"
                :key="index"
                :face-image="face.faceImage"
                :face-name="face.faceName"
                :face-location="face.faceLocation"
                :face-head="face.faceHead"
                :face-para="face.facePara" />
            </div>
            <ViewButton
              :btn-text="'View All Properites'"
              :total-pages-number="'10'" />
          </template>
        </MainBlock>

        <MainBlock
          :header-text="cardThirdHead"
          :cont-style="'laptop:mx-0'"
          :sub-cont-style="'laptop:mx-0'"
          :para-text="cardThirdParagraph">
          <template #default>
            <div
              class="laptop:flex laptop:flex-row laptop:justify-between laptop:gap-6">
              <FaqCard
                v-for="(faq, index) in faqs"
                :key="index"
                :faq-title="faq.faqTitle"
                :faq-text="faq.faqText" />
            </div>


            <Arrows />
            <ViewButton
              :btn-text="'View All Properites'"
              :total-pages-number="'10'" />
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
