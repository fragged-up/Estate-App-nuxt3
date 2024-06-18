<script setup>
import { ref } from 'vue';

const preferredContactMethod = ref('');
const contactMethods = [
  {
    icon: 'phone',
    label: 'Enter Your Number',
    value: 'phone'
  },
  {
    icon: 'email',
    label: 'Enter Your Email',
    value: 'email'
  }
];

const setPreferredContactMethod = (method) => {
  preferredContactMethod.value = method.value;
};
</script>

<template>

  <div class="preferred-contact-method w-full my-8 mx-auto">
    <h3 class="text-white text-lg font-semibold mb-4">Preferred Contact Method</h3>

    <div v-for="method in contactMethods" 
      :key="method.value" 
      class="contact-option flex items-center justify-between p-4 bg-[#141414] border border-[#262626] rounded-2xl mb-4 cursor-pointer" 
      @click="setPreferredContactMethod(method)">

      <div class="flex items-center">
        <img v-if="method.icon === 'phone'" class="w-6 h-6 text-white mx-3" :src="$loadImage('/icons/PhoneIcon.svg')" alt="PhoneIcon">
        <svg v-else class="w-6 h-6 text-white mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <span class="ml-2 pl-4 font-sans font-medium text-base text-[#999999] border-l border-[#666666]">{{ method.label }}</span>
      </div>

      <div>

        <div class="w-6 h-6 rounded-full bg-transparent border-2 border-[#703BF7] cursor-pointer relative">
          <div v-if="preferredContactMethod === method.value" class="w-3 h-3 rounded-full bg-[#703BF7] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
      </div>
    </div>







    <div class="message-section mt-6">
      <h3 class="text-white text-lg font-semibold mb-4">Message</h3>
      <textarea class="w-full p-4 bg-[#141414] border border-[#262626] rounded-2xl text-white" placeholder="Enter your Message here.."></textarea>
    </div>
    <div class="agree-section mt-6">
      <label class="flex items-center text-white">
        <input type="checkbox" class="form-checkbox h-4 w-4 text-[#703BF7] accent-[#703BF7]" />
        <span class="ml-2">I agree with <a href="#" class="text-[#703BF7] underline">Terms of Use</a> and <a href="#" class="text-[#703BF7] underline">Privacy Policy</a></span>
      </label>
    </div>
    <button class="mt-6 w-full p-4 bg-[#703BF7] text-white rounded-2xl">Send Your Message</button>
  </div>
  
</template>

<style scoped>
/* Add your specific styles here if needed */
</style>




























































