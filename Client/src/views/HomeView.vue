<script setup>
import { computed, onMounted, ref } from 'vue';
import bestImage1 from '/img/best1.jpg';
import bestImage2 from '/img/best2.jpg';
import gondarImage2 from '/img/Gonder.jpg';
import bestImage4 from '/img/best4.jpg';
import bestImage3 from '/img/best3.jpg';
import PackagesPage from './User/PackagesPage.vue';
import { useAuthStore } from '@/stores/auth';
import { usePackageStore } from '@/stores/package';
import UserDropdown from '@/components/User/UserDropdown.vue';

const baseUrl = import.meta.env.VITE_BASE_URL;

const { getAllPackages } = usePackageStore()
const authStore = useAuthStore()

const packages = ref([]);

onMounted(async () => {
  packages.value = await getAllPackages();
})



</script>

<template>

  <body id="top">




    <header class="header" data-header>

      <div class="overlay" data-overlay></div>

      <div class="header-top">
        <div class="container">
          <div class="#">

            <div class="">

            </div>

            <div class="wrapper">
              <p class="helpline-title"></p>

              <p class="helpline-number"></p>
            </div>

          </div>


          <a href="index.html" class="logo">

          </a>

          <div class="header-btn-group">



            <button class="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>

            </button>

          </div>

        </div>
      </div>

      <div class="header-bottom">
        <div class="container">

          <ul class="social-list">

            <li>
              <p class="social-link">
                <svg class="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </p>
            </li>

            <li>
              <a href="https://twitter.com/" class="social-link">
                <svg class="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </a>
            </li>

            <li>
              <p class="social-link">
                <svg class="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path
                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                </svg>
              </p>
            </li>

          </ul>

          <nav class="navbar" data-navbar>

            <div class="navbar-top">




            </div>

            <ul class="navbar-list">


              <RouterLink :to="{ name: 'Home' }" class="navbar-link" data-nav-link>Home</RouterLink>






              <RouterLink :to="{ name: 'AboutUs' }" class="navbar-link">About Us</RouterLink>






              <RouterLink :to="{ name: 'Adventure' }" class="navbar-link" data-nav-link>Adventure</RouterLink>
              <RouterLink :to="{ name: 'Destination' }" class="navbar-link" data-nav-link>Destination</RouterLink>
              <RouterLink :to="{ name: 'Packages' }" class="navbar-link" data-nav-link> Trip Book</RouterLink>



            </ul>

          </nav>


          <div class="">
            <div class="flex gap-x-4  items-center" v-if="authStore.user">
              <UserDropdown />
            </div>
            <RouterLink :to="{ name: 'Login' }" v-else class=" px-4 py-2 text-white rounded-lg bg-[#184c91]   ">Login
            </RouterLink>

          </div>
        </div>
      </div>

    </header>


    <main>
      <article>
        <section class="hero" id="home">
          <div class="container">

            <h2 class="h1 hero-title">Travel Beyond Boundaries</h2>

            <p class="hero-text">
              Embark on a journey beyond the ordinary with Ethio tour. Your next adventure awaits, just a click away.
              Travel, explore, and discover with us!
            </p>

            <div class="btn-group">
              <RouterLink :to="{ name: 'Packages' }"
                class="text-white px-4 py-3 hover:border-blue-700 hover:border-2  border border-gray-300 rounded-2xl">
                Trip
                Packages
              </RouterLink>
              <RouterLink :to="PackagesPage"
                class="text-white px-4 py-3 hover:border-blue-700 hover:border-2  border border-gray-300 rounded-2xl">
                Hire a Guide
              </RouterLink>


              <!-- <button class="btn btn-secondary navbar-link">Hire a Guide</button> -->
            </div>


          </div>
        </section>

        <section v-if="packages.length" class="popular" id="destination">
          <div class="container">

            <p class="section-subtitle">Uncover place</p>

            <h2 class="h2 section-title">Popular Packages</h2>

            <p class="section-text">
              Immerse yourself in the best part of ETHIOPIA.
            </p>

            <ul class="popular-list">
              <RouterLink v-for="(packageItem, index) in packages" :key="index"
                :to="{ name: 'CheckoutPage', params: { id: packageItem.id } }">
                <div class="popular-card">

                  <figure class="card-img">
                    <img :src="`${baseUrl}/storage/${packageItem.package_image}`" loading="lazy">
                  </figure>

                  <div class="card-content h-[300px]">

                    <div class="card-rating">
                      <svg class="fill-white size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#ffffff"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                      <svg class="fill-white size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#ffffff"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                      <svg class="fill-white size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#ffffff"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                      <svg class="fill-white size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#ffffff"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                      <svg class="fill-white size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#ffffff"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </div>

                    <div class="card-subtitle">
                      <p>{{ packageItem.location }} </p>
                    </div>

                    <h3 class="h3 card-title">
                      <span>{{ packageItem.package_name }}</span>
                    </h3>

                    <p class="h-[180px] overflow-y-hidden">
                      {{ packageItem.package_description }}
                    </p>

                  </div>

                </div>
              </RouterLink>


            </ul>

            <RouterLink :to="{ name: 'Packages' }">
              <button class="btn btn-primary navbar-link">More Packages</button>
            </RouterLink>
            <br>
          </div>
        </section>
        <!-- 
        - #GALLERY
      -->

        <section class="gallery" id="gallery">
          <div class="container">

            <p class="section-subtitle">Photo Gallery</p>

            <h2 class="h2 section-title">Photo's From Travellers</h2>

            <p class="section-text">
              Share your travel adventures with us! Post your photos and let the world see your journey.
            </p>

            <ul class="gallery-list">

              <li class="gallery-item">
                <figure class="gallery-image">
                  <img :src="bestImage1" alt="Gallery image">
                </figure>
              </li>

              <li class="gallery-item">
                <figure class="gallery-image">
                  <img :src="bestImage2" alt="Gallery image">
                </figure>
              </li>

              <li class="gallery-item">
                <figure class="gallery-image">
                  <img :src="gondarImage2" alt="Gallery image">
                </figure>
              </li>

              <li class="gallery-item">
                <figure class="gallery-image">
                  <img :src="bestImage4" alt="Gallery image">
                </figure>
              </li>

              <li class="gallery-item">
                <figure class="gallery-image">
                  <img :src="bestImage3" alt="Gallery image">
                </figure>
              </li>

            </ul>


          </div>

        </section>

        <section class="cta" id="contact">
          <div class="container">

            <div class="cta-content">
              <p class="section-subtitle">Call To Action</p>

              <h2 class="h2 section-title">Ready For Unforgatable Travel. Remember Us!</h2>


            </div>

            <button class="btn btn-secondary navbar-link">Contact Us !</button>



          </div>
        </section>
      </article>
    </main>

    <footer class="footer">

      <div class="footer-top">
        <div class="container">

          <div class="footer-brand">




            <p class="footer-text">

              Reach out to us for any inquiries or assistance. Our team is here to help make your travel experience
              exceptional. Contact us today for personalized support and guidance.
            </p>

          </div>

          <div class="footer-contact">

            <h4 class="contact-title">Contact Us</h4>

            <p class="contact-text">
              Feel free to contact and reach us !!
            </p>

            <ul class="space-x-[10rem]">

              <li class="contact-item">
                <svg class="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>

                <a href="tel:+01123456790" class="contact-link">+251 9 00 00 00 </a>
              </li>

              <li class="contact-item">
                <svg class="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                </svg>

                <p class="contact-link">ethio@gmail.com</p>
              </li>

              <li class="contact-item">
                <svg class="size-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>

                <address>Wollo University, KOMBOLCHA</address>
              </li>

            </ul>

          </div>


        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">

          <p class="copyright">
            &copy; 2024 <a href="">WOLLO University</a>. All rights reserved
          </p>

          <ul class="footer-bottom-list">

            <li>
              <a href="Content\privacy.html" class="footer-bottom-link">Privacy Policy</a>
            </li>

            <li>
              <a href="Content\term.html" class="footer-bottom-link">Term & Condition</a>
            </li>

            <li>
              <p class="footer-bottom-link">FAQ</p>
            </li>

          </ul>

        </div>
      </div>
    </footer>


  </body>
</template>