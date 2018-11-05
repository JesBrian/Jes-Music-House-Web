const state = {
  nowIndex: 6, // 当前播放歌曲的下标 - 对应播放列表 nowPlayList 的数组下标

  nowPlayList: [
    {id: '11', name: 'test1', poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1377828491,527978428&fm=26&gp=0.jpg'},
    {id: '12', name: 'test2', poster: 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df3d7ca7bcb0a46c5d1bfec6063f6246a60af77.jpg'},
    {id: '13', name: 'test3', poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3376239977,2671966586&fm=26&gp=0.jpg'},
    {id: '14', name: 'test4', poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'},
    {id: '15', name: 'test5', poster: 'http://p2.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?param=130y130'},
    {id: '16', name: 'test6', poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=983893726,970464221&fm=26&gp=0.jpg'},
    {id: '17', name: 'test7', poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'},
    {id: '18', name: 'test1', poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1377828491,527978428&fm=26&gp=0.jpg'},
    {id: '19', name: 'test2', poster: 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df3d7ca7bcb0a46c5d1bfec6063f6246a60af77.jpg'},
    {id: '20', name: 'test3', poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3376239977,2671966586&fm=26&gp=0.jpg'},
    {id: '21', name: 'test4', poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'},
    {id: '22', name: 'test5', poster: 'http://p2.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?param=130y130'},
    {id: '23', name: 'test6', poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=983893726,970464221&fm=26&gp=0.jpg'},
    {id: '24', name: 'test7', poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'}
  ]
}

const mutations = {
  /**
   */
  PREV_INDEX (state) {
    state.nowIndex = state.nowIndex - 1 === -1 ? state.nowPlayList.length - 1 : state.nowIndex - 1
  },

  /**
   */
  NEXT_INDEX (state) {
    state.nowIndex = state.nowIndex + 1 === state.nowPlayList.length ? 0 : state.nowIndex + 1
  },

  /**
   */
  RANDOM_INDEX (state) {
  },

  /**
   * 删除列表某一项
   */
  DEL_PLAY_LIST_ITEM (state, index) {
    state.nowPlayList.splice(index, 1)
  },

  /**
   * 清空播放列表
   */
  CLEAR_PLAY_LIST (state) {
    state.nowIndex = 0
    state.nowPlayList = []
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
