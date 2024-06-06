<script setup>
import CardFour from '~/components/molecules/CardFour.vue';
import MainBlock from '~/components/organisms/MainBlock.vue';
import UnlockCard from '~/components/molecules/UnlockCard.vue';

const heroService = "Elevate Your Real Estate Experience";
const paraService = "Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.";

const firstHeader = "Unlock Property Value";
const firstPara = "Selling your property should be a rewarding experience, and at Estatein, we make sure it is.";

const secondHeader = "Effortless Property Management";
const secondPara = "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership.";


const thirdHeader = "Smart Investments, Informed Decisions";
const thirdPara = "Building a real estate portfolio requires a strategic approach.";

</script>

<template>
  <div class="services-page">
    <header class="w-full py-12 px-6 fallback border-b border-[#262626]">
      <h1 class="font-sans font-semibold text-3xl text-white">{{ heroService }}</h1>
      <p class="py-6 font-sans font-medium text-[#999999] text-sm">{{ paraService }}</p>
      <CardFour />
    </header>

    <main>
      <section>

        <div class="section-1">
          <MainBlock :header-text="firstHeader" :para-text="firstPara">
         <UnlockCard><template #unlock></template></UnlockCard>
         </MainBlock>
        </div>

        <div class="section-2">
          <MainBlock :header-text="secondHeader" :para-text="secondPara">
         <UnlockCard><template #effort></template></UnlockCard>
         </MainBlock>
        </div>

        <div class="section-3">
          <MainBlock :header-text="thirdHeader" :para-text="thirdPara">
            <UnlockCard><template #smart></template></UnlockCard>
         </MainBlock>
        </div>


      </section>
    </main>

  </div>

</template>

<style scoped></style>