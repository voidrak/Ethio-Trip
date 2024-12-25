<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import { ChevronDownIcon } from '@heroicons/vue/16/solid'
import AdminLayout from '@/layout/AdminLayout.vue';
import { reactive, ref } from 'vue';
import { usePackageStore } from '@/stores/package';
import axios from 'axios';

const { createPackage } = usePackageStore()

const formData = reactive({
  package_name: '',
  package_description: '',
  duration: '',
  price: '',
  available_space: '',
  location: '',
  food: false,
  bus: false,
  accommodation: false,
  package_image: null
});

const imagePreview = ref(null);

const getImage = (event) => {
  const file = event.target.files[0];
  formData.package_image = file;
  if (file) {
    imagePreview.value = URL.createObjectURL(file);
  } else {
    imagePreview.value = null;
  }
};

const submitForm = async () => {
  const form = new FormData();
  form.append('package_name', formData.package_name);
  form.append('package_description', formData.package_description);
  form.append('duration', formData.duration);
  form.append('price', formData.price);
  form.append('available_space', formData.available_space);
  form.append('location', formData.location);
  form.append('food', formData.food ? 1 : 0);
  form.append('bus', formData.bus ? 1 : 0);
  form.append('accommodation', formData.accommodation ? 1 : 0);
  form.append('package_image', formData.package_image);

  await createPackage(form);
};
</script>

<template>

  <AdminLayout>
    <form @submit.prevent="submitForm" class="px-8 pb-8">
      <div class="space-y-0">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="border-b border-gray-900/10 py-2">
            <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
            <p class="mt-1 text-sm/6 text-gray-600">Add New Package</p>
          </div>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 mx-auto  ">
            <div class="max-w-screen-md">
              <label for="package_name" class="block text-sm/6 font-medium text-gray-900">Package
                name</label>
              <div class="mt-2">
                <input v-model="formData.package_name" type="text" name="package_name" id="package_name"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div class="flex gap-x-16  ">

              <div class="max-w-screen-md">
                <label for="duration" class="block text-sm/6 font-medium text-gray-900">Duration</label>
                <div class="mt-2">
                  <input v-model="formData.duration" type="number" name="duration" id="duration" autocomplete="duration"
                    class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="max-w-screen-md">
                <label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
                <div class="mt-2">
                  <input v-model="formData.price" type="number" name="price" id="price" autocomplete="address-level2"
                    class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div class="max-w-screen-md">
                <label for="available_space" class="block text-sm/6 font-medium text-gray-900">Available
                  space</label>
                <div class="mt-2">
                  <input v-model="formData.available_space" type="number" name="available_space" id="available_space"
                    autocomplete="address-level1"
                    class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>
            </div>

            <div class="max-w-screen-md">
              <label for="location" class="block text-sm/6 font-medium text-gray-900">Location</label>
              <div class="mt-2">
                <input v-model="formData.location" type="text" name="location" id="location"
                  autocomplete="address-level1"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>



            <div class="max-w-screen-md">
              <label for="package_description" class="block text-sm/6 font-medium text-gray-900">Description</label>
              <p class="mt-3 text-sm/6 text-gray-600">Write a few description about the trip.</p>
              <div class="mt-2">
                <textarea v-model="formData.package_description" name="package_description" id="package_description"
                  rows="3"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

          </div>
          <fieldset class="mt-5">
            <legend class="text-sm/6 font-semibold text-gray-900">Add-ons</legend>
            <p class="mt-1 text-sm/6 text-gray-600">Select what the trip package includes
            </p>
            <div class="mt-6 space-y-6">

              <div @click="formData.food = !formData.food" class="flex items-center gap-x-3 cursor-pointer">
                <div
                  :class="['size-5 bg-white border-4 rounded-full', formData.food ? 'border-indigo-500' : 'border-black']">
                </div>
                <p class="block text-sm/6 font-medium text-gray-900">Food</p>
              </div>

              <div @click="formData.bus = !formData.bus" class="flex items-center gap-x-3 cursor-pointer">
                <div
                  :class="['size-5 bg-white border-4 rounded-full', formData.bus ? 'border-indigo-500' : 'border-black']">
                </div>
                <p class="block text-sm/6 font-medium text-gray-900">Bus</p>
              </div>

              <div @click="formData.accommodation = !formData.accommodation"
                class="flex items-center gap-x-3 cursor-pointer">
                <div
                  :class="['size-5 bg-white border-4 rounded-full', formData.accommodation ? 'border-indigo-500' : 'border-black']">
                </div>
                <p class="block text-sm/6 font-medium text-gray-900">Accommodation</p>
              </div>

            </div>
          </fieldset>

          <div class="max-w-screen-md mt-8">
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Cover photo</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="getImage" />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                <div v-if="imagePreview" class="mt-4 w-[100px]">
                  <img :src="imagePreview" alt="Image Preview" class="max-w-full h-auto rounded-md" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
        <button type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  </AdminLayout>
</template>
