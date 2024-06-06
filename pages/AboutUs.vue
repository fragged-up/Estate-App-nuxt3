<script setup>
import MainBlock from '@/components/organisms/MainBlock.vue';
import CardThree from '@/components/molecules/CardThree.vue';
import ColumnFourthCard from '@/components/organisms/ColumnFourthCard.vue';
import CardTAbout from '@/components/organisms/CardTAbout.vue';
import Steps from '@/components/organisms/Steps.vue';
import ProfileCard from '@/components/molecules/ProfileCard.vue';
import OurValuedClients from '@/components/molecules/OurValuedClients.vue';



const cardHead_1 = "Our Journey";
const cardHead_2 = "Our Values";
const cardHead_3 = "Our Achievements";
const cardHead_4 = "Navigating the Estatein Experience";
const cardHead_5 = "Meet the Estatein Team";
const cardHead_6 = "Our Valued Clients";
const cardPara_1 = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.";
const cardPara_2 = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.";
const cardPara_3 = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.";
const cardPara_4 = "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.";
const cardPara_5 = "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.";
const cardPara_6 = "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving";

const stepHead_1 = "Discover a World of Possibilities";
const stepHead_2 = "Narrowing Down Your Choices";
const stepHead_3 = "Personalized Guidance";
const stepPara_1 = 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,';
const stepPara_2 = "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.";
const stepPara_3 = "OHave questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.";




</script>

<template>
  <header
    class="w-11/12 mx-auto my-10 bg-hero-about-abst bg-position-hero-about-abst bg-size-hero-about-abst bg-no-repeat h-70 border border-[#262626] rounded-3xl">
    <div class="w-full bg-hero-about-image bg-position-hero-about-image bg-size-hero-about-image bg-no-repeat h-80">
    </div>
  </header>

  <main class="bg-[#141414] w-full">
    <section class="w-11/12 mx-auto">
      <MainBlock :headerText="cardHead_1" :paraText="cardPara_1">
        <template #default>
          <div class="cardThree-cont">
            <CardThree />
          </div>
        </template>
      </MainBlock>

      <MainBlock :headerText="cardHead_2" :paraText="cardPara_2">
        <template #default>
          <div class="columnForth-cont">
            <ColumnFourthCard />
          </div>
        </template>
      </MainBlock>

      <MainBlock :headerText="cardHead_3" :paraText="cardPara_3">
        <template #default>
          <div clas="cardTAbout-cont">
            <CardTAbout />
          </div>
        </template>
      </MainBlock>

      <MainBlock :headerText="cardHead_4" :paraText="cardPara_4">
        <template #default>
          <div class="flex flex-col gap-y-12 my-12">
            <Steps :stepsNo="'Step 01'" :stepHead="stepHead_1" :stepPara="stepPara_1" />
            <Steps :stepsNo="'Step 02'" :stepHead="stepHead_2" :stepPara="stepPara_2" />
            <Steps :stepsNo="'Step 03'" :stepHead="stepHead_3" :stepPara="stepPara_3" />
          </div>
        </template>
      </MainBlock>

      <MainBlock :headerText="cardHead_5" :paraText="cardPara_5">
        <template #default>
          <div class="flex flex-col gap-y-12 my-12">
            <ProfileCard :imageUrl="'/assets/icons/ProfileMax.svg'" :name="'Max Mitchell'" :title="'Founder'"
              :twitterUrl="'https://twitter.com/username'"
              :sayHelloText="'Say Hello 👋'" />
              <ProfileCard :imageUrl="'/assets/icons/ProfileSara.svg'" :name="'Sara Johnson'" :title="'Chief Real Estate Officer'"
              :twitterUrl="'https://twitter.com/username'"
              :sayHelloText="'Say Hello 👋'" />
              <ProfileCard :imageUrl="'/assets/icons/ProfileDavid.svg'" :name="'David Brown'" :title="'Head of Property Management'"
              :twitterUrl="'https://twitter.com/username'"
              :sayHelloText="'Say Hello 👋'" />
              <ProfileCard :imageUrl="'/assets/icons/ProfileMichael.svg'" :name="'Michael Turner'" :title="'Legal Counsel'"
              :twitterUrl="'https://twitter.com/username'"
              :sayHelloText="'Say Hello 👋'" />
          </div>
        </template>
      </MainBlock>

      <MainBlock :headerText="cardHead_6" :paraText="cardPara_6">
        <template #default>
          <div class="flex flex-col gap-y-12 my-12">
            <OurValuedClients />
          </div>
        </template>
      </MainBlock>
    </section>
  </main>

</template>

<style scoped></style>