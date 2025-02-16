<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import { useAuthStore } from "@/stores/auth";
import { useUserStore } from '@/stores/user';
import { storeToRefs } from "pinia";
import { onMounted, reactive, watch, watchEffect } from 'vue';


const authStore = useAuthStore();
const { errors } = storeToRefs(useUserStore());
const { updateUserProfile } = useUserStore();
const user = authStore.user

const formData = reactive({
  name: "",
  email: "",
  phone_number: "",


});


const submitForm = () => {
  updateUserProfile(formData);
  console.log(user);
};


watchEffect(() => {
  formData.name = user?.name || "";
  formData.email = user?.email || "";
  formData.phone_number = user?.phone_number || "";
})

onMounted(() => (errors.value = {}));
</script>

<template>
  <UserHeader />
  <div class="  bg-gray-100 text-gray-900 flex justify-center">
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
      <div class="lg:w-1/2 xl:w-5/12 p-6  ">

        <div class="mt-4 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold">
            Update Profile Details
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center">



            </div>


            <form @submit.prevent="submitForm" class="mx-auto space-y-8 max-w-md">
              <input v-model="formData.name"
                class="w-full px-8 py-6 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="name" name="name" type="text" placeholder="Full Name" />
              <p v-if="errors.name" class="text-sm text-red-500">
                {{ errors.name[0] }}
              </p>

              <input v-model="formData.email"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="email" name="email" type="email" placeholder="Email" />
              <p v-if="errors.email" class="text-sm text-red-500">
                {{ errors.email[0] }}
              </p>

              <input v-model="formData.phone_number"
                class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2"
                id="phone_number" name="phone_number" type="tel" placeholder="Phone Number" />
              <p v-if="errors.phone_number" class="text-sm text-red-500 mt-1">
                Invalid Format! Use (0912345678) Format
              </p>

              <button type="submit"
                class="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span class="ml-3">
                  Update Profile
                </span>
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>