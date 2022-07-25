<template>
        <base-layout>
        <ion-list>
          <!-- <pro-file></pro-file> -->
          <ion-item @click="$router.push('/profile')"> Profile </ion-item>
          <ion-item @click="$router.push('/accountuser')"> account </ion-item>
          <ion-item> ถูกใจ </ion-item>
          <ion-item @click="$router.push('/')"> LOGIN </ion-item>
          <ion-item @click="presentAlert"> Logout </ion-item>
        </ion-list>
        </base-layout>
</template>

<script lang="ts">
import {  alertController } from "@ionic/vue";

export default {
  components: {   },
  data() {
    return {
      handlerMessage: "",
      roleMessage: "",
    };
  },
  methods: {
    async presentAlert() {
      const alert = await alertController.create({
        header: "Logout!",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            // handler: () => {
            //   this.handlerMessage = "Alert canceled";
            // },
          },
          {
            text: "OK",
            role: "confirm",
            handler: () => {
              // this.handlerMessage = "Alert confirmed";
              localStorage.removeItem('user');
            //   @click="$router.push('/account')">
            //   this.$router.push({ path: "/home" });
            
            },
          },
        ],
      });

      await alert.present();
    //   const { role } = await alert.onDidDismiss();
    //   this.roleMessage = `Dismissed with role: ${role}`;
    },
  },
};
</script>

<style>
.star {
  text-align: end;
  font-size: 65px;
}
</style>
