<script setup>
import Button from '@/components/atoms/Button.vue';
import Logo from '@/components/atoms/Logo.vue';
import FooterInput from '@/components/atoms/FooterInput.vue';

</script>

<template>
  <div class="bg-mg">
    
    <div class="before-footer bg-mg bg-foot-image bg-no-repeat bg-cover bg-center w-full p-4 border-b-2 border-hg laptop:flex justify-between items-center laptop:p-6">
  
      <div class="before-footer-text">
        <h1 class="text-white text-3xl font-sans font-semibold pt-4">
          Start Your Real Estate <br /> Journey Today
        </h1>
    
        <p class="text-gl text-sm font-sans font-medium py-8">
          Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert
          real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real
          estate goals and explore our available properties or get in touch with our team for personalized assistance.
        </p>
      </div>
  
      <div class="text-center w-11/12 py-8 mx-auto">
        <Button :class="'w-full rounded-lg py-4 bg-pr text-white text-sm font-sans font-medium laptop:max-w-[153px]'"
          buttonTxt="Explore Properties" />
      </div>
  
    </div>
  
  
    <footer class="footer">
      <header class="footer-head black">
        <Logo/>
        <FooterInput />
      </header>
      <section>
        <div class="grid grid-cols-2 gap-4 black py-6">
  
          <div class="p-4 cut-bottom-right">
               
              <h2 class="font-sans text-gl font-medium text-base">Home</h2>
              <p class="text-white font-sans font-medium text-sm">Hero Section</p>
              <p class="text-white font-sans font-medium text-sm">Features</p>
              <p class="text-white font-sans font-medium text-sm">Properties</p>
              <p class="text-white font-sans font-medium text-sm">Testimonials</p>
              <p class="text-white font-sans font-medium text-sm">FAQ'S</p>
  
          </div>
  
          <div class="p-4 border-l border-lg cut-buttom-left">
  
              <h2 class="font-sans text-gl font-medium text-base">About Us</h2>
              <p class="text-white font-sans font-medium text-sm">Our Story</p>
              <p class="text-white font-sans font-medium text-sm">Our Works</p>
              <p class="text-white font-sans font-medium text-sm">How it Works</p>
              <p class="text-white font-sans font-medium text-sm">Our Team</p>
              <p class="text-white font-sans font-medium text-sm">Our Clients</p>
  
          </div>
  
          <div class="p-4 cut-unique-right cut-buttom-left row-auto">
  
              <h2 class="font-sans text-gl font-medium text-base">Properties</h2>
              <p class="text-white font-sans font-medium text-sm">Portfolio</p>
              <p class="text-white font-sans font-medium text-sm">Categories</p>
  
          </div>
  
          <div class="p-4 border-l border-lg cut-buttom-left">
  
              <h2 class="font-sans text-gl font-medium text-base">Services</h2>
              <p class="text-white font-sans font-medium text-sm">Valuation Mastery</p>
              <p class="text-white font-sans font-medium text-sm">Strategic Marketing</p>
              <p class="text-white font-sans font-medium text-sm">Neogotiation Wizardy</p>
              <p class="text-white font-sans font-medium text-sm">Closing Success</p>
              <p class="text-white font-sans font-medium text-sm">Property Management</p>
  
          </div>
  
          <div class="p-4 cut-buttom-left">
  
              <h2 class="font-sans text-gl font-medium text-base">Contact Us</h2>
              <p class="text-white font-sans font-medium text-sm">Contact Form</p>
              <p class="text-white font-sans font-medium text-sm">Our Offices</p>
  
          </div>
  
        </div>
      </section>
      
      <nav class="bg-[#1A1A1A] py-10">
        <div class="ic-c flex justify-center items-center gap-4">
          
          <div class="bg-[#141414] p-6 rounded-full"><img src="/assets/socialMedia/facebook.svg" alt="facebook"></div>
          <div class="bg-[#141414] p-6 rounded-full"><img src="/assets/socialMedia/in.svg" alt="instagram"></div>
          <div class="bg-[#141414] p-6 rounded-full"><img src="/assets/socialMedia/twitter.svg" alt="twitter"></div>
          <div class="bg-[#141414] p-6 rounded-full"><img src="/assets/socialMedia/youtube.svg" alt="youtube"></div>
  
        </div>
        <p class="font-sans font-medium text-sm text-white text-center my-4">@2023 Estatein. All Rights Reserved.</p>
          <p class="font-sans font-medium text-sm text-white text-center my-4">Terms & Conditions</p>

      </nav>
  
    </footer>
  </div>
</template>



<style scoped>
.cut-buttom-left,.cut-buttom-right,.cut-unique{
  position: relative;
  /* border-left:1.5px solid #999999; */
 
}
.cut-unique{
  position: relative;
}
.cut-unique-right::after {
  content: '';
  position: absolute;
  top: 0; /* Position at the bottom */
  left: 5%; /* Center the border with 10% padding on both sides */
  width: 80%; /* Border width as 80% of the element */
  border-top: 2px solid #999999;
}


.cut-buttom-left::after {
  content: '';
  position: absolute;
  bottom: 0; /* Position at the bottom */
  left: 10%; /* Center the border with 10% padding on both sides */
  width: 80%; /* Border width as 80% of the element */
  border-bottom: 2px solid #999999;
}
.cut-buttom-right::after {
  content: '';
  position: absolute;
  top: 0; /* Position at the bottom */
  right: 5%; /* Center the border with 10% padding on both sides */
  width: 85%; /* Border width as 80% of the element */
  border-bottom: 2px solid #999999;
}

.black{
  background-color:rgba(0, 0, 0,.3);
}
</style>