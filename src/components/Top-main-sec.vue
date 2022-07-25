<template>
  <ion-list-header>
    <ion-label class="host">ร้านแนะนำ</ion-label>
  </ion-list-header>

  <div class="cardower1">
    <ion-chip>
      <ion-avatar>
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
        />
      </ion-avatar>
      <ion-label>Chip Avatar</ion-label>
    </ion-chip>
    <ion-chip>
      <ion-avatar>
        <img
          src="https://cms.dmpcdn.com/food/2020/10/27/09ff1490-1834-11eb-ab84-d705c02e81b2_original.jpg"
        />
      </ion-avatar>
      <ion-label>Chip Avatar</ion-label>
    </ion-chip>
    <ion-chip>
      <ion-avatar>
        <img
          class=""
          src="https://mpics.mgronline.com/pics/Images/562000012456501.JPEG"
        />
      </ion-avatar>
      <ion-label>Chip Avatar</ion-label>
    </ion-chip>
        <ion-chip>
      <ion-avatar>
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
        />
      </ion-avatar>
      <ion-label>Chip Avatar</ion-label>
    </ion-chip>
    <ion-chip>
      <ion-avatar>
        <img
          src="https://cms.dmpcdn.com/food/2020/10/27/09ff1490-1834-11eb-ab84-d705c02e81b2_original.jpg"
        />
      </ion-avatar>
      <ion-label>Chip Avatar</ion-label>
    </ion-chip>
    <ion-chip>
      <ion-avatar>
        <img
          class=""
          src="https://mpics.mgronline.com/pics/Images/562000012456501.JPEG"
        />
      </ion-avatar>
      <ion-label>Chip Avatar</ion-label>
    </ion-chip>
  </div>


  <!-- post -->
  <ion-list>
    <ion-list-header lines="inset">
      <ion-label class="host">โพส</ion-label>
    </ion-list-header>
    <ion-item>
      <ion-avatar class="pim" slot="start">
        <img
          src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
        />
      </ion-avatar>
      <ion-label color="primary">
        <h1>anpanman</h1>
        <p>ครัวซอง</p>
        <img
          class="pic"
          src="http://www.chillpainai.com/src/wewakeup/scoop/images/ae05e95462b20c1591b91ecabd556f2dc3e68b54.jpg"
        />
        <img
          class="pic"
          src="https://miwservices.com/wp-content/uploads/2021/01/Croissant-1-2.jpg"
        />
      </ion-label>
    </ion-item>

    <ion-item>
      <ion-avatar class="pim" slot="start">
        <img
          src="https://i.pinimg.com/736x/3e/d1/3b/3ed13bc6d5a5e157a1c89b322ebbd1f1.jpg"
        />
      </ion-avatar>
      <ion-label color="primary">
        <h1>jpan</h1>
        <p>ครัวซอง</p>
        <img
          class="pic"
          src="https://mpics.mgronline.com/pics/Images/562000012456501.JPEG"
        />
      </ion-label>
    </ion-item>

    <ion-item>
      <ion-avatar class="pim" slot="start">
        <img
          src="https://i.pinimg.com/736x/14/91/56/14915647c3d116eda93311aa7f1c3b1f.jpg"
        />
      </ion-avatar>
      <ion-label color="primary">
        <h1>บ้านปังปัง</h1>
        <p>ครัวซอง</p>
        <img
          class="pic"
          src="https://img.kapook.com/u/2020/sireeporn/cooking-4/A03.jpg"
        />
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { IonAvatar, IonChip, IonItem, IonLabel } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonAvatar, IonChip, IonItem, IonLabel },
});
</script>
<style>
.pim {
  margin-top: -95px;
}
.pic {
  width: 130px;
  height: 130px;
}
.host {
  font-size: 17px;
}
.cardower1 {
  height: 40px;
  overflow: auto;
  white-space: nowrap;
  width: auto;
}
</style>
