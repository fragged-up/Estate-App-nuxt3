<script setup lang="ts">
  // import Button from '@/components/atoms/Button.vue';
  defineProps<{ faqTitle: string; faqText: string }>()
  // const props = defineProps({
  //   faqTitle: String,
  //   faqText: String,
  // })
</script>

<template>
  <div
    class="card-box row-auto grid w-full gap-y-6 rounded-xl border-2 border-[#262626] p-8 laptop:max-w-[26rem] laptop:py-10"
  >
    <h2 class="font-sans font-semibold text-white laptop:text-xl">
      {{ faqTitle }}
    </h2>
    <p class="font-sans text-sm font-medium text-gl laptop:text-base">
      {{ faqText }}
    </p>
    <Button
      :class="'bg-[#1A1A1A] p-4 text-center text-white'"
      :button-txt="'Read More'"
    />
  </div>
</template>

<style></style>
