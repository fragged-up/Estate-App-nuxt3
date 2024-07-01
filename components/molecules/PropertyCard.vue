<script setup>
  const isVisible = ref(false)
  const toggleVisual = () => (isVisible.value = !isVisible.value)

  const cardProperty = defineProps({
    propertyName: [String, Number],
    cardImage: String,
    cardTitle: String,
    cardText: String,
    bedRooms: Number,
    bathRooms: Number,
    cardPrice: String,
  })
  const router = useRouter()

  const handleNavigation = () => {
    router.push(`/Properties/${cardProperty.propertyName}`)
  }
</script>

<template>
  <div @click="handleNavigation" class="property-card-main-container mx-auto w-auto">
    <div class="card-box grid w-full max-w-[29rem] gap-y-6 rounded-xl border-2 border-[#262626] p-8">
      <!-- from 1440px make hook to display viewButton wrap it in container of inline-flex width 
              width 155px and height 49px  -->

      <div class="middleBuilding-c container">
        <img :src="$loadImage(`${cardProperty.cardImage}`)" alt="middleBuilding" class="max-h-64 w-full" />
      </div>
      <div class="container h-auto">
        <h3 class="text-lg text-white">{{ cardProperty.cardTitle }}</h3>
        <p class="py-2 text-[#999999]">
          {{ cardProperty.cardText }}
          <strong @click="toggleVisual" class="text-sm text-white underline">Read More</strong>
        </p>
        <p v-show="isVisible" class="pt-1 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro necessitatibus reiciendis veritatis, asperiores voluptatem velit cumque voluptas esse. Doloribus veritatis et rerum ducimus
          eveniet quisquam impedit, cumque exercitationem tempora dignissimos!
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <button class="rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
          <span class="inline-flex gap-2 py-2">
            <img :src="$loadImage('/icons/bedRoom.svg')" class="mx-auto text-center" alt="bedRoom" />
            <small class="text-white">{{ cardProperty.bedRooms }}-Bedroom</small>
          </span>
        </button>
        <button class="rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
          <span class="inline-flex gap-2 py-2">
            <img :src="$loadImage('/icons/bathRoom.svg')" class="mx-auto text-center" alt="bathRoom" />
            <small class="text-white">{{ cardProperty.bathRooms }}-Bathroom</small>
          </span>
        </button>

        <button class="col-span-auto rounded-3xl border-2 border-[#262626] bg-[#1A1A1A]">
          <span class="inline-flex gap-2 py-2">
            <img :src="$loadImage('/icons/villaIcon.svg')" class="mx-auto text-center" alt="villa" />
            <small class="text-white">Villa</small>
          </span>
        </button>
      </div>

      <div class="my-4 grid grid-cols-[.4fr_1fr] gap-x-2">
        <div class="text-center">
          <p class="text-start text-[#999999]">Price</p>
          <p class="text-start text-white">${{ cardProperty.cardPrice }}</p>
        </div>

        <button class="rounded-xl bg-[#703BF7]">
          <p class="text-sm text-white">View Property Details</p>
        </button>
      </div>
    </div>
  </div>
  <!-- inner Card need in the styling overflow-x auto for mobile  -->
  <!-- from 1440px wrap it in container & to display additional 2 FeaturedProperties components with different props values -->
</template>
