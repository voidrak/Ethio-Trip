<script setup>
import { useAuthStore } from '@/stores/auth';
import UserDropdown from '@/components/User/UserDropdown.vue';

const authStore = useAuthStore()
</script>

<template>
  <div class="flex border-b border-gray-400 sticky top-0 left-0 z-10 justify-around items-center bg-white/90">
    <div class="flex 300  items-center bg-transparent  py-8  gap-x-8 justify-center ">
      <RouterLink :to="{ name: 'Home' }"
        class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white">
        Home</RouterLink>
      <RouterLink :to="{ name: 'Adventure' }"
        class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white">
        Adventure
      </RouterLink>
      <RouterLink :to="{ name: 'Destination' }"
        class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white">
        Destination
      </RouterLink>
      <RouterLink :to="{ name: 'Packages' }"
        class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white ">
        Trip Book</RouterLink>
      <RouterLink :to="{ name: 'Packages' }"
        class=" border-2  py-2 px-5 rounded-2xl text-xl flex items-center justify-center border-black hover:bg-black hover:text-white ">
        Contact
        Us</RouterLink>
    </div>

    <div class="">
      <div class="flex gap-x-4  items-center" v-if="authStore.user">
        <UserDropdown />
      </div>
      <RouterLink :to="{ name: 'Login' }" v-else class=" px-4 py-2 text-white rounded-lg bg-[#184c91]   ">Login
      </RouterLink>

    </div>
  </div>
</template>