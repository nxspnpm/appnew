<template>
  <ion-page>
    <ion-content class="bg">
      <form @submit.prevent="register">
        <ion-grid class="bglogin">
          <!-- <ion-row>
        <ion-avatar class="din">
          <img
            src="https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.6435-9/85169761_2933479530037156_4580711637706604544_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeFCLHKAlIxkEQuvtXwPPdtXy0bTIxwzNKLLRtMjHDM0oi5Pdf02X-IpJcHwsEX4SsDvhi2L9unJuLIzg19KiSXM&_nc_ohc=laqEyqR0shsAX_dMUeJ&_nc_ht=scontent.fbkk2-7.fna&oh=00_AT9okEDaAcavQNGA3q0qlM5axXYEqUVNhv2L5ySNWBu1FA&oe=62F1E834"
          />
        </ion-avatar>
      </ion-row> -->
          <ion-row>
            <ion-col>
              <ion-text class="text" color="secondary">
                <h1>Creat Your Account</h1>
              </ion-text>
              <ion-text class="text1" color="dark">
                <h6>banpangpang</h6>
              </ion-text>

              <ion-item fill="solid">
                <ion-label position="floating">First Name</ion-label>
                <ion-input
                  placeholder="your Frist Name"
                  name="firstname"
                  :rules="{ required: true, min: 6 }"
                  type="text"
                  v-model="firstname"
                ></ion-input>
              </ion-item>

              <ion-item fill="solid">
                <ion-label position="floating">Last Name</ion-label>
                <ion-input
                  placeholder="your Last Name"
                  name="lastname"
                  :rules="{ required: true, min: 6 }"
                  type="text"
                  v-model="lastname"
                ></ion-input>
              </ion-item>

              <ion-item fill="solid">
                <ion-label position="floating">Username</ion-label>
                <ion-input
                  placeholder="your Frist Name"
                  name="username"
                  :rules="{ required: true, min: 6 }"
                  type="text"
                  v-model="username"
                ></ion-input>
              </ion-item>

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
                <ion-button fill="clear" router-link="/forgotpassword"
                  >Forgot password</ion-button
                >
              </ion-tex>
            </ino-col>
          </ion-row>
          <ion-button type="submit" class="sum" color="success"
            >Sign up</ion-button
          >
        </ion-grid>
      </form>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
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

import { defineComponent} from "vue";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {db} from '@/firebase/firebaseinit'

export default defineComponent({

  name: "reGister",
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
  },
  setup() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    };
  },
  methods:{
    async regsiter(){
       const firebaseAuth = await firebase.auth()
       const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email , this.password)
       const result = await createUser
       const dataBase = db.collection('users').doc(result.user.uid)
       await dataBase.set({
        firstname:this.firstname,
        lastname:this.lastname,
        username:this.username,
        password:this.password,
        email:this.email,

       })
       this.$router.push({path:'/'})
    }
  }
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
  /* margin-top: 30%; */
  margin-top: 20%;
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
.din {
  width: 150px;
  height: 150px;
  margin-left: 30%;
}
</style>
