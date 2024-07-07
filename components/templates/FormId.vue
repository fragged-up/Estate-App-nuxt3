<script setup>
  const props = defineProps({
    locationText: String,
  })

  const whiteLocationSvg = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.61646 19.1259C9.64163 19.1405 9.66141 19.1517 9.67542 19.1596L9.69869 19.1726C9.88441 19.2745 10.1148 19.2738 10.3007 19.1729L10.3246 19.1596C10.3386 19.1517 10.3584 19.1405 10.3835 19.1259C10.4339 19.0967 10.5058 19.0542 10.5963 18.9985C10.7771 18.8872 11.0323 18.723 11.3372 18.5076C11.9459 18.0776 12.7581 17.4395 13.5721 16.6061C15.1922 14.9474 16.875 12.4551 16.875 9.25C16.875 5.45304 13.797 2.375 10 2.375C6.20304 2.375 3.125 5.45304 3.125 9.25C3.125 12.4551 4.80777 14.9474 6.42788 16.6061C7.24188 17.4395 8.05409 18.0776 8.66282 18.5076C8.96771 18.723 9.22295 18.8872 9.40375 18.9985C9.49419 19.0542 9.56612 19.0967 9.61646 19.1259ZM10 11.75C11.3807 11.75 12.5 10.6307 12.5 9.25C12.5 7.86929 11.3807 6.75 10 6.75C8.61929 6.75 7.5 7.86929 7.5 9.25C7.5 10.6307 8.61929 11.75 10 11.75Z" fill="white"/>
</svg>
 `
</script>

<template>
  <div class="contact-section w-full">
    <div class="cont main-b mx-auto my-10 w-[90%] laptop:grid laptop:w-full laptop:grid-cols-1 laptop:p-8">
      <div class="first-row laptop:flex laptop:gap-6">
        <Input :label="'First Name'" :input-type="'text'" :name="'firstName'" :placeholder="'Enter First Name'" />
        <Input :label="'Last Name'" :input-type="'text'" :name="'lastName'" :placeholder="'Enter Last Name'" />
        <Input :label="'Email'" :input-type="'email'" :name="'Email'" :placeholder="'Enter your Email'" />
      </div>

      <div class="second-row laptop:flex laptop:gap-6">
        <Input :label="'Phone'" :input-type="'number'" :name="'phone'" :placeholder="'Enter Phone Number'" />
        <InputSvg :inTxt="props.locationText" :label="'Selected Property'" :svgImage="whiteLocationSvg" />
      </div>

      <div class="message-cont mx-auto w-11/12 laptop:w-full">
        <div class="third-row message-section mt-6">
          <h3 class="mb-4 text-lg font-semibold text-white">Message</h3>
          <textarea class="w-full rounded-2xl border border-[#262626] bg-[#141414] p-4 text-white" placeholder="Enter your Message here.."></textarea>
        </div>

        <div class="fourth-row agree-section mt-6 laptop:my-6 laptop:flex laptop:justify-between">
          <label class="flex items-center text-white">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-[#703BF7] accent-[#703BF7]" />
            <span class="ml-2">
              I agree with
              <a href="#" class="text-[#703BF7] underline">Terms of Use</a>
              and
              <a href="#" class="text-[#703BF7] underline">Privacy Policy</a>
            </span>
          </label>
          <button class="my-6 w-full rounded-2xl bg-[#703BF7] p-4 text-white laptop:m-0 laptop:max-w-[195px]">Send Your Message</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .setFlex > * {
    display: flex;
  }
</style>
