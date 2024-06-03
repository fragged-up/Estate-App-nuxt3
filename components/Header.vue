<template class="bg-header-clr">
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

<script setup>

</script>

<style scoped>
.bg-header-clr {
    background-color: #1A1A1A;
}

.logo-container>* {
    display: inline-block;
}

/* .logo{

} */
.header-text {
    color: white;
    margin-left: 15px;
}
</style>