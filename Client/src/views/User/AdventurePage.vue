<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import campImage from '/img/camp.png'
import parImage from '/img/par.png'
import hikImage from '/img/hik.png'
import hotImage from '/img/hot.jpg'
</script>

<template>
  <UserHeader />

  <h1 class="text-center mt-12 font-bold mb-10 text-6xl text-[#1cb7bf]   ">Adventure Activities</h1>

  <div class="w-[20%] mx-auto size-2.5 bg-gray-500 "></div>
  <div class="grid gap-y-16 mt-16">

    <div class="container text-center post" id="heli">
      <div class="grid grid-cols-2 justify-between">

        <img :src="campImage" alt="img-1">

        <div class="col">
          <h5>Camping</h5>
          <p>Danakil Depression

            Activity: Camping and exploring extreme desert landscapes.
            Highlights:
            The Danakil Depression is one of the hottest and most inhospitable places on Earth, known for its salt
            flats,
            volcanoes, and colorful sulfur springs.
            Camp under the stars in one of the world’s most extreme environments, and hike to the active Erta Ale
            volcano.
            Best For: Adventurers seeking extreme challenges in one of the world’s most unique landscapes.
            Omo Valley Tribes Experience

            Activity: Camping with local tribes.
            Highlights:
            Stay in traditional Hamar, Mursi, or Karo villages, learning survival techniques and living as the locals
            do.
            Camp in remote regions and experience the daily life of Ethiopia’s indigenous tribes.
            Best For: Cultural and adventure travelers looking for an off-the-beaten-path experience.

          </p>
        </div>
      </div>
    </div>

    <div class="container text-center post">
      <div class="grid grid-cols-2 justify-between">
        <div class="col">
          <h5>Paragliding</h5>
          <p>Lake Tana and the Blue Nile Falls
            Activity: Paragliding.
            Highlights:
            Glide above the Blue Nile Falls and Lake Tana, the largest lake in Ethiopia.
            The aerial views of the lake, falls, and surrounding landscapes are breathtaking, making for an
            unforgettable adventure.
            Best For: Paragliding enthusiasts and those seeking an adrenaline rush.
          </p>
        </div>

        <img :src="parImage" class="ml-auto" alt="img-1">

      </div>
    </div>

    <div class="container text-center post" id="safa">
      <div class="grid grid-cols-2 justify-between">

        <img :src="hikImage" alt="img-1">

        <div class="col">
          <h5>Hiking</h5>
          <p>Simien Mountains National Park

            Activity: Multi-day trekking and hiking.
            Highlights:
            Hike through the Simien Mountains, a UNESCO World Heritage site known for its dramatic landscapes, deep
            valleys, and jagged peaks.
            Spot wildlife like the Ethiopian wolf, gelada monkeys, and Walia ibex.
            Ras Dashen, Ethiopia’s highest peak at 4,550 meters (14,928 feet), is a challenging climb for experienced
            trekkers.
            Best For: Experienced hikers, nature lovers, and wildlife enthusiasts.
            Bale Mountains National Park

            Activity: Trekking and mountaineering.
            Highlights:
            Explore the Sanetti Plateau, Harenna Forest, and the Tullu Dimtu peak.
            The park offers stunning alpine landscapes and a chance to see rare wildlife like the Ethiopian wolf and
            bale monkey.



          </p>
        </div>
      </div>
    </div>

    <div class="container text-center post">
      <div class="grid grid-cols-2 justify-between">

        <div class="col">
          <h5>Hot Air Ballooning</h5>
          <p>Bale Mountains and Rift Valley
            Activity: Hot air balloon ride.
            Highlights:
            Soar over the Rift Valley and the Omo Valley, offering spectacular views of Ethiopia’s landscapes from
            above.
            See wildlife like antelope, zebras, and birds in the early morning light.
            Best For: Those seeking a unique and peaceful way to experience Ethiopia’s beauty from a different
            perspective.</p>
        </div>


        <img class="ml-auto" :src="hotImage">

      </div>
    </div>


  </div>
</template>