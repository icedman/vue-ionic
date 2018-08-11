let state = {
  layout: null
}

let actions = {}

let getters = {}

let mutations = {
  SET_LAYOUT (state, layout) {
    state.layout = layout
  }
}

export default {
  name: 'ui',
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
