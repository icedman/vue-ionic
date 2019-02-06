<template>
  <ion-app id="app">
<!--
    <div class="ion-page">
    <ion-content>
    <router-view/>
    </ion-content>
    </div>
 -->

    <!-- <ion-header no-border no-shadow> -->
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

    <ion-tabs>
      <ion-tab tab="home">
        <ion-content>
          <router-view/>
        </ion-content>
      </ion-tab>
      <ion-tab tab="settings">
        Settings!
      </ion-tab>

      <!-- <ion-tab-bar slot="top" style="margin-top:60px"> -->
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home">
          <ion-label>Home</ion-label>
          <ion-icon name="home"></ion-icon>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="settings">
          <ion-label>Settings</ion-label>
          <ion-icon name="globe"></ion-icon>
        </ion-tab-button>

        <!--
        <ion-button @click="$router.replace('/')">
          <ion-label>Home</ion-label>
          <ion-icon name="home"></ion-icon>
        </ion-button>
        <ion-button @click="$router.push('/yetAnother')">
          <ion-label>Settings</ion-label>
          <ion-icon name="globe"></ion-icon>
        </ion-button>
        -->

      </ion-tab-bar>
    </ion-tabs>

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
