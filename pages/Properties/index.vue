<script setup lang="ts">
  import { inputsFields, selectFields } from '~/constants';
  import { useRouter, useSeoMeta } from '#imports';

  useSeoMeta({ title: 'Properties' });

  const itemsPerPage = 3;

  const { data: propertyList } = await useFetch('/api/properties');

  onMounted(() => {
    console.log('propertyList', propertyList);
  });
</script>

<template>
  <div>
    <DynamicHero variant="properties" />
    <main>
      <div class="box-c">
        <BoxInput />
      </div>

      <section class="section-layout">
        <div class="section-container">
          <div class="property">
            <MainBlock
              :header-text="'Discover a World of Possibilities'"
              :para-text="`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.`"
            >
              <template #default>
                <PaginationWrapper :items="propertyList">
                  <template #default="{ items }">
                    <PropertyCard v-for="item in items" :key="item.id" :item="item" :variant="'propertiesPage'" />
                  </template>
                </PaginationWrapper>
              </template>
            </MainBlock>
          </div>

          <div class="last-div mx-auto w-11/12">
            <MainBlock
              header-text="Let's Make it Happen"
              para-text="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
            >
              <template #default>
                <Input
                  v-for="(inp, index) in inputsFields"
                  :key="index"
                  :for="inp.for"
                  :label="inp.label"
                  :input-type="inp.inputType"
                  :name="inp.name"
                  :placeholder="inp.placeHolder"
                />

                <div class="select-input-group">
                  <SelectInput
                    v-for="(selInp, index) in selectFields"
                    :key="index"
                    :select-head="selInp.selectHead"
                    :place-holder="selInp.placeHolder"
                    :label="selInp.label"
                    :options="selInp.options"
                  />
                  <Preferred />
                </div>
              </template>
            </MainBlock>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
