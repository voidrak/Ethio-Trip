<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import bluImage from '/img/blu.jpg'
import tigImage from '/img/tig4.jpg'
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
    <div class="max-w-screen-lg mx-auto grid grid-cols-3 gap-8">


      <div
        class="h-[480px]   relative rounded-3xl cursor-pointer bg-no-repeat hover:scale-105 ease-linear duration-300 bg-cover text-white  "
        style="background-image:url(img/best2.jpg);">

        <div class="absolute top-0 left-0  rounded-3xl h-full w-full bg-black/45 "></div>

        <div class="isolate flex flex-col justify-between h-full pt-4 pb-6">
          <div class=" px-4  mb-6 mt-8">
            <h4>#the omo valley</h4>
            <h1 class="text-xl uppercase ">omo valley</h1>
            <p class="text-xs text-gray-200 mt-2"><i class="far fa-clock"></i> Nov 9, 2024</p>
          </div>

          <p
            class=" ml-6 max-w-[150px]  cursor-pointer border-2 border-gray-300 py-2  text-center hover:bg-black hover:text-white px-4 rounded-xl">
            Know More!!</p>
        </div>

      </div>
      <div
        class="h-[480px]   relative rounded-3xl cursor-pointer bg-no-repeat hover:scale-105 ease-linear duration-300 bg-cover text-white  "
        style="background-image:url(img/best1.jpg);">

        <div class="absolute top-0 left-0  rounded-3xl h-full w-full bg-black/45 "></div>

        <div class="isolate flex flex-col justify-between h-full pt-4 pb-6">
          <div class=" px-4  mb-6 mt-8">
            <h4>#sof omar cave</h4>
            <h1 class="text-xl uppercase ">sof omar
              cave</h1>
            <p class="text-xs text-gray-200 mt-2"><i class="far fa-clock"></i> Nov 9, 2024</p>
          </div>

          <p
            class=" ml-6 max-w-[150px]  cursor-pointer border-2 border-gray-300 py-2  text-center hover:bg-black hover:text-white px-4 rounded-xl">
            Know More!!</p>
        </div>
      </div>

      <div
        class="h-[480px]   relative rounded-3xl cursor-pointer bg-no-repeat hover:scale-105 ease-linear duration-300 bg-cover text-white  "
        style="background-image:url(img/d.webp);">

        <div class="absolute top-0 left-0  rounded-3xl h-full w-full bg-black/45 "></div>

        <div class="isolate flex flex-col justify-between h-full pt-4 pb-6">
          <div class=" px-4  mb-6 mt-8">
            <h4>#Visit Dankil depression</h4>
            <h1 class="text-xl uppercase ">Dankil depression</h1>
            <p class="text-xs text-gray-200 mt-2"><i class="far fa-clock"></i> Nov 9, 2024</p>
          </div>

          <p
            class=" ml-6 max-w-[150px]  cursor-pointer border-2 border-gray-300 py-2  text-center hover:bg-black hover:text-white px-4 rounded-xl">
            Know More!!</p>
        </div>
      </div>


      <div
        class="h-[480px]   relative rounded-3xl cursor-pointer bg-no-repeat hover:scale-105 ease-linear duration-300 bg-cover text-white  "
        style="background-image:url(img/semen\ 1.jpg);">

        <div class="absolute top-0 left-0  rounded-3xl h-full w-full bg-black/45 "></div>

        <div class="isolate flex flex-col justify-between h-full pt-4 pb-6">
          <div class=" px-4  mb-6 mt-8">
            <h4>#Visit simien mountain</h4>
            <h1 class="text-xl uppercase ">simien mountain</h1>
            <p class="text-xs text-gray-200 mt-2"><i class="far fa-clock"></i> Nov 9, 2024</p>
          </div>

          <p
            class=" ml-6 max-w-[150px]  cursor-pointer border-2 border-gray-300 py-2  text-center hover:bg-black hover:text-white px-4 rounded-xl">
            Know More!!</p>
        </div>
      </div>


    </div>
  </section>
</template>