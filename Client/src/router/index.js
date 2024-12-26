import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import HomeView from '../views/HomeView.vue'
import AboutUs from '@/views/User/AboutUs.vue'
import DestinationPage from '@/views/User/DestinationPage.vue'
import AdventurePage from '@/views/User/AdventurePage.vue'
import PackagesPage from '@/views/User/PackagesPage.vue'
import DestinationDetailPage from '@/views/User/DestinationDetailPage.vue'
import CheckoutPage from '@/views/User/CheckoutPage.vue'
import AdminHome from '@/views/Admin/AdminHome.vue'
import LoginPage from '@/views/Auth/LoginPage.vue';
import RegisterPage from '@/views/Auth/RegisterPage.vue';
import CreatePackage from '@/views/Admin/CreatePackage.vue';
import AdminPackagePage from '@/views/Admin/AdminPackagePage.vue';
import CreateDestinationPage from '@/views/Admin/CreateDestinationPage.vue';
import AdminDestination from '@/views/Admin/AdminDestination.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { welcome: true },


    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: { guest: true },

    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage,
      meta: { guest: true },

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
      path: '/destination-detail',
      name: 'DestinationDetail',
      component: DestinationDetailPage,


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
      path: '/packages/:id/checkout',
      name: 'CheckoutPage',
      component: CheckoutPage,
      meta: { auth: true },

    },
    {
      path: '/admin',
      name: 'AdminHome',
      component: AdminHome,
      meta: { admin: true },
    },
    {
      path: '/admin/create-package',
      name: 'CreatePackage',
      component: CreatePackage,
      meta: { admin: true },
    },
    {
      path: '/admin/packages',
      name: 'AdminPackages',
      component: AdminPackagePage,
      meta: { admin: true },
    },
    {
      path: '/admin/destinations',
      name: 'AdminDestination',
      component: AdminDestination,
      meta: { admin: true },
    },
    {
      path: '/admin/create-destination',
      name: 'CreateDestination',
      component: CreateDestinationPage,
      meta: { admin: true },
    },

  ],
})


router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.getUser();

  if (authStore.user?.role === "admin" && to.meta.guest) {
    return { name: "AdminHome" };
  }
  if (authStore.user?.role === "admin" && to.meta.auth) {
    return { name: "AdminHome" };
  }
  if (authStore.user?.role === "admin" && to.meta.welcome) {
    return { name: "AdminHome" };
  }
  if (authStore.user?.role !== "admin" && to.meta.admin) {
    return { name: "Home" };
  }
  if (authStore.user?.role === 'admin' && !to.meta.admin) {
    return next(false);
  }
  if (authStore.user && to.meta.guest) {
    return { name: "Home" };
  }
  if (!authStore.user && to.meta.auth) {
    return { name: "Login" };
  }
});

export default router
