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
import LoginPage from '@/views/Auth/LoginPage.vue';
import RegisterPage from '@/views/Auth/RegisterPage.vue';
import CreatePackage from '@/views/Admin/CreatePackage.vue';
import AdminPackagePage from '@/views/Admin/AdminPackagePage.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { guest: true },

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
      meta: { guest: true },

    },
    {
      path: '/destination',
      name: 'Destination',
      component: DestinationPage,
      meta: { guest: true },

    },
    {
      path: '/adventure',
      name: 'Adventure',
      component: AdventurePage,
      meta: { guest: true },

    },
    {
      path: '/packages',
      name: 'Packages',
      component: PackagesPage,
      meta: { guest: true },

    },
    {
      path: '/packages/id',
      name: 'PackageDetail',
      component: PackageDetailPage,
      meta: { guest: true },

    },
    {
      path: '/packages/id/checkout',
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
  if (authStore.user?.role !== "admin" && to.meta.admin) {
    return { name: "Home" };
  }
  if (authStore.user && to.meta.guest) {
    return { name: "Home" };
  }
  if (!authStore.user && to.meta.auth) {
    return { name: "Login" };
  }
});

export default router
