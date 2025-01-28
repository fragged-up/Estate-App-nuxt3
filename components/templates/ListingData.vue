<script setup lang="ts">
  defineProps<{
    listingPrice: string
    propertyTransferTax: string
    legalFees: string
    homeInspection: string
    propertyInsurance: string
    mortgageFees: string
    propertyTaxes: string
    homeOwnersAssociationFees: string
    additionalFees?: string
    downPayment: string
    mortgageAmount: string
    mortgagePayment: string
  }>()
  // const ListingProperty = [
  //   {
  //     listingPrice:'5',
  //     propertyTransferTax: '5',
  //     legalFees: '5',
  //     homeInspection: '5',
  //     propertyInsurance: '5',
  //     mortgageFees: '5',
  //     propertyTaxes: '5',
  //     homeOwnersAssociationFees: '5',
  //     listingPrice: '5',
  //     AdditionalFees: '5',
  //     downPayment: '5',
  //     mortgageAmount: '5',
  //     mortgagePayment: '5',
  //   },
  // ]

  const boxText_1 = [
    'Based on the sale price and local regulations',
    'Approximate cost for legal services, including title transfer',
    'Recommended for due diligence',
    'Annual cost for comprehensive property insurance',
    'If applicable, consult with your lender for specific details',
  ]

  const boxText_2 = [
    'Approximate monthly property tax based on the sale price and local rates',
    'Monthly fee for common area maintenance and security',
  ]
  const boxText_3 = [
    'Property transfer tax, legal fees, inspection, insurance',
    '20%',
    'if applicable',
  ]
  const boxText_4 = ['Approximate monthly cost']

  const titleText = "Homeowners' Association Fee"
</script>

<template>
  <section
    class="mx-auto w-11/12 laptop:mx-0 laptop:grid laptop:w-full laptop:grid-cols-[15%_85%] laptop:justify-between"
  >
    <div class="left my-6">
      <p
        class="listingPrice font-sans text-sm font-medium text-gl laptop:text-base"
      >
        Listing Price
      </p>
      <p
        class="price font-sans text-2xl font-semibold text-white laptop:text-3xl"
      >
        ${{ props.listingPrice }}
      </p>
    </div>

    <div class="wrapper w-full">
      <div class="data-container mx-auto space-y-8">
        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6"
        >
          <ListHead :text-head="'Additional Fees'" />
          <ListingBox
            :title="'Property Transfer Tax'"
            :price="'$25,000'"
            :box-text="boxText_1[0]"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Legal Fees'"
            :price="'$3,000'"
            :box-text="boxText_1[1]"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Home Inspection'"
            :price="'$500'"
            :box-text="boxText_1[2]"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Property Insurance'"
            :price="'$1,200'"
            :box-text="boxText_1[3]"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Mortgage Fees'"
            :price="'Varies'"
            :box-text="boxText_1[4]"
          />
        </div>

        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6"
        >
          <ListHead :text-head="'Monthly Costs'" />
          <ListingBox
            :title="'Property Taxes'"
            :price="'$1,250'"
            :box-text="boxText_2[0]"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="titleText"
            :price="'$300'"
            :box-text="boxText_2[1]"
          />
        </div>
        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6"
        >
          <ListHead :text-head="'Total Initial Costs'" />
          <ListingBox
            :title="'Listing Price'"
            :price="`$${props.listingPrice}`"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Additional Fees'"
            :price="'$29,700'"
            :box-text="boxText_3[0]"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Down Payment'"
            :price="'$29,700'"
            :box-text="boxText_3[1]"
            :add-border="'border-b border-hg w-auto'"
          />
          <ListingBox
            :title="'Mortgage Amount'"
            :price="'$1,000,000'"
            :box-text="boxText_3[2]"
            :add-border="'border-b border-hg w-auto'"
          />
        </div>
        <div
          class="box-data mx-auto rounded-2xl border border-hg px-4 py-2 laptop:px-8 laptop:py-6"
        >
          <ListHead :text-head="'Monthly Expenses'" />
          <ListingBox
            :title="'Property Taxes'"
            :price="'$1,250'"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="titleText"
            :price="'$300'"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Mortgage Payment'"
            :single-text="'Varies based on terms and interest rate'"
            :add-border="'border-b border-hg'"
          />
          <ListingBox
            :title="'Property Insurance'"
            :price="'$100'"
            :box-text="boxText_4[0]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
