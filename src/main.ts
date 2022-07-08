import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/firestore';
// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';
import BaseLayout from './components/BaseLayout.vue';
import Topmain1 from './components/Top-main.vue';
import Topmain2 from './components/Top-main-sec.vue';
import FooterBar from './components/Footer-menu.vue';
import Menubar from './components/MenuBar.vue';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtYqqLAfnALli0FCAfEIr4djzpXSlpbEI",
  authDomain: "pangpuriyeah.firebaseapp.com",
  projectId: "pangpuriyeah",
  storageBucket: "pangpuriyeah.appspot.com",
  messagingSenderId: "38053314366",
  appId: "1:38053314366:web:e29624ae2d1244f517366f"
};



// Initialize Firebase


  // Your web app's Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBtYqqLAfnALli0FCAfEIr4djzpXSlpbEI",
  //   authDomain: "pangpuriyeah.firebaseapp.com",
  //   projectId: "pangpuriyeah",
  //   storageBucket: "pangpuriyeah.appspot.com",
  //   messagingSenderId: "38053314366",
  //   appId: "1:38053314366:web:e29624ae2d1244f517366f"
  // };
  // Initialize Firebase
  // const app1 = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  
  
  // export const db = getFirestore(app1);
  
  export const auth = firebase.firestore();
  export const database = firebase.database();


const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('base-layout', BaseLayout)
app.component('top-main', Topmain1)
app.component('top-main2', Topmain2)
app.component('footer-menu',FooterBar)
app.component('me-nu',Menubar)

  
router.isReady().then(() => {
  app.mount('#app');
});