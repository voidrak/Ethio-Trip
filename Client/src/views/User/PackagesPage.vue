<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import { usePackageStore } from '@/stores/package';
import { computed, onMounted, ref } from 'vue';

const baseUrl = import.meta.env.VITE_BASE_URL;

const { getAllPackages } = usePackageStore()

const packages = ref([]);

onMounted(async () => {
  packages.value = await getAllPackages();
  console.log(packages)
})
</script>

<template>
  <UserHeader />
  <section class="package  flex justify-center" id="package">
    <div class=" max-w-[1180px] mx-auto">
      <div class="">
        <h2 class="h2 section-title">Checkout Our Packages</h2>
        <p class="section-text" font-size="20px">
          Choose Ethio tour for a hassle-free and unforgettable journey through Ethiopia. Our expertly curated packages
          promise the perfect blend of culture, adventure, and relaxation, ensuring a memorable experience every time.
        </p>
      </div>

      <ul v-if="packages.length > 0" class="package-list space-y-8">

        <div v-for="(packageItem, index) in packages" :key="index"
          class="package-card shadow-md border border-gray-200">

          <figure class="card-banner">
            <img :src="`${baseUrl}/storage/${packageItem.package_image}`" :alt="`${packageItem.package_image}`"
              loading="lazy">
          </figure>

          <div class="card-content">

            <h3 class="h3 card-title">{{ packageItem.package_name }}</h3>

            <p class="card-text">
              {{ packageItem.package_description }}
            </p>

            <ul class="card-meta-list">

              <li class="card-meta-item">
                <div class="meta-box">
                  <svg class="size-3 fill-[#3b79c9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>

                  <p class="text">{{ packageItem.duration }} days</p>
                </div>
              </li>
              <li class="card-meta-item">
                <div class="meta-box">
                  <div v-if="packageItem.food" class="flex gap-x-1 items-center">
                    <svg class="size-3 fill-[#3b79c9]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path
                        d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                    </svg> Food
                  </div> +
                  <div v-if="packageItem.bus" class="flex gap-x-1 items-center">
                    <svg class="fill-[#3b79c9] size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path
                        d="M288 0C422.4 0 512 35.2 512 80l0 16 0 32c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32l0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-192 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32c0 0 0 0 0 0l0-32s0 0 0 0l0-16C64 35.2 153.6 0 288 0zM128 160l0 96c0 17.7 14.3 32 32 32l112 0 0-160-112 0c-17.7 0-32 14.3-32 32zM304 288l112 0c17.7 0 32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-112 0 0 160zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16L208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16z" />
                    </svg>
                    Bus
                  </div>
                  +
                  <div v-if="packageItem.accommodation" class="flex gap-x-1 items-center">
                    <svg class="fill-[#3b79c9] size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                      <path
                        d="M396.6 6.5L235.8 129.1c9.6 1.8 18.9 5.8 27 12l168 128c13.2 10.1 22 24.9 24.5 41.4l6.2 41.5L608 352c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-11.5-8.7-27.3-8.7-38.8 0zm-153.2 160c-11.5-8.7-27.3-8.7-38.8 0l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160c-1.4 9.2 1.3 18.6 7.4 25.6S22.7 512 32 512l144 0 16 0c17.7 0 32-14.3 32-32l0-118.1c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5l68.4 136.8c5.4 10.8 16.5 17.7 28.6 17.7l60.2 0 16 0c9.3 0 18.2-4.1 24.2-11.1s8.8-16.4 7.4-25.6l-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128z" />
                    </svg>
                    Accommodation
                  </div>


                </div>
              </li>


              <li class="card-meta-item">
                <div class="meta-box">
                  <svg class="size-3 fill-[#5389cf]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path
                      d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>

                  <p class="text">{{ packageItem.location }}</p>
                </div>
              </li>

            </ul>

          </div>

          <div class="card-price">
            <p class="my-2">Available Space {{ packageItem.available_space }}</p>

            <div class="wrapper">

              <p class="reviews">(35 reviews)</p>

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

            </div>
            <p class="price">
              {{ packageItem.price }} Br
              <span class="text-black font-bold">/ per person</span>
            </p>
            <RouterLink :to="{ name: 'CheckoutPage' }">
              <button class="btn btn-secondary">Book Now</button>
            </RouterLink>
          </div>
        </div>

      </ul>
    </div>

  </section>
</template>
a
<style scoped>
/*-----------------------------------*\
 * #style.css
\*-----------------------------------*/

/**
 * copyright 2022 codewithsadee
 */





/*-----------------------------------*\
 * #CUSTOM PROPERTY
\*-----------------------------------*/

:root {

  /**
 * colors
 */

  --united-nations-blue: hsl(214, 56%, 58%);
  --bright-navy-blue: #3b79c9;
  --spanish-gray: hsl(0, 0%, 60%);
  --black-coral: hsl(225, 8%, 42%);
  --oxford-blue: hsl(208, 97%, 12%);
  --yale-blue: hsl(214, 72%, 33%);
  --blue-ncs: hsl(197, 100%, 36%);
  --gunmetal: hsl(206, 34%, 20%);
  --gainsboro: hsl(0, 0%, 88%);
  --cultured: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --onyx: hsl(0, 0%, 25%);
  --jet: hsl(0, 0%, 20%);

  /**
 * typography
 */

  --ff-poppins: "Poppins", sans-serif;
  --ff-montserrat: "Montserrat", sans-serif;

  --fs-1: calc(20px + 3.5vw);
  --fs-2: calc(18px + 1.6vw);
  --fs-3: calc(16px + 0.45vw);
  --fs-4: 15px;
  --fs-5: 14px;
  --fs-6: 13px;
  --fs-7: 12px;
  --fs-8: 11px;

  --fw-500: 500;
  --fw-600: 600;
  --fw-700: 700;
  --fw-800: 800;

  /**
 * transition
 */

  --transition: 0.25s ease-in-out;

  /**
 * spacing
 */

  --section-padding: 60px;

  /**
 * border-radius
 */

  --radius-15: 15px;
  --radius-25: 25px;

}


.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}







li {
  list-style: none;
}

a {
  text-decoration: none;
}

a,
img,
span,
input,
label,
button,
ion-icon {
  display: block;
}

input,
button {
  background: none;
  border: none;
  font: inherit;
}

button {
  cursor: pointer;
}

input {
  width: 100%;
}

ion-icon {
  pointer-events: none;
}

html {
  font-family: var(--ff-poppins);
  scroll-behavior: smooth;
}

body {
  background: var(--white);
}





/*-----------------------------------*\
* #REUSED STYLE
\*-----------------------------------*/



.btn {
  color: var(--white);
  text-transform: uppercase;
  font-size: var(--fs-5);
  border-radius: 100px;
  padding: var(--padding, 8px 18px);
  border: var(--border-width, 2px) solid transparent;
  transition: var(--transition);
}

.btn-primary {
  background: var(--bright-navy-blue);
  border-color: var(--bright-navy-blue);
}

.btn-primary:is(:hover, :focus) {
  background: var(--yale-blue);
  border-color: var(--yale-blue);
}

.btn-secondary {
  border-color: var(--white);
}

.btn-secondary:is(:hover, :focus) {
  background: hsla(0, 0%, 100%, 0.1);
}

.h1,
.h2,
.h3 {
  font-weight: var(--fw-800);
  font-family: var(--ff-montserrat);
  text-transform: uppercase;
}

.h1 {
  color: var(--white);
  font-size: var(--fs-1);
}

.h2,
.h3 {
  color: var(--gunmetal);
}

.h2 {
  font-size: var(--fs-2);
}

.h3 {
  font-size: var(--fs-3);
  font-weight: var(--fw-700);
}

.section-subtitle {
  color: var(--bright-navy-blue);
  font-size: var(--fs-5);
  text-transform: uppercase;
  font-family: var(--ff-montserrat);
  margin-bottom: 8px;
}

.section-title {
  margin-bottom: 15px;
}

.section-text {
  color: var(--black-coral);
  margin-bottom: 30px;
}

.card-text {
  color: var(--black-coral);
  font-size: var(--fs-5);
}





/*-----------------------------------*\
* #HEADER
\*-----------------------------------*/






/*-----------------------------------*\
* #HERO
\*-----------------------------------*/






/*-----------------------------------*\
* #PACKAGE
\*-----------------------------------*/

.package {
  padding-block: var(--section-padding);
}

.package-list {
  margin-bottom: 40px;
}

.package-list>li:not(:last-child) {
  margin-bottom: 30px;
}

.package-card {
  background: var(--cultured);
  overflow: hidden;
  border-radius: 15px;
}

.package-card .card-banner {
  height: 250px;
}

.package-card .card-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.package-card .card-content {
  padding: 30px 20px;
}

.package-card .card-title {
  margin-bottom: 15px;
}

.package-card .card-text {
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-meta-list {
  background: var(--white);
  max-width: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8px;
  box-shadow: 0 0 5px hsla(0, 0%, 0%, 0.15);
  border-radius: 50px;
}

.card-meta-item {
  position: relative;
}

.card-meta-item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 4px;
  right: -1px;
  bottom: 4px;
  width: 1px;
  background: hsla(0, 0%, 0%, 0.3);
}

.meta-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding-inline: 9px;
  color: var(--black-coral);
  font-size: var(--fs-8);
}

.meta-box>ion-icon {
  color: var(--bright-navy-blue);
  font-size: 13px;
}

.package-card .card-price {
  background: var(--united-nations-blue);
  color: var(--white);
  padding: 25px 20px;
  text-align: center;
}

.package-card .card-price .wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px 15px;
  margin-bottom: 10px;
}

.package-card .card-price .reviews {
  font-size: var(--fs-5);
}

.package-card .card-rating {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  font-size: 14px;
}

.package-card .card-rating ion-icon:last-child {
  color: hsl(0, 0%, 80%);
}

.package-card .price {
  font-size: var(--fs-2);
  font-family: var(--ff-montserrat);
  font-weight: var(--fw-800);
  margin-bottom: 20px;
}

.package-card .price span {
  font-size: var(--fs-7);
  font-weight: initial;
}

.package .btn {
  margin-inline: auto;
}







































/*-----------------------------------*\
* #MEDIA QUERIES
\*-----------------------------------*/





/**
* responsive for larger than 768px screen
*/

@media (min-width: 768px) {

  /**
 * CUSTOM PROPERTY
 */

  :root {

    /**
   * typography
   */

    --fs-5: 15px;

  }



  /**
 * REUSED STYLE
 */

  .container {
    max-width: 800px;
  }

  .section-text {
    max-width: 60ch;
    margin-inline: auto;
  }



  /**
 * HEADER
 */

  .helpline-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .helpline-box .wrapper {
    display: block;
    color: var(--white);
    font-size: var(--fs-6);
  }

  .social-list {
    gap: 10px;
  }



  /**
 * POPULAR
 */

  .popular-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 50px;
  }

  .popular-list>li:not(:last-child) {
    margin-bottom: 0;
  }

  .popular-card .card-content {
    right: 20px;
  }



  /**
 * PACKAGE
 */

  .package-list {
    margin-bottom: 50px;
  }

  .package-list>li:not(:last-child) {
    margin-bottom: 40px;
  }

  .package-card {
    display: grid;
    grid-template-columns: 1.3fr 1.5fr 1fr;
  }

  .package-card .card-banner {
    height: 100%;
  }

  .package-card .card-content {
    padding: 40px;
  }

  .package-card .card-price {
    display: grid;
    place-content: center;
  }

  .package-card .card-price .wrapper {
    margin-bottom: 15px;
  }










}





/**
* responsive for larger than 992px screen
*/

@media (min-width: 992px) {

  /**
 * REUSED STYLE
 */

  .container {
    max-width: 1050px;
  }



  /**
 * HEADER
 */

  .header.active .header-top {
    position: unset;
    background: unset;
  }

  .nav-open-btn,
  .navbar-top {
    display: none;
  }

  .header-bottom {
    border-bottom: none;
  }

  .header.active .header-bottom {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--white);
    color: var(--onyx);
    box-shadow: 0 2px 5px hsla(0, 0%, 0%, 0.08);
    transition: var(--transition);
  }

  .header-bottom .container {
    padding-block: 0;
  }

  .header .navbar {
    all: unset;
  }

  .navbar-list {
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-list li {
    border-bottom: none;
  }

  .navbar-link {
    color: var(--white);
    --fs-4: 16px;
    font-weight: unset;
    text-transform: uppercase;
    padding: 20px 15px;
  }

  .header.active .navbar-link {
    color: var(--onyx);
  }

  .header.active .navbar-link:is(:hover, :focus) {
    color: var(--bright-navy-blue);
  }

  .header.active .social-link {
    color: var(--onyx);
    border-color: hsla(0, 0%, 0%, 0.15);
  }

  .overlay {
    display: none;
  }



  /**
 * HERO
 */

  .hero .container {
    max-width: 740px;
  }



  /**
 * TOUR SEARCH
 */

  .tour-search-form {
    grid-template-columns: repeat(5, 1fr);
  }

  .tour-search .btn {
    --padding: 15px;
    grid-column: unset;
    margin-top: 0;
  }



  /**
 * POPULAR
 */

  .popular-list {
    grid-template-columns: repeat(3, 1fr);
  }



  /**
 * PACKAGE
 */

  .meta-box {
    --fs-8: 13px;
  }

  .meta-box>ion-icon {
    font-size: 15px;
  }



  /**
 * CTA 
 */

  .cta .section-title {
    max-width: 25ch;
  }



  /**
 * FOOTER
 */

  .footer-top .container {
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
  }

  .footer-form {
    grid-column: unset;
  }

  .form-wrapper {
    flex-direction: column;
  }

  .footer-form .btn {
    width: 100%;
  }

}





/**
* responsive for larger than 1200px screen
*/

@media (min-width: 1200px) {

  /**
 * CUSTOM PROPERTY
 */

  :root {

    /**
   * spacing
   */

    --section-padding: 100px;

  }



  /**
 * REUSED STYLE
 */

  .container {
    max-width: 1180px;
  }

}
</style>