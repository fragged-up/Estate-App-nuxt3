<script setup lang="ts">
  useSeoMeta({
    title: 'Services',
  });

  const thirdHeader = 'Smart Investments, Informed Decisions';

  const thirdPara = 'Building a real estate portfolio requires a strategic approach.';
</script>
<!-- px-10 py-32 -->
<template>
  <div class="services-page">
    <header class="fallback w-full bg-[linear-gradient(135deg,_#262626_0%,_#0D0D0D_53%)] px-10 py-32 border-b border-[#262626]">
      <h1 class="font-sans text-3xl font-semibold text-white">Elevate Your Real Estate Experience</h1>
      <p class="py-6 font-sans text-sm font-medium text-[#999999]">
        Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of
        services, each designed to cater to your unique needs and dreams.
      </p>
    </header>
    <nav>
      <CardFour />
    </nav>
    <main class="w-full">
      <section>
        <div class="section-1 mx-auto">
          <MainBlock
            :header-text="'Unlock Property Value'"
            :cont-style="'laptop:mx-0'"
            :sub-cont-style="'laptop:mx-0'"
            :para-text="'Selling your property should be a rewarding experience, and at Estatein, we make sure it is.'"
          >
            <UnlockCard><template #unlock /></UnlockCard>
          </MainBlock>
        </div>

        <div class="section-2 mx-auto">
          <MainBlock
            :header-text="'Effortless Property Management'"
            :cont-style="'laptop:mx-0'"
            :sub-cont-style="'laptop:mx-0'"
            :para-text="'Owning a property should be a pleasure, not a hassle. Estatein\'s Property Management Service takes the stress out of property ownership.'">
          
            <UnlockCard>
              <template #effort />
            </UnlockCard>

          </MainBlock>
        </div>
        <div class="section-3">
          <UnlockCard><template #smart /></UnlockCard>
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
