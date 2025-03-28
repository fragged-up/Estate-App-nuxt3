<script setup lang="ts">
  import type { ListingBox } from '~/constants/types'
  import { BOX_GROUPS } from '~/constants/sheet'

  defineProps<{
    listingPrice?: string | number | unknown | undefined
    propertyTransferTax?: string
    legalFees?: string
    homeInspection?: string
    propertyInsurance?: string
    mortgageFees?: string
    propertyTaxes?: string
    homeOwnersAssociationFees?: string
    additionalFees?: string
    downPayment?: string
    mortgageAmount?: string
    mortgagePayment?: string
  }>()

  const { firstBoxGroup, secondBoxGroup, thirdBoxGroup } = BOX_GROUPS
</script>

<template>
  <section
    class="mx-auto w-11/12 laptop:mx-0 laptop:grid laptop:w-full laptop:grid-cols-[15%_85%] laptop:justify-between">
    <div class="left my-6">
      <p
        class="listingPrice font-sans text-sm font-medium text-gl laptop:text-base">
        Listing Price
      </p>
      <p
        class="price font-sans text-2xl font-semibold text-white laptop:text-3xl">
        ${{ listingPrice }}
      </p>
    </div>

    <div class="wrapper w-full">
      <div class="data-container mx-auto space-y-8">
        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6">
          <ListHead :text-head="'Additional Fees'" />
          <ListingBox
            v-for="item in firstBoxGroup"
            :key="item.id"
            :title="item.title"
            :price="item.price"
            :box-text="item.boxText"
            :add-border="item.addBorder" />
        </div>

        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6">
          <ListHead :text-head="'Monthly Costs'" />
          <ListingBox
            :title="'Property Taxes'"
            :price="'$1,250'"
            :box-text="'Approximate monthly property tax based on the sale price and local rates'"
            :add-border="'border-b border-hg'" />
          <ListingBox
            :title="'\'Homeowners\' Association Fee'"
            :price="'$300'"
            :box-text="'Monthly fee for common area maintenance and security'" />
        </div>
        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6">
          <ListHead :text-head="'Total Initial Costs'" />
          <ListingBox
            v-for="item in secondBoxGroup"
            :key="item.id"
            :title="item.title"
            :price="item.price"
            :box-text="item.boxText"
            :add-border="item.addBorder" />
        </div>
        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6">
          <ListHead :text-head="'Monthly Expenses'" />
          <ListingBox
            v-for="item in thirdBoxGroup"
            :key="item.id"
            :title="item.title"
            :price="item.price"
            :box-text="item.boxText"
            :single-text="item.singleText"
            :add-border="item.addBorder" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
