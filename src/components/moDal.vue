<template>
<ion-page>
<ion-content class="cardd1">
  <ion-card class="modol">
    <p>{{ modalMessage }}</p>
    <ion-button @click="closeModal" color="success">close</ion-button>
  </ion-card>
</ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent} from '@ionic/vue';
import { defineComponent} from 'vue';
export default defineComponent({
  components: { IonPage, IonContent},
    props: ["modalMessage"],
    methods:{
        closeModal(){
            this.$emit("close-modal");
        }
    }
})
</script>

<style>
.modol{
  font-size: small!important;
  color:brown!important;
  justify-content: center!important;
  text-align: center!important;
  margin-top: 100%!important;
  margin-right: 60%;
  width: 60%;
}
</style>