<script setup lang="ts">
  import { ref } from '#imports'
  const {showDropDown=false,} = defineProps<{
      inputImage?: string
      label: string
      labelClass?: string
      showDropDown?: boolean
    }>()
    
  // const props = defineProps({
  //   inputImage: {
  //     type: String,
  //     required: false,
  //   },
  //   label: String,
  //   labelClass: {
  //     type: String,
  //     required: false,
  //   },
  //   showDropDown: {
  //     type: Boolean,
  //     default: false,
  //   },
  // })

  const isDropdownVisible = ref(showDropDown)

  const toggleDropdown = () => {
    isDropdownVisible.value = !isDropdownVisible.value
  }
</script>

<template>
  <div
    class="relative flex cursor-pointer items-center justify-between rounded-2xl border border-[#262626] bg-[#141414] p-4"
    @click="toggleDropdown"
  >
    <div class="flex items-center">
      <img :src="$loadImage(inputImage)" alt="inputIcon" class="mx-3 h-6 w-6" >
      <span
        class="ml-2 border-l border-[#666666] pl-4 font-sans text-base font-medium text-[#999999]"
      >
        {{ props.label }}
      </span>
    </div>
    <div>
      <svg
        v-if="!isDropdownVisible"
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
    <ul
      v-show="isDropdownVisible"
      class="absolute left-0 top-full z-10 mt-1 w-full rounded-2xl border border-[#262626] bg-[#141414] text-white"
    >
      <li class="cursor-pointer p-4 hover:bg-[#262626]">Option 1</li>
      <li class="cursor-pointer p-4 hover:bg-[#262626]">Option 2</li>
      <li class="cursor-pointer p-4 hover:bg-[#262626]">Option 3</li>
    </ul>
  </div>
</template>

<style scoped>
  /* Ensure the dropdown list does not overlap and has proper z-index */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
