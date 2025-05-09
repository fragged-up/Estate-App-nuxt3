<script lang="ts" setup>
  import type { ContactForm } from '~/schemas/formSchemas';
  import { contactFormSchema } from '~/schemas/formSchemas';

  const errors = ref<Record<string, string>>({});
  const isSubmitting = ref(false);

  const contactFormState = reactive<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    howDidYouHearAboutUs: '',
    message: '',
    termsAccepted: false,
  });

const submitContactForm = async () => {
  console.log('Submit button clicked');
  isSubmitting.value = true;
  console.log('isSubmitting:', isSubmitting.value);

  try {
    await contactFormSchema.parseAsync(contactFormState);
    errors.value = {};

    const res = await $fetch('/api/forms/contact', {
      method: 'POST',
      body: contactFormState,
    });
    console.log('Response:', res);
  } catch (err: any) {
    console.error('Form Validation Failed:', err);
    errors.value = err.errors.reduce((acc: any, curr: any) => {
      acc[curr.path[0]] = curr.message;
      return acc;
    }, {});
  } finally {
    console.log('Form submission finished');
    isSubmitting.value = false;
  }
};

</script>
<template>
  <form
    class="cont main-b mx-auto my-10 w-[90%] laptop:grid laptop:w-4/5 laptop:grid-cols-1 laptop:p-8"
    @submit.prevent="submitContactForm"
  >
    <div class="first-row laptop:flex laptop:gap-6">
      <div class="mx-auto my-6 flex w-full flex-col gap-y-4">
        <label for="firstName" class="font-sans text-base font-medium text-white">First Name</label>
        <input
          id="firstName"
          v-model="contactFormState.firstName"
          type="text"
          name="firstName"
          placeholder="Enter First Name"
          class="w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
        >
        <span v-if="errors.firstName" class="mt-1 text-red-500 text-left">{{ errors.firstName }}</span>
      </div>
      <div class="mx-auto my-6 flex w-full flex-col gap-y-4">
        <label for="lastName" class="font-sans text-base font-medium text-white">Last Name</label>
        <input
          id="lastName"
          v-model="contactFormState.lastName"
          type="text"
          name="lastName"
          placeholder="Enter Last Name"
          class="w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
        >
        <span v-if="errors.lastName" class="mt-1 text-red-500 text-left">{{ errors.lastName }}</span>
      </div>
      <div class="mx-auto my-6 flex w-full flex-col gap-y-4">
        <label for="email" class="font-sans text-base font-medium text-white">Email</label>
        <input
          id="email"
          v-model="contactFormState.email"
          type="email"
          name="email"
          placeholder="Enter your Email"
          class="w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
        >
        <span v-if="errors.email" class="mt-1 text-red-500 text-left">{{ errors.email }}</span>
      </div>
    </div>

    <div class="second-row laptop:flex laptop:gap-6">
      <div class="mx-auto my-6 flex w-full flex-col gap-y-4">
        <label for="phone" class="font-sans text-base font-medium text-white">Phone</label>
        <input
          id="phone"
          v-model="contactFormState.phone"
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          class="w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
        >
        <span v-if="errors.phone" class="mt-1 text-red-500 text-left">{{ errors.phone }}</span>
      </div>
      <SelectInput
        v-model="contactFormState.inquiryType"
        :select-head="'Inquiry Type'"
        :place-holder="'Inquiry Type'"
        :label="'Select Location'"
        :options="['Malibu', 'MonteNegro', 'Holywood']"
      />
      <SelectInput
        v-model="contactFormState.howDidYouHearAboutUs"
        :select-head="'How Did You Hear About Us'"
        :place-holder="'Select'"
        :label="'Select'"
        :options="['Linkedin', 'Google', 'Facebook']"
      />
    </div>

    <div class="message-cont mx-auto w-11/12 laptop:w-full">
      <div class="third-row message-section mt-6">
        <h3 class="mb-4 text-lg font-semibold text-white">Message</h3>
        <textarea
          v-model="contactFormState.message"
          class="w-full rounded-2xl border border-[#262626] bg-[#141414] p-4 text-white"
          placeholder="Enter your Message here.."
        />
        <span v-if="errors.message" class="mt-1 text-red-500 text-left">{{ errors.message }}</span>
      </div>

      <div class="fourth-row agree-section mt-6 laptop:my-6 laptop:flex laptop:justify-between">
        <label class="flex items-center text-white">
          <input
            v-model="contactFormState.termsAccepted"
            type="checkbox"
            class="form-checkbox h-4 w-4 text-[#703BF7] accent-[#703BF7]"
          >
          <span class="ml-2">
            I agree with
            <a href="#" class="text-[#703BF7] underline">Terms of Use</a>
            and
            <a href="#" class="text-[#703BF7] underline">Privacy Policy</a>
          </span>
        </label>
        <span v-if="errors.termsAccepted" class="mt-1 text-red-500 text-left">{{ errors.termsAccepted }}</span>
        <button
          type="submit"
          class="my-6 w-full rounded-2xl bg-[#703BF7] p-4 text-white laptop:m-0 laptop:max-w-[195px]"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="text-lg text-white">Sending...</span>
          <span v-else class="text-lg text-white">Send Your Message</span>
        </button>
      </div>
    </div>
  </form>
</template>
