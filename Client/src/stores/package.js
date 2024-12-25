import { defineStore } from "pinia";
import router from "@/router";

export const usePackageStore = defineStore("packageStore", {
    state: () => {
        return {
            errors: {},
        };
    },

    actions: {

        async getAllPackages() {
            const res = await fetch("/api/packages", {
                method: "Get",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        async createPackage(formData) {

            const res = await fetch("/api/packages", {
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
                router.push({ name: 'Packages' })

            }
        },


    },
});
