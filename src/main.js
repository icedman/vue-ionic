import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];

sync(store, router, {
  moduleName: "route"
});

router.beforeEach((to, from, next) => {
  // if ((!Store.state.user.user || !Store.state.user.user.name) &&
  //   to.matched.some(record => record.meta.requiresAuth)) {
  //   next('/auth/login')
  //   return
  // }

  let layout;
  to.matched.forEach(record => {
    if (record.meta) {
      if (record.meta.layout) {
        layout = record.meta.layout;
      }
    }
  });
  if (layout) {
    store.commit("ui/SET_LAYOUT", layout);
  }

  next();
});
router.afterEach((to, from) => {});

Vue.prototype.$ionic = {
  alert: document.querySelector("ion-alert-controller"),
  actionSheet: document.querySelector("ion-action-sheet-controller"),
  toast: document.querySelector("ion-toast-controller")
};

Vue.directive("ion-model", {
  bind: function(el, binding, vnode) {
    // console.log(el)
    // console.log(binding)
    // console.log(vnode)

    var target = "value";
    if (["ION-TOGGLE", "ION-CHECKBOX"].includes(el.tagName)) {
      target = "checked";
    }
    vnode.context.$watch(binding.expression, function(n, o) {
      el[target] = n;
    });
    el[target] = binding.value;
    el.addEventListener("ionChange", function(e) {
      vnode.context[binding.expression] = e.detail[target];
      // vnode.$emit('input', e.detail[target])
    });
  }

  // unbind: function(el, binding, vnode) {
  // el.removeEventListener('ionChange')??
  // }
});

/* cordova */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  store.commit("SET_DEVICE_READY", true);
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
