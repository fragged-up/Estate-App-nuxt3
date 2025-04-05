<script setup>
  import { ref } from 'vue'

  const preferredContactMethod = ref('')
  const contactMethods = [
    {
      icon: 'phone',
      label: 'Enter Your Number',
      value: 'phone',
    },
    {
      icon: 'email',
      label: 'Enter Your Email',
      value: 'email',
    },
  ]

  const setPreferredContactMethod = method => {
    preferredContactMethod.value = method.value
  }
</script>

<template>
  <div class="preferred-contact-method mx-auto my-8 w-full">
    <h3 class="mb-4 text-lg font-semibold text-white">
      Preferred Contact Method
    </h3>

    <div
      v-for="method in contactMethods"
      :key="method.value"
      class="contact-option mb-4 flex cursor-pointer items-center justify-between rounded-2xl border border-[#262626] bg-[#141414] p-4"
      @click="setPreferredContactMethod(method)">
      <div class="flex items-center">
        <img
          v-if="method.icon === 'phone'"
          class="mx-3 h-6 w-6 text-white"
          :src="$loadImage('/icons/PhoneIcon.svg')"
          alt="PhoneIcon" >
        <svg
          v-else
          class="mx-3 h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span
          class="ml-2 border-l border-[#666666] pl-4 font-sans text-base font-medium text-[#999999]">
          {{ method.label }}
        </span>
      </div>

      <div>
        <div
          class="relative h-6 w-6 cursor-pointer rounded-full border-2 border-[#703BF7] bg-transparent">
          <div
            v-if="preferredContactMethod === method.value"
            class="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#703BF7]" />
        </div>
      </div>
    </div>

    <div class="message-section mt-6">
      <h3 class="mb-4 text-lg font-semibold text-white">Message</h3>
      <textarea
        class="w-full rounded-2xl border border-[#262626] bg-[#141414] p-4 text-white"
        placeholder="Enter your Message here.." />
    </div>
    <div class="agree-section mt-6">
      <label class="flex items-center text-white">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-[#703BF7] accent-[#703BF7]" >
        <span class="ml-2">
          I agree with
          <a href="#" class="text-[#703BF7] underline">Terms of Use</a>
          and
          <a href="#" class="text-[#703BF7] underline">Privacy Policy</a>
        </span>
      </label>
    </div>
    <button class="mt-6 w-full rounded-2xl bg-[#703BF7] p-4 text-white">
      Send Your Message
    </button>
  </div>
</template>
