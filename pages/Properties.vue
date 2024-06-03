<script setup>
import BoxInput from '~/components/organisms/BoxInput.vue';
import MainBlock from '~/components/organisms/MainBlock.vue';
import PropertyCard from '~/components/molecules/PropertyCard.vue';
import SelectInput from '~/components/atoms/SelectInput.vue';

const hero_Head = "Find Your Dream Property";
const hero_Para = "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey";
const card_Head_1 = "Discover a World of Possibilities";
const card_Para_1 = "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home";

const card_title = "Seaside Serenity Villa";
const card_text = "Wake up to the soothing melody of waves. This beachfront villa offers..";
const card_price = "1,250,000";
const card_bedrooms = 7;
const card_bathrooms = 6;
const Option1 = ['Select Your Title'];
const additionalPlaceHolderStyle = ['placeholder:text-white','placeholder:text-lg'];



</script>

<template>
  <header class="w-full py-12 px-6 fallback border-b border-[#262626]">
    <h1 class="font-sans font-semibold text-3xl text-white">{{ hero_Head }}</h1>
    <p class="py-6 font-sans font-medium text-[#999999] text-sm">{{ hero_Para }}</p>
  </header>
  <div>
    <main>
      <section>
        <div class="box-c">
          <BoxInput />
        </div>

        <div class="property w-11/12 mx-auto">
          <MainBlock :header-text="card_Head_1" :para-text="card_Para_1">
            <template #default>
              <PropertyCard :card-image="'/assets/Beckos.svg'" :card-title="card_title" :card-text="card_text"
                :bed-rooms="card_bedrooms" :bath-rooms="card_bathrooms" :card-price="card_price" />
              <div class="flex justify-between items-center my-8">
                <button class="arrows-bg text-[#808080]">
                  &leftarrow;
                </button>
                <p class="pad-fix:whitespace-nowrap p-2">
                  <span class="text-white">{{ pagesNumber="01" }}</span>
                  <span class="text-[#808080]"> of </span>
                  <span class="text-[#808080]">{{ totalPagesNumber="10" }}</span>
                </p>
                <button class="arrows-bg text-white">
                  &rightarrow;
                </button>
              </div>
            </template>
          </MainBlock>
          <div class="div">
            <SelectInput
            :class="additionalPlaceHolderStyle"
      :placeholder="'Select an option'"
      :showDropDown="true"
      :label="'helo you whatuups?'"
      :options="['Option1', 'Option 2', 'Option 3']"
    />
          </div>
        </div>


      </section>

    </main>
  </div>
</template>

<style scoped>
.fallback {
  background: #262626, linear-gradient(to right, #262626 0%, #262626 100%), linear-gradient(to left, #262626 53%, rgba(38, 38, 38, 0) 0%);
}
</style>