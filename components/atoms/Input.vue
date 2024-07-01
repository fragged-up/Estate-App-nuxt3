<script setup>
  const props = defineProps({
    inputType: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  })
</script>

<template>
  <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
    <label :for="props.id" class="font-sans text-base font-medium text-white">{{ props.label }}</label>
    <input
      :type="props.inputType"
      :name="props.name"
      :id="props.name"
      :placeholder="props.placeholder"
      class="w-full cursor-pointer rounded-2xl border border-[#262626] bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
    />
  </div>
</template>

<style scoped></style>
