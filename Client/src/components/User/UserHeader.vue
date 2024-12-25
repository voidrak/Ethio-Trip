<script setup>
import { useAuthStore } from '@/stores/auth';


const authStore = useAuthStore()
</script>

<template>
  <div class="flex border-b border-gray- justify-around items-center">
    <div class="flex 300  items-center bg-transparent  py-8  gap-x-8 justify-center ">
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
      <RouterLink :to="{ name: 'Packages' }"
        class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white ">
        Contact
        Us</RouterLink>
    </div>

    <div class="flex gap-x-4  items-center" v-if="authStore.user">
      <p class="text-black font-bold">{{ authStore.user.name }} </p>
      <form @submit.prevent="authStore.logout" class="">
        <button
          class="hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl  px-3  py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500">Log
          out</button>
      </form>

    </div>
    <RouterLink v-else :to="{ name: 'Login' }" class="  px-4 py-2 text-white rounded-lg bg-[#184c91]   ">Login
    </RouterLink>
  </div>
</template>