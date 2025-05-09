<script setup lang="ts">
  defineProps<{
    inputType: string
    placeholder: string
    label: string
    modelValue: string | number
    name: string
    htmlAtt?: string
  }>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>

<template>
  <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
    <label :for="name" class="font-sans text-base font-medium text-white">
      {{ label }}
    </label>
    <input
      :id="name"
      :v-html="htmlAtt"
      :type="inputType"
      :name="name"
      :placeholder="placeholder"
      class="w-full appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)" >
  </div>
</template>

