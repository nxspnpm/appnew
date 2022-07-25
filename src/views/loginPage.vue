<template>
  <ion-page>
    <ion-content class="bg">
      <ion-grid class="bglogin">
        <ion-row>
          <ion-col>
            <ion-text class="text" color="secondary">
              <h1>LOGIN</h1>
            </ion-text>
            <ion-text class="text1" color="dark">
              <h6>banpangpang</h6>
            </ion-text>

            <ion-item fill="solid">
              <ion-label position="floating">E-mail</ion-label>
              <ion-input
                placeholder="your E-mail"
                name="email"
                :rules="{ required: true, min: 6 }"
                type="email"
                v-model="email"
              ></ion-input>
            </ion-item>

            <ion-item fill="solid">
              <ion-label position="floating">Password</ion-label>
              <ion-input
                placeholder="your Password"
                name="password"
                :rules="{ required: true, min: 6 }"
                type="password"
                v-model="password"
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row
          style="margin: 0 5px 0 5px"
          class="ion-justify-content-between"
        >
          <ino-col>
            <ion-tex>
              <ion-button fill="clear" router-link="/register"
                >Register</ion-button
              >
            </ion-tex>
          </ino-col>
          <ino-col>
            <ion-tex>
              <ion-button fill="clear" router-link="/forgotpassword"
                >Forgot password</ion-button
              >
            </ion-tex>
          </ino-col>
        </ion-row>
        <ion-text v-show="error">{{ errorMsg }}</ion-text>
        <ion-button @click="signin" class="sum" color="success"
          >Sign In</ion-button
        >
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
  IonPage,
  IonContent,
  // IonIcon
} from "@ionic/vue";
import { defineComponent } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import jwt_decode from "jwt-decode";

export default defineComponent({
  name: "loginPage",
  components: {
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonPage,
    IonContent,
    // IonIcon
  },
  setup() {
    // const name
    // const password
    return {
      email: "",
      username:"",
      password: "",
      error: true,
      errorMsg: "",
      check: "",
    };
  },
  methods: {
    async signin() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          // Signed in
        localStorage.setItem('user',this.email)
          
          this.$router.push({ path: "/home" });
          this.error = false;
          this.errorMsg = "";
          // const user = userCredential.user;
        })
        .catch((err) => {
          alert("Please fill out all the fields!");
          // this.error = true;
        });
        
    },


  },

});
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
  margin-top: 60%;
  justify-items: center;
}
.bg {
  --background: var(--ion-color-primary-contrast);
}
.password {
  --padding-end: 20px;
}
</style>
