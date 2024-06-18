<script setup>
const isVisible = ref(false);
const toggleVisual = () => isVisible.value = !isVisible.value;

const cardProperty = defineProps({
    cardImage: String,
    cardTitle: String,
    cardText: String,
    bedRooms: Number,
    bathRooms: Number,
    cardPrice: String
});


</script>


<template>
    <div class="property-card-main-container w-auto m-0">
        <div class="card-box w-full max-w-[413px] rounded-xl grid gap-y-6 border-2 border-[#262626] p-4">
  <!-- from 1440px make hook to display viewButton wrap it in container of inline-flex width 
              width 155px and height 49px  -->
                
            <div class="container middleBuilding-c">
                <img :src="$loadImage(`${cardImage}`)" alt="middleBuilding" class="w-full max-h-56" />
            </div>
            <div class="container h-auto">
                <h3 class="text-white text-lg">{{ cardProperty.cardTitle }}</h3>
                <p class="text-[#999999] py-2">
                    {{ cardProperty.cardText }}
                    <strong @click="toggleVisual" class="text-white text-sm underline">Read More</strong>
                </p>
                <p v-show="isVisible" class="pt-1 text-white">Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Porro necessitatibus reiciendis veritatis, asperiores voluptatem velit
                    cumque voluptas esse. Doloribus veritatis et rerum ducimus eveniet quisquam impedit,
                    cumque exercitationem tempora dignissimos!</p>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <button class="bg-[#1A1A1A] border-2 border-[#262626] rounded-3xl">
                    <span class="inline-flex gap-2 py-2">
                        <img :src="$loadImage('/icons/bedRoom.svg')" class="text-center mx-auto" alt="bedRoom">
                        <small class="text-white">{{ cardProperty.bedRooms }}-Bedroom</small>
                    </span>
                </button>
                <button class="bg-[#1A1A1A] border-2 border-[#262626] rounded-3xl">
                    <span class="inline-flex gap-2 py-2">
                        <img :src="$loadImage('/icons/bathRoom.svg')" class="text-center mx-auto" alt="bathRoom">
                        <small class="text-white">{{ cardProperty.bathRooms }}-Bathroom</small>
                    </span>
                </button>

                <button class="col-span-auto bg-[#1A1A1A] border-2 border-[#262626] rounded-3xl">
                    <span class="inline-flex gap-2 py-2">
                        <img :src="$loadImage('/icons/villaIcon.svg')" class="text-center mx-auto" alt="villa" />
                        <small class="text-white">Villa</small>
                    </span>
                </button>
            </div>

            <div class="grid grid-cols-[.4fr_1fr] gap-x-2 my-4">

                <div class="text-center">
                    <p class="text-[#999999] text-start">Price</p>
                    <p class="text-white text-start">${{ cardProperty.cardPrice }}</p>
                </div>

                <button class="bg-[#703BF7] rounded-xl">
                    <p class="text-white text-sm"> View Property Details</p>
                </button>

            </div>


        </div>

    </div>
    <!-- inner Card need in the styling overflow-x auto for mobile  -->
 <!-- from 1440px wrap it in container & to display additional 2 FeaturedProperties components with different props values -->
</template>

