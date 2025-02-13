<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
// // import ArchiveIcon from './archive-icon.vue'
// import DuplicateIcon from './duplicate-icon.vue'
// import MoveIcon from './move-icon.vue'
// import EditIcon from './edit-icon.vue'
// import DeleteIcon from './delete-icon.vue'
import { useAuthStore } from '@/stores/auth';



const authStore = useAuthStore()
</script>

<template>
  <div class="text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          {{ authStore.user.name }}
          <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
        </MenuButton>
      </div>

      <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
            <RouterLink :to="{ name: 'UpdateProfile' }" :class="[
              active ? 'bg-[#3b79c9] text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm group',
            ]">


              <svg :active="active" class="mr-2 h-5 w-5 fill-gray-400 group-hover:fill-black" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
              Profile
            </RouterLink>
            </MenuItem>
          </div>


          <form @submit.prevent="authStore.logout" class="px-1 py-1">
            <MenuItem v-slot="{ active }">
            <button :class="[
              active ? 'bg-red-600 text-white' : 'text-gray-900',
              'group flex w-full items-center rounded-md px-2 py-2 text-sm group',
            ]">


              <svg :active="active" class="mr-2 h-5 w-5 fill-gray-400 group-hover:fill-red-500 " aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
              Log Out
            </button>
            </MenuItem>



          </form>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>