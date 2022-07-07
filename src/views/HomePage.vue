<template>
  <base-layout>
  <div class="item-content">
      <ion-list>
          <me-nu></me-nu>
          <top-main></top-main>
          <top-main2></top-main2>
      </ion-list>
      </div>
  </base-layout>
</template>

<script lang="ts">
// import BaseLayout from '@/components/BaseLayout.vue';
import { IonList} from '@ionic/vue';
import { defineComponent} from 'vue';
import TopMain from '@/components/Top-main.vue';
export default defineComponent ({
  components:{
    IonList,
    TopMain
}
})
</script>

<style>
.item-content{
  background-color:white!important;
}


</style>