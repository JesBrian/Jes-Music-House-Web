const state = {
  tips: '',
  tipsType: 'info', // info/warning

  modalType: '', // 模态框类型

  showLeftMenu: true
}

const mutations = {
  /**
   * 展示 / 关闭 操作提示框
   */
  SHOW_TIPS (state, tipsObj) {
    state.tips = tipsObj.msg
    state.tipsType = tipsObj.type
    if (tipsObj.msg !== '') {
      clearTimeout(state.timer)
      state.timer = setTimeout(() => {
        this.commit('SHOW_TIPS', {})
      }, 3688)
    } else {
      clearTimeout(state.timer)
    }
  },

  /**
   * 改变拟态框类型
   */
  CHANGE_MODAL_TYPE (state, type = '') {
    state.modalType = type
  },

  /**
   * 展示后台左侧菜单
   */
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
