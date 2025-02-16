<script setup>
import UserHeader from '@/components/User/UserHeader.vue';


</script>

<template>

  <body>
    <div id="top"></div>


    <UserHeader />


    <h1 class="mt-16 font-extrabold">Events</h1>
    <br><br>
    <p>Events

    </p>
    <div class="icon">
      <ion-icon name="logo-facebook"></ion-icon>
      <ion-icon name="logo-instagram"></ion-icon>
      <a href="https://twitter.com/Blink_Tour" class="social-link">
        <!-- <ion-icon name="logo-twitter" href=""/> -->
      </a>
    </div>


  </body>

</template>

<style scoped>
body {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  text-align: center;
}

h1 {
  font-size: 70px;
  padding-top: 20px;
  font-family: 'Fredoka One', cursive;
}

p {
  line-height: 30px;
  font-size: 20px;
  font-family: sans-serif;
  color: #060606;
  padding-top: 20px;
}

.icon ion-icon {
  font-size: 25px;
  padding: 10px;
  color: #0b0c0c;
  border-radius: 50%;
  background-color: #fff9f9;
  margin: 20px 5px;
  cursor: pointer;
}

.icon ion-icon:hover {
  background-color: #030303;
  color: #fff;
}

.btn2 {
  width: 250px;
  height: 55px;
  background-color: transparent;
  border: 2px solid #0f1111;
  font-size: 18px;
  color: #0b0b0b;
  border-radius: 50px;
  cursor: pointer;
  font-weight: bold;
}

.btn2:hover {
  background-color: #0b0b0bdf;
  color: #fff;
}
</style>