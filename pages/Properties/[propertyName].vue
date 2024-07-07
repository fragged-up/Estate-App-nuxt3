<script setup>
  const usePropertyState = () => useState('propertyState', () => ({}))

  const propertyState = usePropertyState()
  const property = propertyState.value
  console.log('propertyState.value : ', propertyState.value)
  const activeNumber = ref(0)
  const updateIndex = newIndex => {
    activeNumber.value = newIndex
  }

  const bedSVG = `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_170_2015)">
  <path d="M10.0119 15.9597C7.01369 15.9597 4.01627 15.9597 1.01806 15.9597C0.714934 15.9597 0.574786 16.0984 0.574786 16.3977C0.574786 16.4752 0.578723 16.5527 0.573999 16.6295C0.5677 16.7225 0.558252 16.8155 0.54093 16.9062C0.476368 17.2372 0.159068 17.5023 -0.220432 17.4984C-0.601507 17.4946 -0.917233 17.2116 -0.974709 16.8481C-0.988094 16.7628 -0.99518 16.6752 -0.99518 16.5891C-0.995967 14.8279 -1.00778 13.0659 -0.991243 11.3046C-0.981795 10.2783 -0.602295 9.38527 0.125212 8.64186C0.566913 8.19069 1.09207 7.86976 1.69282 7.66511C2.16522 7.50465 2.65338 7.45581 3.15098 7.45581C7.76246 7.45736 12.3739 7.45348 16.9854 7.45891C18.3365 7.46046 19.4309 7.9969 20.2419 9.06356C20.6403 9.58837 20.8781 10.1845 20.9592 10.8357C20.9867 11.055 20.9985 11.2783 20.9993 11.5C21.0025 13.2101 21.0017 14.9202 21.0009 16.6302C21.0009 16.8977 20.934 17.1411 20.7104 17.3178C20.4741 17.5046 20.2104 17.5535 19.9293 17.4395C19.66 17.3295 19.49 17.1271 19.4514 16.838C19.4317 16.6922 19.4341 16.5426 19.4301 16.3953C19.4238 16.1574 19.3238 16.0139 19.1239 15.9698C19.0798 15.9597 19.0333 15.9605 18.9876 15.9605C15.9965 15.9605 13.0054 15.9605 10.0135 15.9605L10.0119 15.9597Z" fill="#999999"/>
  <path d="M9.90295 0.5C11.8477 0.5 13.7916 0.5 15.7356 0.5C16.3867 0.5 16.9954 0.643411 17.5205 1.03953C18.1961 1.54884 18.5905 2.21938 18.6236 3.06124C18.6519 3.77519 18.6393 4.4907 18.6425 5.20543C18.6448 5.66589 18.6425 6.12636 18.6425 6.58682C18.6425 6.62791 18.6401 6.67132 18.6291 6.71085C18.5952 6.83566 18.5267 6.88527 18.3976 6.86124C18.2567 6.83488 18.1205 6.77829 17.9795 6.76279C17.6481 6.72713 17.3158 6.70233 16.9828 6.68527C16.7607 6.67364 16.6922 6.63411 16.6607 6.41938C16.56 5.73876 15.9198 5.12636 15.101 5.13566C14.1877 5.14574 13.2744 5.13798 12.3618 5.13798C11.6824 5.13798 11.1021 5.53643 10.8714 6.16434C10.8383 6.25426 10.8257 6.35194 10.8084 6.44651C10.7761 6.61628 10.7123 6.67984 10.5407 6.68217C10.1809 6.68605 9.82028 6.68605 9.46046 6.68217C9.29512 6.68062 9.22977 6.61628 9.19985 6.42791C9.15812 6.16357 9.05419 5.92791 8.88413 5.72093C8.57627 5.34574 8.17788 5.14186 7.68657 5.13953C6.74412 5.13488 5.80167 5.13721 4.85843 5.13876C4.06636 5.13953 3.44672 5.74884 3.34594 6.41783C3.31366 6.63411 3.24831 6.67209 3.02628 6.68605C2.65859 6.71008 2.2909 6.74419 1.924 6.78295C1.8114 6.79457 1.70354 6.84264 1.59174 6.86124C1.47127 6.88062 1.41537 6.84031 1.38151 6.72403C1.36813 6.67829 1.36183 6.62946 1.36183 6.5814C1.36104 5.47674 1.34608 4.37209 1.36498 3.26744C1.38466 2.11163 1.92714 1.26202 2.98849 0.748062C3.40893 0.545736 3.8648 0.5 4.32618 0.5C6.18511 0.5 8.04403 0.5 9.90295 0.5Z" fill="#999999"/>
  </g>
  <defs>
  <clipPath id="clip0_170_2015">
  <rect width="22" height="17" fill="white" transform="translate(-1 0.5)"/>
  </clipPath>
  </defs>
  </svg>`
  const bathSVG = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_170_2024)">
  <path d="M0.270432 14.2616H10.111V16.0697H16.2625V14.2655H18.7064C18.8646 16.4158 18.8771 18.3304 16.6716 19.7897C16.6447 19.8075 16.623 19.8318 16.5633 19.885C16.8345 20.1103 17.1018 20.3329 17.3665 20.5529C17.0092 20.8945 16.7222 21.169 16.3932 21.4842C16.1029 21.1848 15.7889 20.8373 15.4467 20.5207C15.3462 20.4275 15.1683 20.3894 15.0224 20.3802C14.784 20.3657 14.5423 20.4045 14.302 20.4052C11.1067 20.4071 7.91145 20.4065 4.71554 20.4065C4.56251 20.4065 4.39897 20.436 4.25777 20.3933C3.83151 20.2653 3.56092 20.4629 3.3074 20.7684C3.09132 21.0284 2.84502 21.2629 2.61975 21.5007C2.31566 21.1808 2.04046 20.8918 1.73572 20.5707C1.93998 20.39 2.19941 20.1602 2.49102 19.9014C2.29004 19.7576 2.13964 19.6577 1.99712 19.5474C0.929186 18.7244 0.351873 17.6329 0.276343 16.2924C0.238906 15.6284 0.269775 14.9604 0.269775 14.2616H0.270432Z" fill="#999999"/>
  <path d="M0.273589 9.28712C0.268335 9.16825 0.25914 9.06119 0.25914 8.95413C0.258483 7.21366 0.256513 5.47384 0.25914 3.73336C0.261767 1.82081 1.58913 0.486222 3.49905 0.500014C4.14007 0.504612 4.8008 0.491476 5.41686 0.636625C6.50975 0.894741 7.19806 1.65267 7.53039 2.7206C7.59476 2.92814 7.67817 3.02863 7.90607 3.09037C9.19205 3.43912 10.0945 4.64104 10.1109 5.98219C10.1135 6.19827 10.1109 6.41435 10.1109 6.64882H4.02382C3.73353 5.11392 4.56764 3.52976 6.3114 3.0352C6.15377 2.35017 5.47926 1.7722 4.77124 1.74725C4.23597 1.7282 3.69872 1.72623 3.16344 1.74725C2.24066 1.78337 1.49849 2.63062 1.49455 3.64666C1.48798 5.39765 1.49258 7.14929 1.49258 8.90028C1.49258 9.01981 1.49258 9.13935 1.49258 9.28647H0.272276L0.273589 9.28712Z" fill="#999999"/>
  <path d="M10.0936 13.0327C9.96484 13.0327 9.8683 13.0327 9.77175 13.0327C6.64415 13.0327 3.51589 13.0334 0.388282 13.0321C-0.284921 13.0321 -0.768971 12.7135 -0.939078 12.1697C-1.19522 11.3514 -0.615283 10.5632 0.268748 10.5514C1.20926 10.5389 2.14978 10.5481 3.09029 10.5481C5.29971 10.5481 7.50847 10.5481 9.71789 10.5481C9.83611 10.5481 9.95434 10.5481 10.0936 10.5481V13.0321V13.0327Z" fill="#999999"/>
  <path d="M15.0247 14.8711H11.3644C11.3585 14.7555 11.3486 14.6504 11.3486 14.5453C11.3473 13.2771 11.3473 12.0082 11.3486 10.7399C11.3493 9.82239 11.8504 9.31798 12.764 9.31404C13.1029 9.31272 13.4418 9.3055 13.7807 9.31601C14.5419 9.34031 15.0391 9.85194 15.0411 10.6151C15.045 11.9385 15.0424 13.2613 15.0411 14.5847C15.0411 14.6708 15.0319 14.7561 15.0247 14.8711Z" fill="#999999"/>
  <path d="M16.2852 13.0209V10.5481C16.8802 10.5481 17.4667 10.5462 18.0526 10.5488C18.358 10.5501 18.6699 10.5251 18.9688 10.5744C19.621 10.6821 20.0452 11.2161 20.0183 11.8394C19.992 12.4508 19.5408 12.9756 18.9005 13.0091C18.0414 13.0544 17.1784 13.0203 16.2858 13.0203L16.2852 13.0209Z" fill="#999999"/>
  </g>
  <defs>
  <clipPath id="clip0_170_2024">
  <rect width="21.0171" height="21" fill="white" transform="translate(-1 0.5)"/>
  </clipPath>
  </defs>
  </svg>`
  const areaSVG = `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_170_2036)">
  <path d="M0.837286 3.76615C0.612648 4.03031 0.387352 4.29382 0.167984 4.55139C-0.262846 4.11661 -0.63834 3.73848 -1 3.37419C-0.083004 2.45587 0.852437 1.51977 1.77602 0.595529C2.70026 1.52175 3.63505 2.45785 4.55072 3.3755C4.19302 3.73321 3.81489 4.11068 3.40382 4.52175C3.16601 4.25627 2.91041 3.97102 2.59025 3.61463V7.40449C4.31555 5.67656 6.08234 3.90844 7.8386 2.14955C7.37549 2.14955 6.85112 2.11727 6.33333 2.15943C5.88472 2.19566 5.57115 2.0481 5.27866 1.7174C4.92358 1.31621 4.51976 0.957848 4.08235 0.527677C4.24769 0.51516 4.33794 0.502644 4.42885 0.502644C8.82148 0.501985 13.2141 0.500009 17.6067 0.502644C19.0086 0.503303 20.0079 1.48025 20.0099 2.87353C20.0171 7.28921 20.0125 11.7042 20.0125 16.1199C20.0125 16.1812 20.0059 16.2431 19.9209 16.363C19.5231 15.9466 19.143 15.5112 18.72 15.1219C18.4453 14.8689 18.3347 14.6054 18.357 14.2339C18.3887 13.7141 18.365 13.191 18.365 12.6746C16.6008 14.4407 14.8544 16.1884 13.112 17.9328H16.9091C16.554 17.643 16.2615 17.4045 15.9743 17.17C16.4453 16.7167 16.8287 16.3478 17.2016 15.9882C18.0837 16.8801 19.0152 17.8215 19.9401 18.7563C19.0441 19.6456 18.1047 20.5784 17.1752 21.5007C16.8261 21.1449 16.4545 20.7668 16.0586 20.3636C16.2813 20.1673 16.5349 19.9434 16.7885 19.7194C16.7727 19.6805 16.7569 19.6416 16.7404 19.6034H16.3775C12.0507 19.6034 7.72398 19.6048 3.39723 19.6028C2.21278 19.6028 1.35903 19.0283 1.03294 17.9835C0.943346 17.6963 0.917655 17.3801 0.916996 17.0764C0.90975 12.7708 0.912385 8.4651 0.912385 4.15943C0.912385 4.04349 0.912385 3.92689 0.912385 3.81094C0.886693 3.79579 0.861001 3.7813 0.83531 3.76615H0.837286ZM2.56258 16.6831C7.40975 11.8353 12.249 6.99474 17.0935 2.14955C16.4032 2.14955 15.6937 2.14362 14.9842 2.15679C14.8933 2.15877 14.7879 2.24177 14.7154 2.31424C10.7167 6.30897 6.72003 10.3063 2.72596 14.3063C2.65415 14.3788 2.57115 14.4842 2.56917 14.5751C2.55599 15.2839 2.56192 15.9928 2.56192 16.6825L2.56258 16.6831ZM18.365 3.45785C13.5296 8.29184 8.69499 13.1258 3.86693 17.9526C4.52569 17.9526 5.22464 17.9585 5.92358 17.9453C6.01449 17.9434 6.11858 17.8571 6.19104 17.7839C10.1963 13.7826 14.1996 9.77867 18.1996 5.77274C18.2721 5.70027 18.3557 5.59487 18.357 5.50396C18.3702 4.80567 18.3643 4.10673 18.3643 3.45785H18.365ZM18.365 8.08762C15.0758 11.3742 11.7833 14.664 8.49144 17.9526C9.15876 17.9526 9.85705 17.9585 10.556 17.9453C10.6462 17.9434 10.749 17.8531 10.8221 17.78C13.2846 15.3221 15.7444 12.8617 18.2016 10.3986C18.2734 10.3261 18.3557 10.22 18.3577 10.1285C18.3709 9.42952 18.365 8.73058 18.365 8.08697V8.08762ZM2.56258 12.0231C5.861 8.72596 9.14624 5.44138 12.4387 2.14955C11.7793 2.14955 11.1028 2.14362 10.4262 2.15614C10.334 2.15811 10.2266 2.23519 10.1548 2.30633C7.67589 4.77998 5.20026 7.25627 2.72727 9.73519C2.65547 9.80765 2.5718 9.91239 2.56983 10.004C2.55665 10.6818 2.56258 11.3597 2.56258 12.0231Z" fill="#999999"/>
  </g>
  <defs>
  <clipPath id="clip0_170_2036">
  <rect width="21.0145" height="21" fill="white" transform="translate(-1 0.5)"/>
  </clipPath>
  </defs>
  </svg>
  `
  const lightningSVG = `<svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9614 1.1962C11.1873 1.32216 11.2983 1.58596 11.2302 1.83551L9.73646 7.3125H15.1875C15.4115 7.3125 15.6141 7.44539 15.7034 7.65082C15.7927 7.85625 15.7516 8.09506 15.5987 8.25881L7.72373 16.6963C7.54724 16.8854 7.26453 16.9298 7.0386 16.8038C6.81268 16.6779 6.70177 16.4141 6.76983 16.1645L8.26356 10.6875H2.81251C2.58853 10.6875 2.38589 10.5546 2.29662 10.3492C2.20735 10.1438 2.24846 9.90495 2.40129 9.7412L10.2763 1.3037C10.4528 1.1146 10.7355 1.07024 10.9614 1.1962Z" fill="white"/>
  </svg>
  `
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
        faqText: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
      },
      {
        faqTitle: 'What documents do I need to sell my property through Estatein?',
        faqText: 'Find out about the necessary documentation for listing your property with us.',
      },
      {
        faqTitle: 'How can I contact an Estatein agent?',
        faqText: 'Discover the different ways you can get in touch with our experienced agents',
      },
    ],
  }
</script>
<template>
  <div class="main">
    <header>
      <div class="p-4">
        <CardId
          :propertyNameId="property.propertyName"
          :cardImageId="property.cardImage"
          :cardPriceId="property.cardPrice"
          :propertyLocationId="property.propertyLocation"
          :propertyImagesId="property.propertyImages"
          :activeIndex="activeNumber"
          @updateIndex="updateIndex"
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

    <div class="2-blocks-cnt centerize-all mx-auto w-[90%] space-y-12 laptop:flex laptop:gap-6 laptop:space-y-0">
      <div class="description my-2 grid grid-flow-row gap-y-8 rounded-xl border border-hg bg-fgl px-8 py-12 laptop:my-0 laptop:py-8">
        <div class="head-cnt space-y-4">
          <h2 class="font-sans font-semibold text-white">Description</h2>
          <p class="font-sans text-sm font-medium text-gl">{{ property.description }}</p>
        </div>
        <div class="grid grid-flow-col border-y border-hg py-12">
          <div class="left-s border-r border-hg">
            <LineImg :svgIcon="bedSVG" :gappedValue="'gap-1'" :head="'Bedrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">0{{ property.bedRooms ? property.bedRooms.toString() : 'N/A' }}</p>
          </div>
          <div class="right-s pl-4">
            <LineImg :svgIcon="bathSVG" :gappedValue="'gap-1'" :head="'Bathrooms'" />
            <p class="py-2 font-sans text-lg font-semibold text-white">0{{ property.bathRooms ? property.bathRooms.toString() : 'N/A' }}</p>
          </div>
        </div>
        <div class="area">
          <LineImg :svgIcon="areaSVG" :gappedValue="'gap-1'" :head="'Area'" />
          <p class="font-sans text-lg font-semibold text-white">{{ property.squareFeet ? property.squareFeet : 'N/A' }} Square Feet</p>
        </div>
      </div>

      <div class="amentites space-y-6 rounded-xl border border-hg p-8">
        <h3 class="font-sans text-lg font-semibold text-white">Key Features and Amenities</h3>
        <LineImg :svgIcon="lightningSVG" :containerWraper="'grad-black border-l border-pr p-4'" :gappedValue="'gap-4'" :head="'Expansive oceanfront terrace for outdoor entertaining'" />
        <LineImg :svgIcon="lightningSVG" :containerWraper="'grad-black border-l border-pr p-4'" :gappedValue="'gap-4'" :head="'Expansive oceanfront terrace for outdoor entertaining'" />
        <LineImg :svgIcon="lightningSVG" :containerWraper="'grad-black border-l border-pr p-4'" :gappedValue="'gap-4'" :head="'Expansive oceanfront terrace for outdoor entertaining'" />
        <LineImg :svgIcon="lightningSVG" :containerWraper="'grad-black border-l border-pr p-4'" :gappedValue="'gap-4'" :head="'Expansive oceanfront terrace for outdoor entertaining'" />
        <LineImg :svgIcon="lightningSVG" :containerWraper="'grad-black border-l border-pr p-4'" :gappedValue="'gap-4'" :head="'Expansive oceanfront terrace for outdoor entertaining'" />
      </div>
    </div>

    <section class="centerize-all *:space-y-20">
      <div class="box-rows">
        <div class="box-row-one laptop:my-12 laptop:grid laptop:grid-cols-[25%_70%] laptop:justify-between">
          <MainBox :headline="scard_1.head" :paraline="scard_1.para" />
          <FormId :locationText="selectedProperty" />
        </div>

        <div class="box-row-two">
          <MainBox :headline="scard_2.head" :paraline="scard_2.para" />
          <div class="note my-4 rounded-xl border-t border-hg bg-mg p-4 laptop:flex laptop:gap-6 laptop:border-none">
            <h4 class="border-b border-hg pb-4 font-sans text-lg font-semibold text-white">Note</h4>
            <div class="laptop:border-l laptop:border-hg laptop:pl-4 laptop:text-center">
              <p class="py-4 font-sans text-sm font-medium text-gl laptop:text-center">
                The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
              </p>
            </div>
          </div>
          <div class="my-6">
            <ListingData :listingPrice="property.cardPrice" />
          </div>
        </div>

        <div class="box-row-faq">
          <MainBlock :headerText="faqCard.head" :contStyle="'laptop:mx-0'" :subContStyle="'laptop:mx-0'" :paraText="faqCard.para">
            <template #default>
              <div class="laptop:flex laptop:flex-row laptop:justify-between laptop:gap-6">
                <FaqCard v-for="(faq, index) in faqCard.faqs" :key="index" :faqTitle="faqCard.faqs.faqTitle" :faqText="faqCard.faqs.faqText" />
              </div>
              <ViewButton :buttonText="`View All FAQ's`" :totalPagesNumber="'10'" />
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
