<template>
  <base-layout2>
    <ion-list class="mgt">
      <ion-avatar class="myprofile">
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
        />
      </ion-avatar>

      <ion-list-header class="profile">
        <ion-label>Name</ion-label>
      </ion-list-header>
      <ion-item class="textprofile">
        <ion-label>pim</ion-label>
      </ion-item>

      <ion-list-header class="profile">
        <ion-label>username</ion-label>
      </ion-list-header>
      <ion-item class="textprofile">
        <ion-label>nxs</ion-label>
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
    </ion-list>
  </base-layout2>
</template>

<script lang="ts">
import { IonItem, IonList, IonAvatar, IonLabel } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonItem,
    IonList,
    IonAvatar,
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
.myprofile {
  height: 90px;
  width: 90px;
  margin:auto;
}
.mgt{
    margin-top: 9px;
}
</style>
