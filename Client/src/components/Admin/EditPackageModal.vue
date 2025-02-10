  <script setup>

  import { usePackageStore } from '@/stores/package';
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
    isEditPackageOpen: Boolean,
    selectedPackage: Object
  }))


  const emit = defineEmits(['handleUpdate', 'closeEditPackageModal'])

  const { errors } = storeToRefs(usePackageStore())
  const { UpdatePackage } = usePackageStore()


  const formData = reactive({
    package_name: "",
    package_description: "",
    duration: "",
    price: "",
    available_space: "",
    food: null,
    bus: null,
    accommodation: null,

  });



  const handleUpdate = () => {

    UpdatePackage(formData, props.selectedPackage.id)
    emit('handleUpdate');
    emit('closeEditPackageModal');


  }

  onMounted(() => (errors.value = {}));

  watchEffect(() => {
    formData.package_name = props.selectedPackage?.package_name || "";
    formData.package_description = props.selectedPackage?.package_description || "";
    formData.duration = props.selectedPackage?.duration || "";
    formData.price = props.selectedPackage?.price || "";
    formData.available_space = props.selectedPackage?.available_space || "";
    formData.food = props.selectedPackage?.food;
    formData.bus = props.selectedPackage?.bus;
    formData.accommodation = props.selectedPackage?.accommodation;

  })






</script>
<template>

  <TransitionRoot appear :show="isEditPackageOpen" as="template">
    <Dialog as="div" @close="$emit('closeEditPackageModal')" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-screen-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-black">
                Edit The Package
              </DialogTitle>
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 mx-auto  ">
                <div class="max-w-screen-md">
                  <label for="package_name" class="block text-sm/6 font-medium text-gray-900">Package
                    name</label>
                  <div class="mt-2">
                    <input v-model="formData.package_name" type="text" name="package_name" id="package_name"
                      autocomplete="given-name"
                      class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    <p v-if="errors.package_name" class="text-red-500 text-sm mt-3 ml-4">{{ errors.package_name[0]
                      }}</p>
                  </div>
                </div>

                <div class="flex gap-x-16  ">

                  <div class="max-w-screen-md">
                    <label for="duration" class="block text-sm/6 font-medium text-gray-900">Duration</label>
                    <div class="mt-2">
                      <input v-model="formData.duration" type="number" name="duration" id="duration"
                        autocomplete="duration"
                        class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                      <p v-if="errors.duration" class="text-red-500 text-sm mt-3 ml-4">{{ errors.duration[0]
                        }}</p>
                    </div>
                  </div>

                  <div class="max-w-screen-md">
                    <label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
                    <div class="mt-2">
                      <input v-model="formData.price" type="number" name="price" id="price"
                        autocomplete="address-level2"
                        class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                      <p v-if="errors.price" class="text-red-500 text-sm mt-3 ml-4">{{ errors.price[0]
                        }}</p>
                    </div>
                  </div>

                  <div class="max-w-screen-md">
                    <label for="available_space" class="block text-sm/6 font-medium text-gray-900">Available
                      space</label>
                    <div class="mt-2">
                      <input v-model="formData.available_space" type="number" name="available_space"
                        id="available_space" autocomplete="address-level1"
                        class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                      <p v-if="errors.available_space" class="text-red-500 text-sm mt-3 ml-4">{{
                        errors.available_space[0]
                      }}</p>
                    </div>
                  </div>
                </div>
                <div class="max-w-screen-md">
                  <label for="package_description" class="block text-sm/6 font-medium text-gray-900">Description</label>
                  <p class="mt-3 text-sm/6 text-gray-600">Write a few description about the trip.</p>
                  <div class="mt-2">
                    <textarea v-model="formData.package_description" name="package_description" id="package_description"
                      rows="3"
                      class="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    <p v-if="errors.package_description" class="text-red-500 text-sm mt-3 ml-4">{{
                      errors.package_description[0]
                    }}</p>
                  </div>
                </div>

                <fieldset class="mt-5">
                  <legend class="text-sm/6 font-semibold text-gray-900">Add-ons</legend>
                  <p class="mt-1 text-sm/6 text-gray-600">Select what the trip package includes
                  </p>
                  <div class="mt-6 flex  space-x-6">

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


              </div>

              <div class="mt-4 flex gap-x-4 justify-end">
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-bg-light-green text-black px-4 py-2 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="handleUpdate">
                  Submit
                </button>
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="$emit('closeEditPackageModal')">
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
