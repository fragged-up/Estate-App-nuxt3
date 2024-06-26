<script setup>
// import RepeatedBlock from '../molecules/RepeatedBlock.vue';
// import UnlockBox from './UnlockBox.vue';
const h1 = 'Valuation Mastery';
const h2 = 'Strategic Marketing';
const h3 = 'Negotiation Wizardry';
const h4 = 'Closing Success';

const hh1 = 'Tenant Harmony';
const hh2 = 'Maintenance Ease';
const hh3 = 'Financial Peace of Mind';
const hh4 = 'Legal Guardian';

const hhh1 = 'Market Insight';
const hhh2 = 'ROI Assessment';
const hhh3 = 'Customized Strategies';
const hhh4 = 'Diversification Mastery';

const p1 = 'Discover the true worth of your property with our expert valuation services.';
const p2 = 'Selling a property requires more than just a listing; it demands a strategic marketing.';
const p3 = 'Negotiating the best deal is an art, and our negotiation experts are masters of it.';
const p4 = 'A successful sale is not complete until the closing. We guide you through the intricate closing process.';

const pp1 = 'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.';
const pp2 = 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.';
const pp3 = 'Managing property finances can be complex. Our financial experts take care of rent collection';
const pp4 = 'Stay compliant with property laws and regulations effortlessly.';

const ppp1 = 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions';
const ppp2 = 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments';
const ppp3 = 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs';
const ppp4 = 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations';

const unlockHeader_1 = 'Unlock the Value of Your Property Today';
const unlockHeader_2 = 'Experience Effortless Property Management';
const unlockHeader_3 = 'Unlock Your Investment Potential';

const unlockPara_1 = "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.";
const unlockPara_2 = "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.";
const unlockPara_3 = "Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.";


const unlockButText = "Learn More";

const { width, isDesk } = useWindowSize();
const smartLaptop = ref(`Building a real estate portfolio requires a strategic approach.\nEstatein's Investment Advisory Service empowers you to make smart investments and informed decisions.`);
const smartMobile = ref("Building a real estate portofolio requires a starategic approach");
const whichHead = computed(()=>{
  return isDesk.value ? smartLaptop.value : smartMobile.value
})


</script>
<!-- <div class="grid auto-rows-auto gap-y-6 px-4 rounded-xl laptop:grid-cols-2 laptop:gap-0 laptop:px-0"> -->
<!-- <div class="border-2 border-[#262626] rounded-xl max-w-[413px]"></div>
       </div> -->
<template>


  <div v-if="$slots.unlock" class="text-start">
    <slot name="unlock">
      <div class="grid grid-cols-1 gap-x-4 laptop: controller-box">

        <div class="flex flex-col justify-center items-center laptop:flex-row gap-4">
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Valut.svg'" :head="h1" :para="p1" />
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Strategic.svg'" :head="h2" :para="p2" />
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Clossing.svg'" :head="h4" :para="p4" />
        </div>
        <div class="flex flex-col justify-center items-center laptop:flex-row gap-4">
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Negotiation.svg'" :head="h3" :para="p3" />
          <UnlockBox :class="'laptop:max-w-full'" :learnMoreButt="`laptop:max-w-[110px] self-end mt-auto`" :HTxt="unlockHeader_1" :PTxt="unlockPara_1" :BTx="unlockButText" />
        </div>
      </div>
    </slot>
  </div>

  <div v-if="$slots.effort">
    <slot name="effort">
      <div class="grid grid-cols-1 gap-x-4 laptop: controller-box">
        <div class="flex flex-col justify-center items-center laptop:flex-row gap-4">
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Tenant.svg'" :head="hh1" :para="pp1" />
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Maintain.svg'" :head="hh2" :para="pp2" />
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Financial.svg'" :head="hh3" :para="pp3" />
        </div>
        <div class="flex flex-col justify-center items-center laptop:flex-row gap-4">
          <RepeatedBlock :class="'b-frame'" :image="'/unlock/Legal.svg'" :head="hh4" :para="pp4" />
          <UnlockBox :class="'laptop:max-w-full'" :learnMoreButt="`laptop:max-w-[110px] self-end mt-auto`" :HTxt="unlockHeader_2" :PTxt="unlockPara_2" :BTx="unlockButText" />
        </div>
      </div>
    </slot>

  </div>

  <div v-if="$slots.smart">
    <slot name="smart">
     
      <div class="max-w-full grid grid-cols-1 gap-x-4 laptop:max-w-[1280px] laptop:grid-cols-2 laptop:auto-cols-auto laptop:mx-auto laptop:my-20">
        <div class="p4 w-full my-6 laptop:p-0 laptop:!w-auto laptop:max-w-[560px]">
      <div class="top-cont w-11/12 mx-auto laptop:mx-0 laptop:inline-flex laptop:flex-col laptop:m-0">
        <div class="stars-cont laptop:m-0">
          <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars">
        </div>
        <div class="smart-top w-11/12 py-4 my-4 mx-auto laptop:mx-0 laptop:max-w-[412px]">
          <h1 class="font-sans font-semibold text-white text-3xl laptop:text-wrap">Smart Invesements,<br class="break"/> informed Decisions</h1>
          <p class="leading-5 text-sm font-medium font-urbanist text-[#999999] py-4 laptop:break-words">{{ whichHead }}</p>
        </div>
        <UnlockBox :class="'mx-auto laptop:text-center laptop:max-h-[300px] laptop:m-0'" :HTxt="unlockHeader_3"
        :PTxt="unlockPara_3" :BTx="unlockButText" />
      </div>
    </div>
        <div
          class="grid grid-cols-1 laptop:bg-[#1A1A1A] laptop:grid-cols-[repeat(2,auto)] laptop:grid-rows-[repeat(2,auto)] mx-auto gap-2.5 p-4 self-stretch">
          <RepeatedBlock :class="'b-frame bg-[#141414] laptop:max-w-[395px] laptop:max-h-[260px]'" :image="'/unlock/Market.svg'" :head="hhh1" :para="ppp1" />
          <RepeatedBlock :class="'b-frame bg-[#141414] laptop:max-w-[395px] laptop:max-h-[260px]'" :image="'/unlock/ROI.svg'" :head="hhh2" :para="ppp2" />
          <RepeatedBlock :class="'b-frame bg-[#141414] laptop:max-w-[395px] laptop:max-h-[260px]'" :image="'/unlock/Customized.svg'" :head="hhh3" :para="ppp3" />
          <RepeatedBlock :class="'b-frame bg-[#141414] laptop:max-w-[395px] laptop:max-h-[260px]'" :image="'/unlock/Diver.svg'" :head="hhh4" :para="ppp4" />
        </div>


      </div>
    </slot>
  </div>

</template>

<style scoped>
.shadow-frame {
  box-shadow: 1px -1px 18px 1px #2f1313;
}



.b-frame {
  margin: 0;
  border: 2px solid #262626;
  border-radius: .75rem;
  padding: 2rem;
  width: auto;
  max-width: 413px;
}

.controller-box {
  max-width: 1280px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(1, minmax(100px, 1fr));
  grid-template-rows: repeat(2, minmax(100px, auto));
  row-gap: 20px;
  column-gap: 15px;
}

.break{
  display:none;
}
@media (min-width:1440px){
  .break{
    display:block;
  }
}

/* laptop:grid laptop:auto-rows-auto laptop:auto-cols-auto gap-4 */
/* .smart-desktop {
  background-color:#1A1A1A;
  display:grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);  
  margin:auto;
  gap:10px;
  padding:1rem;
  
} */
</style>