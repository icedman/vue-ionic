<template>
  <component :is="layout"/>
</template>

<script>
import Full from '@/layout/Full'
import Header from '@/layout/Header'
import Menu from '@/layout/Menu'
import Tabs from '@/layout/Tabs'
import SplitPane from '@/layout/SplitPane'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    layout () {
      return this.$store.state.ui.layout || 'Full'
    }
  },
  components: {
    'Full': Full,
    'Header': Header,
    'Menu': Menu,
    'Tabs': Tabs,
    'SplitPane': SplitPane
  }
}
</script>

<style>
ion-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
