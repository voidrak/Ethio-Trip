<script setup>
import UserHeader from '@/components/User/UserHeader.vue';

</script>

<template>
  <UserHeader />
  <div class="  bg-gray-100 text-gray-900 flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div class="lg:w-1/2 xl:w-5/12 p-6  ">

        <div class="mt-4 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">
            Sign Up
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center">



            </div>

            <div class="my-4 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                Welcome to EthioTrip
              </div>
            </div>

            <div class="mx-auto max-w-xs">
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="name" name="name" type="text" placeholder="Full Name" />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="email" name="email" type="email" placeholder="Email" />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="phone_number" name="phone_number" type="tel" placeholder="Phone Number" />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="password" name="password" type="password" placeholder="Password" />
              <input
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="password_confirmation" name="password_confirmation" type="password"
                placeholder="Confirm Password" />



              <button
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3">
                  Sign in
                </span>
              </button>
              <RouterLink :to="{ name: 'Login' }">
                <p class="!mt-8 text-center text-sm text-gray-800">
                  Do have an account
                  <span class="ml-1 whitespace-nowrap font-semibold text-blue-600 hover:underline">Sign In
                  </span>
                </p>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style="background-image: url('Login_Register.svg');">
        </div>
      </div>
    </div>
  </div>
</template>