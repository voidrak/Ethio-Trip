<script setup>
import { PhotoIcon } from '@heroicons/vue/24/solid'

import AdminLayout from '@/layout/AdminLayout.vue';
import { reactive, ref } from 'vue';
import { usePackageStore } from '@/stores/package';


const { createPackage } = usePackageStore()

const formData = reactive({
  destination_title: '',
  destination_description: '',
  best_time_to_visit: '',
  accommodation_option: '',
  place_to_visit: '',
  tips_for_visitors: '',
  banner_image: null,
  image_1: null,
  image_2: null,
  image_3: null,
  image_4: null,
  image_5: null
});

const bannerImagePreview = ref(null);
const image_1Preview = ref(null);
const image_2Preview = ref(null);
const image_3Preview = ref(null);
const image_4Preview = ref(null);
const image_5Preview = ref(null);

const getBanner_image = (event) => {
  const file = event.target.files[0];
  formData.banner_image = file;
  if (file) {
    bannerImagePreview.value = URL.createObjectURL(file);
  } else {
    bannerImagePreview.value = null;
  }
};
const getImage_1 = (event) => {
  const file = event.target.files[0];
  formData.image_1 = file;
  if (file) {
    image_1Preview.value = URL.createObjectURL(file);
  } else {
    image_1Preview.value = null;
  }
};

const getImage_2 = (event) => {
  const file = event.target.files[0];
  formData.image_2 = file;
  if (file) {
    image_2Preview.value = URL.createObjectURL(file);
  } else {
    image_2Preview.value = null;
  }
};
const getImage_3 = (event) => {
  const file = event.target.files[0];
  formData.image_3 = file;
  if (file) {
    image_3Preview.value = URL.createObjectURL(file);
  } else {
    image_3Preview.value = null;
  }
};
const getImage_4 = (event) => {
  const file = event.target.files[0];
  formData.image_4 = file;
  if (file) {
    image_4Preview.value = URL.createObjectURL(file);
  } else {
    image_4Preview.value = null;
  }
};
const getImage_5 = (event) => {
  const file = event.target.files[0];
  formData.image_5 = file;
  if (file) {
    image_5Preview.value = URL.createObjectURL(file);
  } else {
    image_5Preview.value = null;
  }
};

const submitForm = async () => {
  console.log(formData);
  // const form = new FormData();
  // form.append('destination_title', formData.destination_title);
  // form.append('destination_description', formData.destination_description);
  // form.append('best_time_to_visit', formData.best_time_to_visit);
  // form.append('accommodation_option', formData.accommodation_option);
  // form.append('place_to_visit', formData.place_to_visit);
  // form.append('tips_for_visitors', formData.tips_for_visitors);
  // form.append('banner_image', formData.banner_image ? 1 : 0);
  // form.append('image_1', formData.image_1 ? 1 : 0);
  // form.append('image_2', formData.image_2 ? 1 : 0);
  // form.append('image_4', formData.image_4);

  // await createPackage(form);
};
</script>

<template>

  <AdminLayout>
    <form @submit.prevent="submitForm" class="px-8 pb-8">
      <div class="space-y-0">
        <div class="border-b border-gray-900/10 pb-12">
          <div class="border-b border-gray-900/10 py-2">
            <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
            <p class="mt-1 text-sm/6 text-gray-600">Add New Destination</p>
          </div>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 mx-auto  ">
            <div class="max-w-screen-md">
              <label for="destination_title" class="block text-sm/6 font-medium text-gray-900">Destination
                name</label>
              <div class="mt-2">
                <input v-model="formData.destination_title" type="text" name="destination_title" id="destination_title"
                  autocomplete="given-name"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div class="max-w-screen-md">
              <label for="destination_description" class="block text-sm/6 font-medium text-gray-900">Description</label>
              <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write a few description about the trip.</p>
              <div class="mt-2">
                <textarea v-model="formData.destination_description" name="destination_description"
                  id="destination_description" rows="3"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>




            <div class="max-w-screen-md">
              <label for="best_time_to_visit" class="block text-sm/6 font-medium text-gray-900">Best time to
                visit</label>
              <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write when it's best to visit </p>
              <div class="mt-2">
                <textarea v-model="formData.best_time_to_visit" rows="3" name="best_time_to_visit"
                  id="best_time_to_visit" autocomplete="best_time_to_visit"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div class="max-w-screen-md">
              <label for="accommodation_option" class="block text-sm/6 font-medium text-gray-900">Accommodation
                option</label>
              <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write a few accommodation options ,<span
                  class="font-bold">
                  separate
                  accommodation with comma</span>
              </p>
              <div class="mt-2">
                <textarea v-model="formData.accommodation_option" rows="3" name="accommodation_option"
                  id="accommodation_option" autocomplete="address-level2"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>

            <div class="max-w-screen-md">
              <label for="place_to_visit" class="block text-sm/6 font-medium text-gray-900">Place to visit
              </label>
              <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write a few Places to visit ,<span class="font-bold">
                  separate
                  Places with comma</span></p>
              <div class="mt-2">
                <textarea v-model="formData.place_to_visit" rows="3" name="place_to_visit" id="place_to_visit"
                  autocomplete="address-level1"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>


            <div class="max-w-screen-md">
              <label for="tips_for_visitors" class="block text-sm/6 font-medium text-gray-900">Tips for visitors</label>
              <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write a few Tips for visitors ,<span
                  class="font-bold"> separate
                  tips with comma</span></p>
              <div class="mt-2">
                <textarea v-model="formData.tips_for_visitors" name="tips_for_visitors" rows="3" id="tips_for_visitors"
                  autocomplete="address-level1"
                  class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
              </div>
            </div>
          </div>


          <div class="max-w-screen-md mt-8">
            <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Destination banner Image</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div class="text-center">
                <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                <div class="mt-4 flex text-sm/6 text-gray-600">
                  <label for="file-upload"
                    class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only" @change="getBanner_image" />
                  </label>

                </div>
                <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                <div v-if="bannerImagePreview" class="mt-4 w-[400px] h-[200px]">
                  <img :src="bannerImagePreview" alt="Image Preview" class=" w-full h-full rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8  grid grid-cols-4 gap-4">
            <div class="">
              <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Destination
                Image 1</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex text-sm/6 text-gray-600">
                    <label for="image_1"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="image_1" name="image_1" type="file" class="sr-only" @change="getImage_1" />
                    </label>

                  </div>
                  <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  <div v-if="image_1Preview" class="mt-4 w-[200px] h-[200px]">
                    <img :src="image_1Preview" alt="Image Preview" class="max-w-full h-full rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Destination
                Image 2</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex text-sm/6 text-gray-600">
                    <label for="image_2"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="image_2" name="image_2" type="file" class="sr-only" @change="getImage_2" />
                    </label>

                  </div>
                  <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  <div v-if="image_2Preview" class="mt-4 w-[200px] h-[200px]">
                    <img :src="image_2Preview" alt="Image Preview" class="max-w-full h-full rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Destination
                Image 3</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex text-sm/6 text-gray-600">
                    <label for="image_3"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="image_3" name="image_3" type="file" class="sr-only" @change="getImage_3" />
                    </label>

                  </div>
                  <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  <div v-if="image_3Preview" class="mt-4 w-[200px] h-[200px]">
                    <img :src="image_3Preview" alt="Image Preview" class="max-w-full h-full rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Destination
                Image 4</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex text-sm/6 text-gray-600">
                    <label for="image_4"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="image_4" name="image_4" type="file" class="sr-only" @change="getImage_4" />
                    </label>

                  </div>
                  <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  <div v-if="image_4Preview" class="mt-4 w-[200px] h-[200px]">
                    <img :src="image_4Preview" alt="Image Preview" class="max-w-full h-full rounded-md" />
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Destination
                Image 5</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex text-sm/6 text-gray-600">
                    <label for="image_5"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="image_5" name="image_5" type="file" class="sr-only" @change="getImage_5" />
                    </label>

                  </div>
                  <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  <div v-if="image_5Preview" class="mt-4 w-[200px] h-[200px]">
                    <img :src="image_5Preview" alt="Image Preview" class="max-w-full h-full rounded-md" />
                  </div>
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
