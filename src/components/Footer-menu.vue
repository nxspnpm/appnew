<template>
  
  <!-- Footer without a border -->
  <ion-footer class="ion-no-border">
    <ion-toolbar>
      <ion-row>
        <ion-col>
          <a href="/">
            <ion-icon  name="home-outline"></ion-icon>
          </a>
        </ion-col>
        <ion-col>
          <ion-icon name="bag-handle-outline"></ion-icon>
        </ion-col>
        <ion-col>
          <ion-icon name="mail-outline"></ion-icon>
        </ion-col>
        <ion-col>
          <a href="/account">
          <ion-icon name="person-circle-outline"></ion-icon>
          </a>
          </ion-col>
      </ion-row>
    </ion-toolbar>
  </ion-footer>

</template>

<script  lang="ts">
import { IonFooter, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonFooter, IonToolbar }
});
</script>
<style>

</style>