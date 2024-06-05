<script setup>
import BoxInput from '~/components/organisms/BoxInput.vue';
import MainBlock from '~/components/organisms/MainBlock.vue';
import PropertyCard from '~/components/molecules/PropertyCard.vue';
import SelectInput from '~/components/atoms/SelectInput.vue';
import Preferred from '~/components/atoms/Preferred.vue';
import Input from '~/components/atoms/Input.vue';

const hero_Head = "Find Your Dream Property";
const hero_Para = "Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey";
const card_Head_1 = "Discover a World of Possibilities";
const card_Head_2 = "Let's Make it Happen";
const card_Para_1 = "Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home";
const card_Para_2 = "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.";

const card_title = "Seaside Serenity Villa";
const card_text = "Wake up to the soothing melody of waves. This beachfront villa offers..";
const card_price = "1,250,000";
const card_bedrooms = 7;
const card_bathrooms = 6;



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
        </div>

        <div class="last-div w-11/12 mx-auto">
          <MainBlock :header-text="card_Head_2" :para-text="card_Para_2">
            <template #default>

              <Input :for="'firstName'" :label="'First Name'" :input-type="'text'" :name="'firstName'"
                :placeholder="'Enter First Name'" />
              <Input :for="'lastName'" :label="'Last Name'" :input-type="'text'" :name="'lastName'"
                :placeholder="'Enter Last Name'" />
              <Input :for="'Email'" :label="'Email'" :input-type="'email'" :name="'Email'"
                :placeholder="'Enter Email'" />
              <Input :for="'phone'" :label="'Phone'" :input-type="'number'" :name="'phone'"
                :placeholder="'Enter Phone'" />

                <div class="">
                  
                   <SelectInput :select-head="'Preferred Location'"  :place-holder="'Select Location'" 
                    :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
                    <SelectInput :select-head="'Property Type'"  :place-holder="'Select Property Type'" 
                    :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
                    <SelectInput :select-head="'No. of Bathrooms'"  :place-holder="'Select no. of Bathrooms'" 
                    :label="'No. of Bathrooms'" :options="['Option1', 'Option 2', 'Option 3']" />
                    <SelectInput :select-head="'No. of Bedrooms'"  :place-holder="'Select no. of Bedrooms'" 
                    :label="'No. of Bedrooms'" :options="['Option1', 'Option 2', 'Option 3']" />
                    <SelectInput :select-head="'Budget'"  :place-holder="'Select Budget'" 
                    :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
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