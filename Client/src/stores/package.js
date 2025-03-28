import { defineStore } from "pinia";
import router from "@/router";

export const usePackageStore = defineStore("packageStore", {
    state: () => {
        return {
            errors: {},
        };
    },

    actions: {


        async getPackage(packageId) {
            const res = await fetch(`/api/packages/${packageId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            return data

        },
        async deletePackage(packageId) {
            const res = await fetch(`/api/packages/${packageId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
            });
            const data = res.status !== 204 ? await res.json() : {};
            console.log(data);

            if (data.errors) {
                this.errors = data.errors;
            } else {
                return data;
                // window.reload()
            }

        },


        async getAllPackages() {
            const res = await fetch("/api/packages", {
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
        async getProviderPackages() {
            const res = await fetch("/api/ProviderPackages", {
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
                router.push({ name: 'ProviderPackages' })

            }
        },
        /*********************  Update Package ********************** */
        async UpdatePackage(formData, packageId) {

            const res = await fetch(`/api/packages/${packageId}`, {
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
                return data;
            }
        },


    },
});
