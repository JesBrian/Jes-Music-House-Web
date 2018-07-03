const state = {
  modalType: ''
}

const mutations = {
  /**
   * 改变拟态框类型
   */
  CHANGE_MODAL_TYPE (state, type = '') {
    state.modalType = type
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
