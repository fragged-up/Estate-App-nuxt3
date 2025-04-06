<script setup lang="ts">
  import { scard_1, scard_2, keyFeatures, faqCard } from '~/constants';
  import { getPropertyById } from '~/server/utils/';
  import { useRoute } from '#imports';
  import {formatSelectedProperty,extractIdFromSlug} from "~/utils/formatters"

  const route = useRoute();
  const slugId = route.params.slugId as string;
  const id = extractIdFromSlug(slugId)
  const propertyItemId = getPropertyById(id);

  const activeNumber = ref<number>(0);
  const updateIndex = (newIndex: number) => {
    activeNumber.value = newIndex;
  };
  const selectedProperty = ref('')
  if(propertyItemId){
    selectedProperty.value =formatSelectedProperty(propertyItemId)
  }


</script>

<template>
  <div class="main">
    <header>
      <div class="p-4">
        <PropertyDetailsCard v-if="propertyItemId" :property-id="propertyItemId" @update-index="updateIndex" />
      </div>
    </header>

    <div class="2-blocks-cnt centerize-all mx-auto w-[90%] space-y-12 laptop:flex laptop:gap-6 laptop:space-y-0">
      <div  class="description my-2 grid grid-flow-row gap-y-8 rounded-xl border border-hg bg-fgl px-8 py-12 laptop:my-0 laptop:py-8">
        <div class="head-cnt space-y-4">
          <h2 class="font-sans font-semibold text-white">Description</h2>
          <p class="font-sans text-sm font-medium text-gl">
            {{ propertyItemId.description }}
          </p>
        </div>
        <div class="grid grid-flow-col border-y border-hg py-12">
          <div class="left-s border-r border-hg">
            <LineImg :svg-icon="'tabler:bed'" :gapped-value="'gap-1'" :head="'Bedrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ propertyItemId?.bedrooms ? propertyItemId.bedrooms.toString() : 'N/A' }}
            </p>
          </div>
          <div class="right-s pl-4">
            <LineImg :svg-icon="'tabler:bath'" :gapped-value="'gap-1'" :head="'Bathrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ propertyItemId?.bathrooms ? propertyItemId.bathrooms.toString() : 'N/A' }}
            </p>
          </div>
        </div>
        <div class="area">
          <LineImg :svg-icon="'mdi:ruler-square'" :gapped-value="'gap-1'" :head="'Area'" />
          <p class="font-sans text-lg font-semibold text-white">
            {{ propertyItemId?.areaSqFt ? propertyItemId.areaSqFt : 'N/A' }} Square Feet
          </p>
        </div>
      </div>

      <div class="amentites space-y-6 rounded-xl border border-hg p-8">
        <h3 class="font-sans text-lg font-semibold text-white">Key Features and Amenities</h3>

        <LineImg
          v-for="box in keyFeatures"
          :key="box.id"
          :svg-icon="box.svgImage"
          :container-wrapper="box.cWrapper"
          :gapped-value="box.gapVal"
          :head="box.head"
        />
      </div>
    </div>

    <section class="[&>*]:w-[90%] [&>*]:mx-auto">
      <div class="box-rows">
        <div class="box-row-one laptop:my-12 laptop:grid laptop:grid-cols-[25%_70%] laptop:justify-between">
          <MainBox :headline="scard_1.head" :paraline="scard_1.para" />
          <FormId :location-text="selectedProperty" />
        </div>

        <div class="box-row-two">
          <MainBox :headline="scard_2.head" :paraline="scard_2.para" />
          <div class="note my-4 rounded-xl border-t border-hg bg-mg p-4 laptop:flex laptop:gap-6 laptop:border-none">
            <h4 class="border-b border-hg pb-4 font-sans text-lg font-semibold text-white">Note</h4>
            <div class="laptop:border-l laptop:border-hg laptop:pl-4 laptop:text-center">
              <p class="py-4 font-sans text-sm font-medium text-gl laptop:text-center">
                The figures provided above are estimates and may vary depending on the propertyItemId, location, and
                individual circumstances.
              </p>
            </div>
          </div>
          <div class="my-6">
            <ListingData :listing-price="propertyItemId.price" />
          </div>
        </div>

        <div class="box-row-faq">
          <MainBlock
            :header-text="faqCard.title"
            :cont-style="'laptop:mx-0'"
            :sub-cont-style="'laptop:mx-0'"
            :para-text="faqCard.description" >

            <template #default>
              <div class="laptop:flex laptop:flex-row laptop:justify-between laptop:gap-6">
                <FaqCard v-for="faq in faqCard.faqs" :key="faq.id" :faqs="faq" />
              </div>
              <ViewButton :button-text="'\View All FAQ\'s'" />
            </template>
          </MainBlock>
        </div>

      </div>
    </section>
  </div>
</template>

