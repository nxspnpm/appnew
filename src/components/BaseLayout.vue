<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="test" id="test">
        <ion-title class="title-app"> JPANG </ion-title>
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
  margin-top: 35px;
  text-align: center;
}
</style>
