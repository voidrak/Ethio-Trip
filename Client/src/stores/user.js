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
    /********************* Register Provider  ********************** */

    async authenticate(formData) {
      const res = await fetch(`/api/register/provider`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        this.errors = {};
        localStorage.setItem("token", data.token);
        this.user = data.user;
        router.push({ name: "Home" });
      } else {
        this.errors = data.errors;
      }
    },

    /********************* Get All PreProvider  ********************** */
    async getAllPreProvider() {
      const res = await fetch('/api/admin/preProvider', {
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
        router.push({ name: "Home" });
        return data;
      }
    },
    async approvePreProvider(userId) {
      const res = await fetch(`/api/admin/approvePreProvider/${userId}`, {
        method: 'PUT',
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
  },
});
