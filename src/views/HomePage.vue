<template>
<ion-page>
  <ion-content>
  <base-layout>
  <div class="item-content">
      <ion-list>
          <me-nu></me-nu>
          <top-main></top-main>
          <top-main2></top-main2>
      </ion-list>
      </div>
  </base-layout>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import BaseLayout from '@/components/BaseLayout.vue';
import { IonList, IonPage, IonContent} from '@ionic/vue';
import { defineComponent} from 'vue';
import TopMain from '@/components/Top-main.vue';
export default defineComponent ({
  components:{
    IonList,
    TopMain,
    IonPage,
    IonContent
}
})
</script>

<style>
.item-content{
  background-color:white!important;
}


</style>