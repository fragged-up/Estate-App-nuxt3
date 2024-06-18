<script setup>

</script>

<template>
    <!-- Cont four cards  -->
    <div class="second-template grid grid-cols-2 grid-rows-2 gap-y-2.5 gap-x-2.5 border-2 border-[#262626] p-4 rounded-md laptop:grid-cols-none laptop:grid-rows-none laptop:grid-flow-col">
        <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4 laptop:flex-grow-0">
            <div class="flex flex-col justify-center items-center">
                <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">
                <img :src="$loadImage('/icons/homeIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">Find Your Dream <br /> Home</p>
        </div>
        <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4 laptop:flex-grow-0">
            <div class="flex flex-col justify-center items-center">
                <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">
                <img :src="$loadImage('/icons/cameraIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">Unlock Property <br /> Value</p>
        </div>
        <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4 laptop:flex-grow-0">
            <div class="flex flex-col justify-center items-center">
                <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">
                <img :src="$loadImage('/icons/buildingIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">Effortless Property <br /> Management</p>
        </div>
        <div class="flex flex-col bg-[#141414] border-2 border-[#262626] text-center rounded-lg p-4 laptop:flex-grow-0">
            <div class="flex flex-col justify-center items-center">
                <img :src="$loadImage('/icons/arrowRtop.svg')" class="self-end mr-4" alt="rtop">
                <img :src="$loadImage('/icons/sunIcon.svg')" class="self-center" alt="homeIcon">
            </div>
            <p class="font-sans font-semibold text-base text-white">Smart Investments, <br /> Informed Decisions</p>
        </div>
    </div>

    <!-- make a new slot for render another image's and text's in contact page  <slot></slot> -->
</template>

<style scoped></style>