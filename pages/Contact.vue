<script setup>

import MainBlock from '~/components/organisms/MainBlock.vue';
import Input from '~/components/atoms/Input.vue';
import SelectInput from '~/components/atoms/SelectInput.vue';
import Office from '~/components/organisms/Office.vue';
import CardOffice from '~/components/molecules/CardOffice.vue';
import ExploreCard from '~/components/molecules/ExploreCard.vue';

const heroHeader = "Get in Touch with Estatein";
const heroPara = "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have.";

const mainHead = "Let's Connect";
const mainPara = "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein."

const lastHead ="Discover Our Office Locations";
const lastPara = "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team.";

const firstPara = "Main Headquarters";
const secondPara ="123 Estatein Plaza, City Center, Metropolis";
const thirdPara = "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us."
</script>

<template>
  <div class="contact-page">
    <header class="w-full py-12 px-6 fallback border-b border-[#262626]">
      <h1 class="font-sans font-semibold text-3xl text-white">{{ heroHeader }}</h1>
      <p class="py-6 font-sans font-medium text-[#999999] text-sm">{{ heroPara }}</p>
      <div class="hero-contant">
        <div class="grid grid-cols-2 grid-rows-2 gap-y-2.5 gap-x-2.5 border-2 border-[#262626] p-4 rounded-md">
          <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4">
            <div class="flex flex-col justify-center items-center">
              <img src="public/assets/icons/arrowRtop.svg" class="self-end mr-4" alt="rtop">
              <img src="public/assets/icons/homeIcon.svg" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">info@estatein.com</p>
          </div>
          <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4">
            <div class="flex flex-col justify-center items-center">
              <img src="public/assets/icons/arrowRtop.svg" class="self-end mr-4" alt="rtop">
              <img src="public/assets/icons/cameraIcon.svg" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">+1 (123) 456-7890</p>
          </div>
          <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4">
            <div class="flex flex-col justify-center items-center">
              <img src="public/assets/icons/arrowRtop.svg" class="self-end mr-4" alt="rtop">
              <img src="public/assets/icons/buildingIcon.svg" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">Instagram / Linkedin / Facebook</p>
          </div>
          <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4">
            <div class="flex flex-col justify-center items-center">
              <img src="public/assets/icons/arrowRtop.svg" class="self-end mr-4" alt="rtop">
              <img src="public/assets/icons/sunIcon.svg" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">Main Headquarters</p>
          </div>
        </div>
      </div>
    </header>
    <main class="main-contact">
      <section>
        <MainBlock :header-text="mainHead" :para-text="mainPara">
          <template #default>
            <div class="contact-section">
              <Input :label="'First Name'" :input-type="'text'" :name="'firstName'" :placeholder="'Enter First Name'" />
              <Input :label="'Last Name'" :input-type="'text'" :name="'lastName'" :placeholder="'Enter Last Name'" />
              <Input :label="'Email'" :input-type="'email'" :name="'Email'" :placeholder="'Enter your Email'" />
              <Input :label="'Phone'" :input-type="'number'" :name="'phone'" :placeholder="'Enter Phone Number'" />

              <SelectInput :select-head="'Inquiry Type'" :place-holder="'Inquiry Type'"
                  :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
              <SelectInput :select-head="'How Did You Hear About Us'" :place-holder="'Select'"
                  :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />

              <div class="message-cont w-11/12 mx-auto">
                <div class="message-section mt-6">
                  <h3 class="text-white text-lg font-semibold mb-4">Message</h3>
                  <textarea class="w-full p-4 bg-[#141414] border border-[#262626] rounded-2xl text-white"
                    placeholder="Enter your Message here.."></textarea>
                </div>
                <div class="agree-section mt-6">
                  <label class="flex items-center text-white">
                    <input type="checkbox" class="form-checkbox h-4 w-4 text-[#703BF7] accent-[#703BF7]" />
                    <span class="ml-2">I agree with <a href="#" class="text-[#703BF7] underline">Terms of Use</a> and <a
                        href="#" class="text-[#703BF7] underline">Privacy Policy</a></span>
                  </label>
                </div>
                <button class="mt-6 w-full p-4 bg-[#703BF7] text-white rounded-2xl">Send Your Message</button>
              </div>
              </div>
          </template>
        </MainBlock>

        <MainBlock :header-text="lastHead" :para-text="lastPara">
          <template #default>
           <Office />

           <div class="w-11/12 my-6 mx-auto"><CardOffice><template #first></template></CardOffice></div>
            <div class="w-11/12 my-6 mx-auto"><CardOffice><template #second></template></CardOffice></div>
            
            <ExploreCard />

          </template>
        </MainBlock>
        
      </section>
    </main>
  </div>
</template>

<style scoped></style>