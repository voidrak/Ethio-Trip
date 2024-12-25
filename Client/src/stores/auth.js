import { defineStore } from "pinia";
import router from "@/router";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      errors: {},
    };
  },
  // getters: {},
  actions: {
    /********************* Get Authenticated User  ********************** */
    async getUser() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/user", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.user = data;
        }
      }
    },

    /**************** Login and Register  ***************/
    async authenticate(apiRoute, formData) {
      const res = await fetch(`/api/${apiRoute}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        this.errors = {};
        localStorage.setItem("token", data.token);
        this.user = data.user;
        router.push({ name: "Home" });
      } else {
        this.errors = data.errors;
      }
    },

    /**************** Logout  ***************/
    async logout() {
      const res = await fetch("/api/logout", {
        method: "post",
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        localStorage.removeItem("token");
        this.user = null;
        router.push({ name: "Home" });
      }
    }
  }
});
