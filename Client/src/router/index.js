import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '@/views/User/AboutUs.vue'
import DestinationPage from '@/views/User/DestinationPage.vue'
import AdventurePage from '@/views/User/AdventurePage.vue'
import PackagesPage from '@/views/User/PackagesPage.vue'
import PackageDetailPage from '@/views/User/PackageDetailPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs,
    },
    {
      path: '/destination',
      name: 'Destination',
      component: DestinationPage,
    },
    {
      path: '/adventure',
      name: 'Adventure',
      component: AdventurePage,
    },
    {
      path: '/packages',
      name: 'Packages',
      component: PackagesPage,
    },
    {
      path: '/packages/id',
      name: 'PackageDetail',
      component: PackageDetailPage,
    },

  ],
})

export default router
