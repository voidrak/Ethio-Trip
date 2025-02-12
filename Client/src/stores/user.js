import { defineStore } from "pinia";
import router from "@/router";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      errors: {},
      user: null,
    };
  },

  actions: {
    /********************* Get All Users  ********************** */
    async getAllUsers() {
      const res = await fetch('/api/admin/users', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      const data = res.status !== 204 ? await res.json() : {};
      console.log(data);

      if (data.errors) {
        this.errors = data.errors;
      } else {
        return data;
      }
    },

    /********************* Delete User  ********************** */
    async deleteUser(userId) {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      const data = res.status !== 204 ? await res.json() : {};
      console.log(data);

      if (data.errors) {
        this.errors = data.errors;
      } else {
        return data;
      }
    },

    /********************* Get User Profile  ********************** */
    async getUserProfile() {
      try {
        const res = await fetch('/api/user/profile', {
          method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        console.log('Fetched user data:', data); // Add this line

        if (data.errors) {
          this.errors = data.errors;
        } else {
          this.user = data;
          return data;
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        this.errors = { message: 'Failed to fetch user profile' };
      }
    },

    /********************* Update User Profile  ********************** */
    async updateUserProfile(userData) {
      const res = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      console.log(data);

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.user = data;
        return data;
      }
    },
  },
});
