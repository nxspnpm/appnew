<template>
  <!-- Footer without a border -->
  <ion-footer class="ion-no-border">
    <ion-toolbar>
      <ion-row>
          <ion-col>
            <ion-icon name="home-outline"  @click="$router.push('/home')"></ion-icon>
          </ion-col>


        <ion-col>
          <ion-icon name="bag-handle-outline"></ion-icon>
        </ion-col>

        <ion-col>
          <ion-icon name="mail-outline" @click="$router.push('/chat')"></ion-icon>
        </ion-col>

        <ion-col>
          <ion-icon name="person-circle-outline" @click="$router.push('/account')"></ion-icon>
        </ion-col>

      </ion-row>
    </ion-toolbar>
  </ion-footer>
</template>

<script lang="ts">
import { IonFooter, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonFooter, IonToolbar },
});
</script>
<style></style>
