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
import AdminDestinationDetailPage from '@/views/Admin/AdminDestinationDetailPage.vue';
import AdminUsersPage from '@/views/Admin/AdminUsersPage.vue';
import UpdateProfile from '@/views/User/UpdateProfile.vue';
import ProviderRegister from '@/views/Provider/ProviderRegister.vue';
import PreProviderHome from '@/views/Provider/PreProviderHome.vue';
import AdminPreProvider from '@/views/Admin/AdminPreProvider.vue';
import ProviderHome from '@/views/Provider/ProviderHome.vue';
import ProviderPackagePage from '@/views/Provider/ProviderPackagePage.vue';
import Events from '@/views/User/Events.vue';

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
      path: '/events',
      name: 'Events',
      component: Events,
    },
    {
      path: '/destinations',
      name: 'Destination',
      component: DestinationPage,
    },
    {
      path: '/destinations/:id',
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
      path: '/admin/destination/:id',
      name: "AdminDestinationDetail",
      component: AdminDestinationDetailPage,
      meta: { admin: true }
    },
    {
      path: '/admin/create-destination',
      name: 'CreateDestination',
      component: CreateDestinationPage,
      meta: { admin: true },
    },
    {
      path: '/admin/users',
      name: 'AdminUsers',
      component: AdminUsersPage,
      meta: { admin: true },
    },
    {
      path: '/admin/preProvider',
      name: 'AdminPreProvider',
      component: AdminPreProvider,
      meta: { admin: true },
    },
    {
      path: '/profile/update',
      name: 'UpdateProfile',
      component: UpdateProfile,
      meta: { auth: true },
    },

    {
      path: '/provider/register',
      name: 'ProviderRegister',
      component: ProviderRegister,
      meta: { guest: true }
    }
    , {
      path: '/preProvider',
      name: 'PreProvider',
      component: PreProviderHome,
      meta: { PreProvider: true }
    }
    , {
      path: '/provider',
      name: 'ProviderHome',
      component: ProviderHome,
      meta: { Provider: true }
    }
    , {
      path: '/ProviderPackages',
      name: 'ProviderPackages',
      component: ProviderPackagePage,
      meta: { Provider: true }
    }
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
  if (authStore.user?.role === "preProvider" && to.meta.welcome) {
    return { name: "PreProvider" };
  }
  if (authStore.user?.role === "preProvider" && to.meta.auth) {
    return { name: "PreProvider" };
  }
  if (authStore.user?.role === "provider" && to.meta.welcome) {
    return { name: "ProviderHome" };
  }
  if (authStore.user?.role === "provider" && to.meta.auth) {
    return { name: "ProviderHome" };
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
