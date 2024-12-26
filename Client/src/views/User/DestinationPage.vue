<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import { useDestinationStore } from '@/stores/destination';
import { onMounted, ref } from 'vue';

const baseUrl = import.meta.env.VITE_BASE_URL;

const { getAllDestinations } = useDestinationStore();

const destinations = ref([]);

onMounted(async () => {
  destinations.value = await getAllDestinations();

})

</script>

<template>

  <UserHeader />
  <section class="">
    <div class="my-8 ">
      <div class="  text-center ">
        <h1 class="font-bold text-3xl my-1">Best Places to visit in Ethiopia</h1>
        <p class=""><i>Plan your travel itinerary with our list of the best places to visit in Ethiopia.</i> </p>
      </div>
    </div>
    <div v-if="destinations.length > 0" class="max-w-screen-lg mx-auto grid grid-cols-3 gap-8">


      <div v-for="(destination, index) in destinations" :key="index"
        class="h-[480px]   relative rounded-3xl cursor-pointer bg-no-repeat hover:scale-105 ease-linear duration-300 bg-cover text-white  "
        :style="`background-image:url(${baseUrl}/storage/${destination.image_1})`">

        <div class="absolute top-0 left-0  rounded-3xl h-full w-full bg-black/45 "></div>

        <div class="isolate flex flex-col justify-between h-full pt-4 pb-6">
          <div class=" px-4  mb-6 mt-8">
            <h4>#{{ destination.destination_title }}</h4>
            <h1 class="text-xl uppercase ">{{ destination.destination_title }}</h1>
          </div>

          <RouterLink :to="{ name: 'DestinationDetail', params: { id: destination.id } }">
            <p
              class=" ml-6 max-w-[150px]  cursor-pointer border-2 border-gray-300 py-2  text-center hover:bg-blue-500 hover:border-blue-500 hover:text-white px-4 rounded-xl">
              Know More!!</p>
          </RouterLink>
        </div>
      </div>



    </div>
  </section>
</template>