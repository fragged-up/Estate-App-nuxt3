<script lang="ts" setup>
  defineProps<{
    contactData: {
      title: string;
      location: string;
      summary: string;
      email: string;
      phone: string;
      city: string;
      buttonLabel?: string;
    };
  }>();
</script>

<template>
  <div class="my-6 space-y-4 p-4 border-2 border-[#262626] rounded-xl">
    <p class="text-sm font-medium text-white">{{ contactData.title }}</p>
    <p class="text-xl font-semibold text-white">{{ contactData.location }}</p>
    <p class="text-sm font-medium text-gl">{{ contactData.summary }}</p>
    <div class="inline-grid grid-rows-[auto,auto] w-full grid-cols-1 gap-y-2">
      <InfoItem :text="contactData.email" :icon="'/icons/Mail.svg'" :wrapper-style="'max-w-[180px]'" />
      <div class="inline-flex gap-x-2 items-center">
        <InfoItem :text="contactData.phone" :icon="'/icons/metroPhone.svg'" />
        <InfoItem :text="contactData.city" :icon="'/icons/Metro.svg'" />
      </div>
    </div>
    <button class="w-full rounded-xl bg-pr py-4 text-white cursor-pointer">
      {{ contactData.buttonLabel ?? 'Get Direction' }}
    </button>
  </div>
</template>
