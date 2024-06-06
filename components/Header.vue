<script setup>
const isShown = ref(true);
const hideButt = ()=>{
isShown.value = !isShown.value
}

</script>




<template class="bg-header-clr">
 
  <div v-show="isShown" class="bg-hero-about-abst flex justify-around items-center py-6">
    <p class="font-sans font-medium text-sm text-white">✨Discover Your Dream Property with Estatein</p><small class="fs">Learn More</small><small @click="hideButt" class="ss">X</small>
  </div>

    <div class="bg-[#1A1A1A] p-8 flex justify-between items-center">
        <div class="logo-container">
            <img src="/assets/images/HeaderLogo.svg" class="logo" alt="HeaderLogo">
            <h1 class="header-text">Estatein</h1>
        </div>

        <div class="hambu-container">
            <img src="/assets/icons/Hamburger.svg" alt="Hamburger">
        </div>

    </div>
</template>



<style scoped>
.bg-header-clr {
    background-color: #1A1A1A;
}

.logo-container>* {
    display: inline-block;
}

.fs{
    color:white;
    text-decoration: underline;

}
.ss{
    background-color:rgba(102, 102, 102,.6);
    border-radius:50%;
    padding:10px;
    color:white;

}
/* .logo{

} */
.header-text {
    color: white;
    margin-left: 15px;
}
</style>