<script setup lang="ts">
  import { testimonials, faqs, HERO_HIGHLIGHTS } from '~/constants/index';
  import { cardTwoHead, cardTwoParagraph, cardThirdHead, cardThirdParagraph } from '~/constants/homePage';

  useSeoMeta({ title: 'Home' });

  const headerTxt = 'Featured Properties';
  const paraTxt =
    'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.';
  const { data: properties } = await useFetch('/api/properties');
  console.log(properties);
  const API = [
    {
      id: 1,
      slug: 'Sunset Vista',
      image: '/images/Beckos.svg',
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
      readMore:
        "This elegant 4-bedroom villa is located in the prestigious Herzliya Pituach neighborhood, just steps from the Mediterranean shoreline. Designed with both comfort and sophistication in mind, it features a private infinity pool, floor-to-ceiling glass walls, and smart home technology throughout. The spacious open-plan kitchen flows seamlessly into the living area, perfect for entertaining. Nearby, you'll find upscale dining, international schools, and yacht marina access — a true gem for families or investors seeking exclusivity in Israel's prime coastal real estate market.",
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
      image: '/images/MetroCard.svg',
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
      readMore:
        'Set on over 10 dunams of private land, this expansive country estate offers 6 bedrooms, a natural spring-fed pool, olive groves, and vineyard potential. The property blends rustic charm with modern upgrades, including underfloor heating, solar power, and high-speed fiber internet. Located minutes from boutique wineries, hiking trails, and historic villages, it offers a unique opportunity to enjoy peaceful living while staying connected. Perfect as a family retreat, boutique hotel project, or a lifestyle-driven investment.',
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
      image: '/images/SeasideCard.svg',
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
      readMore:
        "This is situated in one of Tel Aviv's most in-demand towers, offering a breathtaking cityscape from the 21st floor. With 24/7 concierge service, private gym, and rooftop lounge, the building redefines urban convenience. Inside, you'll find designer finishes, a state-of-the-art kitchen, and energy-efficient systems. Located near Sarona Market, tech hubs, and nightlife, this unit is ideal for professionals or those seeking a high-return investment opportunity in the heart of Tel Aviv.",
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
  <main class="w-full bg-[#141414] touch-manipulation">
    <div class="w-full">
      <HomeHero />
      <div class="hero-highlight-container w-11/12 mx-auto mt-8">
        <HeroHighlight v-for="highlight in HERO_HIGHLIGHTS" :key="highlight.id" :card="highlight" />
      </div>
    </div>

    <section class="section-layout bg-fgl">
      <div class="section-container">
        <MainBlock
          :header-text="headerTxt"
          :para-text="paraTxt"
          :cont-style="'laptop:mx-0'"
          :sub-cont-style="'laptop:mx-0'"
        >
          <template #default>
            <PaginationWrapper :items="properties">
              <template #default="{ items }">
                <PropertyCard v-for="item in items" :key="item.id" :item="item" :variant="'homePage'" />
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
              <TestimonialCard v-for="testi in testimonials" :key="testi.id" :testimonial="testi" />
            </div>

            <!-- <ViewButton :button-text="'View All Properites'" :total-items="faqs.length" /> -->
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
              <FaqCard v-for="faq in faqs" :key="faq.id" :faqs="faq" />
            </div>
            <ViewButton :button-text="'View All Properites'" :items="faqs" />
          </template>
        </MainBlock>

        <CardWrapper :card="faqs" :title="'helo'" :description="'yo'" :button-text="'View Properties'">
          <template #default="{ card }">
            <FaqCard v-for="faq in card" :key="faq.id" :faqs="faq" />
          </template>
        </CardWrapper>
      </div>
    </section>
  </main>
</template>
