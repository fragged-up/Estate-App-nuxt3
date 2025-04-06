<script setup lang="ts">
  import type { FaqItem } from '~/constants/types';
  import { useMaintanceModal } from '~/stores/maintanceModal'
  const modalStore = useMaintanceModal()

  const props = defineProps<{
    faqs: FaqItem;
  }>();

</script>

<template>
  <div class="row-auto grid w-full gap-y-6 rounded-xl border-2 border-[#262626] p-8 laptop:max-w-[26rem] laptop:py-10">
    <h2 class="font-sans font-semibold text-white laptop:text-xl">
      {{ props.faqs.question }}
    </h2>
    <p class="font-sans text-sm font-medium text-gl laptop:text-base">
      {{ props.faqs.answer }}
    </p>
    <Button :class="'bg-[#1A1A1A] p-4 text-center text-white'" :btn-text="'Read More'" @click="modalStore.toggleModal()" />
  </div>
</template>
