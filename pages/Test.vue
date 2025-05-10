<script setup lang="ts">
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
  const selectedPrice = ref<number | null>(null);
  const selectedLocation = ref<string | null>(null);
  const selectedAreaSqFt = ref<number | null>(null);
  const selectedBuildYear = ref<number | null>(null);
  const selectedPropertyType = ref<string | null>(null);

  const priceOptions = ref<(string | number)[]>(['All Prices']);
  const locationOptions = ref<(string | number)[]>(['All Locations']);
  const areaSqFtOptions = ref<(string | number)[]>(['All Sizes']);
  const buildYearOptions = ref<(string | number)[]>(['All Years']);
  const propertyTypeOptions = ref<(string | number)[]>(['All Types']);

  const filteredProperties = computed(() => {
    return allProperties.value.filter((property: any) => {
      const priceMatch = selectedPrice.value === null || property.price === selectedPrice.value;
      const locationMatch = selectedLocation.value === null || property.location === selectedLocation.value;
      const areaSqFtMatch = selectedAreaSqFt.value === null || property.areaSqFt === selectedAreaSqFt.value;
      const buildYearMatch = selectedBuildYear.value === null || property.buildYear === selectedBuildYear.value;
      const propertyTypeMatch =
        selectedPropertyType.value === null || property.propertyType === selectedPropertyType.value;

      return priceMatch && locationMatch && areaSqFtMatch && buildYearMatch && propertyTypeMatch;
    });
  });

  const error = ref<string | null>(null);
  const loading = ref(true);

  onMounted(async () => {
    try {
      const response = await $fetch<ApiResponse>('/api/test');
      loading.value = false;

      if (response.error) {
        error.value = response.error;
        console.error('Error fetching data:', response.error);
        return;
      }

      if (response.properties) {
        allProperties.value = response.properties;
        priceOptions.value = [
          'All Prices',
          ...[...new Set(response.properties.map((p) => p.price).filter((p) => typeof p === 'number'))].sort(
            (a, b) => a - b,
          ),
        ];
        locationOptions.value = ['All Locations', ...[...new Set(response.properties.map((p) => p.location))].sort()];
        areaSqFtOptions.value = [
          'All Sizes',
          ...[...new Set(response.properties.map((p) => p.areaSqFt).filter((p) => typeof p === 'number'))].sort(
            (a, b) => a - b,
          ),
        ];
        buildYearOptions.value = [
          'All Years',
          ...[...new Set(response.properties.map((p) => p.buildYear).filter((p) => typeof p === 'number'))].sort(
            (a, b) => a - b,
          ),
        ];
        propertyTypeOptions.value = [
          'All Types',
          ...[...new Set(response.properties.map((p) => p.propertyType))].sort(),
        ];
      }
    } catch (err) {
      loading.value = false;
      error.value = 'An unexpected error occurred';
      console.error('Unexpected error fetching data:', err);
    }
  });

  const updateFilter = (filterType: string, value: any) => {
    if (value === null || value === undefined) {
      return;
    }

    switch (filterType) {
      case 'price':
        selectedPrice.value = value === 'All Prices' ? null : typeof value === 'string' ? parseFloat(value) : value;
        break;
      case 'location':
        selectedLocation.value = value === 'All Locations' ? null : (value as string);
        break;
      case 'areaSqFt':
        selectedAreaSqFt.value = value === 'All Sizes' ? null : typeof value === 'string' ? parseFloat(value) : value;
        break;
      case 'buildYear':
        selectedBuildYear.value = value === 'All Years' ? null : typeof value === 'string' ? parseFloat(value) : value;
        break;
      case 'propertyType':
        selectedPropertyType.value = value === 'All Types' ? null : (value as string);
        break;
    }
  };
</script>
<template>
  <div>
    <h1>Test Page</h1>

    <div v-if="loading">Loading properties and filter options...</div>

    <div v-if="error">
      <p style="color: red">Error: {{ error }}</p>
    </div>

    <div class="h-screnn bg-gray-300">
      <div>
        <label for="price-filter">Property Price:</label>
        <select
          id="price-filter"
          v-model="selectedPrice"
          @change="updateFilter('price', ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="option in priceOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div>
        <label for="location-filter">Property Location:</label>
        <select
          id="location-filter"
          v-model="selectedLocation"
          @change="updateFilter('location', ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="option in locationOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div>
        <label for="area-sqft-filter">Property Area (SqFt):</label>
        <select
          id="area-sqft-filter"
          v-model="selectedAreaSqFt"
          @change="updateFilter('areaSqFt', ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="option in areaSqFtOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div>
        <label for="build-year-filter">Property Build Year:</label>
        <select
          id="build-year-filter"
          v-model="selectedBuildYear"
          @change="updateFilter('buildYear', ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="option in buildYearOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>

      <div>
        <label for="property-type-filter">Property Type:</label>
        <select
          id="property-type-filter"
          v-model="selectedPropertyType"
          @change="updateFilter('propertyType', ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="option in propertyTypeOptions" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
    </div>

    <h2>Properties:</h2>
    <ul v-if="filteredProperties.length > 0" class="bg-gray-400">
      <li v-for="property in filteredProperties" :key="property.id">
        Location: {{ property.location }}, Price: {{ property.price.toLocaleString() }}, Area: {{ property.areaSqFt }},
        Year: {{ property.buildYear }}, Type: {{ property.propertyType }}
      </li>
    </ul>
    <p v-else-if="!error && !loading">No properties found matching the filters.</p>
  </div>
</template>

<style scoped>
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    min-width: 150px;
  }
</style>
