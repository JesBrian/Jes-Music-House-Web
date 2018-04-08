import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalType: '' // 拟态框类型
  },

  mutations: {

    /**
     * 修改拟态框类型
     * @param state
     * @param type
     */
    changeModalType (state, type = '') {
      state.modalType = type
    }
  }
})
