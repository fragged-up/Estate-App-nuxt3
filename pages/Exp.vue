<script setup>

const cardHead_1 = 'Our Journey';
const cardHead_2 = 'Our Values';
const cardHead_3 = 'Our Achievements';
const cardHead_4 = 'Navigating the Estatein Experience';
const cardHead_5 = 'Meet the Estatein Team';
const cardHead_6 = 'Our Valued Clients';


const cardPara_1 = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.";
const cardPara_2 = "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
const cardPara_3 = 'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.';
const cardPara_4 = "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.";
const cardPara_5 = 'At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.';
const cardPara_6 = "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving";

const h1 = 'Trust';
const h2 = 'Excellence';
const h3 = 'Client-Centric';
const h4 = 'Our Commitment';

const p1 = 'Trust is the cornerstone of every successful real estate transaction.';
const p2 = 'We set the bar high for ourselves. From the properties we list to the services we provide.';
const p3 = 'Your dreams and needs are at the center of our universe. We listen, understand.';
const p4 = 'We are dedicated to providing you with the highest level of service, professionalism';

const stepHead_1 = 'Discover a World of Possibilities';
const stepHead_2 = 'Narrowing Down Your Choices';
const stepHead_3 = 'Personalized Guidance';
const stepHead_4 = "See It for Yourself";
const stepHead_5 = "Making Informed Decisions";
const stepHead_6 = "Getting the Best Deal";

const stepPara_1 = 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,';
const stepPara_2 = "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.";
const stepPara_3 = 'OHave questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.';
const stepPara_4 = "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.";
const stepPara_5 = "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.";
const stepPara_6 = "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.";


const profiles = [
  {
    profileName: 'Max Mitchell',
    profileImageUrl: '/icons/ProfileMax.svg',
    profileTitle: 'Founder',
    profileTwitterUrl: 'https://twitter.com/username',
    profileHelloText: 'Say Hello 👋',
  },
  {
    profileName: 'Sara Johnson',
    profileImageUrl: '/icons/ProfileSara.svg',
    profileTitle: 'Chief Real Estate Officer',
    profileTwitterUrl: 'https://twitter.com/username',
    profileHelloText: 'Say Hello 👋',
  }
  ,
  {
    profileName: 'David Brown',
    profileImageUrl: '/icons/ProfileDavid.svg',
    profileTitle: 'Head of Property Management',
    profileTwitterUrl: 'https://twitter.com/username',
    profileHelloText: 'Say Hello 👋',
  }
  ,
  {
    profileName: 'Michael Turner',
    profileImageUrl: '/icons/ProfileMichael.svg',
    profileTitle: 'Legal Counsel',
    profileTwitterUrl: 'https://twitter.com/username',
    profileHelloText: 'Say Hello 👋',
  }

];



</script>

<template>
  <div class="cont">

    <main
      class="bg-fgl my-8 flex flex-col justify-center items-center laptop:grid grid-cols-[30%_1fr] laptop:justify-between laptop:items-center w-11/12 gap-x-20 mx-auto">
      <div class="first-frame place-self-start">
        <MainBox :headline="cardHead_2" :paraline="cardPara_2" />
      </div>
      <div class="block-cr p-5">
        <div class="row-one">
          <LineImg :image="'/icons/TrustIcon.svg'" :head="h1" :para="p1" :containerWraper="'box-one'" />
          <LineImg :image="'/icons/ExcellenceIcon.svg'" :head="h2" :para="p2" :containerWraper="'box-two'" />
        </div>
        <div class="row-two">
          <LineImg :image="'/icons/CentricIcon.svg'" :head="h3" :para="p3" :containerWraper="'box-three'" />
          <LineImg :image="'/icons/CommitIcon.svg'" :head="h4" :para="p4" :containerWraper="'box-fourth'" />
        </div>
      </div>
    </main>


    <div class="w-11/12 mx-auto">
      <MainBox :headline="cardHead_3" :paraline="cardPara_3" />
      <CardTAbout />
    </div>

    <div class="w-11/12 mx-auto">
      <MainBox :headline="cardHead_4" :paraline="cardPara_4" />
      <div class="steps-cont flex flex-col gap-y-12 my-12 laptop:grid grid-cols-3 laptop:gap-x-10">
        <Steps :stepsNo="'Step 01'" :stepHead="stepHead_1" :stepPara="stepPara_1" />

        <Steps :stepsNo="'Step 02'" :stepHead="stepHead_2" :stepPara="stepPara_2" />

        <Steps :stepsNo="'Step 03'" :stepHead="stepHead_3" :stepPara="stepPara_3" />

        <Steps :stepsNo="'Step 04'" :stepHead="stepHead_4" :stepPara="stepPara_4" />

        <Steps :stepsNo="'Step 05'" :stepHead="stepHead_5" :stepPara="stepPara_5" />

        <Steps :stepsNo="'Step 06'" :stepHead="stepHead_6" :stepPara="stepPara_6" />
      </div>
    </div>

    <div class="w-11/12 mx-auto">
      <MainBox :headline="cardHead_6" :paraline="cardPara_6" />
      <div class="flex flex-col gap-y-12 my-12 laptop:flex-row laptop:justify-between items-center laptop:gap-0">
        <ProfileCard v-for="(profile, index) in profiles" 
          :key="index"
          :name="profile.profileName"
          :imageUrl="profile.profileImageUrl" 
          :title="profile.profileTitle"
          :twitterUrl="profile.profileTwitterUrl"
          :sayHelloText="profile.profileHelloText" />
      </div>
    </div>

    <div class="w-11/12 mx-auto">
      <MainBox :headline="cardHead_6" :paraline="cardPara_6" />
          <div class="flex flex-col gap-y-12 my-12">
            <OurValuedClients />
          </div>
    </div>
    
  </div>


</template>

<style scoped>
.first-frame {
  margin-block: 5rem;
}

.block-cr {
  box-shadow: 1px -1px 18px 1px #262626;
  display: subgrid;
}

.row-one,
.row-two {
  display: block;
}

.box-one,
.box-two,
.box-three,
.box-fourth {
  max-width: 23rem;
  padding: 1rem;
  margin-block: 1rem;
  /* aspect-ratio: 1/1; */

}

.box-one {
  border-bottom: 1px solid #262626;
}

.box-two {
  border-bottom: 1px solid #262626;
}

.box-three {
  border-bottom: 1px solid #262626;
}

.box-three {
  border-top: none;
  border-left: none;
  border-bottom: 1px solid #262626;
}

.box-fourth {
  border: none;

}

@media (min-width:1440px) {
  .first-frame {
    margin-block: 2rem;
  }

  .row-one,
  .row-two {
    display: flex;
    gap: 0;
    justify-content: center;
    align-items: center;
  }

  .block-cr {
    width: 50rem;
    max-width: 50rem;
  }

  .row-two {
    border-top: 1px solid #262626;
  }

  .box-one {
    border: none;
  }

  .box-two {
    border: none;
    border-left: 1px solid #262626;
  }

  .box-three {
    border: none;
  }

  .box-fourth {
    border-left: 1px solid #262626;
  }
}
</style>


<!-- 
Final Result 
<section>
      <main class="w-full bg-[#141414] p-14">
  
  
        <div class="wrap-one laptop:grid laptop:grid-cols-2">
          <div class="wrapper laptop:w-[38%]">
            <MainBox :headline="cardHead_2" :paraline="cardPara_2" />
          </div>
          <div class="laptop: w-[62%]">
            <ColumnFourthCard />
          </div>
        </div>
      </main>
    </section> -->



<!-- RepeatedBlock FullComponent  
<script setup>
const props = defineProps({
  image: String,
  head: String,
  para: String
});</script>

<template>
  <div :class="'repeated-cont'">

    <div class="repeated-father">
      <img :src="$loadImage(image)" class="w-[52px] h-[52px] inline-block" alt="image">
      <h3 class="font-sans font-semibold text-white text-hg ml-4 inline-block">{{ props.head }}</h3>
    </div>
    <div class="py-6">
      <p class="font-sans font-medium text-[#999999] text-sm">{{ props.para }}</p>
    </div>

  </div>
</template>
<style></style> -->




<!-- ColumnForthCard FullComponent     
<script setup>
// import RepeatedBlock from '../molecules/RepeatedBlock.vue';
const h1 = 'Trust';
const h2 = 'Excellence';
const h3 = 'Client-Centric';
const h4 = 'Our Commitment';

const p1 = 'Trust is the cornerstone of every successful real estate transaction.';
const p2 = 'We set the bar high for ourselves. From the properties we list to the services we provide.';
const p3 = 'Your dreams and needs are at the center of our universe. We listen, understand.';
const p4 = 'We are dedicated to providing you with the highest level of service, professionalism';
</script>

<template>
  <div class="grid grid-rows-4 gap-y-4 shadow-frame p-6 rounded-xl laptop:grid-rows-2">
    <div class="border-b-[.5px] border-hg">
      <RepeatedBlock :image="'/icons/TrustIcon.svg'" :head="h1" :para="p1" />
    </div>

    <div class="border-b-[.5px] border-hg">
      <RepeatedBlock :image="'/icons/ExcellenceIcon.svg'" :head="h2" :para="p2" />
    </div>

    <div class="border-b-[.5px] border-hg">
      <RepeatedBlock :image="'/icons/CentricIcon.svg'" :head="h3" :para="p3" />
    </div>

    <div class="">
      <RepeatedBlock :image="'/icons/CommitIcon.svg'" :head="h4" :para="p4" />
    </div>
  </div>
</template>
<style scoped>
.shadow-frame {
  box-shadow: 1px -1px 18px 1px #262626;
}
</style> -->





<!-- My Last Try 

  <main class="bg-[#141414] p-8 flex max-w-[1280px]">
  
      <div class="div">
        <MainBox :headline="cardHead_2" :paraline="cardPara_2" />
      </div>
  
  
      <div class="max-w-[810px] shadow-frame">
        <div class="grid grid-cols-2 border-b border-hg">
          <RepeatedBlock :image="'/icons/TrustIcon.svg'" :head="h1" :para="p1" :dadContainer="'p-6 my-4'" />
          <RepeatedBlock :image="'/icons/ExcellenceIcon.svg'" :head="h2" :para="p2"
            :dadContainer="'border-l border-hg p-6 my-4'" />
        </div>
        <div class="nka grid grid-cols-2">
          <RepeatedBlock :image="'/icons/CentricIcon.svg'" :head="h3" :para="p3" :dadContainer="'p-6 my-4'" />
          <RepeatedBlock :image="'/icons/CommitIcon.svg'" :head="h4" :para="p4"
            :dadContainer="'border-l border-hg p-6 my-4'" />
        </div>
      </div>
  
  
  
  
    </main> -->