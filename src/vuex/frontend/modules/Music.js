const state = {
  nowIndex: 0, // 当前播放歌曲的下标 - 对应播放列表 nowPlayList 的数组下标

  nowPlayList: [
    {
      id: 11,
      name: 'test1',
      singer: [{id: 1119, name: 'JesBrian'}, {id: 1110, name: '的业务'}, {id: 1111, name: 'Jes'}, {id: 1112, name: 'Brian'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1377828491,527978428&fm=26&gp=0.jpg'
    },
    {
      id: 12,
      name: 'test2',
      singer: [{id: 1129, name: '收藏'}],
      poster: 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df3d7ca7bcb0a46c5d1bfec6063f6246a60af77.jpg'
    },
    {
      id: 13,
      name: 'test3',
      singer: [{id: 1139, name: 'JesBrian3'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3376239977,2671966586&fm=26&gp=0.jpg'
    },
    {
      id: 14,
      name: 'test4',
      singer: [{id: 1149, name: '用户'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    },
    {
      id: 15,
      name: 'test5',
      singer: [{id: 1159, name: 'JesBrian5'}, {id: 1115, name: 'Jes5'}],
      poster: 'http://p2.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?param=130y130'
    },
    {
      id: 16,
      name: 'test6',
      singer: [{id: 1169, name: 'JesBrian6'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=983893726,970464221&fm=26&gp=0.jpg'
    },
    {
      id: 17,
      name: 'test7',
      singer: [{id: 1179, name: 'JesBrian7'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    },
    {
      id: 18,
      name: 'test1',
      singer: [{id: 1189, name: 'JesBrian8'}, {id: 1118, name: '空i了'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1377828491,527978428&fm=26&gp=0.jpg'
    },
    {
      id: 19,
      name: 'test2',
      singer: [{id: 1199, name: '入吧'}, {id: 1119, name: 'scy'}],
      poster: 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df3d7ca7bcb0a46c5d1bfec6063f6246a60af77.jpg'
    },
    {
      id: 20,
      name: 'test3',
      singer: [{id: 1109, name: 'JesBrian10'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3376239977,2671966586&fm=26&gp=0.jpg'
    },
    {
      id: 21,
      name: 'test4',
      singer: [{id: 1119, name: 'JesBrian11'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    },
    {
      id: 22,
      name: 'test5',
      singer: [{id: 1129, name: '才保住'}],
      poster: 'http://p2.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?param=130y130'
    },
    {
      id: 23,
      name: 'test6',
      singer: [{id: 1139, name: 'JesBrian13'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=983893726,970464221&fm=26&gp=0.jpg'
    },
    {
      id: 24,
      name: 'test7',
      singer: [{id: 1149, name: 'JesBrian14'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    },
    {
      id: 25,
      name: 'test1',
      singer: [{id: 1119, name: 'JesBrian'}, {id: 1110, name: '的业务'}, {id: 1111, name: 'Jes'}, {id: 1112, name: 'Brian'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1377828491,527978428&fm=26&gp=0.jpg'
    },
    {
      id: 26,
      name: 'test2',
      singer: [{id: 1129, name: '收藏'}],
      poster: 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df3d7ca7bcb0a46c5d1bfec6063f6246a60af77.jpg'
    },
    {
      id: 27,
      name: 'test3',
      singer: [{id: 1139, name: 'JesBrian3'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3376239977,2671966586&fm=26&gp=0.jpg'
    },
    {
      id: 28,
      name: 'test4',
      singer: [{id: 1149, name: '用户'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    },
    {
      id: 29,
      name: 'test5',
      singer: [{id: 1159, name: 'JesBrian5'}, {id: 1115, name: 'Jes5'}],
      poster: 'http://p2.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?param=130y130'
    },
    {
      id: 30,
      name: 'test6',
      singer: [{id: 1169, name: 'JesBrian6'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=983893726,970464221&fm=26&gp=0.jpg'
    },
    {
      id: 31,
      name: 'test7',
      singer: [{id: 1179, name: 'JesBrian7'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    },
    {
      id: 32,
      name: 'test1',
      singer: [{id: 1189, name: 'JesBrian8'}, {id: 1118, name: '空i了'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1377828491,527978428&fm=26&gp=0.jpg'
    },
    {
      id: 33,
      name: 'test2',
      singer: [{id: 1199, name: '入吧'}, {id: 1119, name: 'scy'}],
      poster: 'https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/0df3d7ca7bcb0a46c5d1bfec6063f6246a60af77.jpg'
    },
    {
      id: 34,
      name: 'test3',
      singer: [{id: 1109, name: 'JesBrian10'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3376239977,2671966586&fm=26&gp=0.jpg'
    },
    {
      id: 35,
      name: 'test4',
      singer: [{id: 1119, name: 'JesBrian11'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    },
    {
      id: 36,
      name: 'test5',
      singer: [{id: 1129, name: '才保住'}],
      poster: 'http://p2.music.126.net/daZcHVIJicL3wXJWMIjAng==/7926379325753633.jpg?param=130y130'
    },
    {
      id: 37,
      name: 'test6',
      singer: [{id: 1139, name: 'JesBrian13'}],
      poster: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=983893726,970464221&fm=26&gp=0.jpg'
    },
    {
      id: 38,
      name: 'test7',
      singer: [{id: 1149, name: 'JesBrian14'}],
      poster: 'http://p1.music.126.net/3M3PppFO_sWAV59dQOA2uA==/5890083790153984.jpg?param=130y130'
    }
  ]
}

const mutations = {
  /**
   * 上一首
   */
  PREV_INDEX (state) {
    state.nowIndex = state.nowIndex - 1 === -1 ? state.nowPlayList.length - 1 : state.nowIndex - 1
  },

  /**
   * 下一首
   */
  NEXT_INDEX (state) {
    state.nowIndex = state.nowIndex + 1 === state.nowPlayList.length ? 0 : state.nowIndex + 1
  },

  /**
   * 随机一首
   */
  RANDOM_INDEX (state) {
    let indexTemp
    do {
      indexTemp = Number.parseInt(state.nowPlayList.length * Math.random())
    } while (indexTemp === state.nowIndex)
    state.nowIndex = indexTemp
  },

  /**
   * 指定一首
   */
  GO_INDEX (state, index) {
    state.nowIndex = index
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
    state.nowIndex = -1
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
