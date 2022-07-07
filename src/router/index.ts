import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import soundPage from '../views/soundPage.vue';
import AccountPage from '../views/accountPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/sound',
    name: 'soundPage',
    component: soundPage
  },
  {
    path: '/account',
    name: 'AccountPage',
    component: AccountPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
