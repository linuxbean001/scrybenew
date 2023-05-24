<template>
  <div>
    <div class="flex min-h-full flex-col justify-center sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-12 w-auto mt-3"
          src="../assets/images/logo.png"
          alt="Your Company"
        />
        <h2
          class="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign Up to your account
        </h2>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="/upload" @submit.prevent="register">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <div class="mt-1">
                <input
                  id="name"
                  name="name"
                  v-model="name"
                  type="text"
                  autocomplete="name"
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <span v-if="errors.name" style="color: red; font-size: small">{{
                  errors.name
                }}</span>
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="errors.email"
                  style="color: red; font-size: small"
                  >{{ errors.email }}</span
                >
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
                >Password</label
              >
              <div class="mt-1">
                <input
                  id="password"
                  name="password"
                  v-model="password"
                  type="password"
                  autocomplete="current-password"
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                <span
                  v-if="errors.password"
                  style="color: red; font-size: small"
                  >{{ errors.password }}</span
                >
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
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
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "SignupView",
  beforeCreate: function () {
    document.body.className = "h-full";
    document.querySelector("html").className = "h-full bg-gray-50";
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
    };
  },
  methods: {
    register() {
      this.errors = {};

      if (!this.name) {
        this.errors.name = "Name is required";
      }

      if (!this.email) {
        this.errors.email = "Email is required";
      } else if (!this.isValidEmail(this.email)) {
        this.errors.email = "Invalid email format";
      }

      if (!this.password) {
        this.errors.password = "Password is required.";
      } else if (!this.isValidPassword(this.password)) {
        this.errors.password =
          "Password must contain both letters and numbers.";
      }

      // If there are errors, don't submit the form
      if (Object.keys(this.errors).length > 0) {
        return;
      }
      // If there are no errors, submit the form
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      console.log("formData", formData);

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          // sendEmailVerification(auth.currentUser)
          //   .then(() => {
          //     toast.success("Email verification sent");
          //     console.log("email verification", auth.currentUser.emailVerified);
          //     if (auth.currentUser.emailVerified) {
                toast.success("Register Successfully");
                this.$router.push("/");
          //     }
          //   })
          //   .catch((error) => {
          //     toast.error("Error occurred while sending email verification");
          //   });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/email-already-in-use") {
            toast.error("Email already exists");
          }
        });
    },
    isValidEmail(email) {
      // Regular expression pattern to validate email format
      const emailPattern = /\S+@\S+\.\S+/;
      return emailPattern.test(email);
    },
    isValidPassword(password) {
      return /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password);
    },
  },
};
</script>
