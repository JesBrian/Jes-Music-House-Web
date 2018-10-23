const state = {
  tips: '',
  tipsType: 'info', // info/warning

  topMenuIsShowSecond: true
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
        state.tips = ''
      }, 3688)
    } else {
      clearTimeout(state.timer)
    }
  },

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
