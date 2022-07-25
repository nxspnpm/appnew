<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="test" id="test">
        <ion-icon class="iconbase2" size="large" name="arrow-back" @click="$router.push('/account')"></ion-icon>
        <ion-title class="title-app"> acconnt </ion-title>
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
  mounted() {
    console.log(localStorage.getItem("user"));
  },
});
</script>

<style>
.text {
  margin-top: 35px;
  text-align: center;
}
.iconbase2{
  margin-top: 6px!important;
  margin-left: -9px!important;
}
</style>
