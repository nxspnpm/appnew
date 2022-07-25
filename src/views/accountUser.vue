<template>
  <base-layout2>
    <ion-list>
      <ion-list-header class="profile">
        <ion-label>ข้อมูลทั่วไป</ion-label>
      </ion-list-header>

      <ion-list-header class="profile">
        <ion-label>Phone</ion-label>
      </ion-list-header>
      <ion-item class="textprofile">
        <ion-label>0655312546</ion-label>
      </ion-item>

      <ion-list-header class="profile">
        <ion-label>Email</ion-label>
      </ion-list-header>
      <ion-item class="textprofile">
        <ion-label>lee@gmail.com</ion-label>
      </ion-item>

      <ion-list-header class="profile">
        <ion-label>Birthday</ion-label>
      </ion-list-header>
      <ion-item class="textprofile">
        <ion-label>17.01.2000</ion-label>
      </ion-item>

      <ion-list-header class="profile">
        <ion-label>sex</ion-label>
      </ion-list-header>
      <ion-item class="textprofile">
        <ion-label>g</ion-label>
      </ion-item>

      <ion-list-header class="profile">
        <ion-label>address</ion-label>
      </ion-list-header>
      <ion-item class="textprofile">
        <ion-label>space</ion-label>
      </ion-item>
    </ion-list>
  </base-layout2>
</template>

<script lang="ts">
import { IonItem, IonList, IonLabel } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonItem,
    IonList,
    IonLabel,
  },
});
</script>

<style>
.profile {
  margin-bottom: 0px !important;
  font-size: 18px;
  font-weight: 400;
  margin: 0px 0px 0px;
}
.textprofile {
  font-size: 22px;
  font-weight: 700;
}
.mgt {
  margin-top: 9px;
}
</style>
