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
            <!-- <ion-input type="text" @IonChange="your-input-name=$event.target.value" placeholder="your E-mail"></ion-input> -->
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
            <ion-button fill="clear" router-link="/register">Register</ion-button>
          </ion-tex>
        </ino-col>
        <ino-col>
          <ion-tex>
            <ion-button fill="clear" router-link="/forgotpassword">Forgot password</ion-button>
          </ion-tex>
        </ino-col>
      </ion-row>
      <ion-button @click="submit" class="sum" color="success" 
        >Success</ion-button
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
  IonContent
  // IonIcon
} from "@ionic/vue";
// import {
//   checkmarkCircle,
//   closeCircle,
//   home,
//   informationCircle,
//   navigate,
//   shuffle,
//   star,
// } from "ionicons/icons";
import { defineComponent } from "vue";

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
    IonContent
    // IonIcon
  },
  setup() {
    // const name
    // const password
    return {
      email: "",
      password: "",
      // checkmarkCircle,
      // closeCircle,
      // home,
      // informationCircle,
      // navigate,
      // shuffle,
      // star,
    };
  },
  methods: {
    submit() {
      if(this.email && this.password == ("users")){
        this.$router.push('/')
      }else{
        alert("Login Agian")
      }
    },
    link(){
        this.$router.push({path:'/forgotpassword'})

    }
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
