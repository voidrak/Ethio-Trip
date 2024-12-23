<script setup>
import UserHeader from '@/components/User/UserHeader.vue';
import bannerImage from '@/assets/css/imgg/addis1.jpg'
import addisImage1 from '/img/addis2.jpg'
import addisImage2 from '/img/addis3.jpg'
import addisImage3 from '/img/addis4.jpg'
import addisImage4 from '/img/addis5.jpg'
import addisImage5 from '/img/addis6.jpg'

</script>

<template>
  <UserHeader />


  <div class="h-[400px] relative  bg-no-repeat  bg-center  ease-linear   bg-cover text-white  "
    :style="`background-image:url(${bannerImage});`">
    <div class="absolute top-0 left-0    h-full w-full bg-black/45 "></div>
  </div>

  <section class="light">
    <div class="container py-2">
      <div class="text-center text-2xl text-gray-500 uppercase mb-8">Welcome To Addis Abeba Blog
      </div>


      <article class="postcard light blue" id="">
        <a class="postcard__img_link">
          <img class="postcard__img" :src="addisImage1" alt="Image Title" />
        </a>
        <div class="postcard__text t-dark ml-4" style="padding-right: 40px;">
          <h1 class="postcard__title blue uppercase"><a>Addis Ababa</a></h1>
          <div class="postcard__subtitle small">
            <time datetime="Sun, May 11th 2024 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Sun, nov 11th 2024
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">Addis Ababa, which means "New Flower" in Amharic, was founded in 1886 by
            Emperor Menelik II and Empress Taytu Betul. Before Addis Ababa was chosen, Ethiopia's capital moved
            frequently, reflecting the country's historically nomadic political structure. Menelik II selected the area
            for its strategic location, fertile land, and access to thermal springs, particularly those at Filwoha,
            which were favored by the empress.</div>
        </div>
      </article>


      <article class="postcard light blue" id="">
        <a class="postcard__img_link">
          <img class="postcard__img" :src="addisImage2" alt="Image Title" />
        </a>
        <div class="postcard__text t-dark ml-4" style="padding-right: 40px;">
          <h1 class="postcard__title blue uppercase"><a>&nbsp;&nbsp;&nbsp;Best time to visit</a></h1>
          <div class="postcard__subtitle small">
            <time datetime="Sun, nov 11th 2024 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Sun, nov 11th 2024
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            &nbsp;The best time to visit Addis Ababa is during the dry season, which typically runs from October to
            February. During these months, the weather is generally sunny, with mild to warm temperatures and low
            humidity, making it ideal for sightseeing and outdoor activities. </div>

        </div>
      </article>



      <article class="postcard light blue" id="">
        <a class="postcard__img_link">
          <img class="postcard__img" :src="addisImage3" alt="Image Title" />
        </a>
        <div class="postcard__text t-dark ml-4" style="padding-right: 40px;">
          <h1 class="postcard__title blue uppercase"><a>Accommodation option</a></h1>
          <div class="postcard__subtitle small">
            <time datetime="Sun, May 11th 2024 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Sun, May 11th 2024
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">Addis Ababa offers a range of accommodation options that cater to different
            budgets, from luxury hotels to budget-friendly guesthouses and unique homestays. Here are some options: <br>
            1. Luxury Hotels ---Sheraton Addis, Hyatt Regency Addis Ababa, Skylight Hotel<br>
            2. Mid-Range Hotels--- Radisson Blu Hotel Addis Ababa, Jupiter International Hotel, Momona Hote <br>
            3. Budget-Friendly Hotels and Guesthouses--- Weygoss Guest House, Z Guest House, Mr. Martin's Cozy Place<br>
          </div>
        </div>
      </article>

      <article class="postcard light blue" id="">
        <a class="postcard__img_link">
          <img class="postcard__img" :src="addisImage4" alt="Image Title" />
        </a>
        <div class="postcard__text t-dark ml-4" style="padding-right: 40px;">
          <h1 class="postcard__title blue uppercase  "><a> places to visit</a></h1>
          <div class="postcard__subtitle small">
            <time class="" datetime="Sun, May 11th 2024 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Sun, May 11th 2024
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            &nbsp; Addis Ababa has a rich blend of history, culture, and natural beauty. Here are some must-visit places
            that capture the essence of the city and its surroundings:<br>
            1. National Museum of Ethiopia<br>
            2. Holy Trinity Cathedral<br>
            3. Entoto Hills<br>
            4. Merkato Market<br>
            5. Ethnological Museum<br>
            6. Meskel Square<br>
            7. Red Terror Martyrs Memorial Museum<br>
            8. Unity Park<br>
            9. Mount Zuqualla and Bishoftu Crater Lakes<br>
            10. The Zegie Peninsula and Monasteries of Lake Tana<br>
            11. Addis Ababa Central Train Station<br>
            12. African Union Headquarters<br>
          </div>
        </div>
      </article>



      <article class="postcard light blue" id="">
        <a class="postcard__img_link">
          <img class="postcard__img" :src="addisImage5" alt="Image Title" />
        </a>
        <div class="postcard__text t-dark ml-4" style="padding-right: 40px;">
          <h1 class="postcard__title blue uppercase"><a>Tips for Visitors</a></h1>
          <div class="postcard__subtitle small">
            <time datetime="Sun, May 11th 2024 12:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Sun, May 11th 2024
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">Respect Local Customs<br>
            Food and Water Safety<br>
            Navigating Addis Ababa<br>
            Currency and Payments<br>
            Language<br>
            Safety Precautions<br>
            Cultural Etiquette in Homes and Restaurants<br>
            Respect Sacred Sites<br>
          </div>
        </div>
      </article>
    </div>

    <RouterLink :to="{ name: 'CheckoutPage' }"
      class=" border-2  py-2 px-5 rounded-2xl text-xl w-[150px] mx-auto mt-8 flex items-center justify-center border-black hover:bg-green-500 hover:border-green-500 hover:text-white ease-linear duration-300 transition-all ">
      Book Now
    </RouterLink>
  </section>
</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;1,100;1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");




html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 5rem;
}

html::-webkit-scrollbar {
  width: 1rem;
}

html::-webkit-scrollbar-track {
  background: #fff;
}

html::-webkit-scrollbar-thumb {
  background: #10221b;
}

section {
  padding: 5rem 9%;
}


.btn {
  margin-top: 1rem;
  display: inline-block;
  border: 0.2rem solid #10221b;


  color: #10221b;
  cursor: pointer;
  background: none;
  font-size: 1.7rem;
  padding: 1rem 3rem;
}

.btn:hover {
  background: #10221b;
  color: #fff;
}







/* --------------------------blog css start---------------------------- */

.light {
  background: #f3f5f7;
  font-size: 15px;
}

a,
a:hover {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#pageHeaderTitle {
  margin: 2rem 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
}

/* Cards */
.postcard {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #ffffff;
}

/* .postcard.dark {
    background-color: #18151f;
  } */
.postcard.light {
  background-color: #e1e5ea;
}

.postcard .t-dark {
  color: #18151f;
}

.postcard a {
  color: inherit;
}

.postcard h1,
.postcard .h1 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.postcard .small {
  font-size: 80%;
}

.postcard .postcard__title {
  font-size: 1.75rem;
}

.postcard .postcard__img {
  max-height: 180px;
  width: 100%;
  object-fit: cover;
  position: relative;
}

.postcard .postcard__img_link {
  display: contents;
}

.postcard .postcard__bar {
  width: 50px;
  height: 10px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #424242;
  transition: width 0.2s ease;
}

.postcard .postcard__text {
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
}

.postcard .postcard__preview-txt {
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  height: 100%;
}

.postcard .postcard__tagbox {
  display: flex;
  flex-flow: row wrap;
  font-size: 14px;
  margin: 20px 0 0 0;
  padding: 0;
  justify-content: center;
}

.postcard .postcard__tagbox .tag__item {
  display: inline-block;
  background: rgba(83, 83, 83, 0.4);
  border-radius: 3px;
  padding: 2.5px 10px;
  margin: 0 5px 5px 0;
  cursor: default;
  user-select: none;
  transition: background-color 0.3s;
}

.postcard .postcard__tagbox .tag__item:hover {
  background: rgba(83, 83, 83, 0.8);
}

.postcard:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-70deg, #424242, transparent 50%);
  opacity: 1;
  border-radius: 10px;
}

.postcard:hover .postcard__bar {
  width: 100px;
}

@media screen and (min-width: 769px) {
  .postcard {
    flex-wrap: inherit;
  }

  .postcard .postcard__title {
    font-size: 2rem;
  }

  .postcard .postcard__tagbox {
    justify-content: start;
  }

  .postcard .postcard__img {
    max-width: 300px;
    max-height: 100%;
    transition: transform 0.3s ease;
  }

  .postcard .postcard__text {
    padding: 3rem;
    width: 100%;
  }

  .postcard .media.postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    background: #18151f;
    top: -20%;
    height: 130%;
    width: 55px;
  }

  .postcard:hover .postcard__img {
    transform: scale(1.1);
  }

  .postcard:nth-child(2n+1) {
    flex-direction: row;
  }

  .postcard:nth-child(2n+0) {
    flex-direction: row-reverse;
  }

  .postcard:nth-child(2n+1) .postcard__text::before {
    left: -12px !important;
    transform: rotate(4deg);
  }

  .postcard:nth-child(2n+0) .postcard__text::before {
    right: -12px !important;
    transform: rotate(-4deg);
  }
}

@media screen and (min-width: 1024px) {
  .postcard__text {
    padding: 2rem 3.5rem;
  }

  .postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    top: -20%;
    height: 130%;
    width: 45px;
  }

  /* .postcard.dark .postcard__text:before {
      background: #18151f;
    } */

  .postcard.light .postcard__text:before {
    background: #e1e5ea;
  }
}

/* COLORS */
.postcard .postcard__tagbox .green.play:hover {
  background: #79dd09;
  color: black;
}

.green .postcard__title:hover {
  color: #79dd09;
}

.green .postcard__bar {
  background-color: #79dd09;
}

.green::before {
  background-image: linear-gradient(-30deg, rgba(121, 221, 9, 0.1), transparent 50%);
}

.green:nth-child(2n)::before {
  background-image: linear-gradient(30deg, rgba(121, 221, 9, 0.1), transparent 50%);
}

.postcard .postcard__tagbox .blue.play:hover {
  background: #0076bd;
}

.blue .postcard__title:hover {
  color: #0076bd;
}

.blue .postcard__bar {
  background-color: #0076bd;
}

.blue::before {
  background-image: linear-gradient(-30deg, rgba(0, 118, 189, 0.1), transparent 50%);
}

.blue:nth-child(2n)::before {
  background-image: linear-gradient(30deg, rgba(0, 118, 189, 0.1), transparent 50%);
}

.postcard .postcard__tagbox .red.play:hover {
  background: #bd150b;
}

.red .postcard__title:hover {
  color: #bd150b;
}

.red .postcard__bar {
  background-color: #bd150b;
}

.red::before {
  background-image: linear-gradient(-30deg, rgba(189, 21, 11, 0.1), transparent 50%);
}

.red:nth-child(2n)::before {
  background-image: linear-gradient(30deg, rgba(189, 21, 11, 0.1), transparent 50%);
}

.postcard .postcard__tagbox .yellow.play:hover {
  background: #bdbb49;
  color: black;
}

.yellow .postcard__title:hover {
  color: #bdbb49;
}

.yellow .postcard__bar {
  background-color: #bdbb49;
}

.yellow::before {
  background-image: linear-gradient(-30deg, rgba(189, 187, 73, 0.1), transparent 50%);
}

.yellow:nth-child(2n)::before {
  background-image: linear-gradient(30deg, rgba(189, 187, 73, 0.1), transparent 50%);
}

@media screen and (min-width: 769px) {
  .green::before {
    background-image: linear-gradient(-80deg, rgba(121, 221, 9, 0.1), transparent 50%);
  }

  .green:nth-child(2n)::before {
    background-image: linear-gradient(80deg, rgba(121, 221, 9, 0.1), transparent 50%);
  }

  .blue::before {
    background-image: linear-gradient(-80deg, rgba(0, 118, 189, 0.1), transparent 50%);
  }

  .blue:nth-child(2n)::before {
    background-image: linear-gradient(80deg, rgba(0, 118, 189, 0.1), transparent 50%);
  }

  .red::before {
    background-image: linear-gradient(-80deg, rgba(189, 21, 11, 0.1), transparent 50%);
  }

  .red:nth-child(2n)::before {
    background-image: linear-gradient(80deg, rgba(189, 21, 11, 0.1), transparent 50%);
  }

  .yellow::before {
    background-image: linear-gradient(-80deg, rgba(189, 187, 73, 0.1), transparent 50%);
  }

  .yellow:nth-child(2n)::before {
    background-image: linear-gradient(80deg, rgba(189, 187, 73, 0.1), transparent 50%);
  }
}

@media (max-width: 1200px) {
  .header {
    padding: 2rem;
  }

  section {
    padding: 3rem 2rem;
  }
}


@media (max-width: 991px) {
  html {
    font-size: 55%;
    scroll-padding-top: 7rem;
  }
}



@media (max-width: 768px) {
  .header #menu-btn {
    display: inline-block;
  }

  .header .navbar {
    position: fixed;
    top: 0;
    left: -110%;
    background: #fff;
    z-index: 10000;
    width: 35rem;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: column;
    flex-flow: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .header .navbar.active {
    left: 0;
    -webkit-box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.8);
  }

  .header .navbar a {
    margin: 1rem 0;
    font-size: 3rem;
  }

  .header .navbar #nav-close {
    display: block;
    position: absolute;
    top: 1rem;
    right: 2rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .to-top {
    font-size: 20px;
    width: 40px;
    height: 40px;
  }

  .row {
    width: 325px;
    margin: auto;
  }
}



@media (max-width: 450px) {
  html {
    font-size: 50%;
  }
}
</style>