<template>
  <ion-app id="app">
    <ion-menu name="menu" :type="type">
      <div class="ion-page">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-list-header>
              Navigate
            </ion-list-header>
            <ion-menu-toggle auto-hide="false">
              <ion-item button @click="$router.push('/')">
                <ion-icon slot="start" name="home"></ion-icon>
                <ion-label>
                  Home
                </ion-label>
              </ion-item>
            </ion-menu-toggle>
            <ion-item button @click="$router.push('/another')">
              <ion-icon slot="start" name="another"></ion-icon>
              <ion-label>
                Another Page
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
    </ion-menu>

    <div class="ion-page" main>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <router-view />
      </ion-content>
    </div>
  </ion-app>
</template>

<script>
export default {
  data() {
    return {
      type: "push" // reveal, push, overlay
      // reveal is buggy on ios
    };
  }
};
</script>

<style scoped></style>
