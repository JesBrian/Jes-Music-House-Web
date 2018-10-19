const state = {
  topMenuIsShowSecond: true
}

const mutations = {
  changeTopMenuIsShowSecond (state, status) {
    if (typeof status === 'boolean') {
      state.topMenuIsShowSecond = status
    } else {
      state.topMenuIsShowSecond = !state.topMenuIsShowSecond
    }
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
