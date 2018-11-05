<template>
  <!-- 音乐播放器组件 -->
  <div class="player">

    <!-- 音乐播放器资源 -->
    <audio id="homeMusicSource" v-if="$store.state.Music.nowPlayList.length !== 0" preload @ended="nowMusicEndNextPlay"
           :src="'/static/music/' + $store.state.Music.nowPlayList[$store.state.Music.nowIndex].name + '.mp3'"></audio>

    <!-- 播放器主控制 -->
    <div :class="{'show-unlock' : !musicPlayShow}" class="player-controller glass-bg box-show">
      <div @click="changeShowMusicPlay" class="player-controller-show">
        <i :class="musicPlayShow ? 'lock' : 'unlock'" class="player-controller-show-btn mh-if"></i>
      </div>

      <div class="player-controller-main">
        <!-- 播放控制 -->
        <div class="player-controller-main-play">
          <i @click="prevMusic" class="mh-if double-arrow-left"></i>
          <i @click="switchMusicPlay" class="mh-if" :class="this.musicIsPlay ? 'stop' : 'play'"></i>
          <i @click="nextMusic" class="mh-if double-arrow-right"></i>
        </div>

        <!-- 歌曲控制 -->
        <div class="player-controller-main-song">
          <router-link id="songResource" to="/song/1" class="glass-bg">
            <img :src="$store.state.Music.nowPlayList.length === 0 ? '../../../../static/img/default/default_album.jpg' : $store.state.Music.nowPlayList[$store.state.Music.nowIndex].poster" class="song-img" />
          </router-link>
          <div class="main-container">
            <div class="song-info">
              <router-link to="/song/1" class="song-info-name">
                {{ $store.state.Music.nowPlayList.length === 0 ? '' : $store.state.Music.nowPlayList[$store.state.Music.nowIndex].name }}
              </router-link>
              <router-link to="/singer-detail/hot-song/1" class="song-info-singer">
                歌手<i class="split">/</i>Singer Name
              </router-link>
            </div>
            <!-- 播放进度 -->
            <div @click="clickMusicProgressBar" id="progressBarClickContent" class="progress-bar box-show">
              <div :style="{'width': musicBufferedRate * 100 + '%'}" class="progress-bar-buffer box-show"></div>
              <div :style="{'width': musicCTime / musicDTime * 100 + '%'}" class="progress-bar-now">
                <a @mousedown="dragProgressControllerPointer" id="progressPointer" class="controller-pointer box-show">
                  <div v-if="musicLoading" style="width:100%; height:100%; position:relative;">
                    <img src="../../../assets/img/pointer-loading.svg" style="width:100%; height:100%;" />
                  </div>
                </a>
              </div>
            </div>
            <!-- 播放时间 -->
            <div class="song-time">
              {{ timeStampToTime(musicCTime) }} - {{ timeStampToTime(musicDTime) }}
            </div>
          </div>
          <div class="song-oper">
            <i @click="showModal('Collection')" class="mh-if add-collection"></i>
            <i @click="showModal('Share')" class="mh-if share"></i>
          </div>
        </div>

        <!-- 其他控制 -->
        <div class="player-controller-main-other">
          <!-- 音量 -->
          <div id="volumeButton">
            <i @click="changeMusicVolumeStatus" class="mh-if" :class="this.musicVolumeStatus ? 'volume-on' : 'volume-off'"></i>
            <div v-show="this.musicVolumeStatus" id="volumeBar">
              <div class="volume-bar glass-bg box-show">
                <div @click="clickMusicVolumeBar" id="volumeBarClickContent" class="box-show">
                  <div :style="{'height': this.musicVolumeLevel * 100 + '%'}" class="volume-bar-now">
                    <a @mousedown="dragVolumeControllerPointer" class="controller-pointer box-show"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 播放模式 -->
          <i @click="changeMusicPlayModel" class="play-model mh-if" :class="this.musicPlayModel">
            <span class="play-model-label glass-bg box-show">
              {{ musicPlayModel === 'loop' ? '循环列表': musicPlayModel === 'single-loop' ? '单曲循环' : '随机播放' }}
            </span>
          </i>
          <!-- 播放列表 -->
          <i @click="changeMusicPlayListContentShowStatus" class="play-menu mh-if menu">
            <span class="play-menu-label">{{ $store.state.Music.nowPlayList.length }}</span>
          </i>
        </div>
      </div>
    </div>

    <!-- 播放列表内容区域 -->
    <music-play-list-content v-if="musicPlayListContentShowStatus" />

  </div>
</template>

<script>
import { timeStampToTime } from '../../../assets/js/utils.js'
import MusicPlayListContent from './MusicPlayListContent.vue'

export default {
  name: 'MusicPlayer',

  components: {
    MusicPlayListContent
  },

  data () {
    return {
      musicPlayShow: true, // 播放器展示
      musicPlayListContentShowStatus: false, // 播放列表内容区域展示

      musicSource: null, // 音乐资源 MP3
      musicLoading: false, // 音乐资源加载
      musicCTime: 0,
      musicDTime: 0,
      musicBufferedRate: 0,
      musicIsPlay: false, // 音乐播放/暂停状态
      musicVolumeStatus: true, // 音量开关状态
      musicVolumeLevel: 0.38, // 音量大小
      musicPlayModel: 'loop', // 三种播放模式 [ loop-歌单循环，single-loop-单曲循环，random-歌单里歌曲随机播放 ]

      timer: null
    }
  },

  mounted () {
    this.musicSource = document.getElementById('homeMusicSource')
    this.musicSource.volume = this.musicVolumeLevel

    // 添加事件监听
    this.musicSource.addEventListener('timeupdate', this._currentTime)
    this.musicSource.addEventListener('canplay', this._durationTime)
    this.musicSource.addEventListener('canplay', this._musicBuffered)
  },

  beforeDestroy () {
    // 取消事件监听
    this.musicSource.removeEventListener('timeupdate', this._currentTime)
    this.musicSource.removeEventListener('canplay', this._durationTime)
    this.musicSource.removeEventListener('canplay', this._musicBuffered)
  },

  watch: {
    '$route' () {
      this.musicPlayListContentShowStatus = false
    }
  },

  methods: {
    changeShowMusicPlay () {
      this.musicPlayShow = !this.musicPlayShow
    },

    _currentTime () {
      this.musicCTime = this.musicSource.currentTime
    },
    _durationTime () {
      this.musicDTime = this.musicSource.duration
    },
    _musicBuffered () {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        if (this.musicSource.buffered.length !== 0) { // 容错处理
          this.musicLoading = false
          this.musicBufferedRate = this.musicSource.buffered.end(0) / this.musicDTime
          if (this.musicBufferedRate === 1) {
            clearInterval(this.timer)
            this.timer = null
          }
        } else {
          this.musicLoading = true
        }
      }, 368)
    },

    /**
     * 音乐播放 OR 停止
     */
    switchMusicPlay () {
      if (this.$store.state.Music.nowPlayList.length === 0) {
        return false
      }
      this.musicIsPlay = !this.musicIsPlay
      this.musicIsPlay ? this.musicSource.play() : this.musicSource.pause()
    },

    /**
     * 上一首播放
     */
    prevMusic () {
      if (this.$store.state.Music.nowPlayList.length === 0) {
        return false
      }
      if (this.musicPlayModel === 'random') {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.$store.state.Music.nowPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.Music.nowIndex)
        this.changeMusicPlayListNowIndex({nowIndexNum: indexTemp})
      } else {
        this.changeMusicPlayListNowIndex({nowIndexNum: -1, prevOrNext: 'prev'})
      }
    },

    /**
     * 下一首播放
     */
    nextMusic () {
      if (this.$store.state.Music.nowPlayList.length === 0) {
        return false
      }
      if (this.musicPlayModel === 'random') {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.$store.state.Music.nowPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.Music.nowIndex)
        this.changeMusicPlayListNowIndex({nowIndexNum: indexTemp})
      } else {
        this.changeMusicPlayListNowIndex()
      }
    },

    /**
     * 播放结束下一首
     */
    nowMusicEndNextPlay () {
      if (this.musicPlayModel === 'loop') {
        this.changeMusicPlayListNowIndex()
      } else if (this.musicPlayModel === 'single-loop') {
        this.musicSource.play()
      } else {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.musicPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.Music.nowIndex)
        this.changeMusicPlayListNowIndex({nowIndexNum: indexTemp})
      }
    },

    /**
     * 切换播放列表中的歌曲
     * @param playIndex
     */
    playThisMusic (playIndex) {
      this.changeMusicPlayListNowIndex({nowIndexNum: playIndex})
    },

    /**
     * 改变现在播放音乐在播放列表的索引号
     * @param option
     */
    changeMusicPlayListNowIndex (option = {nowIndexNum: -1, prevOrNext: 'next'}) {
      this.musicIsPlay = true
      if (option.nowIndexNum === -1) {
        if ((option.prevOrNext === 'next') && ((this.$store.state.Music.nowIndex + 1) === this.$store.state.Music.nowPlayList.length)) {
          this.musicPlayListNowIndex = 0
        } else if ((option.prevOrNext === 'prev') && ((this.$store.state.Music.nowIndex - 1) === -1)) {
          this.musicPlayListNowIndex = this.$store.state.Music.nowPlayList.length - 1
        } else if ((option.prevOrNext === 'next') && ((this.$store.state.Music.nowIndex + 1) < this.$store.state.Music.nowPlayList.length)) {
          this.musicPlayListNowIndex++
        } else {
          this.musicPlayListNowIndex--
        }
      } else {
        this.musicPlayListNowIndex = option.nowIndexNum
      }
    },

    /**
     * 改变播放模式
     */
    changeMusicPlayModel () {
      let type
      if (this.musicPlayModel === 'loop') {
        type = 'single-loop'
      } else if (this.musicPlayModel === 'single-loop') {
        type = 'random'
      } else {
        type = 'loop'
      }
      this.musicPlayModel = type
    },

    /**
     * 是否展示播放列表内容
     */
    changeMusicPlayListContentShowStatus () {
      this.musicPlayListContentShowStatus = !this.musicPlayListContentShowStatus
    },

    /**
     * 改变声音On或者Off状态
     */
    changeMusicVolumeStatus () {
      this.musicVolumeStatus = !this.musicVolumeStatus
      this.musicSource.volume = this.musicVolumeStatus ? this.musicVolumeLevel : 0
    },

    /**
     * 修改音量大小
     */
    changeMusicVolume (volume = 0) {
      if (volume < 0 || volume > 1) {
        return false
      }
      this.musicSource.volume = this.musicVolumeLevel = volume
    },

    /**
     * 点击音量条
     */
    clickMusicVolumeBar (event) {
      let mousePos = this.mouseCoords(event)
      let y = mousePos.y
      let y1 = this.getElementTop(document.getElementById('volumeBarClickContent'))
      this.changeMusicVolume(1 - (y - y1) / 100)
    },

    /**
     * 拖动音量指针
     */
    dragVolumeControllerPointer (event) {
      let y1 = this.getElementTop(document.getElementById('volumeBarClickContent'))
      // 注册document的mousemove事件
      document.onmousemove = (ev) => {
        let oEvent = ev || event
        let mousePos = this.mouseCoords(oEvent)
        let y = mousePos.y
        this.changeMusicVolume(1 - (y - y1) / 100)
      }

      // 鼠标放开清除事件
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },

    /**
     * 修改音乐播放进度
     */
    changeMusicPlayProgress (progress = 0) {
      if (progress < 0 || progress > 508) {
        return false
      }
      clearInterval(this.timer)
      let progressRate = progress / 508
      this.musicSource.currentTime = Number.parseInt(this.musicDTime * progressRate)
    },

    /**
     * 点击播放进度条
     */
    clickMusicProgressBar (event) {
      let mousePos = this.mouseCoords(event)
      let x = mousePos.x
      let x1 = this.getElementLeft(document.getElementById('progressBarClickContent'))
      this.changeMusicPlayProgress(x - x1)
    },

    /**
     * 拖动播放进度条指针
     */
    dragProgressControllerPointer (event) {
      let x1 = this.getElementLeft(document.getElementById('progressBarClickContent'))
      // 注册document的mousemove事件
      document.onmousemove = (ev) => {
        let oEvent = ev || event
        let mousePos = this.mouseCoords(oEvent)
        let x = mousePos.x
        this.changeMusicPlayProgress(x - x1)
      }

      // 鼠标放开清除事件
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },

    timeStampToTime (timeStamp) {
      return timeStampToTime(timeStamp)
    },

    mouseCoords (event) {
      if (event.pageX || event.pageY) {
        return {
          x: event.pageX,
          y: event.pageY
        }
      }
      return {
        x: event.clientX + document.body.scrollLeft - document.body.clientLeft,
        y: event.clientY + document.body.scrollTop - document.body.clientTop
      }
    },

    getElementLeft (element) {
      let actualLeft = element.offsetLeft
      let current = element.offsetParent
      while (current !== null) {
        actualLeft += current.offsetLeft
        current = current.offsetParent
      }
      return actualLeft
    },
    getElementTop (element) {
      let actualTop = element.offsetTop
      let current = element.offsetParent
      while (current !== null) {
        actualTop += current.offsetTop
        current = current.offsetParent
      }
      return actualTop
    },

    showModal (modalType) {
      this.$store.commit('CHANGE_MODAL_TYPE', modalType)
    }
  }
}
</script>

<style lang="less" scoped>
  .player {
    width:100%; height:48px; left:0; bottom:0; position:fixed;

    > #homeMusicSource {
      top:0; position:absolute;
    }

    &-controller {
      width:100%; height:100%; position:absolute; border-radius:0; background:rgba(24,24,24,0.985); z-index:9;
      transition: all 0.28s;
      &-show {
        width:28px; border:8px solid; border-bottom:18px solid; border-color:transparent transparent rgba(18,18,18, 0.8) transparent; top:-26px; right:38px; position:absolute; z-index:-1; opacity:0.96;
        &-btn {
          bottom:-17px; right:6px; position:absolute;
        }
      }

      &-main {
        width:1080px; height:88%; margin:3px auto; position:relative; z-index:5; line-height:42px; color:#AAA;

        &-play {
          width:98px; height:100%; float:left; display:inline-block; text-align:center;
          > .double-arrow-left {
            float:left; font-size:18px;
          }
          > .play, .stop {
            margin-right:-2px; font-size:33px;
          }
          > .double-arrow-right {
            float:right; font-size:18px;
          }
        }
        &-song {
          width:800px; height:100%; padding:0 0 0 28px; box-sizing:border-box; display:inline-block;
          .song-img {
            width:98%; height:100%; margin:0 auto; border-radius:3.5px;
          }
          > .main-container {
            width:628px; height:100%; margin-left:28px; display:inline-block;
            .song-info {
              width:100%; height:19px; font-size:13.5px;
              &-name {
                height:100%; margin:-10.5px 28px 0 8px; float:left; color:#AAA;
              }
              &-singer {
                height:100%; margin-top:-10.7px; float:left; font-size:12px; color:#AAA;
                > .split {
                  padding:0 5px 0 3px; cursor:default;
                }
              }
            }
            .progress-bar {
              width:508px; height:10px; margin-top:5px; float:left; position:relative; border-radius:8px; background:#000;
              &-buffer {
                width:0; height:100%; border-radius:6px; background:#181818; z-index:9;
              }
              &-now {
                height:83%; top:9%; left:0; position:absolute; background:linear-gradient(to right, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px;
                > .controller-pointer {
                  top:-4px; right:-9px;
                }
              }
            }
            .song-time {
              width:16%; height:50%; float:right; text-align:center; line-height:8px; font-size:13.5px;
            }
          }

          > .song-oper {
            float:right;
            > .add-collection {
              margin-right:6px; font-size:24px;
            }
            > .share {
              font-size:20px; font-weight:700;
            }
          }

          > #songResource {
            width:31px; height:31px; margin:4px 0; float:left; display:inline-block; box-shadow:0 0.5px 3px -2px #FFF;
            &:hover {
              box-shadow:0 0.5px 3px -0.8px #FFF;
            }
          }
        }
        &-other {
          height:100%; margin:0 23px; display:inline-block; float:right;
          #volumeButton {
            margin-right:8px; display:inline-block; position:relative;
            > .mh-if {
              font-size:23px;
            }
            > #volumeBar {
              width:30px; height:133px; left:-20%; bottom:41.5px; position:absolute;
              display:none;
              .volume-bar {
                width:100%; height:96%; opacity:0.96; background:#181818; border-radius:4px 4px 0 0;
                #volumeBarClickContent {
                  width:10px; height:100px; margin:13px 9.5px 0; display:inline-block; position:relative; border-radius:5px; background:#000;
                }
                &-now {
                  width:100%; left:0; bottom:0; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px; position:absolute;
                  .controller-pointer {
                    top:-10px; right:-4px;
                  }
                }
              }
            }
            &:hover > #volumeBar {
              display:block;
            }
          }
          .play-model {
            margin-right:8px; position:relative; z-index:2; font-size:22px;
            &-label {
              width:80px; height:28px; top:-43px; left:50%; padding-left:2px; position:absolute; transform:translate(-50%,0); display:none; text-align:center; font-size:15px; line-height:28px; letter-spacing:1.2px;
            }
            &:hover > .play-model-label {
              display: block;
            }
          }
          .play-menu {
            margin-right:8px; position:relative; z-index:2; font-size:24px;
            &-label {
              width:38px; height:19px; top:3.2px; left:20px; padding:0 3px; position:absolute; z-index:-1; box-sizing:border-box; border-radius:0 10px 10px 0;
              box-shadow:0.3px 0.3px 2.5px -0.6px #AAA, inset 0 0 6px #000, inset 0 2px 2px #000, inset 3px 0 2px #000, inset -2px 0 2px #000;
              text-align:center; font-size:12.5px; line-height:20px; color:#666; text-shadow:2px 2px 6px #000;
            }
          }
        }
      }
    }

    > .player-controller.show-unlock {
      bottom:-42px;
    }
    &:hover > .player-controller.show-unlock {
      bottom:0;
    }
  }

  .mh-if {
    color:#999; text-shadow: 0 0 6px #000;
  }
  .mh-if:hover {
    cursor:pointer; color: #46dfff; text-shadow: 0 0 3px #666, 0 0 18px #000; opacity:1!important;
  }

  .controller-pointer {
    width:18px; height:18px; position:absolute; display:inline-block; border-radius:50%; line-height:12px; text-align:center;
    background:url(../../../../static/img/default/slide-pointer.png) no-repeat; background-size:100% 100%;
  }
  .controller-pointer:hover {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727, 0 0 8px #2af1fc;
  }
</style>
