<script setup>
  const props = defineProps({
    buttonText: {
      type: String,
      required: false,
    },
    pagesNumber: {
      type: String,
      default: '01',
    },
    totalPagesNumber: {
      type: String,
      default: '60',
    },
    mobileView: {
      type: String,
      required: false,
      default: '',
    },
    deskView: {
      type: String,
      required: false,
      default: 'hidden',
    },
  })
</script>

<template>
  <div class="my-8 grid grid-flow-col justify-around gap-2 border-t-2 border-t-[#262626] pt-4 laptop:hidden">
    <!-- ${props.buttonHide} if you need top open the button dynamicly add this sentence to the div below  -->
    <button :class="`pad-fix:text-sm border-1 col-span-1 rounded-lg border-[#262626] bg-[#1A1A1A] px-8 py-4 text-center text-white`">
      {{ props.buttonText }}
    </button>

    <div class="col-span-2 flex items-center justify-around">
      <button class="arrows-bg text-[#808080]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.3984 12C20.3984 12.497 19.9955 12.9 19.4984 12.9L6.73287 12.9L11.7222 17.6512C12.0805 17.9957 12.0917 18.5655 11.7472 18.9238C11.4027 19.2821 10.8329 19.2932 10.4746 18.9487L3.87464 12.6487C3.69816 12.4791 3.5984 12.2448 3.5984 12C3.5984 11.7552 3.69816 11.5209 3.87464 11.3512L10.4746 5.05119C10.8329 4.70668 11.4027 4.71784 11.7472 5.07613C12.0917 5.43442 12.0805 6.00416 11.7222 6.34867L6.73287 11.1L19.4984 11.1C19.9955 11.1 20.3984 11.5029 20.3984 12Z"
            fill="white"
          />
        </svg>
      </button>

      <p class="pad-fix:whitespace-nowrap space-x-1 p-2">
        <span class="text-white">{{ props.pagesNumber }}</span>
        <span class="text-[#808080]">of</span>
        <span class="text-[#808080]">{{ props.totalPagesNumber }}</span>
      </p>

      <button class="arrows-bg text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.60156 12C3.60156 11.503 4.00451 11.1 4.50156 11.1L17.2671 11.1L12.2778 6.34876C11.9195 6.00425 11.9083 5.43451 12.2528 5.07621C12.5973 4.71792 13.1671 4.70675 13.5254 5.05126L20.1254 11.3513C20.3018 11.5209 20.4016 11.7552 20.4016 12C20.4016 12.2448 20.3018 12.4791 20.1254 12.6488L13.5254 18.9488C13.1671 19.2933 12.5973 19.2821 12.2528 18.9238C11.9083 18.5655 11.9195 17.9958 12.2778 17.6513L17.2671 12.9L4.50156 12.9C4.00451 12.9 3.60156 12.4971 3.60156 12Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="laptop-box items-center-2 mx-auto my-8 hidden justify-between border-t-2 border-t-[#262626] pt-4 laptop:flex">
    <div class="box-left space-x-2">
      <span class="text-white">{{ props.pagesNumber }}</span>
      <span class="text-[#808080]">of</span>
      <span class="text-[#808080]">{{ props.totalPagesNumber }}</span>
    </div>
    <div class="box-left space-x-2">
      <button class="arrows-bg text-[#808080]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.3984 12C20.3984 12.497 19.9955 12.9 19.4984 12.9L6.73287 12.9L11.7222 17.6512C12.0805 17.9957 12.0917 18.5655 11.7472 18.9238C11.4027 19.2821 10.8329 19.2932 10.4746 18.9487L3.87464 12.6487C3.69816 12.4791 3.5984 12.2448 3.5984 12C3.5984 11.7552 3.69816 11.5209 3.87464 11.3512L10.4746 5.05119C10.8329 4.70668 11.4027 4.71784 11.7472 5.07613C12.0917 5.43442 12.0805 6.00416 11.7222 6.34867L6.73287 11.1L19.4984 11.1C19.9955 11.1 20.3984 11.5029 20.3984 12Z"
            fill="white"
          />
        </svg>
      </button>
      <button class="arrows-bg text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.60156 12C3.60156 11.503 4.00451 11.1 4.50156 11.1L17.2671 11.1L12.2778 6.34876C11.9195 6.00425 11.9083 5.43451 12.2528 5.07621C12.5973 4.71792 13.1671 4.70675 13.5254 5.05126L20.1254 11.3513C20.3018 11.5209 20.4016 11.7552 20.4016 12C20.4016 12.2448 20.3018 12.4791 20.1254 12.6488L13.5254 18.9488C13.1671 19.2933 12.5973 19.2821 12.2528 18.9238C11.9083 18.5655 11.9195 17.9958 12.2778 17.6513L17.2671 12.9L4.50156 12.9C4.00451 12.9 3.60156 12.4971 3.60156 12Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style>
  .arrows-bg {
    background-color: #1a1a1a;
    border: 2px solid #262626;
    border-radius: 50%;
    padding: 0.7rem;
    /* width: 44px;
    height: 44px;
    text-align: center; */
  }
</style>
