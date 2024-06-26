<script setup>
  // import Button from '@/components/atoms/Button.vue';
  const props = defineProps({
    faqTitle: String,
    faqText: String,
  });
</script>

<template>
  <div
    class="card-box w-full rounded-xl grid row-auto gap-y-6 border-2 border-[#262626] p-8 laptop:max-w-[26rem] laptop:py-10"
  >
    <h2 class="text-white font-sans font-semibold laptop:text-xl">
      {{ props.faqTitle }}
    </h2>
    <p class="text-gl text-sm font-sans font-medium laptop:text-base">
      {{ props.faqText }}
    </p>
    <Button
      :class="'bg-[#1A1A1A] text-center text-white p-4'"
      :buttonTxt="'Read More'"
    />
  </div>
</template>

<style></style>
