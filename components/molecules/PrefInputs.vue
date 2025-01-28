<script setup lang="ts">
  import InputCheckbox from '../atoms/InputCheckbox.vue'

  const selectedOption = ref<string | null>(null)

  const options = [
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
  const handleSelection = (option: null | string) => {
    selectedOption.value = selectedOption.value === option ? null : option
  }
</script>

<template>
  <div class="w-full">
    <h3 class="mb-4 text-lg font-semibold text-white">
      Preferred Contact Method
    </h3>
    <div class="flex">
      <div v-for="option in options" :key="option.value">
        <InputCheckbox
          :left-icon="option.leftIcon"
          :label="option.label"
          :contact-value="selectedOption === option.value"
          @update:contact-value="
            (value: boolean) => handleSelection(value ? option.value : null)
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
