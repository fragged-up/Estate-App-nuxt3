<script setup lang="ts">
  import { HERO_HIGHLIGHTS } from '~/constants';
  useSeoMeta({ title: 'Services', });
</script>

<template>
  <div>
    <DynamicHero variant="services" />
    <nav class="hero-highlight-container">
     <HeroHighlight v-for="highlight in HERO_HIGHLIGHTS" :key="highlight.id" :card="highlight" />
    </nav>

    <main class="w-full">
      <section class="section-layout">
        <div class="">
          <div class="section-1 mx-auto laptop:mt-[11.25rem]">
            <MainBlock
              :header-text="'Unlock Property Value'"
              :cont-style="'laptop:mx-0'"
              :sub-cont-style="'laptop:mx-0'"
              :para-text="'Selling your property should be a rewarding experience, and at Estatein, we make sure it is.'">
              <UnlockCard><template #unlock /></UnlockCard>
            </MainBlock>
          </div>

          <div class="section-2">
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
            <UnlockCard>
              <template #smart />
            </UnlockCard>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
