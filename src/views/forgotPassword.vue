<template>
<ion-page>
  <ion-content class="bg">
    <!-- <MoDal v-if="modalActive" v-on:close-modal="closemodal" /> -->
    <ion-grid class="bglogin">
      <ion-row>
        <ion-col>
          <ion-text class="text" color="secondary">
            <h1>Forgot Password</h1>
          </ion-text>
          <ion-text class="text1" color="dark">
            <h6>banpangpang</h6>
          </ion-text>

          <ion-item fill="solid">
            <ion-label position="floating">E-mail</ion-label>
            <ion-input placeholder="E-mail"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-row
        style="margin: 0 24px 0 24px"
        class="ion-justify-content-between"
      >
        <ino-col>
              <ion-tex>
                <ion-button fill="clear" router-link="/login">Login</ion-button>
              </ion-tex>
        </ino-col>
        <ino-col>
          <ion-tex>
            <ion-button fill="clear" router-link="/register">Register</ion-button>
          </ion-tex>
        </ino-col>
      </ion-row>
      <ion-button class="sum" color="success">Success</ion-button>
    </ion-grid>
  </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonPage
  // IonIcon
} from "@ionic/vue";
import { defineComponent } from "vue";
// import MoDal from "../components/moDal.vue";

export default defineComponent({
  name: "forgotPassword",
  components: {
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    // IonIcon
},
  setup() {
    return {
      email: null,
      modalActive: true,
      modalMessage:""
    };
  },
  // methods: {
  //   closemodal(){
  //   this.modalActive = ! this.modalActive;
  //   this.email = "";
  // }
  }
);
</script>
<style>
.text {
  font-size: 28px;
  font-weight: 800;
  color: #404040;
}
.text1 {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #a2a4ab;
  /* margin-top: 3px 2px 1px; */
}
.bglogin {
  text-align: center;
  margin-top: 35%;
  justify-items: center;
}
.bg {
  --background: var(--ion-color-primary-contrast);
}
.password {
  --padding-end: 20px;
}
.sum {
  margin-top: 30px;
}
</style>
