<template>
<ion-app id="app">
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>

      <ion-buttons slot="end">
      <!-- <ion-item button> -->
        <router-link to="/">
        <ion-label>
          Save
        </ion-label>
        </router-link>
      <!-- </ion-item> -->
      </ion-buttons>

    </ion-toolbar>
  </ion-header>

  <ion-content main>
    <router-view/>
  </ion-content>

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
