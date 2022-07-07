<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="text"> JPANG </ion-title>
        <!-- <ion-buttons slot="primary">
          <ion-button @click="clickedSearch()">
            <ion-icon slot="icon-only" :icon="search"></ion-icon>
          </ion-button>
        </ion-buttons> -->
        <ion-searchbar placeholder="Search Favorites"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot />
    </ion-content>
    <footer-menu></footer-menu>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
  },
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log("Segment changed", ev);
    },
  },
});
</script>

<style>
.text{
  margin-top: -18px;
}
</style>
