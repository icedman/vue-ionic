<template>
  <ion-app id="app">
    <!-- <ion-header no-border no-shadow>
      <ion-toolbar>
        <ion-title>Header</ion-title>

        <ion-buttons slot="end">
          <router-link to="/">
            <ion-label>
              Save
            </ion-label>
          </router-link>
        </ion-buttons>

      </ion-toolbar>
    </ion-header>
    -->

    <ion-tabs>

      <div class="ion-page">
        <ion-content>
          <router-view />
        </ion-content>
      </div>

      <ion-tab tab="home" style="display:none"></ion-tab>
      <ion-tab tab="settings" style="display:none"></ion-tab>

      <!--
      <ion-tab tab="home">
        <ion-content>
          <router-view/>
        </ion-content>
      </ion-tab>
      <ion-tab tab="settings">
        <ion-content>
          <router-view/>
        </ion-content>
      </ion-tab>
      -->

      <!-- <ion-tab-bar slot="top" style="margin-top:60px"> -->
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="home" @click="$router.replace('/')">
          <ion-label>Home</ion-label>
          <ion-icon name="home"></ion-icon>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="settings" @click="$router.push('/yetAnother')">
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
  methods: {
    updateTabFromRoute () {
      if (this.$store.state.route.meta && this.$store.state.route.meta.tab) {
        var tabs = document.querySelector('ion-tabs')
        if (tabs) {
          tabs.select(this.$store.state.route.meta.tab)
        }
      }
    }
  },

  mounted () {
    setTimeout(this.updateTabFromRoute, 500)
  }
}
</script>

<style scoped>
</style>
