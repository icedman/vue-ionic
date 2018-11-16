<template>
  <ion-app id="app">
<ion-tabs>

<ion-tab tab="home-view">
<ion-content>
<router-view/>
</ion-content>
</ion-tab>

  <!--
  <ion-tab tab="home-view">
    <ion-content>
      <router-view/>
    </ion-content>
  -->
    <!-- or <ion-nav></ion-nav>-->
    <!-- or <ion-router-outlet></ion-router-outlet> -->
  <!--
  </ion-tab>
  -->
  <ion-tab-bar slot="bottom">
    <!-- No ion-tab, just a link that looks like a tab -->
    <ion-tab-button tab="globle"  @click="$router.push('/yetAnother')">
      <!-- <a href="https://beta.ionicframework.com"> -->
      <ion-icon name="globe"></ion-icon>
      <ion-label>Schedule</ion-label>
    </ion-tab-button>

    <!-- No ion-tab, just a button that looks like a tab -->
    <ion-tab-button tab="camera" @click="$router.push('/another')">
      <ion-icon name="camera"></ion-icon>
      <ion-label>Photo</ion-label>
    </ion-tab-button>

    <!-- Connected to ion-tab, on click will show the ion-tab with id home-view -->
    <ion-tab-button tab="home-view" @click="$router.push('/')">
      <ion-icon name="home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <!--
    <router-link>
      does not seem to work
    -->
  </ion-tab-bar>
 </ion-tabs>

  </ion-app>

</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
