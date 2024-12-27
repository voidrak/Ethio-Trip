import { defineStore } from "pinia";
import router from "@/router";

export const UseSubscriptionStore = defineStore('subscriptionStore', {
  state: () => {
    return {
      errors: {},
    };
  },


  actions: {



    async getAllSubscription() {
      const res = await fetch("/api/subscriptions", {
        method: "Get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = {};
        return data
      }
    },

    async createSubscription(formData) {
      const res = await fetch("/api/subscriptions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = {};
        router.push({ name: 'Packages' })

      }
    },




  }
})