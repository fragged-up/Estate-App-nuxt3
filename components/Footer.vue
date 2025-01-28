<script>
  // import Button from '@/components/atoms/Button.vue';
  // import Logo from '@/components/atoms/Logo.vue';
  // import FooterInput from '@/components/atoms/FooterInput.vue';

  export default {
    name: 'AppFooter',
  }
</script>

<template>
  <div class="bg-fgl">
    <div
      class="before-footer w-full items-center justify-between border-b-2 border-hg bg-mg bg-foot-image bg-cover bg-center bg-no-repeat p-4 laptop:flex laptop:p-6"
    >
      <div class="before-footer-text">
        <h1 class="pt-4 font-sans text-3xl font-semibold text-white">
          Start Your Real Estate
          <br >
          Journey Today
        </h1>

        <p class="py-8 font-sans text-sm font-medium text-gl">
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, or expert real estate advice,
          Estatein is here to assist you every step of the way. Take the first
          step towards your real estate goals and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
      </div>

      <div class="mx-auto w-11/12 py-8 text-center">
        <Button
          :class="'w-full rounded-lg bg-pr py-4 font-sans text-sm font-medium text-white laptop:max-w-[153px]'"
          btn-text="Explore Properties"
        />
      </div>
    </div>

    <footer class="footer">
      <header class="footer-head black">
        <Logo />
        <FooterInput />
      </header>
      <section>
        <div class="black grid grid-cols-2 gap-4 py-6">
          <div class="p-4">
            <div class="inner-left-side">
              <h2 class="font-sans text-base font-medium text-gl">Home</h2>
              <p class="font-sans text-sm font-medium text-white">
                Hero Section
              </p>
              <p class="font-sans text-sm font-medium text-white">Features</p>
              <p class="font-sans text-sm font-medium text-white">Properties</p>
              <p class="font-sans text-sm font-medium text-white">
                Testimonials
              </p>
              <p class="font-sans text-sm font-medium text-white">FAQ'S</p>
            </div>
          </div>

          <div class="border-l-2 border-gl p-4">
            <div class="inner-right-side">
              <h2 class="font-sans text-base font-medium text-gl">About Us</h2>
              <p class="font-sans text-sm font-medium text-white">Our Story</p>
              <p class="font-sans text-sm font-medium text-white">Our Works</p>
              <p class="font-sans text-sm font-medium text-white">
                How it Works
              </p>
              <p class="font-sans text-sm font-medium text-white">Our Team</p>
              <p class="font-sans text-sm font-medium text-white">
                Our Clients
              </p>
            </div>
          </div>

          <div class="row-auto p-4">
            <div class="border-lg h-full border-b">
              <h2 class="font-sans text-base font-medium text-gl">
                Properties
              </h2>
              <p class="font-sans text-sm font-medium text-white">Portfolio</p>
              <p class="font-sans text-sm font-medium text-white">Categories</p>
            </div>
          </div>

          <div class="border-l-2 border-gl p-4">
            <div class="inner-right-side">
              <h2 class="font-sans text-base font-medium text-gl">Services</h2>
              <p class="font-sans text-sm font-medium text-white">
                Valuation Mastery
              </p>
              <p class="font-sans text-sm font-medium text-white">
                Strategic Marketing
              </p>
              <p class="font-sans text-sm font-medium text-white">
                Neogotiation Wizardy
              </p>
              <p class="font-sans text-sm font-medium text-white">
                Closing Success
              </p>
              <p class="font-sans text-sm font-medium text-white">
                Property Management
              </p>
            </div>
          </div>

          <div class="relative p-4 pt-0">
            <div class="inner-left-side unify">
              <h2 class="font-sans text-base font-medium text-gl">
                Contact Us
              </h2>
              <p class="font-sans text-sm font-medium text-white">
                Contact Form
              </p>
              <p class="font-sans text-sm font-medium text-white">
                Our Offices
              </p>
            </div>
          </div>
        </div>
      </section>

      <nav class="bg-[#1A1A1A] py-10">
        <div class="ic-c flex items-center justify-center gap-4">
          <div class="rounded-full bg-[#141414] p-6">
            <img
              :src="$loadImage('/socialMedia/facebook.svg')"
              alt="facebook"
            >
          </div>
          <div class="rounded-full bg-[#141414] p-6">
            <img :src="$loadImage('/socialMedia/in.svg')" alt="instagram" >
          </div>
          <div class="rounded-full bg-[#141414] p-6">
            <img :src="$loadImage('/socialMedia/twitter.svg')" alt="twitter" >
          </div>
          <div class="rounded-full bg-[#141414] p-6">
            <img :src="$loadImage('/socialMedia/youtube.svg')" alt="youtube" >
          </div>
        </div>
        <p class="my-4 text-center font-sans text-sm font-medium text-white">
          @2023 Estatein. All Rights Reserved.
        </p>
        <p class="my-4 text-center font-sans text-sm font-medium text-white">
          Terms & Conditions
        </p>
      </nav>
    </footer>
  </div>
</template>

<style scoped>
  .inner-left-side {
    width: 100%;
    border-bottom: 2px solid #999999;
    padding-bottom: 1rem;
  }
  .inner-right-side {
    width: 90%;
    border-bottom: 2px solid #999999;
    padding-bottom: 1rem;
  }
</style>
