<script setup>
  import {
    cardHead_2,
    cardHead_3,
    cardHead_4,
    cardHead_6,
    cardPara_2,
    cardPara_3,
    cardPara_4,
    cardPara_6,
    h1,
    h2,
    h3,
    h4,
    p1,
    p2,
    p3,
    p4,
    stepHead_1,
    stepHead_2,
    stepHead_3,
    stepHead_4,
    stepHead_5,
    stepHead_6,
    stepPara_1,
    stepPara_2,
    stepPara_3,
    stepPara_4,
    stepPara_5,
    stepPara_6,
    profiles,
  } from '~/constants/aboutsUsPage'

  useSeoMeta({
    title: 'About Us',
  })

  /*
    cardHead_5
    cardPara_5
    Not Imported, not Used Right Now
    */

  const MB_HEAD = 'Our Journey'
  const MB_PARA =
    "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
</script>

<template>
  <div>
    <header class="laptop:hidden">
      <nav>
        <header
          class="bg-position-hero-about-abst bg-size-hero-about-abst h-70 mx-auto my-10 w-11/12 rounded-3xl border border-[#262626] bg-hero-about-abst bg-no-repeat">
          <div
            class="bg-position-hero-about-image bg-size-hero-about-image h-80 w-full bg-hero-about-image bg-no-repeat" />
        </header>
        <!-- :class="`m-0 w-11/12 mx-auto`" -->
        <div :subContStyle="`w-11/12`">
          <MainBlock :header-text="MB_HEAD" :para-text="MB_PARA">
            <template #default>
              <div class="mx-auto w-11/12">
                <CardThree />
              </div>
            </template>
          </MainBlock>
        </div>
      </nav>
    </header>

    <header>
      <div
        class="desk-about-page mx-auto hidden grid-cols-2 items-stretch justify-center p-8 laptop:grid">
        <div class="left-side-about m-auto px-8">
          <div class="flex flex-col gap-y-6">
            <div class="stars-cont">
              <img
                :src="$loadImage('/icons/stars.svg')"
                alt="stars"
                class="stars" >
            </div>
            <h1 class="font-sans text-5xl font-semibold text-white">
              Our Journey
            </h1>
            <p class="font-sans text-base font-medium text-gl">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
          </div>
          <CardThreeDesk />
        </div>
        <div class="right-side-about h-[29.75rem] bg-about-us bg-no-repeat" />
      </div>
    </header>
    <div class="cont">
      <main
        class="mx-auto my-8 flex w-11/12 grid-cols-[30%_1fr] flex-col items-center justify-center gap-x-20 bg-fgl laptop:grid laptop:items-center laptop:justify-between">
        <div class="first-frame laptop:place-self-start">
          <MainBox :headline="cardHead_2" :paraline="cardPara_2" />
        </div>
        <div class="block-cr p-5">
          <div class="row-one">
            <LineImg
              :image="'/icons/TrustIcon.svg'"
              :head="h1"
              :para="p1"
              :container-wrapper="'box-one'" />
            <LineImg
              :image="'/icons/ExcellenceIcon.svg'"
              :head="h2"
              :para="p2"
              :container-wrapper="'box-two'" />
          </div>
          <div class="row-two">
            <LineImg
              :image="'/icons/CentricIcon.svg'"
              :head="h3"
              :para="p3"
              :container-wrapper="'box-three'" />
            <LineImg
              :image="'/icons/CommitIcon.svg'"
              :head="h4"
              :para="p4"
              :container-wrapper="'box-fourth'" />
          </div>
        </div>
      </main>

      <div class="mx-auto w-11/12">
        <MainBox :headline="cardHead_3" :paraline="cardPara_3" />
        <CardTAbout />
      </div>

      <div class="mx-auto w-11/12">
        <MainBox :headline="cardHead_4" :paraline="cardPara_4" />
        <div
          class="steps-cont my-12 flex grid-cols-3 flex-col gap-y-12 laptop:grid laptop:gap-x-10">
          <Steps
            :steps-no="'Step 01'"
            :step-head="stepHead_1"
            :step-para="stepPara_1" />

          <Steps
            :steps-no="'Step 02'"
            :step-head="stepHead_2"
            :step-para="stepPara_2" />

          <Steps
            :steps-no="'Step 03'"
            :step-head="stepHead_3"
            :step-para="stepPara_3" />

          <Steps
            :steps-no="'Step 04'"
            :step-head="stepHead_4"
            :step-para="stepPara_4" />

          <Steps
            :steps-no="'Step 05'"
            :step-head="stepHead_5"
            :step-para="stepPara_5" />

          <Steps
            :steps-no="'Step 06'"
            :step-head="stepHead_6"
            :step-para="stepPara_6" />
        </div>
      </div>

      <div class="mx-auto w-11/12">
        <MainBox :headline="cardHead_6" :paraline="cardPara_6" />
        <div
          class="my-12 flex flex-col items-center gap-y-12 laptop:flex-row laptop:justify-between laptop:gap-0">
          <ProfileCard
            v-for="(profile, index) in profiles"
            :key="index"
            :name="profile.profileName"
            :image-url="profile.profileImageUrl"
            :title="profile.profileTitle"
            :twitter-url="profile.profileTwitterUrl"
            :say-hello-text="profile.profileHelloText" />
        </div>
      </div>

      <div class="mx-auto w-11/12">
        <MainBox :headline="cardHead_6" :paraline="cardPara_6" />
        <div class="my-12 flex flex-col gap-y-12">
          <div class="laptop:hidden">
            <OurValuedClients />
          </div>
          <!-- box One  -->
          <div class="hidden items-center justify-between gap-x-6 laptop:flex">
            <div
              class="shadow-frame grid gap-y-6 rounded-xl border-2 border-[#262626] p-6">
              <div class="py-5">
                <p class="font-sans text-sm font-medium text-[#999999]">
                  Since 2019
                </p>
                <h2
                  class="py-5 font-sans text-xl font-semibold text-white laptop:hidden">
                  ABC Corporation
                </h2>
                <div class="hidden items-center justify-between laptop:flex">
                  <h2 class="py-5 font-sans text-xl font-semibold text-white">
                    ABC Corporation
                  </h2>
                  <Button
                    :class="'rounded-xl border-2 border-hg bg-mg px-8 py-4 font-sans text-sm font-medium text-white'"
                    :btn-text="'View Website'" />
                </div>
                <div
                  class="rounded-xl border border-[#262626] bg-mg p-4 text-center laptop:hidden">
                  <Button
                    :class="'font-sans text-sm font-medium text-white'"
                    :btn-text="'View Website'" />
                </div>
              </div>

              <div class="grid grid-cols-2">
                <div class="cols-span-1 px-3">
                  <div class="row-inside flex gap-x-4">
                    <img
                      :src="$loadImage('/icons/DomainVec.svg')"
                      alt="DomainVec" >
                    <p class="font-sans text-xs font-medium text-[#999999]">
                      Domain
                    </p>
                  </div>
                  <h3 class="font-sans text-sm font-medium text-white">
                    Commercial Real Estate
                  </h3>
                </div>
                <div class="cols-span-2 border-l-2 border-[#999999] px-3">
                  <div class="row-inside">
                    <img
                      :src="$loadImage('/icons/BlitzVec.svg')"
                      alt="BlitzVec" >
                    <p class="font-sans text-xs font-medium text-[#999999]">
                      Category
                    </p>
                  </div>
                  <h3 class="font-sans text-sm font-medium text-white">
                    Luxury Home Development
                  </h3>
                </div>
              </div>

              <div
                class="what-they-said rounded-xl border-2 border-[#262626] p-6">
                <h3 class="font-sans text-sm font-medium text-[#999999]">
                  What They Said 🤗
                </h3>
                <p class="py-5 font-sans text-sm font-medium text-white">
                  Estatein's expertise in finding the perfect office space for
                  our expanding operations was invaluable. They truly understand
                  our business needs.
                </p>
              </div>
            </div>
            <!-- end Box One  -->

            <!-- box two  -->
            <div
              class="shadow-frame grid gap-y-6 rounded-xl border-2 border-[#262626] p-6">
              <div class="py-5">
                <p class="font-sans text-sm font-medium text-[#999999]">
                  Since 2018
                </p>
                <h2
                  class="py-5 font-sans text-xl font-semibold text-white laptop:hidden">
                  GreenTech Enterprises
                </h2>
                <div class="hidden items-center justify-between laptop:flex">
                  <h2 class="py-5 font-sans text-xl font-semibold text-white">
                    ABC Corporation
                  </h2>
                  <Button
                    :class="'rounded-xl border-2 border-hg bg-mg px-8 py-4 font-sans text-sm font-medium text-white'"
                    :btn-text="'View Website'" />
                </div>
                <div
                  class="rounded-xl border border-[#262626] bg-mg p-4 text-center laptop:hidden">
                  <Button
                    :class="'font-sans text-sm font-medium text-white'"
                    :btn-text="'View Website'" />
                </div>
              </div>

              <div class="grid grid-cols-2">
                <div class="cols-span-1 px-3">
                  <div class="row-inside flex gap-x-4">
                    <img
                      :src="$loadImage('/icons/DomainVec.svg')"
                      alt="DomainVec" >
                    <p class="font-sans text-xs font-medium text-[#999999]">
                      Domain
                    </p>
                  </div>
                  <h3 class="font-sans text-sm font-medium text-white">
                    Commercial Real Estate
                  </h3>
                </div>
                <div class="cols-span-2 border-l-2 border-[#999999] px-3">
                  <div class="row-inside">
                    <img
                      :src="$loadImage('/icons/BlitzVec.svg')"
                      alt="BlitzVec" >
                    <p class="font-sans text-xs font-medium text-[#999999]">
                      Category
                    </p>
                  </div>
                  <h3 class="font-sans text-sm font-medium text-white">
                    Retail Space
                  </h3>
                </div>
              </div>

              <div
                class="what-they-said rounded-xl border-2 border-[#262626] p-6">
                <h3 class="font-sans text-sm font-medium text-[#999999]">
                  What They Said 🤗
                </h3>
                <p class="py-5 font-sans text-sm font-medium text-white">
                  Estatein's ability to identify prime retail locations helped
                  us expand our brand presence. They are a trusted partner in
                  our growth.
                </p>
              </div>
            </div>
          </div>
          <!-- end Box Two -->
        </div>
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
    /* display: subgrid; */
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

  @media (min-width: 1440px) {
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
      width: 60rem;
      max-width: 60rem;
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
