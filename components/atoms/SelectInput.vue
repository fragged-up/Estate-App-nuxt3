<script setup lang="ts">
  import { ref } from '#imports'

  type SelectInputs = {
    label?: string
    placeHolder?: string
    showDropDown?: boolean
    options: [] | (() => [])
    selectHead: string
    extraStyle?: string
  }
  defineProps<SelectInputs>()

  const selectedOption = ref('')
  const dropdownVisible = ref(false)

  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value
  }

  const selectOption = (option: string | string[] | boolean) => {
    selectedOption.value = option
    dropdownVisible.value = false
  }
</script>

<template>
  <div class="mx-auto w-11/12" :class="extraStyle">
    <h3 class="my-6 font-sans text-base font-semibold text-white">
      {{ selectHead }}
    </h3>
    <div
      class="flex cursor-pointer items-center justify-between rounded-2xl border border-[#262626] bg-[#141414] p-4"
      @click="toggleDropdown"
    >
      <div
        class="w-full bg-[#141414] pl-2 font-sans text-base font-medium text-[#999999]"
      >
        <span v-if="selectedOption">{{ selectedOption }}</span>
        <span v-else class="text-sm">{{ placeHolder }}</span>
      </div>
      <svg
        v-if="!dropdownVisible"
        class="ml-2 h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <svg
        v-else
        class="ml-2 h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 15l-7-7-7 7"
        />
      </svg>
    </div>
    <div
      v-show="dropdownVisible"
      class="mt-2 w-full rounded-2xl border border-[#262626] bg-[#141414]"
    >
      <ul class="m-0 list-none p-0">
        <li
          v-for="option in options"
          :key="option"
          class="cursor-pointer px-4 py-2 text-white hover:bg-[#262626]"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  /* You can add additional styling if needed */
</style>
