<template>
  <!-- Segment with secondary color -->
  <ion-segment class="bar" @ionChange="segmentChanged($event)" color="secondary">
    <ion-segment-button value="standard">
      <ion-label>ประเภทขนม</ion-label>
    </ion-segment-button>
    <ion-segment-button value="sat">
      <ion-label>ร้านใกล้ฉัน</ion-label>
    </ion-segment-button>
    <ion-segment-button value="sat">
      <ion-label>คูปอง</ion-label>
    </ion-segment-button>
  </ion-segment>
</template>

<script lang="ts">
import { IonSegment, IonSegmentButton,} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSegment, IonSegmentButton},
  methods: {
    segmentChanged(ev: CustomEvent) {
      console.log('Segment changed', ev);
    }
  }
});
</script>
<style>

</style>