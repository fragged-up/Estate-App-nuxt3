<script setup>
  import {
    bedSVG,
    bathSVG,
    areaSVG,
    lightningSVG,
  } from '../../constants/svgIcons'

  useSeoMeta({
    title: ['PropertyId'],
  })
  const usePropertyState = () => useState('propertyState', () => ({}))

  const propertyState = usePropertyState()
  const property = propertyState.value
  console.log('propertyState.value : ', propertyState.value)
  const activeNumber = ref(0)
  const updateIndex = newIndex => {
    activeNumber.value = newIndex
  }

  const scard_1 = {
    head: 'Inquire About Seaside Serenity Villa',
    para: 'Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.',
  }
  const scard_2 = {
    head: 'Comprehensive Pricing Details',
    para: 'At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision',
  }
  const selectedProperty = `${property.propertyName} Villa, ${property.propertyLocation}`
  const faqCard = {
    head: 'Frequently Asked Questions',
    para: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
    faqs: [
      {
        faqTitle: 'How do I search for properties on Estatein?',
        faqText:
          'Learn how to use our user-friendly search tools to find properties that match your criteria.',
      },
      {
        faqTitle:
          'What documents do I need to sell my property through Estatein?',
        faqText:
          'Find out about the necessary documentation for listing your property with us.',
      },
      {
        faqTitle: 'How can I contact an Estatein agent?',
        faqText:
          'Discover the different ways you can get in touch with our experienced agents',
      },
    ],
  }
</script>
<template>
  <div class="main">
    <header>
      <div class="p-4">
        <CardId
          :property-name-id="property.propertyName"
          :card-image-id="property.cardImage"
          :card-price-id="property.cardPrice"
          :property-location-id="property.propertyLocation"
          :property-images-id="property.propertyImages"
          :active-index="activeNumber"
          @update-index="updateIndex"
        />
        <!-- <div>
          <h1>{{ property.propertyName }}</h1>
          <img :src="$loadImage(property.cardImage)" alt="Property Image" />
          <p>{{ property.cardTitle }}</p>
          <p>{{ property.cardText }}</p>
          <p>Price: {{ property.cardPrice }}</p>
          <p>Bedrooms: {{ property.bedRooms }}</p>
          <p>Bathrooms: {{ property.bathRooms }}</p>
          <p>Description: {{ property.description }}</p>
          <p>Square Feet: {{ property.squareFeet }}</p>
          <p>Location: {{ property.propertyLocation }}</p>
          <div v-for="(image, index) in property.propertyImages" :key="index">
      <img :src="$loadimage(image)" alt="Property Image" />
    </div>
        </div> -->
      </div>
    </header>

    <div
      class="2-blocks-cnt centerize-all mx-auto w-[90%] space-y-12 laptop:flex laptop:gap-6 laptop:space-y-0"
    >
      <div
        class="description my-2 grid grid-flow-row gap-y-8 rounded-xl border border-hg bg-fgl px-8 py-12 laptop:my-0 laptop:py-8"
      >
        <div class="head-cnt space-y-4">
          <h2 class="font-sans font-semibold text-white">Description</h2>
          <p class="font-sans text-sm font-medium text-gl">
            {{ property.description }}
          </p>
        </div>
        <div class="grid grid-flow-col border-y border-hg py-12">
          <div class="left-s border-r border-hg">
            <LineImg
              :svg-icon="bedSVG"
              :gapped-value="'gap-1'"
              :head="'Bedrooms'"
            />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ property.bedRooms ? property.bedRooms.toString() : 'N/A' }}
            </p>
          </div>
          <div class="right-s pl-4">
            <LineImg
              :svg-icon="bathSVG"
              :gapped-value="'gap-1'"
              :head="'Bathrooms'"
            />
            <p class="py-2 font-sans text-lg font-semibold text-white">
              0{{ property.bathRooms ? property.bathRooms.toString() : 'N/A' }}
            </p>
          </div>
        </div>
        <div class="area">
          <LineImg :svg-icon="areaSVG" :gapped-value="'gap-1'" :head="'Area'" />
          <p class="font-sans text-lg font-semibold text-white">
            {{ property.squareFeet ? property.squareFeet : 'N/A' }} Square Feet
          </p>
        </div>
      </div>

      <div class="amentites space-y-6 rounded-xl border border-hg p-8">
        <h3 class="font-sans text-lg font-semibold text-white">
          Key Features and Amenities
        </h3>
        <LineImg
          :svg-icon="lightningSVG"
          :container-wrapper="'grad-black border-l border-pr p-4'"
          :gapped-value="'gap-4'"
          :head="'Expansive oceanfront terrace for outdoor entertaining'"
        />
        <LineImg
          :svg-icon="lightningSVG"
          :container-wrapper="'grad-black border-l border-pr p-4'"
          :gapped-value="'gap-4'"
          :head="'Expansive oceanfront terrace for outdoor entertaining'"
        />
        <LineImg
          :svg-icon="lightningSVG"
          :container-wrapper="'grad-black border-l border-pr p-4'"
          :gapped-value="'gap-4'"
          :head="'Expansive oceanfront terrace for outdoor entertaining'"
        />
        <LineImg
          :svg-icon="lightningSVG"
          :container-wrapper="'grad-black border-l border-pr p-4'"
          :gapped-value="'gap-4'"
          :head="'Expansive oceanfront terrace for outdoor entertaining'"
        />
        <LineImg
          :svg-icon="lightningSVG"
          :container-wrapper="'grad-black border-l border-pr p-4'"
          :gapped-value="'gap-4'"
          :head="'Expansive oceanfront terrace for outdoor entertaining'"
        />
      </div>
    </div>

    <section class="centerize-all *:space-y-20">
      <div class="box-rows">
        <div
          class="box-row-one laptop:my-12 laptop:grid laptop:grid-cols-[25%_70%] laptop:justify-between"
        >
          <MainBox :headline="scard_1.head" :paraline="scard_1.para" />
          <FormId :location-text="selectedProperty" />
        </div>

        <div class="box-row-two">
          <MainBox :headline="scard_2.head" :paraline="scard_2.para" />
          <div
            class="note my-4 rounded-xl border-t border-hg bg-mg p-4 laptop:flex laptop:gap-6 laptop:border-none"
          >
            <h4
              class="border-b border-hg pb-4 font-sans text-lg font-semibold text-white"
            >
              Note
            </h4>
            <div
              class="laptop:border-l laptop:border-hg laptop:pl-4 laptop:text-center"
            >
              <p
                class="py-4 font-sans text-sm font-medium text-gl laptop:text-center"
              >
                The figures provided above are estimates and may vary depending
                on the property, location, and individual circumstances.
              </p>
            </div>
          </div>
          <div class="my-6">
            <ListingData :listing-price="property.cardPrice" />
          </div>
        </div>

        <div class="box-row-faq">
          <MainBlock
            :header-text="faqCard.head"
            :cont-style="'laptop:mx-0'"
            :sub-cont-style="'laptop:mx-0'"
            :para-text="faqCard.para"
          >
            <template #default>
              <div
                class="laptop:flex laptop:flex-row laptop:justify-between laptop:gap-6"
              >
                <FaqCard
                  v-for="(faq, index) in faqCard.faqs"
                  :key="index"
                  :faq-title="faq.faqTitle"
                  :faq-text="faq.faqText"
                />
              </div>
              <ViewButton
                :button-text="`View All FAQ's`"
                :total-pages-number="'10'"
              />
            </template>
          </MainBlock>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .grad-black {
    background: linear-gradient(to left, rgba(26, 26, 26, 0), rgba(26, 26, 26, 1));
  }
  .centerize-all > * {
    width: 90%;
    margin-inline: auto;
  }
</style>
<!-- <nav>
        <div class="flex items-center justify-center">
          <h1 class="font-sans text-lg font-bold text-white">{{ cardTitle }}</h1>
          <p class="font sans text-lg font-medium text-white">Price: {{ cardPrice }}</p>
        </div>
      </nav> -->
<!-- :key="index"
          :image="card.image"
          :miniOne="card.miniOne"
          :miniTwo="card.miniTwo"
          :miniThree="card.miniThree"
          :miniFourth="card.miniFourth"
          :cardName="card.cardName"
          :cardPricey="card.cardPricey"
          :locName="card.locName" -->
<!-- <MainBox :headline="scard_Head3" :paraline="scard_Para3" />
          <FaqCard :faqTitle="faq_Title" :faqText="faq_Text" />
          <ViewButton :buttonText="button_text" /> -->
<!-- const idProper = [
          {
            image: '/Mini/BoldImage.svg',
            miniOne: '/Mini/propImageMini.svg',
            miniTwo: '/Mini/MiniTwo.svg',
            miniThree: '/Mini/MiniThree.svg',
            miniFourth: '/Mini/MiniFourth.svg',
            locName: propertyLocation,
            cardPricey: cardPrice,
            cardName: `${propertyName} Villa`,
          },
        ] -->
