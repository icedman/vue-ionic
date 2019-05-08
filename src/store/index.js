import Vue from "vue";
import Vuex from "vuex";
import ui from "./ui";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deviceReady: false
  },
  getters: {
    DEVICE_READY(state) {
      return state.deviceReady;
    }
  },
  actions: {},
  mutations: {
    SET_DEVICE_READY(state, value) {
      state.deviceReady = true;
    }
  },
  modules: {
    [ui.name]: ui
  }
});
