<script setup>
  import {
    PropertiesCard_Head_1,
    // PropertiesCard_Head_2,
    PropertiesCard_Para_1,
    // PropertiesCard_Para_2,
    properties,
  } from '../constants/propertiesPageConstants'
  useSeoMeta({
    title: 'Exp Page',
  })

  const handleNavigation = () => {
    router.push(`/Properties/${cardProperty.propertyName}`)
  }
</script>

<template>
  <div class="frame-wrapper">
    <div class="div">
      <BoxInput />
    </div>

    <div class="property mx-auto w-11/12 flex-col flex">
      <MainBox
        :headline="PropertiesCard_Head_1"
        :paraline="PropertiesCard_Para_1"
        :wrap-style="'mx-auto'" />
      <div
        class="laptop:max-w-11/12 mx-auto grid w-full auto-cols-max grid-flow-col gap-x-12 overflow-x-scroll border-4 border-gray-600"
        @click="handleNavigation">
        <div
          v-for="(property, index) in properties"
          :key="index"
          class="my-6 flex-shrink-0 max-w-[22.375rem] overflow-hidden transition-all duration-500">
          <PropertyCard
            :card-image="property.cardImage"
            :card-title="property.cardTitle"
            :card-text="property.cardText"
            :bed-rooms="property.bedRooms"
            :bath-rooms="property.bathRooms"
            :card-price="property.cardPrice" />
        </div>

        <!-- <ViewButton :buttonText="'View All Properites'" :totalPagesNumber="'10'" /> -->
      </div>
      <div class="pagination-block">
        <div class="flex justify-between items-center">
          <Arrows />
        </div>
      </div>
    </div>

    <div class="form-section">
      <PropertyForm />
    </div>
  </div>
</template>

<style scoped></style>
