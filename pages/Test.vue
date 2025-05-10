<script setup lang="ts">
interface Property {
  id: string
  location: string
  areaSqFt: number
  buildYear: number
  propertyType: string
  price: number
}

interface ApiResponse {
  properties?: Property[]
  error?: string
}

const allProperties = ref<Property[]>([])

const selectedPrice = ref<number | string | null>(null)
const selectedLocation = ref<string | null>(null)
const selectedAreaSqFt = ref<number | string | null>(null)
const selectedBuildYear = ref<number | string | null>(null)
const selectedPropertyType = ref<string | null>(null)

const priceOptions = ref<(string | number)[]>(['All Prices'])
const locationOptions = ref<(string | number)[]>(['All Locations'])
const areaSqFtOptions = ref<(string | number)[]>(['All Sizes'])
const buildYearOptions = ref<(string | number)[]>(['All Years'])
const propertyTypeOptions = ref<(string | number)[]>(['All Types'])

const filteredProperties = computed(() => {
  return allProperties.value.filter((property:any) => {
    const priceMatch =
      selectedPrice.value === null || selectedPrice.value === 'All Prices' || property.price === +selectedPrice.value
    const locationMatch =
      selectedLocation.value === null || selectedLocation.value === 'All Locations' || property.location === selectedLocation.value
    const areaMatch =
      selectedAreaSqFt.value === null || selectedAreaSqFt.value === 'All Sizes' || property.areaSqFt === +selectedAreaSqFt.value
    const yearMatch =
      selectedBuildYear.value === null || selectedBuildYear.value === 'All Years' || property.buildYear === +selectedBuildYear.value
    const typeMatch =
      selectedPropertyType.value === null || selectedPropertyType.value === 'All Types' || property.propertyType === selectedPropertyType.value

    return priceMatch && locationMatch && areaMatch && yearMatch && typeMatch
  })
})

const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const response = await $fetch<ApiResponse>('/api/test')
    loading.value = false

    if (response.error) {
      error.value = response.error
      return
    }

    if (response.properties) {
      allProperties.value = response.properties

      const properties = response.properties

      priceOptions.value = [
        'All Prices',
        ...[...new Set(properties.map((p) => p.price).filter((v) => typeof v === 'number'))].sort((a, b) => a - b),
      ]
      locationOptions.value = ['All Locations', ...[...new Set(properties.map((p) => p.location))].sort()]
      areaSqFtOptions.value = [
        'All Sizes',
        ...[...new Set(properties.map((p) => p.areaSqFt).filter((v) => typeof v === 'number'))].sort((a, b) => a - b),
      ]
      buildYearOptions.value = [
        'All Years',
        ...[...new Set(properties.map((p) => p.buildYear).filter((v) => typeof v === 'number'))].sort((a, b) => a - b),
      ]
      propertyTypeOptions.value = ['All Types', ...[...new Set(properties.map((p) => p.propertyType))].sort()]
    }
  } catch (err) {
    loading.value = false
    error.value = 'An unexpected error occurred'
    console.error(err)
  }
})
</script>

<template>
  <div class="box-input-main-container">
    <!-- Search bar -->
    <div class="mx-auto mt-8 bg-mg p-4 laptop:grid laptop:w-[50%] laptop:rounded-lg laptop:text-center">
      <Search :placeholder="'Search For A Property'" :icon-src="'/icons/Find.svg'" />
    </div>

    <!-- Filter Inputs -->
    <div class="mx-auto mb-12 mt-4 flex w-11/12 flex-col gap-y-6 rounded-3xl bg-mg p-8 text-center laptop:my-0 laptop:w-auto laptop:max-w-[79rem] laptop:flex-row laptop:items-center laptop:justify-center laptop:gap-x-4 laptop:rounded-xl laptop:px-0 laptop:py-6">
      <SortInput
        v-model="selectedLocation"
        :input-image="'/icons/Location.svg'"
        label="Location"
        :options="locationOptions"
      />
      <SortInput
        v-model="selectedPropertyType"
        :input-image="'/icons/HouseIcon.svg'"
        label="Property Type"
        :options="propertyTypeOptions"
      />
      <SortInput
        v-model="selectedPrice"
        :input-image="'/icons/CamIcon.svg'"
        label="Pricing Range"
        :options="priceOptions"
      />
      <SortInput
        v-model="selectedAreaSqFt"
        :input-image="'/icons/CubeIc.svg'"
        label="Property Size"
        :options="areaSqFtOptions"
      />
      <SortInput
        v-model="selectedBuildYear"
        :input-image="'/icons/Calendar.svg'"
        label="Build Year"
        :options="buildYearOptions"
      />
    </div>

    <!-- Loading / Error -->
    <div v-if="loading" class="text-center text-gray-500">Loading properties...</div>
    <div v-if="error" class="text-center text-red-500">Error: {{ error }}</div>

    <!-- Filtered Properties -->
    <div v-if="filteredProperties.length > 0" class="px-4 text-left text-white">
      <h2 class="mb-2 text-xl font-bold">Filtered Properties:</h2>
      <ul class="space-y-2">
        <li
          v-for="property in filteredProperties"
          :key="property.id"
          class="rounded bg-gray-800 p-4 shadow"
        >
          <strong>{{ property.location }}</strong> — {{ property.propertyType }}<br >
          Price: ${{ property.price.toLocaleString() }}<br >
          Size: {{ property.areaSqFt }} sq.ft<br >
          Year Built: {{ property.buildYear }}
        </li>
      </ul>
    </div>

    <p v-else-if="!loading && !error" class="text-center text-gray-500">No properties match your filters.</p>
  </div>
</template>
