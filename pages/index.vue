<script setup lang="ts">
  import { testimonials, faqs, HERO_HIGHLIGHTS } from '~/constants/index';
  import CardWrapper from '~/components/organisms/CardWrapper.vue';
  useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
})
  useSeoMeta({ title: 'Home' });
  const FEATURED_TITLE = 'Featured Properties'
  const FEATURED_DESCRIPTION = 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.'
  const CLIENTS_SAY_TITLE = 'What Our Clients Say'
  const CLIENTS_SAY_DESCRIPTION = 'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'
  const FAQ_TITLE = 'Frequently Asked Questions'
  const FAQ_DESCRIPTION = "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
  const { data: properties } = await useFetch('/api/properties');
</script>

<template>
  <main class="w-full bg-[#141414] touch-manipulation">
    <div class="w-full">
      <HomeHero />
      <div class="hero-highlight-container w-11/12 mx-auto my-10">
        <HeroHighlight v-for="highlight in HERO_HIGHLIGHTS" :key="highlight.id" :card="highlight" />
      </div>
    </div>

    <section class="layout">
        <CardWrapper :card="properties" :title="FEATURED_TITLE" :description="FEATURED_DESCRIPTION" label="View All Properties" path="/properties">
          <template #default="{ card }">
            <PropertyCard v-for="item in card" :key="item.id" :item="item" :variant="'homePage'"/>
          </template>
        </CardWrapper>

        <CardWrapper :card="testimonials" :title="CLIENTS_SAY_TITLE" :description="CLIENTS_SAY_DESCRIPTION" label="View All Testimonials" path="/services">
          <template #default="{ card }">
            <TestimonialCard v-for="testi in card" :key="testi.id" :testimonial="testi" />
          </template>
        </CardWrapper>

        <CardWrapper :card="faqs" :title="FAQ_TITLE" :description="FAQ_DESCRIPTION" label="View All FAQ's" path="/aboutUs">
          <template #default="{ card }">
            <FaqCard v-for="faq in card" :key="faq.id" :faqs="faq" />
          </template>
        </CardWrapper>
    </section>
  </main>
</template>
