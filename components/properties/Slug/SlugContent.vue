<script setup lang="ts">
  import type { FaqCardType } from '~/constants/types';
  import { formatSelectedProperty } from '~/utils';
  import type { PropertyDetailsProps } from '~/types';

  const props = defineProps<{
    slugProps: {
      id: number;
      slug: string;
      description: string;
      bedrooms: number;
      bathrooms: number;
      areaSqFt: number;
    };
  }>();

  const KEY_FEATURES = [
    {
      id: 1,
      svgImage: 'tabler:bolt-filled',
      cWrapper: 'grad-black border-l border-pr p-4',
      gapVal: 'gap-4',
      head: 'Expansive oceanfront terrace for outdoor entertaining',
    },
    {
      id: 2,
      svgImage: 'tabler:bolt-filled',
      cWrapper: 'grad-black border-l border-pr p-4',
      gapVal: 'gap-4',
      head: 'Gourmet kitchen with top-of-the-line appliances',
    },
    {
      id: 3,
      svgImage: 'tabler:bolt-filled',
      cWrapper: 'grad-black border-l border-pr p-4',
      gapVal: 'gap-4',
      head: 'Private beach access for morning strolls and sunset views',
    },
    {
      id: 4,
      svgImage: 'tabler:bolt-filled',
      cWrapper: 'grad-black border-l border-pr p-4',
      gapVal: 'gap-4',
      head: 'Master suite with a spa-inspired bathroom and ocean-facing balcony',
    },
    {
      id: 5,
      svgImage: 'tabler:bolt-filled',
      cWrapper: 'grad-black border-l border-pr p-4',
      gapVal: 'gap-4',
      head: 'Private garage and ample storage space',
    },
  ];

  const faqCard: FaqCardType = {
    title: 'Frequently Asked Questions',
    description:
      "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
    faqs: [
      {
        id: 4,
        question: 'How do I search for properties on Estatein?',
        answer: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
      },
      {
        id: 5,
        question: 'What documents do I need to sell my property through Estatein?',
        answer: 'Find out about the necessary documentation for listing your property with us.',
      },
      {
        id: 6,
        question: 'How can I contact an Estatein agent?',
        answer: 'Discover the different ways you can get in touch with our experienced agents',
      },
    ],
  };

  const MainBoxOne = {
    title: 'Inquire About Seaside Serenity Villa',
    description:
      'Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.',
  };

  const MainBoxTwo = {
    title: 'Comprehensive Pricing Details',
    description:
      'At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision',
  };
</script>

<template>
  <div class="w-full touch-manipulation">
    <div class="w-[90%] mx-auto space-y-12 laptop:flex laptop:gap-6 laptop:space-y-0">
      <div class="w-full my-2 grid grid-flow-row gap-y-8 rounded-xl border border-hg bg-fgl px-8 py-12 laptop:my-0 laptop:py-8">
        <div class="space-y-4">
          <h2 class="font-sans font-semibold text-white">Description</h2>
          <p class="font-sans text-sm font-medium text-gl">
            {{ props.slugProps.description }}
          </p>
        </div>
        <div class="grid grid-flow-col border-y border-hg py-12">
          <div class="left-s border-r border-hg">
            <IconBadge :svg-icon="'tabler:bed'" :gapped-value="'gap-1'" :head="'Bedrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ props.slugProps?.bedrooms ? props.slugProps.bedrooms.toString() : 'N/A' }}
            </p>
          </div>
          <div class="right-s pl-4">
            <IconBadge :svg-icon="'tabler:bath'" :gapped-value="'gap-1'" :head="'Bathrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ props.slugProps?.bathrooms ? props.slugProps.bathrooms.toString() : 'N/A' }}
            </p>
          </div>
        </div>
        <div class="area">
          <IconBadge :svg-icon="'mdi:ruler-square'" :gapped-value="'gap-1'" :head="'Area'" />
          <p class="font-sans text-lg font-semibold text-white">
            {{ props?.areaSqFt ? props.areaSqFt : 'N/A' }} Square Feet
          </p>
        </div>
      </div>

      <div class="amentites space-y-6 rounded-xl border border-hg p-8">
        <h3 class="font-sans text-lg font-semibold text-white">Key Features and Amenities</h3>
        <IconBadge
          v-for="box in KEY_FEATURES"
          :key="box.id"
          :svg-icon="box.svgImage"
          :container-wrapper="box.cWrapper"
          :gapped-value="box.gapVal"
          :head="box.head"
        />
      </div>
    </div>

    <section class="[&>*]:w-[90%] [&>*]:mx-auto touch-manipulation">
      <div class="box-rows">
        <div class="box-row-one laptop:my-12 laptop:grid laptop:grid-cols-[25%_70%] laptop:justify-between">
          <MainBox :headline="MainBoxOne.title" :paraline="MainBoxOne.description" />
          <FormId :location-text="formatSelectedProperty(props.slugProps)" />
        </div>

        <div class="box-row-two">
          <MainBox :headline="MainBoxTwo.title" :paraline="MainBoxTwo.description" />
          <div class="note my-4 rounded-xl border-t border-hg bg-mg p-4 laptop:flex laptop:gap-6 laptop:border-none">
            <h4 class="border-b border-hg pb-4 font-sans text-lg font-semibold text-white">Note</h4>
            <div class="laptop:border-l laptop:border-hg laptop:pl-4 laptop:text-center">
              <p class="py-4 font-sans text-sm font-medium text-gl laptop:text-center">
                The figures provided above are estimates and may vary depending on the property, location, and individual
                circumstances.
              </p>
            </div>
          </div>
          <div class="my-6">
            <ListingData :listing-price="props.slugProps.price" />
          </div>
        </div>

        <div class="box-row-faq touch-manipulation">
          <CardWrapper :card="faqCard.faqs" :title="faqCard.title" :description="faqCard.description" label="View All FAQ's" link="/services">
              <template #default="{ card }">
                <FaqCard v-for="faq in card" :key="faq.id" :faqs="faq"  />
              </template>
            </CardWrapper>
        </div>
      </div>
    </section>
  </div>
</template>
