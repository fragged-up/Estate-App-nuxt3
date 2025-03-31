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
    pTagLine?:string
  }>()

  const loremIpsum =`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porronecessitatibus reiciendis veritatis, asperiores voluptatem velit cumque voluptas esse. Doloribus veritatis et rerum ducimus eveniet`

  // props in active use here :
  //cardImage
  //cardTitle
  //cardText
  //bedRooms
  //bathRooms
  //cardPrice
</script>

<template>
// proeprty card for properties page
    <div class="card-box grid w-full max-w-[29rem] gap-y-6 rounded-xl border-2 border-[#262626] p-6">
      <PropetyImage :card-image="$loadImage(cardImage)"/>
      <PropertyTextBlock :card-title="cardTitle" :card-text="cardText" :lorem-ipsum="loremIpsum" />
      <PropertyBadges :bed-rooms="bedRooms" :bath-rooms="bathRooms" />
      <PropertyCardFooter :card-price="cardPrice" />
    </div>


 // proeprty card for home page
    <div class="card-box grid w-full max-w-[29rem] gap-y-6 rounded-xl border-2 border-[#262626] p-6">
      <PropetyImage :card-image="$loadImage(cardImage)"/>
      <PropretyTagLine :tag-line="pTagLine"/>
      <PropertyTextBlock :card-title="cardTitle" :card-text="cardText" :lorem-ipsum="loremIpsum" />
      <PropertyCardFooter :card-price="cardPrice" />
    </div>



</template>
