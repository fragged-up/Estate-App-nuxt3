<script setup lang="ts">
import { inputsFields, selectFields } from '~/constants'
import { useSeoMeta } from '#imports'

useSeoMeta({ title: 'Properties' })

const pagination = usePaginationStore()
const router = useRouter()
const itemsPerPage = 3

const { data: collageProperties } = await useFetch('/api/properties')
const { data: properties } = await useFetch('/api/test')

const paginatedProperties = computed(() => {
  if (!properties.value) return []
  const start = (pagination.currentPage - 1) * itemsPerPage
  return properties.value.slice(start, start + itemsPerPage)
})
watch(
  properties,
  (val: Array<any> | null | undefined) => {
    if (val) {
      pagination.setTotal(Math.ceil(val.length / itemsPerPage))
    }
  },
  { immediate: true }
)

const sendTheData = (property: any) => {
  router.push(`/Properties/${property.propertyName}`)
}
</script>

<template>
  <div>
    <DynamicHero variant="properties" />

    <main>
     <PaginationWrapper :items="properties">
       <template #default="{ items }">
         <PropertyVariantCard 
         v-for="(item,index) in items"
         :key="index"
         :variant="properties"
         :card-image="property.image"
         :card-title="proprety.title"
         :card-price="proprety.price"
         :tag-line="property.locationText"
         :description="property.description"
         /> 
         
        </template>
        </PaginationWrapper>
    
      
      />
      <section>
        <div class="box-c">
          <BoxInput />
        </div>

        <div class="mt-10 space-y-8">
          <PaginationWrapper :items="properties">
            <template #default="{ items }">
              <FeaturedPropertyCard
                v-for="property in items"
                :key="property.id"
                :image-key="property.image"
                :title="property.title"
                :description="property.description"
                :price="property.price"
                :location-text="property.locationText"
                @click="sendTheData"
              />
            </template>
          </PaginationWrapper>
        </div>

        <div class="property">
          <MainBlock
            header-text="Discover a World of Possibilities"
            para-text="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home."
          >
            <template #default>
              <div class="min-w-[100%] overflow-x-scroll whitespace-nowrap border border-blue-800">
                <div class="min-w-[100%] overflow-x-hidden grid grid-cols-1">
                  <div
                    v-for="(property, index) in collageProperties"
                    :key="index"
                    class="mx-auto my-6 w-full"
                  >
                    <PropertyCard
                      :property-name="property.propertyName"
                      :card-image="property.cardImage"
                      :card-title="property.cardTitle"
                      :card-text="property.cardText"
                      :bed-rooms="property.bedRooms"
                      :bath-rooms="property.bathRooms"
                      :card-price="property.cardPrice"
                      :description="property.description"
                      :square-feet="property.squareFeet"
                      :property-location="property.propertyLocation"
                      :property-images="property.propertyImages"
                      @click="sendTheData(property)"
                    />
                  </div>
                </div>
              </div>

              <!-- אם הפגינציה הזו מיותרת אפשר למחוק -->
              <div class="my-8 flex items-center justify-between">
                <button class="arrows-bg text-[#808080]">&leftarrow;</button>
                <p class="pad-fix:whitespace-nowrap p-2">
                  <span class="text-white">01</span>
                  <span class="text-[#808080]">of</span>
                  <span class="text-[#808080]">10</span>
                </p>
                <button class="arrows-bg text-white">&rightarrow;</button>
              </div>
            </template>
          </MainBlock>
        </div>

        <div class="last-div mx-auto w-11/12">
          <MainBlock
            header-text="Let's Make it Happen"
            para-text="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
          >
            <template #default>
              <Input
                v-for="(inp, index) in inputsFields"
                :key="index"
                :for="inp.for"
                :label="inp.label"
                :input-type="inp.inputType"
                :name="inp.name"
                :placeholder="inp.placeHolder"
              />
              <div class="select-input-group">
                <SelectInput
                  v-for="(selInp, index) in selectFields"
                  :key="index"
                  :select-head="selInp.selectHead"
                  :place-holder="selInp.placeHolder"
                  :label="selInp.label"
                  :options="selInp.options"
                />
                <Preferred />
              </div>
            </template>
          </MainBlock>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.fallback {
  background: linear-gradient(
    90deg,
    rgba(38, 38, 38, 1) 0%,
    rgba(38, 38, 38, 1) 100%,
    rgba(38, 38, 38, 0.5) 53%
  );
}
</style>
