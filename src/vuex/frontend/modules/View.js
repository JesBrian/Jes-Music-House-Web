const state = {
  timer: null,

  tips: '',
  tipsType: 'info', // info/warning

  topMenuIsShowSecond: true // 是否展示顶部导航栏二级菜单
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
