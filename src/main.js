// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

sync(store, router, { moduleName: 'route' })

router.beforeEach((to, from, next) => {
  // if ((!Store.state.user.user || !Store.state.user.user.name) &&
  //   to.matched.some(record => record.meta.requiresAuth)) {
  //   next('/auth/login')
  //   return
  // }
  
  let layout
  to.matched.forEach(record => {
    if (record.meta) {
      if (record.meta.layout) {
        layout = record.meta.layout
      }
    }
  })
  if (layout) {
    store.commit('ui/SET_LAYOUT', layout)
  }

  next()
})
router.afterEach((to, from) => {
})

Vue.prototype.$ionic = {
  alert: document.querySelector('ion-alert-controller'),
  actionSheet: document.querySelector('ion-action-sheet-controller'),
  toast: document.querySelector('ion-toast-controller')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
