<template>
  <div style="background-color: #d4deea">
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
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ " " }}
          <a
            href="/signup"
            class="font-medium text-indigo-600 hover:text-indigo-500"
            >SignUp</a
          >
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="/upload" @submit.prevent="submitForm">
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

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  v-model="rememberMe"
                />
                <label for="rememberMe" class="ml-2 block text-sm text-gray-900"
                  ><span
                    v-if="errors.rememberMe"
                    style="color: red; font-size: small"
                    >{{ errors.rememberMe }}</span
                  >
                  Remember me</label
                >
              </div>

              <div class="text-sm">
                <a
                  href="/forgot"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                  >Forgot your password?</a
                >
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "SignInView",
  beforeCreate: function () {
    document.body.className = "h-full";
    document.querySelector("html").className = "h-full bg-gray-50";
  },
  data() {
    return {
      rememberMe: false,
      email: "",
      password: "",
      errors: {},
    };
  },
  methods: {
    submitForm() {
      // Perform validation on form input
      this.errors = {};

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

      if (!this.rememberMe) {
        this.errors.rememberMe = "";
      }

      if (this.rememberMe) {
        localStorage.setItem("email", this.email);
      } else {
        localStorage.removeItem("email");
      }

      // If there are errors, don't submit the form
      if (Object.keys(this.errors).length > 0) {
        return;
      }
      // If there are no errors, submit the form
      const formData = {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      };
      console.log("formData", formData);

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          const storedEmail = localStorage.getItem("email");
          if (storedEmail) {
            this.email = storedEmail;
            this.rememberMe = true;
            console.log(res);
            toast.success("Login Successfully");
            setTimeout(() => {
              this.$router.push("/upload");
            }, 1000);
          }
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          if (errorCode === "auth/wrong-password") {
            toast.error("Wrong password.");
          } else if (errorCode === "auth/user-not-found") {
            toast.error("Email is not valid");
          } else {
            toast.error(errorMessage);
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
