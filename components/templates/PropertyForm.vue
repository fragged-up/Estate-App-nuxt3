<script setup lang="ts">
  type FirstInputsColumn = {
    label: string
    type: string
    name: string
    placeholder: string
  }[]

  const firstInputsColumn: FirstInputsColumn = [
    {
      label: 'First Name',
      type: 'text',
      name: 'firstName',
      placeholder: 'Enter First Name',
    },
    {
      label: 'First Name',
      type: 'text',
      name: 'lastName',
      placeholder: 'Enter Last Name',
    },
    {
      label: 'Email',
      type: 'email',
      name: 'Email',
      placeholder: 'Enter your Email',
    },
    {
      label: 'Phone',
      type: 'number',
      name: 'phone',
      placeholder: 'Enter Phone Number',
    },
  ]

  const selectInputs = [
    {
      selectHead: 'Prefferred Location',
      placeHolder: 'Select Location',
      options: ['Option1', 'Option 2', 'Option 3'],
    },
    {
      selectHead: 'Property Type',
      placeHolder: 'Select Property Type',
      options: ['Option1', 'Option 2', 'Option 3'],
    },
    {
      selectHead: 'No. of Bathrooms',
      placeHolder: 'Select No. of Bathrooms',
      options: ['Option1', 'Option 2', 'Option 3'],
    },
    {
      selectHead: 'No. of Bedrooms',
      placeHolder: 'Select No. of Bedrooms',
      options: ['Option1', 'Option 2', 'Option 3'],
    },
  ]

  const selectedContactOp = ref<string | null>(null)

  const contactOptions = [
    {
      leftIcon: '/icons/PhoneIcon.svg',
      label: 'Enter Your Number',
      value: 'Phone',
    },
    {
      leftIcon: '/icons/contactEmailIcon.svg',
      label: 'Enter Your Email',
      value: 'email',
    },
  ]
  const handleContactOp = (option: null | string) => {
    selectedContactOp.value = selectedContactOp.value === option ? null : option
  }
</script>

<template>
  <div class="contact-section">
    <div
      class="cont main-b mx-auto my-10 w-[90%] laptop:grid laptop:w-4/5 laptop:grid-cols-1 laptop:p-8"
    >
      <div class="first-row laptop:flex laptop:gap-6">
        <Input
          v-for="(column, index) in firstInputsColumn"
          :key="index"
          :label="column.label"
          :input-type="column.type"
          :name="column.name"
          :placeholder="column.placeholder"
        />
      </div>

      <div class="second-row laptop:flex laptop:gap-6">
        <SelectInput
          v-for="(column, index) in selectInputs"
          :key="index"
          :select-head="column.selectHead"
          :place-holder="column.placeHolder"
          :options="column.options"
        />
      </div>

      <div class="budget-row laptop:flex laptop:gap-6">
        <div class="mx-auto w-11/12 laptop:flex laptop:gap-6 laptop:w-full">
          <div class="laptop:w-[50%]">
            <SelectInput
              :extra-style="'w-auto m-auto'"
              :select-head="'Budget'"
              :place-holder="'Select Budget'"
              :options="['Option1', 'Option 2', 'Option 3']"
            />
          </div>
          <div class="laptop:w-[50%]">
            <div class="">
              <h3 class="text-lg font-semibold text-white pt-5">
                Preferred Contact Method
              </h3>
              <div
                class="flex flex-col laptop:flex-row justify-between items-center gap-0 laptop:gap-4"
              >
                <div
                  v-for="option in contactOptions"
                  :key="option.value"
                  class="w-[95%]"
                >
                  <InputCheckbox
                    :left-icon="option.leftIcon"
                    :label="option.label"
                    :contact-value="selectedContactOp === option.value"
                    @update:contact-value="
                      (value: boolean) =>
                        handleContactOp(value ? option.value : null)
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="message-cont mx-auto w-11/12 laptop:w-full">
        <div class="third-row message-section mt-6">
          <h3 class="mb-4 text-lg font-semibold text-white">Message</h3>
          <textarea
            class="w-full rounded-2xl border border-[#262626] bg-[#141414] p-4 text-white"
            placeholder="Enter your Message here.."
          />
        </div>

        <div
          class="fourth-row agree-section mt-6 laptop:my-6 laptop:flex laptop:justify-between"
        >
          <label class="flex items-center text-white">
            <input
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
          <button
            class="my-6 w-full rounded-2xl bg-[#703BF7] p-4 text-white laptop:m-0 laptop:max-w-[195px]"
          >
            Send Your Message
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
