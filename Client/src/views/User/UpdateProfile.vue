<script setup>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/user';
import UserHeader from '@/components/User/UserHeader.vue';

const userStore = useUserStore();
const form = ref({
  name: '',
  phone_number: '',
  email: '',
});
const errors = ref([]);

onMounted(async () => {
  const user = await userStore.getUserProfile();
  console.log('User data in onMounted:', user); // Add this line
  if (user) {
    form.value.name = authStore.user.name;
    form.value.phone_number = authStore.user.phone_number;
    form.value.email = authStore.user.email;
    console.log('Form values after setting:', form.value); // Add this line
  }
});

const handleSubmit = async () => {
  const response = await userStore.updateUserProfile(form.value);
  if (userStore.errors) {
    errors.value = Object.values(userStore.errors);
  } else {
    alert('Profile updated successfully!');
  }
};
</script>

<template>
  <UserHeader />
  <div class="update-profile">
    <h1>Update Profile</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="form.name" type="text" id="name" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="phone_number">Phone Number:</label>
        <input v-model="form.phone_number" type="text" id="phone_number" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="form.email" type="email" id="email" required class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
    <div v-if="errors.length" class="error-messages">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.update-profile {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.update-profile h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn:hover {
  background-color: #0056b3;
}

.error-messages {
  color: red;
  margin-top: 20px;
}
</style>