<template>
  <h1>ppiiodmfiandsfibryutrt</h1>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonButton,
  IonLabel,
  IonItem,
} from "@ionic/vue";

import { auth, database } from "../main";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import {
  createUserWithEmailAndPassword,
  EmailAuthCredential,
} from "@firebase/auth";
import { push, set } from "@firebase/database";

enum AuthMode {
  signIn,
  signUp,
}

export default {
  name: "Login",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonInput,
    IonButton,
    IonLabel,
    IonItem,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      name: "",
      email: "",
      password: "",
      mode: AuthMode.signIn,
      errorMsg: "",
    });

    const signInWithEmailAndPassword = async (
      email: string,
      password: string
    ) => {
      try {
        if (!email || !password) {
          state.errorMsg = "Email and Password required!";
          return;
        }
        await auth.signInWithEmailAndPassword(email, password);
        router.push("/account/sound");
      } catch (error) {
        state.errorMsg = error.message;
      }
    };

    const signUpWithEmailAndPassword = async (
      name: string,
      email: string,
      password: string
    ) => {
      try {
        if (!name || !email || !password) {
          state.errorMsg = "Name, Email, and Password required!";
          return;
        }

        const authRes = await auth.createUserWithEmailAndPassword(
          email,
          password
        );

        database.collection("user").doc(authRes.user?.uid).set({
          name,
          email,
        });

        router.push("/account/sound");
      } catch (error) {
        state.errorMsg = error.message;
        // console.log((e as Error).message)
      }
    };

    return {
      ...toRefs(state),
      signInWithEmailAndPassword,
      signUpWithEmailAndPassword,
      AuthMode,
    };
  },
};
</script>

<style>
.center {
  display: flex;
  height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.error-message {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  text-align: center;
}
</style>
