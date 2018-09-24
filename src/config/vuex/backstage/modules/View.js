const state = {
  showLeftMenu: true
}

const mutations = {
  CHANGE_SHOW_LEFT_MENU (state, nState = true) {
    state.showLeftMenu = nState
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
