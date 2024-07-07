<script setup>
  const router = useRouter()
  const { data: properties } = useFetch('/api/properties')

  // Function to set the property data in a state
  const usePropertyState = () => useState('propertyState', () => ({}))

  const sendTheData = property => {
    const propertyState = usePropertyState()
    propertyState.value = property // Set the property data in the state

    router.push({
      path: `/Properties/${property.propertyName}`,
    })
  }
  const hero = {
    head: 'Find Your Dream Property',
    para: 'Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey',
  }
  const card_1 = {
    head: 'Discover a World of Possibilities',
    para: 'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home',
  }
  const card_2 = {
    head: "Let's Make it Happen",
    para: "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.",
  }
</script>

<template>
  <header class="fallback w-full border-b border-[#262626] px-6 py-12">
    <h1 class="font-sans text-3xl font-semibold text-white">{{ hero.head }}</h1>
    <p class="py-6 font-sans text-sm font-medium text-[#999999]">{{ hero.para }}</p>
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
              <div class="block min-w-[100%] overflow-x-scroll whitespace-nowrap">
                <div class="mx-4 my-6 inline-block w-[80%]" v-for="(property, index) in properties" :key="index">
                  <PropertyCard
                    :propertyName="property.propertyName"
                    :cardImage="property.cardImage"
                    :cardTitle="property.cardTitle"
                    :cardText="property.cardText"
                    :bedRooms="property.bedRooms"
                    :bathRooms="property.bathRooms"
                    :cardPrice="property.cardPrice"
                    :description="property.description"
                    :squareFeet="property.squareFeet"
                    :propertyLocation="property.propertyLocation"
                    :propertyImages="property.propertyImages"
                    @click="sendTheData(property)"
                  />
                </div>
              </div>
              <!-- <PropertyCard :card-image="'/Beckos.svg'" :card-title="card_title" :card-text="card_text"
                :bed-rooms="card_bedrooms" :bath-rooms="card_bathrooms" :card-price="card_price" /> -->
              <div class="my-8 flex items-center justify-between">
                <button class="arrows-bg text-[#808080]">&leftarrow;</button>
                <p class="pad-fix:whitespace-nowrap p-2">
                  <span class="text-white">{{ (pagesNumber = '01') }}</span>
                  <span class="text-[#808080]">of</span>
                  <span class="text-[#808080]">{{ (totalPagesNumber = '10') }}</span>
                </p>
                <button class="arrows-bg text-white">&rightarrow;</button>
              </div>
            </template>
          </MainBlock>
        </div>

        <div class="last-div mx-auto w-11/12">
          <MainBlock :header-text="card_2.head" :para-text="card_2.para">
            <template #default>
              <Input :for="'firstName'" :label="'First Name'" :input-type="'text'" :name="'firstName'" :placeholder="'Enter First Name'" />
              <Input :for="'lastName'" :label="'Last Name'" :input-type="'text'" :name="'lastName'" :placeholder="'Enter Last Name'" />
              <Input :for="'Email'" :label="'Email'" :input-type="'email'" :name="'Email'" :placeholder="'Enter Email'" />
              <Input :for="'phone'" :label="'Phone'" :input-type="'number'" :name="'phone'" :placeholder="'Enter Phone'" />

              <div class="">
                <SelectInput :select-head="'Preferred Location'" :place-holder="'Select Location'" :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
                <SelectInput :select-head="'Property Type'" :place-holder="'Select Property Type'" :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
                <SelectInput :select-head="'No. of Bathrooms'" :place-holder="'Select no. of Bathrooms'" :label="'No. of Bathrooms'" :options="['Option1', 'Option 2', 'Option 3']" />
                <SelectInput :select-head="'No. of Bedrooms'" :place-holder="'Select no. of Bedrooms'" :label="'No. of Bedrooms'" :options="['Option1', 'Option 2', 'Option 3']" />
                <SelectInput :select-head="'Budget'" :place-holder="'Select Budget'" :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
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
    background: rgb(38, 38, 38);
    background: linear-gradient(90deg, rgba(38, 38, 38, 1) 0%, rgba(38, 38, 38, 1) 100%, (rgba(38, 38, 38) 53%, rgba(38, 38, 38, 0.5) 0%));
    /* background: #262626, linear-gradient(to right, #262626 0%, #262626 100%), linear-gradient(to left, #262626 53%, rgba(38, 38, 38, 0) 0%); */
  }
</style>
