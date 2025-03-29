<script setup lang="ts">
const props = defineProps<{
  total: number
  current: number
}>()

const emit = defineEmits(['update:current'])

const next = () => {
  if (props.current < props.total - 1) emit('update:current', props.current + 1)
}

const prev = () => {
  if (props.current > 0) emit('update:current', props.current - 1)
}
</script>

<template>
  <div class="flex items-center justify-between gap-4 bg-[#141414] px-6 py-3 rounded-full">
    <!-- Left Arrow -->
    <button
    class="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#1a1a1a] transition"
    @click="prev">
    
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <!-- Dots -->
    <div class="flex gap-2">
      <span
        v-for="i in total"
        :key="i"
        class="h-2 rounded-full transition-all"
        :class="[
          current === i - 1
            ? 'bg-pr w-6'
            : 'bg-[#333] w-4',
        ]"
      />
    </div>

    <!-- Right Arrow -->
    <button
     class="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#1a1a1a] transition"
      @click="next"
    >
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>
