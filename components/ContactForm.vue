<script setup lang="ts">
import { z } from 'zod'

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone number'),
  inquiryType: z.string().min(1, 'Please select inquiry type'),
  referralSource: z.string().min(1, 'Please select how you heard about us'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms' }),
  }),
})

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  inquiryType: '',
  referralSource: '',
  message: '',
  termsAccepted: false,
})

// Error map
const errors = ref<Record<string, string>>({})


const handleSubmit = () => {
  const result = contactFormSchema.safeParse(form)

  if (!result.success) {
    errors.value = {}
    result.error.errors.forEach((err) => {
      errors.value[err.path[0] as string] = err.message
    })
    return
  }

  console.log(' Submitted:', result.data)
  // Send to API...
}
</script>

<template>
  <form class="bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl p-8 space-y-6" @submit.prevent="handleSubmit">

    <!-- Row 1 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-white mb-1">First Name</label>
        <input v-model="form.firstName" class="form-input" placeholder="Enter First Name" >
        <p v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</p>
      </div>

      <div>
        <label class="block text-white mb-1">Last Name</label>
        <input v-model="form.lastName" class="form-input" placeholder="Enter Last Name" >
        <p v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</p>
      </div>

      <div>
        <label class="block text-white mb-1">Email</label>
        <input v-model="form.email" class="form-input" placeholder="Enter Email" >
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label class="block text-white mb-1">Phone</label>
        <input v-model="form.phone" class="form-input" placeholder="Enter Phone Number" >
        <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
      </div>

      <div>
        <label class="block text-white mb-1">Inquiry Type</label>
        <select v-model="form.inquiryType" class="form-input">
          <option value="" disabled selected>Select Inquiry Type</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          <option value="partner">Partnership</option>
        </select>
        <p v-if="errors.inquiryType" class="text-red-500 text-sm">{{ errors.inquiryType }}</p>
      </div>

      <div>
        <label class="block text-white mb-1">How Did You Hear About Us?</label>
        <select v-model="form.referralSource" class="form-input">
          <option value="" disabled selected>Select</option>
          <option value="google">Google</option>
          <option value="friend">Friend</option>
          <option value="ad">Advertisement</option>
        </select>
        <p v-if="errors.referralSource" class="text-red-500 text-sm">{{ errors.referralSource }}</p>
      </div>
    </div>

    <!-- Message -->
    <div>
      <label class="block text-white mb-1">Message</label>
      <textarea v-model="form.message" rows="4" class="form-input" placeholder="Enter your Message here.."/>
      <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
    </div>

    <!-- Terms -->
    <div class="flex items-center gap-2">
      <input v-model="form.termsAccepted" type="checkbox" >
      <span class="text-sm text-white">I agree with 
        <a href="#" class="underline text-purple-400">Terms of Use</a> and 
        <a href="#" class="underline text-purple-400">Privacy Policy</a>
      </span>
    </div>
    <p v-if="errors.termsAccepted" class="text-red-500 text-sm">{{ errors.termsAccepted }}</p>

    <!-- Button -->
    <div class="text-right">
      <button type="submit" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition">
        Send Your Message
      </button>
    </div>
  </form>
</template>

<style scoped>
.form-input {
  @apply w-full rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-2 placeholder-[#666] focus:outline-none focus:border-purple-500;
}
</style>
