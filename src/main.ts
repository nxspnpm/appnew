import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import  store  from './store';

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
import BaseLayout2 from './components/BaseLayout2.vue'
import Topmain1 from './components/Top-main.vue';
import Topmain2 from './components/Top-main-sec.vue';
import FooterBar from './components/Footer-menu.vue';
import Menubar from './components/MenuBar.vue';


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store);

app.component('base-layout', BaseLayout)
app.component('base-layout2', BaseLayout2)
app.component('top-main', Topmain1)
app.component('top-main2', Topmain2)
app.component('footer-menu',FooterBar)
app.component('me-nu',Menubar)

  
router.isReady().then(() => {
  app.mount('#app');
});