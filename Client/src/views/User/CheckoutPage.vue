<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import bannerImage from '/img/afar_3.jpg'
import { usePackageStore } from '@/stores/package';
import { useRoute } from 'vue-router';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { UseSubscriptionStore } from '@/stores/subscription';
import { storeToRefs } from 'pinia';

const route = useRoute()
const baseUrl = import.meta.env.VITE_BASE_URL;

const { getPackage } = usePackageStore();
const { createSubscription } = UseSubscriptionStore()
const { errors } = storeToRefs(UseSubscriptionStore())

const currentPackage = ref(null);
const totalPerson = ref(1)
const totalPrice = computed(() => {
  return currentPackage.value ? currentPackage.value.price * totalPerson.value : 0;
});

const formData = reactive({
  package_id: '',
  person_amount: totalPerson.value
})


const submitSubscription = () => {
  createSubscription(formData);
}


watch(totalPerson, (newPersonAmount) => {
  formData.person_amount = newPersonAmount

})


onMounted(async () => {
  currentPackage.value = await getPackage(route.params.id);
  console.log(currentPackage.value);
  formData.package_id = currentPackage.value.id
})




</script>

<template>
  <UserHeader />

  <div v-if="currentPackage"
    class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
    <a href="#" class="text-2xl font-bold text-gray-800">Ethio trip</a>
    <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
      <div class="relative">
      </div>
    </div>
  </div>
  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
    <div class="px-4 pt-8">
      <p class="text-xl font-medium">Order Summary</p>
      <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
      <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
        <figure class="card-img">
          <img :src="`${baseUrl}/storage/${currentPackage?.package_image}`" loading="lazy">
        </figure>

      </div>


    </div>
    <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p class="text-xl font-medium">Trip Details</p>
      <p class="text-gray-400">Confirm Your Trip Order.</p>
      <div class="">


        <div class="mt-4 space-y-3">
          <h3 class="h3 py-2 text-[#3b79c9]  ">{{ currentPackage?.package_name }}</h3>


          <p class="h4  ">
            {{ currentPackage?.package_description }}
          </p>

          <p class="  flex gap-x-2">Incudes :
            <span class="font-bold" v-if="currentPackage?.food">Food | </span>
            <span class="font-bold" v-if="currentPackage?.bus">Travel Bus |</span>
            <span class="font-bold" v-if="currentPackage?.accommodation">Accommodation</span>
          </p>

          <p class="text flex gap-x-2 ">Time Span : <span class="font-bold">{{ currentPackage?.duration }} Days </span>
          </p>

          <p class="text flex gap-x-2"> Location : <span class="font-bold">{{ currentPackage?.location }}</span> </p>
        </div>


        <!-- Input Number -->
        <div class=" mt-16   ">
          <label for="person_amount" class="mb-2 font-bold">Enter People Number</label>
          <div class="   bg-gray-100 rounded-lg max-w-sm border border-gray-500 ">
            <div class="w-full flex justify-between items-center gap-x-5">
              <div class="grow">
                <input class="w-full py-2 px-3   bg-transparent border-0 text-gray-800 " type="number"
                  v-model="totalPerson" aria-roledescription="Number field" value="1" min="1" step="1">
              </div>
            </div>
          </div>
          <p v-if="errors.person_amount" class="text-red-500 text-sm mt-3 ml-4">{{ errors.person_amount[0] }}</p>
        </div>

        <!-- End Input Number -->


        <!-- Total -->
        <div class="mt-6 border-t border-b py-2">
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Price/Person</p>
            <p class="font-semibold text-gray-900">{{ currentPackage?.price }} Br </p>
          </div>
          <div class="flex items-center justify-between">
            <p class="text-sm font-medium text-gray-900">Total Person</p>
            <p class="font-semibold text-gray-900">{{ totalPerson }}</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">Total</p>
          <p class="text-2xl font-semibold text-gray-900">{{ totalPrice }} Birr</p>
        </div>
      </div>
      <button @click="submitSubscription"
        class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Reserve Trip</button>
    </div>
  </div>


</template>