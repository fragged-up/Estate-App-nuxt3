<script setup lang="ts">
  const { isDesk } = useWindowSize();
  const laptopHeader = ref(
    `Building a real estate portfolio requires a strategic approach.\nEstatein's Investment Advisory Service empowers you to make smart investments and informed decisions.`,
  );
  const mobileHeader = ref('Building a real estate portofolio requires a starategic approach');
  const whichHead = computed(() => {
    return isDesk.value ? laptopHeader.value : mobileHeader.value;
  });

  // section 1
  const services_property = [
    {
      icon: '/unlock/Valut.svg',
      title: 'Valuation Mastery',
      description: 'Discover the true worth of your property with our expert valuation services.',
    },
    {
      icon: '/unlock/Strategic.svg',
      title: 'Strategic Marketing',
      description: 'Selling a property requires more than just a listing; it demands a strategic marketing.',
    },
    {
      icon: '/unlock/Clossing.svg',
      title: 'Negotiation Wizardry',
      description: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
    },
  ];
  // section 2
  const services_efforts = [
    {
      icon: '/unlock/Tenant.svg',
      title: 'Tenant Harmony',
      description: 'Discover the true worth of your property with our expert valuation services.',
    },
    {
      icon: '/unlock/Maintain.svg',
      title: 'Maintenance Ease',
      description: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
    },
    {
      icon: '/unlock/Financial.svg',
      title: 'Financial Peace of Mind',
      description: 'Managing property finances can be complex. Our financial experts take care of rent collection',
    },
  ];

  // section 3
  const services_smart = [
    {
      icon: '/unlock/Market.svg',
      title: 'Tenant Harmony',
      description:
        'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
    },
    {
      icon: '/unlock/ROI.svg',
      title: 'Maintenance Ease',
      description:
        'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
    },
    {
      icon: '/unlock/Customized.svg',
      title: 'Financial Peace of Mind',
      description:
        'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
    },
    {
      icon: '/unlock/Diver.svg',
      title: 'Diversification Mastery',
      description:
        'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
    },
  ];
</script>
<!-- <div class="grid auto-rows-auto gap-y-6 px-4 rounded-xl laptop:grid-cols-2 laptop:gap-0 laptop:px-0"> -->
<!-- <div class="border-2 border-[#262626] rounded-xl max-w-[413px]"></div>
       </div> -->
<template>
  <div v-if="$slots.unlock" class="text-start">
    <slot name="unlock">
      <div class="laptop: controller-box grid grid-cols-1 gap-x-4">
        <div class="flex flex-col items-center justify-center gap-4 laptop:flex-row">
          <div class="grid grid-cols-1 laptop:grid-cols-3 gap-6">
            <ServiceCard
              v-for="(service, index) in services_property"
              :key="index"
              :icon="service.icon"
              :title="service.title"
              :description="service.description"
            />
          </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-4 laptop:flex-row">
          <ServiceCard
            :icon="'/unlock/Negotiation.svg'"
            :title="'Negotiation Wizardry'"
            :description="'Negotiating the best deal is an art, and our negotiation experts are masters of it.'"
          />
          <InfoHighLightBox
            title="Unlock the Value of Your Property Today"
            description="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
            button-text="Learn More"
          />
        </div>
      </div>
    </slot>
  </div>

  <div v-if="$slots.effort">
    <slot name="effort">
      <div class="laptop: controller-box grid grid-cols-1 gap-x-4">
        <div class="flex flex-col items-center justify-center gap-4 laptop:flex-row">
          <div class="grid grid-cols-1 laptop:grid-cols-3 gap-6">
            <ServiceCard
              v-for="(service, index) in services_efforts"
              :key="index"
              :icon="service.icon"
              :title="service.title"
              :description="service.description"
            />
          </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-4 laptop:flex-row">
          <ServiceCard
            :icon="'/unlock/Legal.svg'"
            :title="'Legal Guardian'"
            :description="'Stay compliant with property laws and regulations effortlessly.'"
            :style="'width:624px;'"
          />
          <InfoHighLightBox
            title="Experience Effortless Property Management"
            description="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
            button-text="Learn More"
          />
        </div>
      </div>
    </slot>
  </div>

  <div v-if="$slots.smart">
    <slot name="smart">
      <div
        class="grid max-w-full grid-cols-1 gap-x-4 laptop:mx-auto laptop:my-20  laptop:auto-cols-auto laptop:grid-cols-2"
      >
        <div class="p4 my-6 w-full laptop:!w-auto  laptop:p-0">
          <div class="top-cont mx-auto w-11/12 laptop:m-0 laptop:mx-0 laptop:inline-flex laptop:flex-col">
            <div class="stars-cont laptop:m-0">
              <img :src="$loadImage('/icons/stars.svg')" alt="stars" class="stars" >
            </div>

            <div class="smart-top mx-auto my-4 w-11/12 py-4 laptop:mx-0 laptop:max-w-[412px]">
              <h1 class="font-sans text-3xl font-semibold text-white laptop:text-wrap">
                Smart Invesements,
                <br class="hidden laptop:block" >
                informed Decisions
              </h1>
              <p class="font-urbanist py-4 text-sm font-medium leading-5 text-[#999999] laptop:break-words">
                {{ whichHead }}
              </p>
            </div>
                  
            <InfoHighLightBox
            :title="'Unlock Your Investment Potential'"
            :description="'Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.'"
            :button-text="'Learn More'"
             />

          </div>
        </div>
        <div
          class="grid grid-cols-1 gap-2.5 self-stretch p-4 laptop:grid-cols-[repeat(2,auto)] laptop:grid-rows-[repeat(2,auto)] laptop:bg-[#1A1A1A]"
        >
          <RepeatedBlock
            v-for="(block, index) in services_smart"
            :key="index"
            :class="'b-frame bg-[#141414] laptop:max-h-[260px] laptop:max-w-[395px]'"
            :image="block.icon"
            :head="block.title"
            :para="block.description"
          />
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
    border-radius: 0.75rem;
    padding: 2rem;
    width: auto;
    max-width: 413px;
  }

  .controller-box {
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-template-rows: repeat(2, minmax(100px, auto));
    row-gap: 20px;
    column-gap: 15px;
  }
</style>
