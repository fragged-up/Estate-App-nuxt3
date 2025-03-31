<script setup lang="ts">
  const props =defineProps<{
    bedRooms: string;
    bathRooms: string;
  }>();
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <button class="rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
      <span class="inline-flex gap-2 py-2">
        <img :src="$loadImage('/icons/bedRoom.svg')" class="mx-auto text-center" alt="bedRoom" >
        <small class="text-white font-sans font-medium text-sm">{{ props.bedRooms.toString() }}-Bedroom</small>
      </span>
    </button>
    <button class="rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
      <span class="inline-flex gap-2 py-2">
        <img :src="$loadImage('/icons/bathRoom.svg')" class="mx-auto text-center" alt="bathRoom" >
        <small class="text-white font-sans font-medium text-sm">{{ props.bathRooms.toString() }}-Bathroom</small>
      </span>
    </button>

    <button class="col-span-auto rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
      <span class="inline-flex gap-2 py-2">
        <img :src="$loadImage('/icons/villaIcon.svg')" class="mx-auto text-center" alt="villa" >
        <small class="text-white font-sans font-medium text-sm">Villa</small>
      </span>
    </button>
  </div>
</template>
