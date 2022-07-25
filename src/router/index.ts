import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import soundPage from '../views/soundPage.vue';
import AccountPage from '../views/accountPage.vue';
import loginPage from '../views/loginPage.vue';
import reGister from '../views/reGister.vue';
import forgotPassword from '../views/forgotPassword.vue';
import chatPage from '../views/chatPage.vue';
import profile from '../views/accountProfile.vue';
import accountuser from '../views/accountUser.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: loginPage
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
    path: '/home',
    name: 'HomePage',
    component: HomePage
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
  },
  {
    path: '/chat',
    name: 'chatpage',
    component: chatPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/accountuser',
    name: 'accountuser',
    component: accountuser
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
