<script setup lang="ts">
  defineProps<{
    propertyName?: string | number
    propertyLocation?: string
    cardImage: string
    cardTitle: string
    cardText: string
    bedRooms: number
    bathRooms: number
    cardPrice?: string | number
    propertyImages?: string[]
    description?: string
    squareFeet?: string
  }>()

  const isVisible = ref(false)
  const toggleReadMe = () => (isVisible.value = !isVisible.value)


  // props in active use here :
  //cardImage
  //cardTitle
  //cardText
  //bedRooms
  //bathRooms
  //cardPrice
</script>

<template>
    <div class="card-box grid w-full max-w-[29rem] gap-y-6 rounded-xl border-2 border-[#262626] p-6">
      <div class="middleBuilding-c container">
        <img
          :src="$loadImage(cardImage)"
          alt="middleBuilding"
          class="w-[19.375rem]" >
      </div>

      <div class="w-auto">
        <h3 class="text-lg text-white">{{ cardTitle }}</h3>
        <p class="py-2 text-[#999999]">
          {{ cardText }}
          <strong class="text-sm text-white underline" @click="toggleReadMe">
            Read More
          </strong>
        </p>
        <div class="overflow-hidden transition-all duration-500 flex">
          <p v-show="isVisible" class="w-auto text-white break-words">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            necessitatibus reiciendis veritatis, asperiores voluptatem velit
            cumque voluptas esse. Doloribus veritatis et rerum ducimus eveniet
            quisquam impedit, cumque exercitationem tempora dignissimos!
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <button class="rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
          <span class="inline-flex gap-2 py-2">
            <img
              :src="$loadImage('/icons/bedRoom.svg')"
              class="mx-auto text-center"
              alt="bedRoom" >
            <small class="text-white">{{ bedRooms }}-Bedroom</small>
          </span>
        </button>
        <button class="rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
          <span class="inline-flex gap-2 py-2">
            <img
              :src="$loadImage('/icons/bathRoom.svg')"
              class="mx-auto text-center"
              alt="bathRoom" >
            <small class="text-white">{{ bathRooms }}-Bathroom</small>
          </span>
        </button>

        <button
          class="col-span-auto rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
          <span class="inline-flex gap-2 py-2">
            <img
              :src="$loadImage('/icons/villaIcon.svg')"
              class="mx-auto text-center"
              alt="villa" >
            <small class="text-white">Villa</small>
          </span>
        </button>
      </div>

      <div class="my-4 grid grid-cols-[.4fr_1fr] gap-x-2">
        <div class="text-center">
          <p class="text-start text-[#999999]">Price</p>
          <p class="text-start text-white">${{ cardPrice }}</p>
        </div>

        <!-- <button class="rounded-xl bg-[#703BF7]">
          <p class="text-sm text-white">View Property Details</p>
        </button> -->
        <Button 
        :btn-text="'View Property Details'"
        :btn-style="'rounded-xl bg-[#703BF7] text-white'"  />
        
       
      </div>
    </div>
</template>
