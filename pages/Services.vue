<script setup lang="ts">
  import { HERO_HIGHLIGHTS, PROPERTIES_CONFIG, EFFORTS_CONFIG, SMART_CONFIG } from '~/constants';
  useSeoMeta({ title: 'Services' });
</script>

<template>
  <div>
    <DynamicHero variant="services" />
    <nav class="hero-highlight-container w-11/12 mx-auto mt-8">
      <HeroHighlight v-for="highlight in HERO_HIGHLIGHTS" :key="highlight.id" :card="highlight" />
    </nav>

    <main class="w-full">
      <section class="px-4">
        <div class="">
          <div class="section-1 mx-auto laptop:mt-[11.25rem]">
            <MainBlock :header-text="PROPERTIES_CONFIG.title" :para-text="PROPERTIES_CONFIG.summary">
            <div class="grid grid-rows-2 gap-y-5 justify-center items-center">
                <ServiceCard  v-for="property in PROPERTIES_CONFIG.features" :key="property.id" :service-data="property" />
                <div class="mx-auto"><InfoHighLightBox :experties="PROPERTIES_CONFIG.experties" /></div>
              </div>
            </MainBlock>
          </div>

          <div class="section-2">
            <MainBlock :header-text="EFFORTS_CONFIG.title" :para-text="EFFORTS_CONFIG.summary">
              <div class="grid gap-y-5 justify-center items-center">
              <ServiceCard v-for="effort in EFFORTS_CONFIG.features" :key="effort.id" :service-data="effort" />
              <div class="mx-auto"><InfoHighLightBox :experties="EFFORTS_CONFIG.experties" /></div>
            </div>
            </MainBlock>
          </div>




          <div class="section-3">
            <MainBlock :header-text="SMART_CONFIG.title" :para-text="SMART_CONFIG.summary">
              <div class="inline-grid gap-y-5 mx-auto justify-center items-center laptop:grid-cols-2 gap-x-5 max-laptop:justify-center">
                <div class="inline-flex h-full justify-center items-center laptop:justify-start laptop:items-start"><InfoHighLightBox :experties="SMART_CONFIG.experties" /></div>
               <div class="bg-[#1A1A1A]  max-laptop:justify-center max-laptop:items-center p-3 rounded-xl grid grid-cols laptop:grid-cols-2 grid-rows-2 gap-3">
                 <ServiceCard v-for="smart in SMART_CONFIG.features" :key="smart.id" :service-data="smart" />
                </div>
              </div>
            </MainBlock>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

