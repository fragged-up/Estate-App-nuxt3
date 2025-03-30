<script setup>
  useSeoMeta({
    title: 'Contact Us',
  })

</script>

<template>
  <div class="contact-page">
    <header class="fallback w-full border-b border-[#262626] bg-[linear-gradient(135deg,_#262626_0%,_#0D0D0D_53%)] px-10 py-32">
      <div class="laptop:my-12 laptop:py-16">
        <h1 class="font-sans text-3xl font-semibold text-white"> Get in Touch with Estatein </h1>
        <p class="py-6 font-sans text-sm font-medium text-[#999999]">
          Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have.
        </p>
      </div>
      <div class="hero-contact">
        <div class="grid grid-cols-2 grid-rows-2 gap-x-2.5 gap-y-2.5 rounded-md border-2 border-[#262626] p-4 laptop:grid-flow-col laptop:grid-cols-none laptop:grid-rows-none">
          <div class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#1A1A1A] px-2 py-4 text-center laptop:flex-grow-0">
            <div class="flex flex-col items-center justify-center">
              <img
                :src="$loadImage('/icons/arrowRtop.svg')"
                class="mr-4 self-end"
                alt="rtop" >
              <img
                :src="$loadImage('/icons/homeIcon.svg')"
                class="self-center"
                alt="homeIcon" >
            </div>
            <p class="font-sans text-sm font-semibold text-white laptop:my-4">   info@estatein.com   </p>
          </div>
          <div class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#1A1A1A] px-2 py-4 text-center laptop:flex-grow-0">
            <div class="flex flex-col items-center justify-center">
              <img
                :src="$loadImage('/icons/arrowRtop.svg')"
                class="mr-4 self-end"
                alt="rtop" >
              <img
                :src="$loadImage('/icons/cameraIcon.svg')"
                class="self-center"
                alt="homeIcon" >
            </div>
            <p class="font-sans text-sm font-semibold text-white laptop:my-4">  +1 (123) 456-7890 </p>
          </div>
          <div class="laptop:flex-grow-0 flex flex-col rounded-lg border-2 border-[#262626] bg-[#1A1A1A] px-2 py-4 text-center">
            <div class="flex flex-col items-center justify-center">
              <img
                :src="$loadImage('/icons/arrowRtop.svg')"
                class="mr-4 self-end"
                alt="rtop" >
              <img
                :src="$loadImage('/icons/buildingIcon.svg')"
                class="self-center"
                alt="homeIcon" >
            </div>
            <p class="font-sans text-sm font-semibold text-white laptop:my-4">  Instagram / Linkedin / Facebook   </p>
          </div>
          <div class="flex flex-col rounded-lg border-2 border-[#262626] bg-[#1A1A1A] px-2 py-4 text-center laptop:flex-grow-0">
            <div class="flex flex-col items-center justify-center">
              <img
                :src="$loadImage('/icons/arrowRtop.svg')"
                class="mr-4 self-end"
                alt="rtop" >
              <img
                :src="$loadImage('/icons/sunIcon.svg')"
                class="self-center"
                alt="homeIcon" >
            </div>
            <p class="font-sans text-sm font-semibold text-white laptop:my-4"> Main Headquarters </p>
          </div>
        </div>
      </div>
    </header>

    <main class="main-contact">
      <MainBlock :header-text="`Let's Connect`" :para-text="`We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein.`">
        <template #default> <FormContact /> </template>
      </MainBlock>

        <!-- <MainBlock :header-text="lastHead" :para-text="lastPara">
          <template #default>
           <Office />
           <div class="w-11/12 my-6 mx-auto"><CardOffice><template #first/></CardOffice></div>
            <div class="w-11/12 my-6 mx-auto"><CardOffice><template #second/></CardOffice></div>
            <div class="w-11/12 my-16 mx-auto"><ExploreCard /></div>
          </template>
        </MainBlock> -->

      <FormContact />

      <section>
        <MainBlock :header-text="'Discover Our Office Locations'" :para-text="`Estatein is here to serve you across multiple locations. Whether you're looking to meet our team.`">
          <template #top> <div class="my-6"><Office /></div> </template>
          <template #default>
            <div class="mx-auto w-11/12">
              <div class="mx-auto flex w-11/12 flex-col items-center justify-center gap-y-8 laptop:flex-row laptop:justify-around laptop:gap-10">
                <CardOffice><template #first /></CardOffice>
                <CardOffice><template #second /></CardOffice>
              </div>
              <div class="mx-auto my-16 w-11/12"> <ExploreCard /> </div>
            </div>
          </template>
        </MainBlock>
      </section>

    </main>
  </div>
</template>

