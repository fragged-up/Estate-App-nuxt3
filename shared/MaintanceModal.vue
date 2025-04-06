<script setup lang="ts">
import { useMaintanceModal } from '~/stores/maintanceModal'
import { storeToRefs } from 'pinia'

const modalStore = useMaintanceModal()
const { isOpen } = storeToRefs(modalStore)
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
    @click.self="modalStore.closeModal()"
  >
    <div
      class="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0d0d] p-6 text-center shadow-2xl font-sans sm:p-8 md:p-10"
    >
      <h2 class="text-lg font-semibold text-white sm:text-xl md:text-2xl">
        ✨ We're Polishing Things Up
        <br >
        Coming Back Soon
      </h2>

      <p class="mt-6 text-sm text-gray-400 sm:text-base leading-relaxed">
        This feature is currently undergoing scheduled improvements to enhance your experience.
        We’re working diligently to bring it back online as soon as possible, with better performance and reliability.
        <br ><br >
        Thank you for your patience and understanding.
      </p>
    </div>
  </div>
</template>
