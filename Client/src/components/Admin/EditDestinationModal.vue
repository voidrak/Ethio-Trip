  <script setup>

  import { useDestinationStore } from '@/stores/destination';
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'
  import { storeToRefs } from 'pinia';
  import { onMounted, reactive, watch, watchEffect } from 'vue';

  const props = defineProps(({
    isEditDestinationOpen: Boolean,
    selectedDestination: Object
  }))


  const emit = defineEmits(['handleUpdate', 'closeEditDestinationModal'])

  const { errors } = storeToRefs(useDestinationStore())
  const { updateDestination } = useDestinationStore()


  const formData = reactive({
    destination_title: "",
    destination_description: "",
    map_link: "",
    best_time_to_visit: "",
    accommodation_option: "",
    place_to_visit: "",
    tips_for_visitors: "",


  });



  const handleUpdate = () => {

    updateDestination(formData, props.selectedDestination.id)
    emit('handleUpdate');
    emit('closeEditDestinationModal');


  }

  onMounted(() => (errors.value = {}));

  watchEffect(() => {
    formData.destination_title = props.selectedDestination?.destination_title || "";
    formData.destination_description = props.selectedDestination?.destination_description || "";
    formData.map_link = props.selectedDestination?.map_link || "";
    formData.best_time_to_visit = props.selectedDestination?.best_time_to_visit || "";
    formData.accommodation_option = props.selectedDestination?.accommodation_option || "";
    formData.place_to_visit = props.selectedDestination?.place_to_visit || "";
    formData.tips_for_visitors = props.selectedDestination?.map_link || "";


  })






</script>
<template>

  <TransitionRoot appear :show="isEditDestinationOpen" as="template">
    <Dialog as="div" @close="$emit('closeEditDestinationModal')" class="relative z-10">
      <TransitionChild as="template" enter="map_link-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="map_link-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="map_link-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="map_link-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-black">
                Edit The Package
              </DialogTitle>
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 mx-auto  ">
                <div class="max-w-screen-md">
                  <label for="destination_title" class="block text-sm/6 font-medium text-gray-900">Destination
                    name</label>
                  <div class="mt-2">
                    <input v-model="formData.destination_title" type="text" name="destination_title"
                      id="destination_title" autocomplete="given-name"
                      class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                  <p v-if="errors.destination_title" class="text-red-500 text-sm mt-3 ml-4">{{
                    errors.destination_title[0]
                  }}</p>
                </div>

                <div class="max-w-screen-md">
                  <label for="destination_description"
                    class="block text-sm/6 font-medium text-gray-900">Description</label>
                  <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write a few description about the trip.</p>
                  <div class="mt-2">
                    <textarea v-model="formData.destination_description" name="destination_description"
                      id="destination_description" rows="3"
                      class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                  <p v-if="errors.destination_description" class="text-red-500 text-sm mt-3 ml-4">{{
                    errors.destination_description[0]
                  }}</p>
                </div>
                <div class="max-w-screen-md">
                  <label for="map_link" class="block text-sm/6 font-medium text-gray-900">Map Link</label>
                  <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Google Map Link.</p>
                  <div class="mt-2">
                    <textarea v-model="formData.map_link" name="map_link" id="map_link" rows="3"
                      class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                  <p v-if="errors.map_link" class="text-red-500 text-sm mt-3 ml-4">{{
                    errors.map_link[0]
                  }}</p>
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
                  <p v-if="errors.best_time_to_visit" class="text-red-500 text-sm mt-3 ml-4">{{
                    errors.best_time_to_visit[0]
                  }}</p>
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

                  <p v-if="errors.accommodation_option" class="text-red-500 text-sm mt-3 ml-4">{{
                    errors.accommodation_option[0]
                  }}</p>
                </div>

                <div class="max-w-screen-md">
                  <label for="place_to_visit" class="block text-sm/6 font-medium text-gray-900">Place to visit
                  </label>
                  <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write a few Places to visit ,<span
                      class="font-bold">
                      separate
                      Places with comma</span></p>
                  <div class="mt-2">
                    <textarea v-model="formData.place_to_visit" rows="3" name="place_to_visit" id="place_to_visit"
                      autocomplete="address-level1"
                      class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>

                  <p v-if="errors.place_to_visit" class="text-red-500 text-sm mt-3 ml-4">{{ errors.place_to_visit[0]
                    }}</p>
                </div>


                <div class="max-w-screen-md">
                  <label for="tips_for_visitors" class="block text-sm/6 font-medium text-gray-900">Tips for
                    visitors</label>
                  <p class="mt-3 text-sm/6 text-gray-600 flex gap-x-2">Write a few Tips for visitors ,<span
                      class="font-bold"> separate
                      tips with comma</span></p>
                  <div class="mt-2">
                    <textarea v-model="formData.tips_for_visitors" name="tips_for_visitors" rows="3"
                      id="tips_for_visitors" autocomplete="address-level1"
                      class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                  <p v-if="errors.tips_for_visitors" class="text-red-500 text-sm mt-3 ml-4">{{
                    errors.tips_for_visitors[0]
                  }}</p>
                </div>
              </div>

              <div class="mt-4 flex gap-x-4 justify-end">
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-bg-light-green text-black px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="handleUpdate">
                  Submit
                </button>
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="$emit('closeEditDestinationModal')">
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
