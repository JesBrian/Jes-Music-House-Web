<template>
  <!-- 音乐播放器组件 -->
  <div style="width:100%; height:48px; left:0; bottom:0; position:fixed;">
    <!-- 音乐播放器资源 -->
    <audio id="homeMusicSource" @ended="nowMusicEndNextPlay" :src="'/static/music/' + this.$store.state.musicPlayList[musicPlayListNowIndex] + '.mp3'" style="top:0; position:absolute;"></audio>

    <!-- 播放器主控制 -->
    <div class="glass-bg box-show" style="width:100%; height:100%; border-radius:0; opacity:0.96; background:#181818; z-index:9;">
      <div style="width:1208px; height:88%; margin:3px auto; line-height:42px; color:#AAA;">
        <!-- 播放控制 -->
        <div style="width:98px; height:100%; float:left; display:inline-block; text-align:center;">
          <i @click="prevMusic" class="mh-if double-arrow-left" style="margin-top:0.5px; float:left; font-size:18px;"></i>
          <i @click="switchMusicPlay" class="mh-if" :class="this.$store.state.musicIsPlay ? 'stop' : 'play'" style="margin-right:-2px; font-size:33px;"></i>
          <i @click="nextMusic" class="mh-if double-arrow-right" style="margin-top:1px; float:right; font-size:18px;"></i>
        </div>
        <!-- 歌曲控制 -->
        <div style="width:968px; height:100%; padding:0 16px 0 28px; box-sizing:border-box; display:inline-block; border-right:2px solid; border-image:linear-gradient(#181818, #1D1D1D, #444, #222, #181818) 1 1;">
          <router-link id="songResource" to="/song" class="glass-bg" style="width:31px; height:31px; margin:4px 0; float:left; display:inline-block;">
            <img v-lazy="require('../../../../static/img/default/default_album.jpg')" style="width:100%; height:100%; border-radius:3.5px;" />
          </router-link>
          <div style="width:768px; height:100%; margin-left:28px; display:inline-block;">
            <div style="width:100%; height:19px; font-size:13.5px;">
              <router-link to="/song" style="height:100%; margin:-10.5px 28px 0 0; float:left; color:#AAA;">Name of the Song 123 歌曲名字</router-link>
              <router-link to="/singer" style="height:100%; margin-top:-10.7px; float:left; font-size:12px; color:#AAA;">歌手/Singer Name</router-link>
            </div>
            <!-- 播放进度 -->
            <div class="box-show" style="width:84%; height:10px; margin-top:5.5px; float:left; border-radius:8px; background:#000;">
              <div class="box-show" style="width:68%; height:100%; border-radius:6px; background:#181818; z-index:9;">
                <div style="width:68%; height:90%; background:linear-gradient(to right, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px; position:relative;">
                  <a id="progressPointer" class="controller-pointer glass-bg box-show"></a>
                </div>
              </div>
            </div>
            <div style="width:16%; height:50%; float:right; text-align:center; line-height:18.5px; font-size:13.5px;">
              00:00 - 99:99
            </div>
          </div>
          <div style="float:right;">
            <i class="mh-if add-collection" style="margin-right:6px; font-size:24px;"></i>
            <i class="mh-if share" style="margin-right:6px; font-size:22px; font-weight:700;"></i>
          </div>
        </div>
        <!-- 其他控制 -->
        <div style="height:100%; margin-right:23px; display:inline-block; float:right;">
          <div id="volumeButton" style="margin-right:8px; display:inline-block; position:relative;">
            <i @click="changeMusicVolumeStatus" class="mh-if" :class="this.$store.state.musicVolumeStatus ? 'volume-on' : 'volume-off'" style="font-size:23px;"></i>
            <div v-show="this.$store.state.musicVolumeStatus" id="volumeBar">
              <div class="glass-bg box-show" style="width:100%; height:96%;">
                <div class="box-show" style="width:10px; height:88%; margin:7px 9.5px; display:inline-block; position:relative; border-radius:5px; background:#000;">
                  <div style="width:100%; height:68%; left:0; bottom:0; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px; position:absolute;">
                    <a class="controller-pointer glass-bg box-show" style="right:-4px;"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <i @click="changeMusicPlayModel" class="mh-if" :class="this.$store.state.musicPlayModel" style="margin-right:8px; font-size:22px;"></i>
          <i @click="changeMusicPlayListContentShowStatus" class="mh-if menu" style="margin-right:8px; position:relative; z-index:2; font-size:24px;">
            <span class="box-show" style="width:38px; height:19px; top:3.2px; left:20px; padding:0 3px; position:absolute; z-index:-1; background:#000; box-sizing:border-box; border-radius:0 9px 9px 0; text-align:center; font-size:12.5px; line-height:20px; color:#666; text-shadow:2px 2px 6px #000;">
              {{ this.$store.state.musicPlayList.length }}
            </span>
          </i>
        </div>
      </div>
    </div>

    <!-- 播放列表内容区域 -->
    <div v-if="this.$store.state.musicPlayListContentShowStatus === true" class="glass-bg box-show" style="width:1028px; height:290px; left:50%; bottom:45px; position:absolute; transform:translate(-50%,0); z-index:-1; background:#181818; opacity:0.96; border-radius:8px 8px 0 0; color:#AAA;">
      <div class="box-show" style="width:100%; height:38px; border-radius:8px 8px 0 0; line-height:40px;">
        <div style="width:62%; height:100%; padding:0 2%; float:left; box-sizing:border-box;">
          <span style="font-weight:700;">播放列表 [ {{ this.$store.state.musicPlayList.length }} ]</span>
          <div style="float:right;">
            <a style="font-size:14px;"><i class="mh-if collection-music" style="margin:0 3px 0 18px;"></i>收藏全部</a>
            <a style="font-size:14px;"><i class="mh-if trash-2" style="margin:0 3px 0 18px;"></i>清空列表</a>
          </div>
        </div>
        <div style="width:38%; height:100%; float:right; position:relative; text-align:center;">
          <p style="width:80%; height:100%; margin:0 auto; display:inline-block;">Name of the Song</p>
          <i @click="changeMusicPlayListContentShowStatus" class="mh-if all-arrow" style="top:-3px; right:5px; position:absolute; font-size:20px;"></i>
        </div>
      </div>
      <div class="box-show" style="width:100%; height:250px; padding-bottom:2px; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727; font-size:14px;">
        <!-- 歌曲列表 -->
        <div style="width:62%; height:100%; float:left; display:inline-block; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
          <gemini-scrollbar>
            <ul style="width:100%; height:100%; line-height:27px;">
              <li v-for="n in 12" :key="n + n" class="box-shadow" style="width:100%; height:28px; padding:0 13px; box-sizing:border-box;">
                <i class="mh-if play" style="margin-right:6px;"></i>
                <p style="width:50%; display:inline-block; background:lightgreen;">12331 {{n}}</p>
                <p style="width:15%; display:inline-block;">
                  <i style="margin-left:2px;" class="mh-if non-colloection"></i>
                  <i style="margin-left:2px;" class="mh-if share"></i>
                  <i style="margin-left:2px;" class="mh-if download"></i>
                  <i style="margin-left:2px;" class="mh-if trash-1"></i>
                </p>
                <p style="width:20%; display:inline-block; background:#7596ff;">
                  <router-link to="/singer">{{n}}{{n}}</router-link>
                </p>
                <span style="width:8%; display:inline-block;">00:00</span>
              </li>
            </ul>
          </gemini-scrollbar>
        </div>
        <!-- 歌词滚动区域 -->
        <div style="width:38%; height:100%; float:right; display:inline-block; position:relative; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
          <i class="mh-if question" style="right:18px; top:53px; position:fixed; font-size:25px; opacity:0.38; z-index:9;"></i>
          <div style="width:100%; height:100%; padding:12px 0 3px; box-sizing:border-box; text-align:center; line-height:1.5em;">
            <gemini-scrollbar>
              <ul>
                <li>rdtGbuybjk</li><li>rbuyb</li><li>rdt非常需要他vsvdGbuybjk</li><li>vvsdv</li><li>rdt56bjk</li><li>rbuyb</li><li>rdtvGy尝试</li><li>vvsdv</li><li>rdtGbuybjGbuGbuybjGbuybjGbuybjk</li><li>rbuyb</li><li>rdt非常需要buybjk</li><li>vvsdv</li><li>r</li><li>r产生d生dt56bjk</li><li>rbuyb</li><li>rdbn超时vcnv嘎的基本chsia吉林省v从sj空casnl长沙，klfuicasctv试</li><li>vvscasdv</li><li>rbuyb</li><li>rdt非常需要他vsvdGbuybjk</li><li>vvsdv</li><li>rdt56bjk</li><li>rbuyb</li><li>rdGy尝vGy尝ty尝vGy尝tv试</li><li>vvsdv</li><li>rdtGbuybjk</li><li>rbuybrbuybrbuybrbuybrbuyb</li><li>rdt非常需要buybjk</li><li>vvsdv</li><li>r产生dt56bjk</li><li>rbuyb</li><li>rdtvGy尝试</li><li>vvscasdv</li>
              </ul>
            </gemini-scrollbar>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MusicPlayer',

  data () {
    return {
      musicSource: null
    }
  },

  mounted () {
    this.musicSource = document.getElementById('homeMusicSource')
  },

  watch: {
    musicPlayListNowIndex () {
      setTimeout(() => {
        this.musicSource.play()
      }, 68)
    }
  },

  computed: {
    musicPlayListNowIndex () {
      return this.$store.state.musicPlayListNowIndex
    }
  },

  methods: {
    /**
     * 音乐播放 OR 停止
     */
    switchMusicPlay () {
      this.$store.commit('changeMusicIsPlayStatus')
      this.$store.state.musicIsPlay ? this.musicSource.play() : this.musicSource.pause()
    },

    /**
     * 上一首播放
     */
    prevMusic () {
      if (this.$store.state.musicPlayModel === 'random') {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.$store.state.musicPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.musicPlayListNowIndex)
        this.$store.commit('changemusicPlayListNowIndex', {nowIndexNum: indexTemp})
      } else {
        this.$store.commit('changemusicPlayListNowIndex', {nowIndexNum: -1, prevOrNext: 'prev'})
      }
    },

    /**
     * 下一首播放
     */
    nextMusic () {
      if (this.$store.state.musicPlayModel === 'random') {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.$store.state.musicPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.musicPlayListNowIndex)
        this.$store.commit('changemusicPlayListNowIndex', {nowIndexNum: indexTemp})
      } else {
        this.$store.commit('changemusicPlayListNowIndex')
      }
    },

    /**
     * 播放结束下一首
     */
    nowMusicEndNextPlay () {
      if (this.$store.state.musicPlayModel === 'loop') {
        this.$store.commit('changemusicPlayListNowIndex')
      } else if (this.$store.state.musicPlayModel === 'single-loop') {
        this.musicSource.play()
      } else {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.$store.state.musicPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.musicPlayListNowIndex)
        this.$store.commit('changemusicPlayListNowIndex', {nowIndexNum: indexTemp})
      }
    },

    /**
     * 改变播放模式
     */
    changeMusicPlayModel () {
      let type
      if (this.$store.state.musicPlayModel === 'loop') {
        type = 'single-loop'
      } else if (this.$store.state.musicPlayModel === 'single-loop') {
        type = 'random'
      } else {
        type = 'loop'
      }
      this.$store.commit('changeMusicPlayModel', type)
    },

    /**
     * 是否展示播放列表内容
     */
    changeMusicPlayListContentShowStatus () {
      this.$store.commit('changeMusicPlayListContentShowStatus')
    },

    /**
     * 控制是否有音量
     */
    changeMusicVolumeStatus () {
      this.$store.commit('changeMusicVolumeStatus')
    }
  }
}
</script>

<style scoped>
  .mh-if {
    color:#999;
  }
  .mh-if:hover {
    cursor:pointer;
    color: #46dfff;
    text-shadow:0 0 1px #000, 0 0 3px #FFF;
    opacity:1!important;
  }
  .mh-if:hover > span {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727, 0 0 3px #FFF;
  }

  #songResource {
    box-shadow:0 0.5px 3px -2px #FFF;
  }
  #songResource:hover {
    box-shadow:0 0.5px 3px -0.8px #FFF;
  }

  .controller-pointer {
    width:18px; height:18px; top:-4px; right:-9px; position:absolute; display:inline-block; border-radius:50%; line-height:12px; text-align:center;
  }
  .controller-pointer:hover {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727, 0 0 8px #2af1fc;
  }

  #volumeButton {
    display:inline-block;
  }
  #volumeBar {
    width:30px; height:128px; left:-20%; bottom:41.5px; position:absolute;
    display:none;
  }
  #volumeBar > div {
    opacity:0.96; background:#181818; border-radius:4px 4px 0 0;
  }
  #volumeButton:hover > #volumeBar {
    display:block;
  }
  #volumeButton:hover > #volumeBar:hover {
    display:block;
  }
</style>
