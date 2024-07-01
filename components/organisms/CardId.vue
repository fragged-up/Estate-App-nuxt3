<script setup>
  const props = defineProps({
    image: String,
    miniOne: String,
    miniTwo: String,
    miniThree: String,
    miniFourth: String,
  })
</script>

<template>
  <div class="card-id-cont grid-flow-rows mx-auto my-12 grid max-w-[414px] auto-rows-max items-center justify-center rounded-xl bg-mg px-12 py-6">
    <!-- Tommorow insert here The Header Price , and The Header Name of The Property Card
     <div class="flex items-center justify-center">
          <h1 class="font-sans text-lg font-bold text-white">{{ prName }}</h1>
          <p class="font sans text-lg font-medium text-white">Price: {{ price }}</p>
     </div> 
    
    .  . . -->
    <div class="img-cont mx-auto w-full rounded-xl">
      <img :src="$loadImage(image)" alt="" class="card-img h-full w-full" />
    </div>

    <div class="img-mini-cont mx-auto my-8 grid auto-cols-max grid-flow-col items-center justify-center gap-x-6 rounded-xl border-hg bg-fgl p-4">
      <img :src="$loadImage(props.miniOne)" alt="mini-image" />
      <img :src="$loadImage(props.miniTwo)" alt="mini-image" class="bg-filter" />
      <img :src="$loadImage(props.miniThree)" alt="mini-image" class="bg-filter" />
      <img :src="$loadImage(props.miniFourth)" alt="mini-image" class="bg-filter" />
    </div>

    <div class="heavy-arrows-cont flex items-center justify-between rounded-full border-gl bg-fgl p-2">
      <div class="left-arr">
        <div class="arr-l rounded-full border-2 border-hg bg-fgl p-3 text-gl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3984 12C20.3984 12.497 19.9955 12.9 19.4984 12.9L6.73287 12.9L11.7222 17.6512C12.0805 17.9957 12.0917 18.5655 11.7472 18.9238C11.4027 19.2821 10.8329 19.2932 10.4746 18.9487L3.87464 12.6487C3.69816 12.4791 3.5984 12.2448 3.5984 12C3.5984 11.7552 3.69816 11.5209 3.87464 11.3512L10.4746 5.05119C10.8329 4.70668 11.4027 4.71784 11.7472 5.07613C12.0917 5.43442 12.0805 6.00416 11.7222 6.34867L6.73287 11.1L19.4984 11.1C19.9955 11.1 20.3984 11.5029 20.3984 12Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div class="middle-lines flex items-center justify-center gap-2 rounded-3xl">
        <p class="line text-[2rem] font-semibold text-pr">-</p>
        <p class="line text-[2rem] text-gl">-</p>
        <p class="line text-[2rem] text-gl">-</p>
        <p class="line text-[2rem] text-gl">-</p>
        <p class="line text-[2rem] text-gl">-</p>
        <p class="line text-[2rem] text-gl">-</p>
        <p class="line text-[2rem] text-gl">-</p>
      </div>

      <div class="right-arr">
        <div class="arr-r rounded-full border-2 border-hg bg-mg p-3 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.60156 12C3.60156 11.503 4.00451 11.1 4.50156 11.1L17.2671 11.1L12.2778 6.34876C11.9195 6.00425 11.9083 5.43451 12.2528 5.07621C12.5973 4.71792 13.1671 4.70675 13.5254 5.05126L20.1254 11.3513C20.3018 11.5209 20.4016 11.7552 20.4016 12C20.4016 12.2448 20.3018 12.4791 20.1254 12.6488L13.5254 18.9488C13.1671 19.2933 12.5973 19.2821 12.2528 18.9238C11.9083 18.5655 11.9195 17.9958 12.2778 17.6513L17.2671 12.9L4.50156 12.9C4.00451 12.9 3.60156 12.4971 3.60156 12Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bg-filter {
    background-color: rgba(10, 10, 10, 0.5);
    backdrop-filter: blur(55px);
    /* Adjust the alpha value for opacity */
  }
</style>
