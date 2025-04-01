<script setup lang="ts">
  import { scard_1,scard_2,keyFeatures,faqCard } from '~/constants';
  import { useRoute, useSeoMeta } from '#imports'

  const route = useRoute()
  const id = ref(route.params.id)
const result = await $fetch(`/api/properties/${id}`)
const me = JSON.stringify(result)
console.log(me);
useSeoMeta({
  title: `${id} | Property #${id}`,
  description: `Explore ${id}, property #${id}.`,

})
watch(() => route.params.id, (newId:any) => {
  id.value = newId
  refresh()
})
  const activeNumber = ref<number>(0);
  const updateIndex = (newIndex: number) => {
    activeNumber.value = newIndex;
  };



function refresh() {
  throw new Error('Function not implemented.');
}
</script>

<template v-if="property" >
  <div class="main">
    <header>
      <div class="p-4">
        <CardId
        v-if="property"
          :slug-id="property.slug"
          :image-id="property.image"
          :price-id="property.price"
          :location-id="property.location"
          :image-gallery-id="property.imageGallery"
          :active-index="activeNumber"
          @update-index="updateIndex"
        />
      </div>
    </header>

    <div class="2-blocks-cnt centerize-all mx-auto w-[90%] space-y-12 laptop:flex laptop:gap-6 laptop:space-y-0">
      <div
        class="description my-2 grid grid-flow-row gap-y-8 rounded-xl border border-hg bg-fgl px-8 py-12 laptop:my-0 laptop:py-8"
      >
        <div class="head-cnt space-y-4">
          <h2 class="font-sans font-semibold text-white">Description</h2>
          <p class="font-sans text-sm font-medium text-gl">
            {{ property.description }}
          </p>
        </div>
        <div class="grid grid-flow-col border-y border-hg py-12">
          <div class="left-s border-r border-hg">
            <LineImg :svg-icon="'tabler:bed'" :gapped-value="'gap-1'" :head="'Bedrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ property?.bedrooms ? property.bedRooms.toString() : 'N/A' }}
            </p>
          </div>
          <div class="right-s pl-4">
            <LineImg :svg-icon="'tabler:bath'" :gapped-value="'gap-1'" :head="'Bathrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ property?.bathrooms ? property.bathrooms.toString() : 'N/A' }}
            </p>
          </div>
        </div>
        <div class="area">
          <LineImg :svg-icon="'mdi:ruler-square'" :gapped-value="'gap-1'" :head="'Area'" />
          <p class="font-sans text-lg font-semibold text-white">
            {{ property?.areaSqFt ? property.areaSqFt : 'N/A' }} Square Feet
          </p>
        </div>
      </div>

      <div class="amentites space-y-6 rounded-xl border border-hg p-8">
        <h3 class="font-sans text-lg font-semibold text-white">Key Features and Amenities</h3>

        <LineImg
          v-for="(box, index) in keyFeatures"
          :key="index"
          :svg-icon="box.svgImage"
          :container-wrapper="box.cWrapper"
          :gapped-value="box.gapVal"
          :head="box.head"
        />
      </div>
    </div>

    <section class="centerize-all *:space-y-20">
      <div class="box-rows">
        <div class="box-row-one laptop:my-12 laptop:grid laptop:grid-cols-[25%_70%] laptop:justify-between">
          <MainBox :headline="scard_1.head" :paraline="scard_1.para" />
          <FormId :location-text="property.location" />
        </div>

        <div class="box-row-two">
          <MainBox :headline="scard_2.head" :paraline="scard_2.para" />
          <div class="note my-4 rounded-xl border-t border-hg bg-mg p-4 laptop:flex laptop:gap-6 laptop:border-none">
            <h4 class="border-b border-hg pb-4 font-sans text-lg font-semibold text-white">Note</h4>
            <div class="laptop:border-l laptop:border-hg laptop:pl-4 laptop:text-center">
              <p class="py-4 font-sans text-sm font-medium text-gl laptop:text-center">
                The figures provided above are estimates and may vary depending on the property, location, and
                individual circumstances.
              </p>
            </div>
          </div>
          <div class="my-6">
            <ListingData :listing-price="property.price" />
          </div>
        </div>

        <div class="box-row-faq">
          <MainBlock
            :header-text="faqCard.head"
            :cont-style="'laptop:mx-0'"
            :sub-cont-style="'laptop:mx-0'"
            :para-text="faqCard.para"
          >
            <template #default>
              <div class="laptop:flex laptop:flex-row laptop:justify-between laptop:gap-6">
                <FaqCard
                  v-for="(faq, index) in faqCard.faqs"
                  :key="index"
                  :faq-title="faq.faqTitle"
                  :faq-text="faq.faqText"
                />
              </div>
              <ViewButton :button-text="'\View All FAQ\'s'" />
            </template>
          </MainBlock>
        </div>
      </div>
    </section>
  </div>
  
</template>

<style scoped>
  .grad-black {
    background: linear-gradient(to left, rgba(26, 26, 26, 0), rgba(26, 26, 26, 1));
  }
  .centerize-all > * {
    width: 90%;
    margin-inline: auto;
  }
</style>
