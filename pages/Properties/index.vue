<script setup lang="ts">
  import { inputsFields, selectFields } from '~/constants';
  import { useMaintanceModal } from '~/stores/maintanceModal';
  import CardWrapper from '~/components/organisms/CardWrapper.vue';

  useHead({
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      },
    ],
  });

  useSeoMeta({ title: 'Properties' });
  const modalStore = useMaintanceModal();

  const DISCOVER_TITLE = 'Discover a World of Possibilities';
  const DISCOVER_DESCRIPTION ='Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.`';

  const MAKE_IT_TITLE = "Let's Make it Happen";
  const MAKE_IT_DESCRIPTION =  "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.";


  const { data: propertyList } = await useFetch('/api/properties');

</script>

<template>
  <div>
    <DynamicHero variant="properties" />
    <main>
      <div class="box-c touch-manipulation" @click="modalStore.toggleModal()">
        <BoxInput />
      </div>

      <section class="layout">
        <CardWrapper :card="propertyList" :title="DISCOVER_TITLE" :description="DISCOVER_DESCRIPTION">
          <template #default="{ card }">
            <PropertyCard v-for="item in card" :key="item.id" :item="item" :variant="'propertiesPage'" />
          </template>
        </CardWrapper>

        <MainBlock :header-text="MAKE_IT_TITLE" :para-text="MAKE_IT_DESCRIPTION">
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

            <SelectInput
              v-for="(selInp, index) in selectFields"
              :key="index"
              :select-head="selInp.selectHead"
              :place-holder="selInp.placeHolder"
              :label="selInp.label"
              :options="selInp.options"
            />
            <Preferred />
          </template>
        </MainBlock>
      </section>
    </main>
  </div>
</template>
