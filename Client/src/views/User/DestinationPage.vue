<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import { useDestinationStore } from '@/stores/destination';
import { onMounted, ref, computed } from 'vue';

const baseUrl = import.meta.env.VITE_BASE_URL;

const { getAllDestinations } = useDestinationStore();

const destinations = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  destinations.value = await getAllDestinations();

})


const filteredDestinations = computed(() => {
  if (!searchQuery.value) {
    return destinations.value;
  }
  return destinations.value.filter(destination =>
    destination.destination_title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

</script>

<template>

  <UserHeader />
  <section class="overflow-hidden pb-16">
    <div class="my-8 ">
      <div class="  text-center ">
        <h1 class="font-bold text-3xl my-1">Best Places to visit in Ethiopia</h1>
        <p class=""><i>Plan your travel itinerary with our list of the best places to visit in Ethiopia.</i> </p>
      </div>
    </div>

    <div class=" mx-auto  pt-2 relative rounded-lg  mb-16 max-w-screen-md border-2  border-[#588cd0]  text-gray-600">
      <input v-model="searchQuery" class="w-full   bg-white h-10 py-2 px-5 pr-16  text-sm focus:outline-none"
        type="search" name="search" placeholder="Search">
      <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
        <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
          viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
          width="512px" height="512px">
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
    <div v-if="filteredDestinations.length > 0" class="max-w-screen-lg mx-auto grid grid-cols-3 gap-8">


      <div v-for="(destination, index) in filteredDestinations" :key="index"
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
    <div v-else class="text-red-500 text-xl text-center mx-auto">
      NO DESTINATIONS FOUND
    </div>
  </section>
</template>