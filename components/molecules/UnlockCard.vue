<script setup>
import RepeatedBlock from '../molecules/RepeatedBlock.vue';
import Button from '../atoms/Button.vue';
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


</script>

<template>
 <div v-if="$slots.unlock">
    <slot name="unlock">
    <div class="grid auto-rows-auto gap-y-6 px-4 rounded-xl">
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Valut.svg'" :head="h1" :para="p1" />
      </div>
  
      <div class="border-2 border-[#262626] rounded-xl p-0">
        <RepeatedBlock :class="'border-none p-0'" :image="'/assets/unlock/Strategic.svg'" :head="h2" :para="p2" />
      </div>
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Negotiation.svg'" :head="h3" :para="p3" />
      </div>
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Clossing.svg'" :head="h4" :para="p4" />
      </div>

      <div class="box back bg-hero-about-abst bg-fixed text-center rounded-xl px-4">
        <h4 class="py-2 font-san text-white text-lg font-bold">Unlock the Value of Your Property Today </h4>
        <Button :class="'w-full py-2 bg-[#141414] border-2 border-[#262626] text-white text-center px-10 my-4 rounded-xl'" :buttonTxt="'Learn More'"  />
        <p class="py-2 font-san text-gl text-sm font-medium">Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
      </div>
      
    </div>
  </slot>
 </div>

<div v-if="$slots.effort">
  <slot name="effort">
    <div class="grid auto-rows-auto gap-y-6 px-4 rounded-xl">
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Tenant.svg'" :head="hh1" :para="pp1" />
      </div>
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Maintain.svg'" :head="hh2" :para="pp2" />
      </div>
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Financial.svg'" :head="hh3" :para="pp3" />
      </div>
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Legal.svg'" :head="hh4" :para="pp4" />
      </div>
        
      <div class="box back bg-hero-about-abst bg-fixed text-center rounded-xl px-4">
        <h4 class="py-2 font-san text-white text-lg font-bold">Experience Effortless Property Management </h4>
        <Button :class="'w-full py-2 bg-[#141414] border-2 border-[#262626] text-white text-center px-10 my-4 rounded-xl'" :buttonTxt="'Learn More'" />
        <p class="py-2 font-san text-gl text-sm font-medium">Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
      </div>

    </div>
  </slot>
  
</div>

<div v-if="$slots.smart">
  <slot name="smart">
    <div class="grid auto-rows-auto gap-y-6 px-4 rounded-xl">

      <div class="box back text-center px-4 bg-hero-about-abst bg-fixed rounded-xl">
        <h4 class="py-2 font-san text-white text-lg font-bold">Unlock Your Investment Potential </h4>
        <Button :class="'w-full py-2 bg-[#141414] border-2 border-[#262626] text-white text-center rounded-xl px-10 my-4'" :buttonTxt="'Learn More'"  />
        <p class="py-2 font-san text-gl text-sm font-medium">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
      </div>

      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'flex flex-col border-none'" :image="'/assets/unlock/Market.svg'" :head="hhh1" :para="ppp1" />
      </div>
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/ROI.svg'" :head="hhh2" :para="ppp2" />
      </div>
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Customized.svg'" :head="hhh3" :para="ppp3" />
      </div>
  
      <div class="border-2 border-[#262626] rounded-xl">
        <RepeatedBlock :class="'border-none'" :image="'/assets/unlock/Diver.svg'" :head="hhh4" :para="ppp4" />
      </div>
        
     

    </div>
  </slot>
  
</div>


</template>

<style scoped>
.shadow-frame {
 box-shadow: 1px -1px 18px 1px #262626;
}
.back{
  background-color: #262626;
}
</style>