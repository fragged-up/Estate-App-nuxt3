<script setup lang="ts">
  // import CardFour from '~/components/molecules/CardFour.vue';
  // import MainBlock from '~/components/organisms/MainBlock.vue';
  // import UnlockCard from '~/components/molecules/UnlockCard.vue';

  const heroService = 'Elevate Your Real Estate Experience'
  const paraService =
    'Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.'

  const firstHeader = 'Unlock Property Value'
  const firstPara = 'Selling your property should be a rewarding experience, and at Estatein, we make sure it is.'

  const secondHeader = 'Effortless Property Management'
  const secondPara = "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership."

  const thirdHeader = 'Smart Investments, Informed Decisions'
  const thirdPara = 'Building a real estate portfolio requires a strategic approach.'
</script>

<template>
  <div class="services-page">
    <header class="fallback w-full border-b border-[#262626] px-6 py-12">
      <h1 class="font-sans text-3xl font-semibold text-white">{{ heroService }}</h1>
      <p class="py-6 font-sans text-sm font-medium text-[#999999]">{{ paraService }}</p>
      <CardFour />
    </header>
    <main>
      <section>
        <div class="section-1 mx-auto max-w-[1280px]">
          <MainBlock :header-text="firstHeader" :contStyle="'laptop:mx-0'" :subContStyle="'laptop:mx-0'" :para-text="firstPara">
            <UnlockCard><template #unlock></template></UnlockCard>
          </MainBlock>
        </div>

        <div class="section-2 mx-auto max-w-[1280px]">
          <MainBlock :header-text="secondHeader" :contStyle="'laptop:mx-0'" :subContStyle="'laptop:mx-0'" :para-text="secondPara">
            <UnlockCard><template #effort></template></UnlockCard>
          </MainBlock>
        </div>
        <div class="section-3">
          <UnlockCard><template #smart></template></UnlockCard>
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
