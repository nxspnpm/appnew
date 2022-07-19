<template>
  <!-- <ion-grid class="menu">
    <ion-row>
      <ion-col size="4">เมนูแนะนำ</ion-col>
      <ion-col size="8">ร้านแนะนำ</ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="7">โปรโมชั่น</ion-col>
      <ion-col size="4">ซื้ออีกครั้ง</ion-col>
    </ion-row>
  </ion-grid> -->
  <ion-grid>
    <ion-list-header>
      <ion-label class="host">เมนูแนะนำ</ion-label>
    </ion-list-header>
    <div class="cardower">
      <!-- <p style="visibility: visible; ">
        gygyfgyffyftftfvuyyfffyuyyyyuyyfyfyfyufyfycyyuyyfyfyfyufyfyffbhugygyfgyffyftftfvyfyfyufyfycyyuyyfyfyfyufyfyffbhugygyfgyffyftftfvyfyfyufyfycyyuyyfyfyfyufyfyffbhugygyfgyffyftftfvyfyfyufyfycyyuyyfyfyfyufyfyffbhugygyfgyffyftftfvuyyfffyuyyyyuyyfyfyfyufyfyffbhugygyfgyffyftftfvuyyfffyuyyyyuyyfyfyfyufyfyffbhu
      </p> -->
      <ion-col v-for="n in 50" :key="n">
        <ion-card class="card">
            <img
              class=""
              src="https://mpics.mgronline.com/pics/Images/562000012456501.JPEG"
            />
          <ion-card-content>
            <ion-card-subtitle>N</ion-card-subtitle>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </div>
  </ion-grid>
</template>

<script lang="ts">
import {} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
});
</script>
<style>
a {
  text-decoration: none;
}
.card {
  width: 120px;
  height: 120px;

  padding: 10px;
  display: inline-block;
  vertical-align: top;
  margin-right: 0px;
  white-space: normal;
}
.host {
  font-size: 17px;
  padding: 0px 0px 0px !important;
}
.pic1 {
  width: 100%;
  height: 100%;
  padding: 0px 0px 0px 0px !important;
}
.cardower {
  overflow: auto;
  white-space: nowrap;
  width: auto;
}
.menu{
  justify-content: center;
}
</style>
