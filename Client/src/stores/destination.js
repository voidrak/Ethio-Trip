import { defineStore } from "pinia";
import router from "@/router";

export const useDestinationStore = defineStore("destinationStore", {
  state: () => {
    return {
      errors: {},
    };
  },

  actions: {


    async getDestination(destination) {
      const res = await fetch(`/api/destinations/${destination}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data

    },


    async getAllDestinations() {
      const res = await fetch("/api/destinations", {
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

    /*********************  Create Package ********************** */
    async createDestination(formData) {

      const res = await fetch("/api/destinations", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,

        },
        body: formData,
      });
      const data = await res.json();
      console.log(data)

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.errors = {};
        router.push({ name: 'AdminDestination' })


      }
    },


    /*********************  Update Destination ********************** */
    async updateDestination(formData, destination) {

      const res = await fetch(`/api/destinations/${destination}`, {
        method: "PUT",
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
      }
    },


  },
});
