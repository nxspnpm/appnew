import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import soundPage from '../views/soundPage.vue';
import AccountPage from '../views/accountPage.vue';
import loginPage from '../views/loginPage.vue';
import reGister from '../views/reGister.vue';
import forgotPassword from '../views/forgotPassword.vue';

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
  },
  {
    path: '/login',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/register',
    name: 'reGister',
    component: reGister
  },
  {
    path: '/forgotpassword',
    name: 'forgotPassword',
    component: forgotPassword
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
