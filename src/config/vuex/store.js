import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicIsPlay: false,
    musicPlayModel: 'loop', // 三种播放模式 [ loop-歌单循环，single-loop-单曲循环，random-歌单里歌曲随机播放 ]
    musicPlayNowIndex: 0,
    musicPlayList: ['test1', 'test2', 'test3']
  },
  mutations: {
    /**
     * 改变是否播放歌曲状态
     * @param state
     */
    changeMusicIsPlayStatus (state) {
      state.musicIsPlay = !state.musicIsPlay
    },

    /**
     * 改变音乐播放模式
     * @param state
     * @param type
     */
    changeMusicPlayModel (state, type = 'loop') {
      state.musicPlayModel = type
    },

    /**
     * 改变现在播放音乐在播放列表的索引号
     * @param state
     * @param nowIndexNum
     * @return {boolean}
     */
    changeMusicPlayNowIndex (state, nowIndexNum = -1) {
      if (nowIndexNum === -1) {
        if ((state.musicPlayNowIndex + 1) === state.musicPlayList.length) {
          state.musicPlayNowIndex = 0
        } else {
          state.musicPlayNowIndex++
        }
      } else {
        state.musicPlayNowIndex = nowIndexNum
      }
    }
  }
})
