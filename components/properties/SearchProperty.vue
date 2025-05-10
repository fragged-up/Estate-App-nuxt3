<script setup lang="ts">
  import { getSlugId } from '~/utils';
  interface Property {
    id: string;
    location: string;
    areaSqFt: number;
    buildYear: number;
    propertyType: string;
    price: number;
  }

  interface ApiResponse {
    properties?: Property[];
    error?: string;
  }

  const allProperties = ref<Property[]>([]);

  const selectedPrice = ref<number | string | null>(null);
  const selectedLocation = ref<string | null>(null);
  const selectedAreaSqFt = ref<number | string | null>(null);
  const selectedBuildYear = ref<number | string | null>(null);
  const selectedPropertyType = ref<string | null>(null);
  const searchQuery = ref<string>('');

  const priceOptions = ref<(string | number)[]>(['All Prices']);
  const locationOptions = ref<(string | number)[]>(['All Locations']);
  const areaSqFtOptions = ref<(string | number)[]>(['All Sizes']);
  const buildYearOptions = ref<(string | number)[]>(['All Years']);
  const propertyTypeOptions = ref<(string | number)[]>(['All Types']);

  const filteredProperties = computed(() => {
    return allProperties.value.filter((property: any) => {
      const matchesSearch =
        searchQuery.value.trim() === '' ||
        property.location.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        property.propertyType.toLowerCase().includes(searchQuery.value.toLowerCase());

      const priceMatch =
        selectedPrice.value === null || selectedPrice.value === 'All Prices' || property.price === +selectedPrice.value;

      const locationMatch =
        selectedLocation.value === null ||
        selectedLocation.value === 'All Locations' ||
        property.location === selectedLocation.value;

      const areaMatch =
        selectedAreaSqFt.value === null ||
        selectedAreaSqFt.value === 'All Sizes' ||
        property.areaSqFt === +selectedAreaSqFt.value;

      const yearMatch =
        selectedBuildYear.value === null ||
        selectedBuildYear.value === 'All Years' ||
        property.buildYear === +selectedBuildYear.value;

      const typeMatch =
        selectedPropertyType.value === null ||
        selectedPropertyType.value === 'All Types' ||
        property.propertyType === selectedPropertyType.value;

      return matchesSearch && priceMatch && locationMatch && areaMatch && yearMatch && typeMatch;
    });
  });

  const loading = ref(true);
  const error = ref<string | null>(null);

  onMounted(async () => {
    try {
      const response = await $fetch<ApiResponse>('/api/test');
      loading.value = false;

      if (response.error) {
        error.value = response.error;
        return;
      }

      if (response.properties) {
        allProperties.value = response.properties;
        const properties = response.properties;

        priceOptions.value = [
          'All Prices',
          ...[...new Set(properties.map((p) => p.price).filter((v) => typeof v === 'number'))].sort((a, b) => a - b),
        ];
        locationOptions.value = ['All Locations', ...[...new Set(properties.map((p) => p.location))].sort()];
        areaSqFtOptions.value = [
          'All Sizes',
          ...[...new Set(properties.map((p) => p.areaSqFt).filter((v) => typeof v === 'number'))].sort((a, b) => a - b),
        ];
        buildYearOptions.value = [
          'All Years',
          ...[...new Set(properties.map((p) => p.buildYear).filter((v) => typeof v === 'number'))].sort(
            (a, b) => a - b,
          ),
        ];
        propertyTypeOptions.value = ['All Types', ...[...new Set(properties.map((p) => p.propertyType))].sort()];
      }
    } catch (err) {
      loading.value = false;
      error.value = 'An unexpected error occurred';
      console.error(err);
    }
  });
</script>

<template>
  <div class="box-input-main-container">
    <div class="mx-auto mt-8 bg-mg p-4 laptop:grid laptop:w-[50%] laptop:rounded-lg laptop:text-center">
      <Search v-model="searchQuery" :placeholder="'Search For A Property'" :icon-src="'/icons/Find.svg'" />
    </div>

    <div
      class="mx-auto mb-12 mt-4 flex w-11/12 flex-col gap-y-6 rounded-3xl bg-mg p-8 text-center laptop:my-0 laptop:w-auto laptop:max-w-[79rem] laptop:flex-row laptop:items-center laptop:justify-center laptop:gap-x-4 laptop:rounded-xl laptop:px-0 laptop:py-6"
    >
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

    <div v-if="loading" class="text-center text-gray-500">Loading properties...</div>
    <div v-if="error" class="text-center text-red-500">Error: {{ error }}</div>

    <div v-if="filteredProperties.length > 0" class="px-4 text-left text-white">
      <h2 class="my-12 text-3xl font-light text-gray-300 font-sans text-center">Filtered Properties</h2>
      <ul class="space-y-6">
        <li
          v-for="property in filteredProperties"
          :key="property.id"
          class=" bg-hg/50 border-none w-[80%] mx-auto hover:border-2 hover:border-x-pr focus:ring-2 focus:ring-pr border-2 rounded-2xl p-4 transition-all duration-500 ease-in-out transform hover:scale-105"
        >
          <NuxtLink
            class="block text-2xl font-serif text-yellow-100 hover:text-purple-400 mb-4"
            :to="`/properties/${getSlugId(property.slug, property.id)}`"
          >
            {{ property.location }} — {{ property.propertyType }}
          </NuxtLink>
          <div class="space-y-2 text-lg text-[#e6e0e0] font-sans">
            <p class="">
              <strong class="">Price:</strong>
              ${{ property.price.toLocaleString() }}
            </p>
            <p>
              <strong class="">Size:</strong>
              {{ property.areaSqFt }} sq.ft
            </p>
            <p>
              <strong class="">Year Built:</strong>
              {{ property.buildYear }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <p v-else-if="!loading && !error" class="text-center text-gray-500">No properties match your filters.</p>
  </div>
</template>

