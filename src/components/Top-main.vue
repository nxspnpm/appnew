<template>
  <ion-grid>
    <ion-list-header>
      <ion-label class="host">เมนูแนะนำ</ion-label>
    </ion-list-header>
    <ion-row>
      <ion-col class="card" size="4">
        <ion-card class="card">
          <a href="sound">
            <ion-card-header>
              <img
            class="pic"
            src="https://img.kapook.com/u/2020/sireeporn/cooking-4/A03.jpg"
          />
              <ion-card-subtitle>SOUND</ion-card-subtitle>
              <ion-card-title>STAR</ion-card-title>
            </ion-card-header>
          </a>
        </ion-card>
      </ion-col>
      <ion-col size="4">
        <ion-card class="card">
          <ion-card-header>
            <ion-icon name="moon-outline"></ion-icon>
            <ion-card-subtitle>SOUND</ion-card-subtitle>
            <ion-card-title>MOON</ion-card-title>
          </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col size="4">
        <ion-card class="card">
          <ion-card-header>
            <ion-icon name="sunny-outline"></ion-icon>
            <ion-card-subtitle>SOUND</ion-card-subtitle>
            <ion-card-title>NXS</ion-card-title>
          </ion-card-header>
        </ion-card>
      </ion-col>
      <!-- <ion-card>
        <ion-card-header>
          <img
            class="pic"
            src="https://img.kapook.com/u/2020/sireeporn/cooking-4/A03.jpg"
          />
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          <ion-card-title>Card Title</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </ion-card-content>
      </ion-card> -->
      <!-- <ion-col size="3">
        <ion-card  class="card">
          <ion-card-header>
            <ion-icon name="extension-puzzle-outline"></ion-icon>
            <ion-card-subtitle>SOUND</ion-card-subtitle>
            <ion-card-title>PINK</ion-card-title>
          </ion-card-header>
        </ion-card>
      </ion-col> -->
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {  IonGrid,  } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {  IonGrid,  },
});
</script>
<style>
a {
  text-decoration: none;
}
.card {
  height: 100px;
  width: 100px;
  margin: 0 auto; /* Added */
  /* float: none; Added */
  margin-bottom: 10px; /* Added */
}
.host{
  font-size: 17px;
}
.pic{
  width: 30px;
  height: 30px;
}
</style>
