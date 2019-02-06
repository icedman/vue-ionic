<template>
  <ion-app id="app">

    <div class="ion-page">
    <ion-content>
    <router-view/>
    </ion-content>
    </div>

    <div class="ion-page">
    <ion-tabs>
      <ion-tab tab="home"></ion-tab>
      <ion-tab tab="settings"></ion-tab>

      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" style="display:none">
        </ion-tab-button>
        <!--
        <ion-tab-button tab="home">
          <ion-label>Home</ion-label>
          <ion-icon name="home"></ion-icon>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="settings">
          <ion-label>Settings</ion-label>
          <ion-icon name="globe"></ion-icon>
        </ion-tab-button>
      -->

        <ion-button @click="$router.replace('/')">
          <ion-label>Home</ion-label>
          <ion-icon name="home"></ion-icon>
        </ion-button>
        <ion-button @click="$router.push('/yetAnother')">
          <ion-label>Settings</ion-label>
          <ion-icon name="globe"></ion-icon>
        </ion-button>

      </ion-tab-bar>
    </ion-tabs>
    </div>
  </ion-app>

</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
