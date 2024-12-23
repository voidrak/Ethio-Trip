<script setup>
</script>

<template>
  <div class="flex  items-center bg-transparent  py-8  gap-x-8 justify-center ">
    <RouterLink :to="{ name: 'Home' }"
      class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white">
      Home</RouterLink>
    <RouterLink :to="{ name: 'Destination' }"
      class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white ">
      Destination
    </RouterLink>
    <RouterLink :to="{ name: 'Adventure' }"
      class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white">
      Adventure
    </RouterLink>
    <RouterLink :to="{ name: 'Packages' }"
      class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white ">
      Trip Book</RouterLink>
    <RouterLink
      class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white ">
      Contact
      Us</RouterLink>
  </div>
</template>