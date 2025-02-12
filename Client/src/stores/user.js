import { defineStore } from "pinia";
import router from "@/router";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      errors: {},
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
      })

      const data = res.status !== 204 ? await res.json() : {};
      console.log(data);

      if (data.errors) {
        this.errors = data.errors
      } else {
        return data
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
  }
});
