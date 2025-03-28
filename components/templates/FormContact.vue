<script setup lang="ts">
  import type { InputFields } from '~/constants/types'

  const rowOne: InputFields[] = [
    {
      label: 'First Name',
      inputType: 'text',
      name: 'firstName',
      placeHolder: 'Enter First Name',
    },
    {
      label: 'Last Name',
      inputType: 'text',
      name: 'lastName',
      placeHolder: 'Enter Last Name',
    },
    {
      label: 'Email',
      inputType: 'email',
      name: 'Email',
      placeHolder: 'Enter your Email',
    },
  ]
</script>

<template>
  <div class="contact-section">
    <div
      class="cont main-b mx-auto my-10 w-[90%] laptop:grid laptop:w-4/5 laptop:grid-cols-1 laptop:p-8">
      <div class="first-row laptop:flex laptop:gap-6">
         <Input 
         v-for="(inp,index) in rowOne"
         :key="index"
         :label="inp.label"
         :input-type="inp.inputType"
         :placeholder="inp.placeHolder"
         :name="inp.name"
         /> 
      </div>

      <div class="second-row laptop:flex laptop:gap-6">
        <Input
          :label="'Phone'"
          :input-type="'number'"
          :name="'phone'"
          :placeholder="'Enter Phone Number'" />
        <SelectInput
          :select-head="'Inquiry Type'"
          :place-holder="'Inquiry Type'"
          :label="'Select Location'"
          :options="['Option1', 'Option 2', 'Option 3']" />
        <SelectInput
          :select-head="'How Did You Hear About Us'"
          :place-holder="'Select'"
          :label="'Select Location'"
          :options="['Option1', 'Option 2', 'Option 3']" />
      </div>

      <div class="message-cont mx-auto w-11/12 laptop:w-full">
        <div class="third-row message-section mt-6">
          <h3 class="mb-4 text-lg font-semibold text-white">Message</h3>
          <textarea
            class="w-full rounded-2xl border border-[#262626] bg-[#141414] p-4 text-white"
            placeholder="Enter your Message here.." />
        </div>

        <div
          class="fourth-row agree-section mt-6 laptop:my-6 laptop:flex laptop:justify-between">
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
          <button
            class="my-6 w-full rounded-2xl bg-[#703BF7] p-4 text-white laptop:m-0 laptop:max-w-[195px]">
            Send Your Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
