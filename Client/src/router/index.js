import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import HomeView from '../views/HomeView.vue'
import AboutUs from '@/views/User/AboutUs.vue'
import DestinationPage from '@/views/User/DestinationPage.vue'
import AdventurePage from '@/views/User/AdventurePage.vue'
import PackagesPage from '@/views/User/PackagesPage.vue'
import PackageDetailPage from '@/views/User/PackageDetailPage.vue'
import CheckoutPage from '@/views/User/CheckoutPage.vue'
import AdminHome from '@/views/Admin/AdminHome.vue'


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
    {
      path: '/packages/id/checkout',
      name: 'CheckoutPage',
      component: CheckoutPage,
    },
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome,
      meta: { auth: true }
    },

  ],
})


// router.beforeEach(async (to, from) => {
//   const authStore = useAuthStore();
//   await authStore.getUser();

//   if (authStore.user?.role === "admin" && to.meta.guest) {
//     return { name: "AdminHome" };
//   }
//   if (authStore.user?.role === "admin" && to.meta.auth) {
//     return { name: "AdminHome" };
//   }
//   if (authStore.user?.role !== "admin" && to.meta.admin) {
//     return { name: "Home" };
//   }
//   if (authStore.user && to.meta.guest) {
//     return { name: "Home" };
//   }
//   if (!authStore.user && to.meta.auth) {
//     return { name: "Home" };
//   }
// });

export default router
