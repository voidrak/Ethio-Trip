<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import bannerImage from '/img/afar_3.jpg'
</script>

<template>
  <UserHeader />

  <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <a href="#" class="text-2xl font-bold text-gray-800">Ethio trip</a>
    <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div class="relative">
      </div>
    </div>
  </div>
  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Order Summary</p>
      <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
      <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        <div class="h-[400px] relative  bg-no-repeat  bg-center  ease-linear   bg-cover text-white  "
          :style="`background-image:url(${bannerImage});`">
          <div class="absolute top-0 left-0    h-full w-full bg-black/45 "></div>
        </div>
      </div>


    </div>
    <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Trip Details</p>
      <p class="text-gray-400">Confirm Your Trip Order.</p>
      <div class="">


        <div class="mt-4 space-y-3">
          <h3 class="h3 py-2 ">Golden Triangle Tour</h3>


          <p class="h4  ">
            Explore the cultural highlights of India's Golden Triangle. In Delhi, visit historic monuments like the
            Red
            Fort and Qutub Minar. In Agra, marvel at the beauty of the Taj Mahal. In Jaipur, immerse yourself in the
            vibrant Rajasthani culture with visits to the Amber Fort and local markets.
          </p>

          <p class="  ">Incudes : Food , Travel Bus , Entrance payment</p>

          <p class="text">Time Span : 7D/6N</p>

          <p class="text"> Location : Delhi, Agra, Jaipur</p>
        </div>


        <!-- Input Number -->
        <div class=" mt-16   ">
          <label for="person_amount" class="mb-2">Enter People Number</label>
          <div class="   bg-gray-100 rounded-lg max-w-sm border border-gray-500 ">
            <div class="w-full flex justify-between items-center gap-x-5">
              <div class="grow">
                <input class="w-full py-2 px-3   bg-transparent border-0 text-gray-800 " type="number"
                  aria-roledescription="Number field" value="1">
              </div>
            </div>

          </div>
        </div>
        <!-- End Input Number -->


        <!-- Total -->
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Price/Person</p>
            <p class="font-semibold text-gray-900">399.00 Br </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total Person</p>
            <p class="font-semibold text-gray-900">4</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">408.00 Br </p>
        </div>
      </div>
      <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Reserve Trip</button>
    </div>
  </div>


</template>