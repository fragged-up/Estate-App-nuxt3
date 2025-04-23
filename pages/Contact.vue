<script setup lang="ts">
import { CONTACT_HERO } from '~/constants';
  useSeoMeta({  title: 'Contact Us',})
  const MainBlockHeaders = {
    primary:"Let's Connect",
    secondary:"Discover Our Office Locations"

  }
  const MainBlockParagraphs = {
  secondary:"Estatein is here to serve you across multiple locations. Whether you're looking to meet our team.",
  primary:"We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein."
  }

</script>

<template>
  <div class="contact-page">
    <DynamicHero variant="contact"/>
   <div class="hero-highlight-container w-11/12 mx-auto mt-8"> <HeroHighlight v-for="highlights in CONTACT_HERO" :key="highlights.id" :card="highlights" /></div>

    <main class="main-contact">
      <MainBlock :header-text="MainBlockHeaders.primary" :para-text="MainBlockHeaders.secondary">
      <template #default>
         <FormContact />
      </template>
      </MainBlock>

      <section>
        <MainBlock :header-text="MainBlockHeaders.secondary" :para-text="MainBlockParagraphs.secondary">
          <template #top>
            <div class="my-6">
            <Office />
          </div>
         </template>

          <template #default>
            <div class="mx-auto w-11/12">
              <div class="flex flex-col items-center justify-center gap-y-8 laptop:flex-row laptop:justify-around laptop:gap-20">
                <CardOffice><template #first /></CardOffice>
                <CardOffice><template #second /></CardOffice>
              </div>
              <div class="mx-auto my-16 w-11/12"><ExploreCard /></div>
            </div>
          </template>
        </MainBlock>
      </section>
    </main>
  </div>
</template>

