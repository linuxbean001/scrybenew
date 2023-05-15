import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import Forgot from "../views/Forgot.vue";
import UploadView from "../views/UploadView.vue";
import SearchView from "../views/SearchView.vue";
import LibraryView from "../views/LibraryView.vue";
import DashboardView from "../views/DashboardView.vue";
import MultipleFiles from "../views/MultipleFiles.vue";
import ChatApplication from "../views/ChatApplication.vue";
import firebase from "firebase/app";
import { auth } from "../Firebase/Firebase";

const routes = [
  {
    path: "/",
    name: "signIn",
    component: SignInView,
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    name: "signUp",
    component: SignUpView,
    meta: { requiresAuth: false },
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot,
    meta: { requiresAuth: false },
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/uploadview",
    name: "UploadView",
    component: UploadView,
    meta: { requiresAuth: true },
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
    meta: { requiresAuth: true },
  },
  {
    path: "/library",
    name: "library",
    component: LibraryView,
    meta: { requiresAuth: true },
  },
  {
    path: "/upload",
    name: "multiple",
    component: MultipleFiles,
    meta: { requiresAuth: true },
  },
  {
    path: "/chat",
    name: "ChatApplication",
    component: ChatApplication,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log("first", to);
  auth.onAuthStateChanged(function (user) {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    // console.log("requiresAuth",requiresAuth);
    // console.log("user",user);
    if (requiresAuth && !user) {
      next("/");
    } else if (!requiresAuth && user) {
      next("/upload");
    } else {
      next();
    }
  });
});

export default router;
