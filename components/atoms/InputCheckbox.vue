<script setup lang="ts">
  const { label, leftIcon, contactValue } = defineProps<{
    label: string
    leftIcon: string
    contactValue: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:contactValue', value: boolean): void
  }>()

  const toggleSelected = () => {
    emit('update:contactValue', !contactValue)
  }
</script>

<template>
  <div
    class="mx-auto my-6 w-auto cursor-pointer gap-y-4 rounded-2xl border border-[#262626] bg-[#141414] p-4">
    <div class="flex items-center justify-between">
      <!-- Left section: Icon and Label -->
      <div class="flex items-center">
        <img :src="$loadImage(leftIcon)" class="mx-3 h-6 w-6" alt="leftIcon" >
        <span
          class="ml-2 mr-3 border-l border-[#666666] pl-4 text-sm font-medium text-[#999999]">
          {{ label }}
        </span>
      </div>

      <!-- Right section: Toggle -->
      <div
        class="relative flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-[#703BF7]"
        @click="toggleSelected">
        <div v-if="contactValue" class="h-3 w-3 rounded-full bg-[#703BF7]" />
      </div>
    </div>
  </div>
</template>
