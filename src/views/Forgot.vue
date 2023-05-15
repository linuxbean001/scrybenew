<template>
  <div>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-12 w-auto"
          src="../assets/images/logo.png"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Forgot Password
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" @submit.prevent="resetPassword">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  v-model="email"
                  autocomplete="email"
                  required=""
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <!-- <div class="flex items-center justify-between">
              <div class="text-sm">
                <a
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Forgot your password?</a>
              </div>
            </div> -->

            <div>
              <button
                href="/upload"
                class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Forgot Password
              </button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "vue3-toastify";

export default {
  name: "Forgot",
  beforeCreate: function () {
    document.body.className = "h-full";
    document.querySelector("html").className = "h-full bg-gray-50";
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    resetPassword() {
      const email = this.email; // Get the user's email from the form

      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent successfully
          toast.success("Password reset email sent");
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        })
        .catch((error) => {
          // Handle any errors
          console.error("error", error);
        });
    },
  },
};
</script>
