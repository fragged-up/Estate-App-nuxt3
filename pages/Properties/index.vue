<script setup>
  // inputsFields
  import { hero, card_1, card_2 } from '~/constants/propertiesPageConstants'
  import { inputsFields, selectFields } from '~/constants'

  useSeoMeta({
    title: 'Properties',
  })
  const router = useRouter()
  const { data: collageProperties } = useFetch('/api/properties')
  const usePropertyState = () => useState('propertyState', () => ({}))
  console.log('COLLAGE PROERTIES : ', collageProperties)

  console.log('USEPROPERTYSTATE FROM INDEX.VUE :', usePropertyState)
  const sendTheData = property => {
    const propertyState = usePropertyState()
    propertyState.value = property // Set the property data in the state

    router.push({
      path: `/Properties/${property.propertyName}`,
    })
  }
</script>

<template>
  <div>
    <header class="fallback w-full border-b border-[#262626] px-6 py-12">
      <h1 class="font-sans text-3xl font-semibold text-white">
        {{ hero.head }}
      </h1>
      <p class="py-6 font-sans text-sm font-medium text-[#999999]">
        {{ hero.para }}
      </p>
    </header>
    <div>
      <main>
        <section>
          <div class="box-c">
            <BoxInput />
          </div>

          <div class="property">
            <MainBlock :header-text="card_1.head" :para-text="card_1.para">
              <template #default>
               <div class="min-w-[100%] overflow-x-scroll whitespace-nowrap border border-blue-800">
                  <div class="min-w-[100%] overflow-x-hidden grid grid-cols-1">
                    <div
                       v-for="(property, index) in collageProperties"
                      :key="index"
                      class="mx-auto my-6 w-full ">
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
                        @click="sendTheData(property)" />
                    </div>
                  </div>
               </div>
                

                <div class="my-8 flex items-center justify-between">
                  <button class="arrows-bg text-[#808080]">&leftarrow;</button>
                  <p class="pad-fix:whitespace-nowrap p-2">
                    <span class="text-white">{{ pagesNumber = '01' }}</span>
                    <span class="text-[#808080]">of</span>
                    <span class="text-[#808080]">
                      {{ totalPagesNumber = '10' }}
                    </span>
                  </p>
                  <button class="arrows-bg text-white">&rightarrow;</button>
                </div>
              </template>
            </MainBlock>
          </div>

          <div class="last-div mx-auto w-11/12">
            <MainBlock :header-text="card_2.head" :para-text="card_2.para">
              <template #default>
                <Input
                  v-for="(inp, index) in inputsFields"
                  :key="index"
                  :for="inp.for"
                  :label="inp.label"
                  :input-type="inp.inputType"
                  :name="inp.name"
                  :placeholder="inp.placeHolder" />

                <div class="select-input-group">
                  <SelectInput
                    v-for="(selInp, index) in selectFields"
                    :key="index"
                    :select-head="selInp.selectHead"
                    :place-holder="selInp.placeHolder"
                    :label="selInp.label"
                    :options="selInp.options" />

                  <Preferred />
                </div>
              </template>
            </MainBlock>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
  .fallback {
    background: rgb(38, 38, 38);
    background: linear-gradient(90deg, rgba(38, 38, 38, 1) 0%, rgba(38, 38, 38, 1) 100%, (rgba(38, 38, 38) 53%, rgba(38, 38, 38, 0.5) 0%));
    /* background: #262626, linear-gradient(to right, #262626 0%, #262626 100%), linear-gradient(to left, #262626 53%, rgba(38, 38, 38, 0) 0%); */
  }
</style>
