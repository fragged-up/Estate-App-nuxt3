<script setup lang="ts">
  import { CONTACT_HERO } from '~/constants';
  useHead({
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    },
  ],
})
  useSeoMeta({ title: 'Contact Us' });
  const MainBlockHeaders = {
    primary: "Let's Connect",
    secondary: 'Discover Our Office Locations',
  };
  const MainBlockParagraphs = {
    secondary: "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team.",
    primary:
      "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein.",
  };
  const LocationData = [
    {
      id: 1,
      title: 'Main Headquarters',
      location: '123 Estatein Plaza, City Center, Metropolis',
      summary:
        'Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.',
      email: 'info@estatein.com',
      phone: '+1 (123) 456-7890',
      city: 'Metropolis',
      buttonLabel: 'Get Direction',
    },
    {
      id: 2,
      title: 'Regional Offices',
      location: '456 Urban Avenue, Downtown District, Metropolis',
      summary:
        "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
      email: 'info@estatein.com',
      phone: '+1 (123) 456-7890',
      city: 'Metropolis',
      buttonLabel: 'Get Direction',
    },
  ];
</script>

<template>
  <div class="contact-page">
    <DynamicHero variant="contact" />
    <div class="hero-highlight-container w-11/12 mx-auto mt-8">
      <HeroHighlight v-for="highlights in CONTACT_HERO" :key="highlights.id" :card="highlights" />
    </div>

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
              <div
                class="flex flex-col items-center justify-center gap-y-8 laptop:flex-row laptop:justify-around laptop:gap-20"
              >
                <ContactLocationCard v-for="data in LocationData" :key="data.id" :contact-data="data" />
              </div>
              <div class="mx-auto my-16 w-11/12">
                <ExploreCard />
              </div>
            </div>
          </template>
        </MainBlock>
      </section>
    </main>
  </div>
</template>
