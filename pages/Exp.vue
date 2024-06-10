<script setup>
import FormContact from '~/components/templates/FormContact.vue';
import Office from '~/components/organisms/Office.vue';
import MainBlock from '~/components/organisms/MainBlock.vue';
import CardOffice from '~/components/molecules/CardOffice.vue';
import ExploreCard from '~/components/molecules/ExploreCard.vue';

const lastHead = "Discover Our Office Locations";
const lastPara = "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team.";
</script>

<template>
   <FormContact />
   <section>
      <MainBlock :header-text="lastHead" :para-text="lastPara">
         <template #top>
          <div class="my-6">  <Office /></div>
         </template>
         <template #default>

            <div class="w-11/12 mx-auto">

               <div class="w-11/12 flex flex-col justify-center items-center gap-y-8 mx-auto laptop:flex-row laptop:gap-10 laptop:justify-around">
                  <CardOffice><template #first></template></CardOffice>
                  <CardOffice><template #second></template></CardOffice>
               </div>
               <div class="w-11/12 my-16 mx-auto">
                  <ExploreCard />
               </div>
            </div>
         </template>
      </MainBlock>

   </section>
</template>
s
<style scoped></style>