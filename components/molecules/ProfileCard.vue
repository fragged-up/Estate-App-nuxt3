<script setup>
const props = defineProps({
  imageUrl: String,
  name: String,
  title: String,
  twitterUrl: String,
  sayHelloText: String,
});



</script>

<template>
  <div class="bg-[#141414] border-2 border-[#262626] rounded-2xl p-6 shadow-lg text-center flex flex-col items-center max-w-[20rem]">

      <img :src="$loadImage(props.imageUrl)" alt="Profile Picture" class="w-[318px] h-[268px]">
  
      <a :href="props.twitterUrl" target="_blank" class="w-[60px] h-[40px] text-center mt-[-25px]">
        <img :src="$loadImage('/icons/ProfileTwitter.svg')" alt="Twitter Icon">
      </a>
    <!-- class="mt-[-25px]" -->
    <h3 class="py-3 text-white text-2xl font-semibold">{{ props.name }}</h3>
    <p class="text-gray-400 text-sm">{{ props.title }}</p>

    <div class="mt-4 bg-[#262626] rounded-full px-6 py-2 flex items-center justify-between w-full max-w-md">
      <span class="text-white text-sm">{{ props.sayHelloText }}</span>
      <button class="bg-purple-500 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
        <img :src="$loadImage('/icons/ProfileSend.svg')" alt="Say Hello Icon">
      </button>
    </div>


˝
  </div>
</template>

<style scoped>
.bg-purple-500 {
  background-color: #703BF7;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}






</style>




































<!-- <script setup>
const props = defineProps({
  imageUrl: String,
  name: String,
  title: String,
  twitterUrl: String,
  sayHelloText: String
});
</script>

<template>
  <div class="bg-gray-900 rounded-2xl p-6 shadow-lg text-center flex flex-col items-center">
    <img :src="props.imageUrl" alt="Profile Picture" class="w-32 h-32 rounded-full mb-4">
    <a :href="props.twitterUrl" target="_blank" class="bg-purple-500 w-12 h-12 flex items-center justify-center rounded-full shadow-md mb-4">
      <i class="fab fa-twitter text-white"></i>
    </a>
    <h3 class="text-white text-2xl font-semibold">{{ props.name }}</h3>
    <p class="text-gray-400 text-sm">{{ props.title }}</p>

    <div class="mt-4 bg-gray-800 rounded-full px-6 py-2 flex items-center justify-between w-full max-w-md">
      <span class="text-white text-sm">{{ props.sayHelloText }}</span>
      <button class="bg-purple-500 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
        <i class="fas fa-paper-plane text-white"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.bg-purple-500 {
  background-color: #703BF7;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style> -->