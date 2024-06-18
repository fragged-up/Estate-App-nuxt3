<script setup>

// import MainBlock from '~/components/organisms/MainBlock.vue';

// import FormContact from '~/components/templates/FormContact.vue';
// import Office from '~/components/organisms/Office.vue';
// import CardOffice from '~/components/molecules/CardOffice.vue';
// import ExploreCard from '~/components/molecules/ExploreCard.vue';

const heroHeader = "Get in Touch with Estatein";
const heroPara = "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have.";

const mainHead = "Let's Connect";
const mainPara = "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein."

const lastHead ="Discover Our Office Locations";
const lastPara = "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team.";

</script>

<template>
  <div class="contact-page">
    <header class="w-full py-12 px-6 fallback border-b border-[#262626]">
     <div class="laptop:my-12 laptop:py-16">
        <h1 class="font-sans font-semibold text-3xl text-white">{{ heroHeader }}</h1>
        <p class="py-6 font-sans font-medium text-[#999999] text-sm">{{ heroPara }}</p>
     </div>
      <div class="hero-contact">
        <div class="grid grid-cols-2 grid-rows-2 gap-y-2.5 gap-x-2.5 border-2 border-[#262626] p-4 rounded-md laptop:grid-cols-none laptop:grid-rows-none laptop:grid-flow-col">
          <div class="flex flex-col bg-[#1A1A1A] border-2 border-[#262626] text-center rounded-lg py-4 px-2 laptop:flex-grow-0">
            <div class="flex flex-col justify-center items-center">
              <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">
              <img :src="$loadImage('/icons/homeIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-sm text-white laptop:my-4">info@estatein.com</p>
          </div>
          <div class="flex flex-col bg-[#1A1A1A] border-2 border-[#262626] text-center rounded-lg py-4 px-2 laptop:flex-grow-0">
            <div class="flex flex-col justify-center items-center">
              <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">   
              <img :src="$loadImage('/icons/cameraIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-sm text-white laptop:my-4">+1 (123) 456-7890</p>
          </div>
          <div class="flex flex-col bg-[#1A1A1A] border-2 border-[#262626] text-center rounded-lg py-4 px-2 flaptop:lex-grow-0">
            <div class="flex flex-col justify-center items-center">
              <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">
              <img :src="$loadImage('/icons/buildingIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-sm text-white laptop:my-4">Instagram / Linkedin / Facebook</p>
          </div>
          <div class="flex flex-col bg-[#1A1A1A] border-2 border-[#262626] text-center rounded-lg py-4 px-2 laptop:flex-grow-0">
            <div class="flex flex-col justify-center items-center">
              <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">
              <img :src="$loadImage('/icons/sunIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-sm text-white laptop:my-4">Main Headquarters</p>
          </div>
        </div>
      </div>
    </header>
    <main class="main-contact">
    
        <!-- <MainBlock :header-text="mainHead" :para-text="mainPara">
          <template #default>
           <FormContact />
          </template>
        </MainBlock>

        <MainBlock :header-text="lastHead" :para-text="lastPara">
          <template #default>
           <Office />

           <div class="w-11/12 my-6 mx-auto"><CardOffice><template #first></template></CardOffice></div>
            <div class="w-11/12 my-6 mx-auto"><CardOffice><template #second></template></CardOffice></div>
            <div class="w-11/12 my-16 mx-auto"><ExploreCard /></div>
          </template>
        </MainBlock> -->

        <FormContact />
        <section>
      <MainBlock :header-text="lastHead" :para-text="lastPara">
         <template #top>
          <div class="my-6">  <Office /></div>
         </template>
         <template #default>

            <div class="w-11/12 mx-auto">

               <div
                  class="w-11/12 flex flex-col justify-center items-center gap-y-8 mx-auto laptop:flex-row laptop:gap-10 laptop:justify-around">
                  <CardOffice><template #first></template></CardOffice>
                  <CardOffice><template #second></template></CardOffice>
               </div>
               <div class="w-11/12 my-16 mx-auto">
                  <ExploreCard />
               </div>
            </div>
         </template>
      </MainBlock>

   </section>
        
    
    </main>
  </div>
</template>

<style scoped></style>