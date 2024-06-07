<script setup>
import Input from '~/components/atoms/Input.vue';
import SelectInput from '~/components/atoms/SelectInput.vue';

</script>

<template>
  <div class="contact-section">

<div class="cont w-[90%] laptop:w-4/5 laptop:grid laptop:grid-cols-1 mx-auto main-b laptop:p-8 my-10">

<div class="first-row laptop:flex laptop:gap-6">
  <Input :label="'First Name'" :input-type="'text'" :name="'firstName'" :placeholder="'Enter First Name'" />
  <Input :label="'Last Name'" :input-type="'text'" :name="'lastName'" :placeholder="'Enter Last Name'" />
  <Input :label="'Email'" :input-type="'email'" :name="'Email'" :placeholder="'Enter your Email'" />
</div>

<div class="second-row laptop:flex laptop:gap-6">
  <Input :label="'Phone'" :input-type="'number'" :name="'phone'" :placeholder="'Enter Phone Number'" />
  <SelectInput :select-head="'Inquiry Type'" :place-holder="'Inquiry Type'"
      :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
  <SelectInput :select-head="'How Did You Hear About Us'" :place-holder="'Select'"
      :label="'Select Location'" :options="['Option1', 'Option 2', 'Option 3']" />
</div>

<div class="message-cont w-11/12 mx-auto laptop:w-full">

  <div class="third-row message-section mt-6">
    <h3 class="text-white text-lg font-semibold mb-4">Message</h3>
    <textarea class="w-full p-4 bg-[#141414] border border-[#262626] rounded-2xl text-white"
      placeholder="Enter your Message here.."></textarea>
  </div>

  <div class="fourth-row agree-section mt-6 laptop:flex laptop:justify-between laptop:my-6">
    <label class="flex items-center text-white">
      <input type="checkbox" class="form-checkbox h-4 w-4 text-[#703BF7] accent-[#703BF7]" />
      <span class="ml-2">I agree with <a href="#" class="text-[#703BF7] underline">Terms of Use</a> and <a
          href="#" class="text-[#703BF7] underline">Privacy Policy</a></span>
    </label>
    <button class="w-full my-6 p-4 bg-[#703BF7] text-white rounded-2xl laptop:max-w-[195px] laptop:m-0">Send Your Message</button>
  </div>
</div>

</div>

</div>
</template>
<style scoped>

</style>