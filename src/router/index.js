import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import UploadView from '../views/UploadView.vue'
import ChatView from '../views/ChatView.vue'
import LibraryView from '../views/LibraryView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/library',
    name: 'library',
    component: LibraryView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
