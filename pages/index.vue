<script setup>
  // import MainBlock from '@/components/organisms/MainBlock.vue';
  // import CardThree from '../components/molecules/CardThree.vue';
  // import CardFour from '../components/molecules/CardFour.vue';
  // import ViewButton from '../components/molecules/ViewButton.vue';
  // import PropertyCard from '../components/molecules/PropertyCard.vue';
  // import ClientCard from '../components/molecules/ClientCard.vue';
  // import FaqCard from '../components/molecules/FaqCard.vue';
  //   const { viewButtonText } = whichButton();
  //   const viewAP = viewButtonText.value;
  //   import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  // import DesktopHeader from './components/DesktopHeader.vue';
  // import MobileHeader from './components/MobileHeader.vue';

  // const width = ref(window.innerWidth);

  // const currentComponent = computed(() => {
  //   return width.value > 1440 ? DesktopHeader : MobileHeader;
  // });

  // const updateWidth = () => {
  //   width.value = window.innerWidth;
  // };

  // onMounted(() => {
  //   window.addEventListener('resize', updateWidth);
  //   updateWidth(); // Initial check
  // });

  // onBeforeUnmount(() => {
  //   window.removeEventListener('resize', updateWidth);
  // });

  const cardOneHead = 'Featured Properties';
  const cardOneParagraph =
    'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.';
  const cardTwoHead = 'What Our Clients Say';
  const cardTwoParagraph =
    'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.';
  const cardThirdHead = 'Frequently Asked Questions';
  const cardThirdParagraph =
    "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.";

  const faces = [
    {
      faceImage: '/home/wadeFace.svg',
      faceName: 'Wade Warren',
      faceLocation: 'USA, California',
      faceHead: 'Exceptional Service!',
      facePara:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
      faceImage: '/home/wadeFace.svg',
      faceName: 'Wade Warren',
      faceLocation: 'USA, California',
      faceHead: 'Exceptional Service!',
      facePara:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
    {
      faceImage: '/home/wadeFace.svg',
      faceName: 'Wade Warren',
      faceLocation: 'USA, California',
      faceHead: 'Exceptional Service!',
      facePara:
        "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    },
  ];

  const cards = [
    {
      cardImage: '/home/building.svg',
      cardTitle: 'Rustic Retreat Cottage',
      cardText:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '500,000',
    },
    {
      cardImage: '/images/MetroCard.svg',
      cardTitle: 'Metropolitan Haven',
      cardText:
        'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
      bedRooms: 2,
      bathRooms: 2,
      cardPrice: '500,000',
    },
    {
      cardImage: '/images/SeasideCard.svg',
      cardTitle: 'Rustic Retreat Cottage',
      cardText:
        'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
      bedRooms: 4,
      bathRooms: 3,
      cardPrice: '500,000',
    },
  ];

  const faqs = [
    {
      faqTitle: 'How do I search for properties on Estatein?',
      faqText:
        'Learn how to use our user-friendly search tools to find properties that match your criteria.',
    },
    {
      faqTitle:
        'What documents do I need to sell my property through Estatein?',
      faqText:
        'Find out about the necessary documentation for listing your property with us.',
    },
    {
      faqTitle: 'How can I contact an Estatein agent?',
      faqText:
        'Discover the different ways you can get in touch with our experienced agents',
    },
  ];
</script>

<template>
  <main class="bg-[#141414] w-full">
    <!-- causing overflow  -->
    <div class="container bg-[#141414] grid justify-center mx-auto">
      <div class="bg-image rounded-3xl mx-auto my-4">
        <div class="circle-box leading-7">
          <div id="outer-circle">
            <div class="circle-text">D</div>
            <div class="circle-text">i</div>
            <div class="circle-text">s</div>
            <div class="circle-text">c</div>
            <div class="circle-text">o</div>
            <div class="circle-text">v</div>
            <div class="circle-text">e</div>
            <div class="circle-text">r</div>
            <div class="circle-text"></div>
            <div class="circle-text">Y</div>
            <div class="circle-text">o</div>
            <div class="circle-text">u</div>
            <div class="circle-text">r</div>
            <div class="circle-text"></div>
            <div class="circle-text">D</div>
            <div class="circle-text">r</div>
            <div class="circle-text">e</div>
            <div class="circle-text">a</div>
            <div class="circle-text">m</div>
            <div class="circle-text"></div>
            <div class="circle-text">P</div>
            <div class="circle-text">r</div>
            <div class="circle-text">o</div>
            <div class="circle-text">p</div>
            <div class="circle-text">e</div>
            <div class="circle-text">r</div>
            <div class="circle-text">t</div>
            <div class="circle-text">y</div>
            <div class="circle-text">✨</div>
            <div id="inner-circle"></div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="w-11/12 grid gap-y-[50px] mt-32 mx-auto">
          <div class="first-template mx-auto">
            <h1 class="text-3xl font-sans font-semibold text-white mb-[20px]">
              Discover Your Dream
              <br />
              Property with Estatein
            </h1>
            <p class="text-base font-medium pt-4 text-[#999999] mb-[20px]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>

            <button
              class="w-full my-2 p-5 rounded-2xl mx-auto text-center text-white font-medium text-base border-2 border-[#262626]"
            >
              Learn More
            </button>
            <button
              class="w-full my-2 p-5 rounded-2xl mx-auto text-center text-white font-medium text-base bg-[#703BF7]"
            >
              Browse Properties
            </button>
          </div>

          <CardThree />
          <CardFour />

          <div class="p4 w-full">
            <MainBlock
              :headerText="cardOneHead"
              :contStyle="'laptop:mx-0'"
              :subContStyle="'laptop:mx-0'"
              :paraText="cardOneParagraph"
              :deskHeader="true"
            >
              <template #default>
                <div class="property-cont laptop:flex laptop:gap-6">
                  <PropertyCard
                    v-for="(card, index) in cards"
                    :key="index"
                    :cardImage="card.cardImage"
                    :cardTitle="card.cardTitle"
                    :cardText="card.cardText"
                    :bedRooms="card.bedRooms"
                    :bathRooms="card.bathRooms"
                    :cardPrice="card.cardPrice"
                  />
                </div>

                <ViewButton
                  :buttonText="'View All Properites'"
                  :totalPagesNumber="'10'"
                  :mobileView="'laptop:hidden'"
                  :deskView="'laptop:visible'"
                />
              </template>
            </MainBlock>
            <MainBlock
              :headerText="cardTwoHead"
              :contStyle="'laptop:mx-0'"
              :subContStyle="'laptop:mx-0'"
              :paraText="cardTwoParagraph"
            >
              <template #default>
                <div class="cw flex flex-col gap-4 laptop:flex-row">
                  <ClientCard
                    v-for="(faces, index) in faces"
                    :key="index"
                    :faceImage="faces.faceImage"
                    :faceName="faces.faceName"
                    :faceLocation="faces.faceLocation"
                    :faceHead="faces.faceHead"
                    :facePara="faces.facePara"
                  />
                </div>
                <ViewButton
                  :buttonText="'View All Properites'"
                  :totalPagesNumber="'10'"
                  :mobileView="'laptop:hidden'"
                  :deskView="'laptop:visible'"
                />
              </template>
            </MainBlock>
            <MainBlock
              :headerText="cardThirdHead"
              :contStyle="'laptop:mx-0'"
              :subContStyle="'laptop:mx-0'"
              :paraText="cardThirdParagraph"
            >
              <template #default>
                <div
                  class="laptop:flex laptop:flex-row laptop:gap-6 laptop:justify-between"
                >
                  <FaqCard
                    v-for="(faq, index) in faqs"
                    :key="index"
                    :faqTitle="faq.faqTitle"
                    :faqText="faq.faqText"
                  />
                </div>

                <ViewButton
                  :buttonText="'View All Properites'"
                  :totalPagesNumber="'10'"
                  :mobileView="'laptop:hidden'"
                  :deskView="'laptop:visible'"
                />
              </template>
            </MainBlock>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .bg-image {
    height: 300px;
    width: 90%;
    background-image: url('~/assets/images/backMobile.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: end;
  }

  .circle-box {
    height: 100%;
  }

  #outer-circle {
    position: relative;
    height: 150px;
    width: 150px;
    display: flex;
    justify-content: center;
    background-color: #141414;
    border-radius: 50%;
    left: 0;
    top: 65%;
    z-index: 15;
    border: 2.5px solid #262626;
  }

  #inner-circle {
    position: absolute;
    background-color: #1a1a1a;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    height: 65px;
    width: 65px;
    z-index: 1;
    transform: translate(-50%, -50%);
    border: 2.5px solid #262626;
  }

  .circle-text {
    position: absolute;
    transform-origin: 50% 73px;
    text-align: center;
    font-family: var(--main-fs);
    font-weight: var(--wght-semi-bold);
    font-size: 12.6px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--main-clr);
    /* line-height:2.25rem; */
  }

  /* #region */
  .circle-text:nth-child(1) {
    transform: rotate(0deg) translateX(-50%);
  }

  .circle-text:nth-child(2) {
    transform: rotate(10.59deg) translateX(-50%);
  }

  .circle-text:nth-child(3) {
    transform: rotate(21.18deg) translateX(-50%);
  }

  .circle-text:nth-child(4) {
    transform: rotate(31.77deg) translateX(-50%);
  }

  .circle-text:nth-child(5) {
    transform: rotate(42.35deg) translateX(-50%);
  }

  .circle-text:nth-child(6) {
    transform: rotate(52.94deg) translateX(-50%);
  }

  .circle-text:nth-child(7) {
    transform: rotate(63.94deg) translateX(-50%);
  }

  .circle-text:nth-child(8) {
    transform: rotate(74.94deg) translateX(-50%);
  }

  .circle-text:nth-child(9) {
    transform: rotate(86.94deg) translateX(-50%);
  }

  .circle-text:nth-child(10) {
    transform: rotate(97.94deg) translateX(-50%);
  }

  .circle-text:nth-child(11) {
    transform: rotate(108.94deg) translateX(-50%);
  }

  .circle-text:nth-child(12) {
    transform: rotate(118.94deg) translateX(-50%);
  }

  .circle-text:nth-child(13) {
    transform: rotate(126.94deg) translateX(-50%);
  }

  .circle-text:nth-child(14) {
    transform: rotate(137.94deg) translateX(-50%);
  }

  .circle-text:nth-child(15) {
    transform: rotate(146.94deg) translateX(-50%);
  }

  .circle-text:nth-child(16) {
    transform: rotate(154.94deg) translateX(-50%);
  }

  .circle-text:nth-child(17) {
    transform: rotate(164.94deg) translateX(-50%);
  }

  .circle-text:nth-child(18) {
    transform: rotate(176.94deg) translateX(-60%);
  }

  .circle-text:nth-child(19) {
    transform: rotate(189.94deg) translateX(-10%);
  }

  .circle-text:nth-child(20) {
    transform: rotate(199.94deg) translateX(-50%);
  }

  .circle-text:nth-child(21) {
    transform: rotate(209.94deg) translateX(-50%);
  }

  .circle-text:nth-child(22) {
    transform: rotate(218.94deg) translateX(-50%);
  }

  .circle-text:nth-child(23) {
    transform: rotate(230.94deg) translateX(-50%);
  }

  .circle-text:nth-child(24) {
    transform: rotate(242.94deg) translateX(-50%);
  }

  .circle-text:nth-child(25) {
    transform: rotate(256.94deg) translateX(-50%);
  }

  .circle-text:nth-child(26) {
    transform: rotate(270.94deg) translateX(-50%);
  }

  .circle-text:nth-child(27) {
    transform: rotate(280.94deg) translateX(-50%);
  }

  .circle-text:nth-child(28) {
    transform: rotate(296.94deg) translateX(-50%);
  }

  .circle-text:nth-child(29) {
    transform: rotate(312.94deg) translateX(-50%);
  }

  .circle-text:nth-child(30) {
    transform: rotate(322.94deg) translateX(-50%);
  }

  /*#endregion*/

  .second-template {
    box-shadow: 1px -1px 18px 1px #262626;
  }
</style>
