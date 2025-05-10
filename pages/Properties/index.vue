<script setup lang="ts">
  import type { FullInquiryForm } from '~/schemas/formSchemas';
  import { fullInquirySchema } from '~/schemas/formSchemas';
  import CardWrapper from '~/components/organisms/CardWrapper.vue';
  import SearchProperty from '~/components/properties/SearchProperty.vue';
  import { showToast } from '@/constants/toaster';

  const useToast = () => {
    return showToast({
      ToastMessage: 'Form Submmited We Will Contact You Soon',
    });
  };

  useHead({
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }],
  });
  useSeoMeta({ title: 'Properties' });

  const { data: propertyList } = await useFetch('/api/properties');
  const DISCOVER_TITLE = 'Discover a World of Possibilities';
  const DISCOVER_DESCRIPTION =
    'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home.`';
  const MAKE_IT_TITLE = "Let's Make it Happen";
  const MAKE_IT_DESCRIPTION =
    "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.";

  const errors = ref<Record<string, string>>({});
  const isSubmitting = ref(false);

  const formState = reactive<FullInquiryForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredLocation: '',
    propertyType: '',
    bathrooms: '',
    bedrooms: '',
    budget: '',
    contactMethod: '',
    contactValue: '',
    message: '',
    termsAccepted: false,
  });

  const submitForm = async () => {
    isSubmitting.value = true;
    try {
      await fullInquirySchema.parseAsync(formState);
      errors.value = {};
      console.log('formState.value : ', formState.value);

      const res = await $fetch('/api/forms/inquiry', {
        method: 'POST',
        body: formState,
      });
      console.log('res : ', res);
      showToast({ToastMessage: 'Form Submmited We Will Contact You Soon',});


    } catch (err: any) {
      errors.value = err.errors.reduce((acc: any, curr: any) => {
        acc[curr.path[0]] = curr.message;
        showToast({ToastMessage: 'There is Error With Submitting You Contact Information, Please Try Again Later',});
        return acc;
      }, {});
    } finally {
      isSubmitting.value = false;
    }
  };
</script>

<template>
  <div>
    <DynamicHero variant="properties" />
    <main>
      <nav class="box-c touch-manipulation">
        <SearchProperty />
      </nav>

      <section class="layout">
        <CardWrapper :card="propertyList" :title="DISCOVER_TITLE" :description="DISCOVER_DESCRIPTION">
          <template #default="{ card }">
            <PropertyCard v-for="item in card" :key="item.id" :item="item" :variant="'propertiesPage'" />
          </template>
        </CardWrapper>

        <MainBlock :header-text="MAKE_IT_TITLE" :para-text="MAKE_IT_DESCRIPTION">
          <template #default>
            <form @submit.prevent="submitForm">
              <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
                <label for="firstName" class="font-sans text-base font-medium text-white">First Name</label>
                <input
                  id="firstName"
                  v-model="formState.firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  class="w-full rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
                >
                <span v-if="errors.firstName" class="mt-1 text-red-500 text-center">{{ errors.firstName }}</span>
              </div>

              <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
                <label for="lastName" class="font-sans text-base font-medium text-white">Last Name</label>
                <input
                  id="lastName"
                  v-model="formState.lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter Last Name"
                  class="w-full rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
                >
                <span v-if="errors.lastName" class="mt-1 text-red-500 text-center">{{ errors.lastName }}</span>
              </div>

              <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
                <label for="email" class="font-sans text-base font-medium text-white">Email</label>
                <input
                  id="email"
                  v-model="formState.email"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  class="w-full rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
                >
                <span v-if="errors.email" class="mt-1 text-red-500 text-center">{{ errors.email }}</span>
              </div>

              <div class="mx-auto my-6 flex w-11/12 flex-col gap-y-4">
                <label for="phone" class="font-sans text-base font-medium text-white">Phone</label>
                <input
                  id="phone"
                  v-model="formState.phone"
                  type="text"
                  name="phone"
                  placeholder="Enter Phone"
                  class="w-full rounded-2xl border border-[#262626] text-white bg-[#141414] p-4 placeholder:text-sm placeholder:font-medium placeholder:text-[#666666] focus:outline-none"
                >
                <span v-if="errors.phone" class="mt-1 text-red-500 text-center">{{ errors.phone }}</span>
              </div>

              <SelectInput
                v-model="formState.preferredLocation"
                select-head="Preferred Location"
                place-holder="Select Location"
                label="Select Location"
                :options="['location-1', 'location-2', 'location-3']"
              />
              <SelectInput
                v-model="formState.propertyType"
                select-head="Property Type"
                place-holder="Select Property Type"
                label="Select Property Type"
                :options="['property-type-1', 'property-type-2', 'property-type-3']"
              />
              <SelectInput
                v-model="formState.bathrooms"
                select-head="No. of Bathrooms"
                place-holder="Select no. of Bathrooms"
                label="No. of Bathrooms"
                :options="['bathroom-1', 'bathroom-2', 'bathroom-3']"
              />
              <SelectInput
                v-model="formState.bedrooms"
                select-head="No. of Bedrooms"
                place-holder="Select no. of Bedrooms"
                label="No. of Bedrooms"
                :options="['bedroom-1', 'bedroom-2', 'bedroom-3']"
              />
              <SelectInput
                v-model="formState.budget"
                select-head="Budget"
                place-holder="Select Budget"
                label="Select Budget"
                :options="['Budget-1', 'Budget-2', 'Budget-3']"
              />

              <Preferred
                v-model:contact-method="formState.contactMethod"
                v-model:message="formState.message"
                v-model:terms-accepted="formState.termsAccepted"
                v-model:contact-value="formState.contactValue"
              />

              <span v-if="errors.contactMethod" class="mt-1 text-red-500 text-center">{{ errors.contactMethod }}</span>
              <span v-if="errors.message" class="mt-1 text-red-500 text-center">{{ errors.message }}</span>
              <span v-if="errors.termsAccepted" class="mt-1 text-red-500 text-center">{{ errors.termsAccepted }}</span>

              <button
                type="submit"
                class="mt-6 w-full rounded-2xl bg-[#703BF7] p-4 text-white"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="text-lg text-white">Sending...</span>
                <span v-else class="text-lg text-white">Send Your Message</span>
              </button>
            </form>
          </template>
        </MainBlock>
      </section>
    </main>
  </div>
</template>
