import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicIsPlay: false
  },
  mutations: {
    changeMusicIsPlayStatus (state) {
      state.musicIsPlay = !state.musicIsPlay
    }
  }
})
