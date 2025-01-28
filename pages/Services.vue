<script setup lang="ts">
  // import CardFour from '~/components/molecules/CardFour.vue';
  // import MainBlock from '~/components/organisms/MainBlock.vue';
  // import UnlockCard from '~/components/molecules/UnlockCard.vue';
  useSeoMeta({
    title: 'Services',
  })

  const firstHeader ='Unlock Property Value'
  const firstPara ='Selling your property should be a rewarding experience, and at Estatein, we make sure it is.'
    
  const secondHeader ='Effortless Property Management'
  const secondPara ="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership."

// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const thirdHeader ='Smart Investments, Informed Decisions'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const thirdPara ='Building a real estate portfolio requires a strategic approach.'

</script>

<template>
  <div class="services-page">
    <header class="fallback w-full border-b border-[#262626] px-6 py-12">
      <h1 class="font-sans text-3xl font-semibold text-white">
        Elevate Your Real Estate Experience
      </h1>
      <p class="py-6 font-sans text-sm font-medium text-[#999999]">
        Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.
      </p>
      <CardFour />
    </header>
    <main>
      <section>
        <div class="section-1 mx-auto max-w-[1280px]">
          <MainBlock
            :header-text="firstHeader"
            :cont-style="'laptop:mx-0'"
            :sub-cont-style="'laptop:mx-0'"
            :para-text="firstPara"
          >
            <UnlockCard><template #unlock/></UnlockCard>
          </MainBlock>
        </div>

        <div class="section-2 mx-auto max-w-[1280px]">
          <MainBlock
            :header-text="secondHeader"
            :cont-style="'laptop:mx-0'"
            :sub-cont-style="'laptop:mx-0'"
            :para-text="secondPara"
          >
            <UnlockCard><template #effort/></UnlockCard>
          </MainBlock>
        </div>
        <div class="section-3">
          <UnlockCard><template #smart/></UnlockCard>
        </div>
        <!-- 
        <div class="section-3">
          <MainBlock>
            <template #top>
            <div v-if="!isDesk">
                <div class="w-11/12 py-4 my-4 mx-auto laptop:max-w-auto laptop:w-auto laptop:ml-auto">
                  <h1 class="font-sans font-semibold text-white text-3xl">
                    {{ thirdHeader }}
                  </h1>
                  <p class="leading-5 text-sm font-medium font-urbanist text-[#999999] py-4">
                    {{ thirdPara }}
                  </p>
                </div>
            </div>
            </template>
            <UnlockCard>
              <template #smart>

              </template>
            </UnlockCard>
          </MainBlock>
        </div> -->
      </section>
    </main>
  </div>
</template>

<style scoped></style>
