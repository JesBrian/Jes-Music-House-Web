<template>
  <!-- 音乐播放器组件 -->
  <div class="music-play">

    <!-- 音乐播放器资源 -->
    <audio id="homeMusicSource" v-if="this.musicPlayList.length !== 0" preload @ended="nowMusicEndNextPlay" :src="'/static/music/' + this.musicPlayList[musicPlayListNowIndex].name + '.mp3'" style="top:0; position:absolute;"></audio>

    <!-- 播放器主控制 -->
    <div :class="{'show-unlock' : !musicPlayShow}" class="music-play-controller glass-bg box-show">
      <!--<div style="width:28px; border:8px solid; border-bottom:18px solid; border-color:transparent transparent rgba(18,18,18, 0.8) transparent; top:-26px; right:38px; position:absolute; z-index:-1; opacity:0.96;"></div>-->
      <div @click="changeShowMusicPlay" style="width:28px; border:8px solid; border-bottom:18px solid; border-color:transparent transparent rgba(18,18,18, 0.8) transparent; top:-26px; right:38px; position:absolute; z-index:-1; opacity:0.96;">
        <i :class="musicPlayShow ? 'lock' : 'unlock'" class="mh-if" style="bottom:-17px; right:6px; position:absolute;"></i>
      </div>

      <div style="width:1080px; height:88%; margin:3px auto; position:relative; z-index:5; line-height:42px; color:#AAA;">
        <!-- 播放控制 -->
        <div style="width:98px; height:100%; float:left; display:inline-block; text-align:center;">
          <i @click="prevMusic" class="mh-if double-arrow-left" style="margin-top:0.5px; float:left; font-size:18px;"></i>
          <i @click="switchMusicPlay" class="mh-if" :class="this.musicIsPlay ? 'stop' : 'play'" style="margin-right:-2px; font-size:33px;"></i>
          <i @click="nextMusic" class="mh-if double-arrow-right" style="margin-top:1px; float:right; font-size:18px;"></i>
        </div>
        <!-- 歌曲控制 -->
        <div style="width:800px; height:100%; padding:0 0 0 28px; box-sizing:border-box; display:inline-block;">
          <router-link id="songResource" to="/song" class="glass-bg" style="width:31px; height:31px; margin:4px 0; float:left; display:inline-block;">
            <img v-lazy="require('../../../../static/img/default/default_album.jpg')" style="width:100%; height:100%; border-radius:3.5px;" />
          </router-link>
          <div style="width:628px; height:100%; margin-left:28px; display:inline-block;">
            <div style="width:100%; height:19px; font-size:13.5px;">
              <router-link to="/song" style="height:100%; margin:-10.5px 28px 0 8px; float:left; color:#AAA;">Name of the Song 123 歌曲名字</router-link>
              <router-link to="/singer/11" style="height:100%; margin-top:-10.7px; float:left; font-size:12px; color:#AAA;">歌手<i style="margin:0 3px;">/</i>Singer Name</router-link>
            </div>
            <!-- 播放进度 -->
            <div @click="clickMusicProgressBar" id="progressBarClickContent" class="box-show" style="width:508px; height:10px; margin-top:5px; float:left; position:relative; border-radius:8px; background:#000;">
              <div :style="{'width': musicBufferedRate * 100 + '%'}" class="box-show" style="width:0; height:100%; border-radius:6px; background:#181818; z-index:9;"></div>
              <div :style="{'width': musicCTime / musicDTime * 100 + '%'}" style="height:83%; top:9%; left:0; position:absolute; background:linear-gradient(to right, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px;">
                <a @mousedown="dragProgressControllerPointer" id="progressPointer" class="controller-pointer box-show" style="top:-4px; right:-9px;"></a>
              </div>
            </div>
            <!-- 播放时间 -->
            <div style="width:16%; height:50%; float:right; text-align:center; line-height:8px; font-size:13.5px;">
              {{ timeStampToTime(musicCTime) }} - {{ timeStampToTime(musicDTime) }}
            </div>
          </div>
          <div style="float:right;">
            <i class="mh-if add-collection" style="margin-right:6px; font-size:24px;"></i>
            <i class="mh-if share" style="margin-right:6px; font-size:20px; font-weight:700;"></i>
          </div>
        </div>
        <!-- 其他控制 -->
        <div style="height:100%; margin:0 23px; display:inline-block; float:right;">
          <!-- 音量 -->
          <div id="volumeButton" style="margin-right:8px; display:inline-block; position:relative;">
            <i @click="changeMusicVolumeStatus" class="mh-if" :class="this.musicVolumeStatus ? 'volume-on' : 'volume-off'" style="font-size:23px;"></i>
            <div v-show="this.musicVolumeStatus" id="volumeBar">
              <div class="glass-bg box-show" style="width:100%; height:96%;">
                <div @click="clickMusicVolumeBar" id="volumeBarClickContent" class="box-show" style="width:10px; height:100px; margin:13px 9.5px 0; display:inline-block; position:relative; border-radius:5px; background:#000;">
                  <div :style="{'height': this.musicVolumeLevel * 100 + '%'}" style="width:100%; left:0; bottom:0; background:linear-gradient(to top, #007EF0, #00D8FF, #00D8FF, #5EEBFF); border-radius:6px; position:absolute;">
                    <a @mousedown="dragVolumeControllerPointer" class="controller-pointer box-show" style="top:-9px; right:-4px;"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 播放模式 -->
          <i @click="changeMusicPlayModel" class="play-model mh-if" :class="this.musicPlayModel" style="margin-right:8px; position:relative; z-index:2; font-size:22px;">
            <span class="glass-bg box-show">{{ musicPlayModel === 'loop' ? '循环列表': musicPlayModel === 'single-loop' ? '单曲循环' : '随机播放' }}</span>
          </i>
          <!-- 播放列表 -->
          <i @click="changeMusicPlayListContentShowStatus" class="mh-if menu" style="margin-right:8px; position:relative; z-index:2; font-size:24px;">
            <span style="width:38px; height:19px; top:3.2px; left:20px; padding:0 3px; position:absolute; z-index:-1; box-sizing:border-box; border-radius:0 10px 10px 0;
             box-shadow:0.3px 0.3px 2.5px -0.6px #AAA, inset 0 0 6px #000, inset 0 2px 2px #000, inset 3px 0 2px #000, inset -2px 0 2px #000;
             text-align:center; font-size:12.5px; line-height:20px; color:#666; text-shadow:2px 2px 6px #000;">{{ this.musicPlayList.length }}</span>
          </i>
        </div>

        <div style="width:0; height:100%; margin:0; padding:0; float:right; display:inline-block; border-right:1px solid; border-image:linear-gradient(#181818, #1D1D1D, #080808, #1D1D1D, #181818) 1 1;"></div>
        <div style="width:0; height:100%; margin:0; padding:0; float:right; display:inline-block; border-left:1px solid; border-image:linear-gradient(#181818, #1D1D1D, #444, #1D1D1D, #181818) 1 1;"></div>
      </div>
    </div>

    <!-- 播放列表内容区域 -->
    <div v-show="this.musicPlayListContentShowStatus" class="glass-bg box-show" style="width:1028px; height:290px; left:50%; bottom:45px; position:absolute; transform:translate(-50%,0); z-index:-1; background:#151515; opacity:0.988; border-radius:8px 8px 0 0; color:#999;">
      <div class="box-show" style="width:100%; height:38px; border-radius:8px 8px 0 0; line-height:40px; z-index:9;">
        <div style="width:62%; height:100%; padding:0 2%; float:left; box-sizing:border-box;">
          <span style="font-weight:700;">播放列表 [ {{ this.musicPlayList.length }} ]</span>
          <div style="float:right;">
            <a style="font-size:14px;"><i class="mh-if collection-music" style="margin:0 3px 0 18px;"></i>收藏全部</a>
            <a @click="clearMusicPlayList" style="font-size:14px;"><i class="mh-if trash-2" style="margin:0 3px 0 18px;"></i>清空列表</a>
          </div>
        </div>
        <div style="width:38%; height:100%; float:right; position:relative; text-align:center;">
          <p style="width:80%; height:100%; margin:0 auto; display:inline-block;">Name of the Song</p>
          <i @click="changeMusicPlayListContentShowStatus" class="mh-if all-arrow" style="top:-3px; right:5px; position:absolute; font-size:20px;"></i>
        </div>
      </div>
      <div class="box-show" style="width:100%; height:250px; padding-bottom:2px; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727; font-size:14px;">
        <!-- 歌曲列表 -->
        <div style="width:62%; height:100%; padding-top:3px; float:left; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
          <!--<gemini-scrollbar>-->
            <ul style="width:100%; height:100%; line-height:27px; overflow-y:auto; overflow-x:hidden;">
              <li v-for="(item ,index) in musicPlayList" :key="index + 99" class="box-shadow" style="width:100%; height:28px; padding:1px; box-sizing:border-box; z-index:2;">
                <div :class="{'active': musicPlayListNowIndex === index}" class="music-list-cell" style="width:100%; height:100%; position:relative;">

                  <!-- BEGIN 点击切换播放歌曲 BEGIN -->
                  <div @click="playThisMusic(index)" style="width:100%; height:100%; position:relative; z-index:1;"></div>
                  <!-- END 点击切换播放歌曲 END -->

                  <!-- BEGIN 歌曲信息 OR 操作 BEGIN -->
                  <p @click="playThisMusic(index)" class="mh-if play" style="width:23px; display:inline-block; text-align:right;"></p>
                  <p @click="playThisMusic(index)" style="max-width:288px; left:33px; display:inline-block;">12331 {{ item.name }}</p>
                  <p class="music-cell-oper">
                    <i style="margin-left:3.5px;" class="mh-if non-colloection"></i>
                    <i style="margin-left:3.5px;" class="mh-if share"></i>
                    <i style="margin-left:3.5px;" class="mh-if download"></i>
                    <i @click="delMusicListItem(index)" style="margin-left:3.5px;" class="mh-if trash-1"></i>
                  </p>
                  <p style="max-width:18%; left:432px; display:inline-block;">
                    <router-link to="/singer/11" style="color:#999;">{{ index }}</router-link>
                  </p>
                  <p @click="playThisMusic(index)" style="width:6%; left:568px; display:inline-block;">00:00</p>
                  <!-- END 歌曲信息 OR 操作 END -->

                </div>
              </li>
            </ul>
          <!--</gemini-scrollbar>-->
        </div>
        <!-- 歌词滚动区域 -->
        <div style="width:38%; height:100%; float:right; display:inline-block; position:relative; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
          <!-- 歌词报错 -->
          <i class="mh-if question">
            <ul class="glass-bg box-show">
              <li class="box-shadow"><router-link to="/">上传歌词</router-link></li>
              <li class="box-shadow"><router-link to="/">歌词报错</router-link></li>
            </ul>
          </i>
          <!-- 滚动歌词区域 -->
          <div style="width:100%; height:100%; padding:8px 0 3px; box-sizing:border-box; text-align:center; font-size:13px; line-height:1.5em; color:#777; overflow:auto;">
            <gemini-scrollbar>
              <ul style="padding:0 18px; box-sizing:border-box;">
                <li>rdtGbuybjk</li><li>rbuyb</li><li>rdt非常需要他vsvdGbuybjk</li><li>vvsdv</li><li>rdt56bjk</li><li>rbuyb</li><li>rdtvGy尝试</li><li>vvsdv</li><li>rdtGbuybjGbuGbuybjGbuybjGbuybjk</li><li>rbuyb</li><li>rdt非常需要buybjk</li><li>vvsdv</li><li>r</li><li>r产生d生dt56bjk</li><li>rbuyb</li><li class="active" style="margin:23px 0; font-size:17px; color:#DDD;">rdbn超时vcnv嘎的基本chsia吉林省v从sj空casnl长沙，klfuicasctv试</li><li>vvscasdv</li><li>rbuyb</li><li>rdt非常需要他vsvdGbuybjk</li><li>vvsdv</li><li>rdt56bjk</li><li>rbuyb</li><li>rdGy尝vGy尝ty尝vGy尝tv试</li><li>vvsdv</li><li>rdtGbuybjk</li><li>rbuybrbuybrbuybrbuybrbuyb</li><li>rdt非常需要buybjk</li><li>vvsdv</li><li>r产生dt56bjk</li><li>rbuyb</li><li>rdtvGy尝试</li><li>vvscasdv</li>
              </ul>
            </gemini-scrollbar>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {timeStampToTime} from '../../../assets/js/music/base.js'

export default {
  name: 'MusicPlayer',

  data () {
    return {
      musicPlayShow: true,
      musicSource: null, // 音乐资源 MP3
      musicCTime: 0,
      musicDTime: 0,
      musicBufferedRate: 0,
      timer: null,
      musicIsPlay: false, // 音乐播放/暂停状态
      musicVolumeStatus: true, // 音量开关状态
      musicVolumeLevel: 0.8, // 音量大小
      musicPlayModel: 'loop', // 三种播放模式 [ loop-歌单循环，single-loop-单曲循环，random-歌单里歌曲随机播放 ]
      musicPlayListNowIndex: 0, // 当前播放歌曲的下标 - 对应播放列表 musicPlayList 的数组下标
      musicPlayList: [
        {
          id: '11',
          name: 'test1'
        },
        {
          id: '12',
          name: 'test2'
        },
        {
          id: '13',
          name: 'test3'
        },
        {
          id: '14',
          name: 'test4'
        },
        {
          id: '15',
          name: 'test5'
        },
        {
          id: '16',
          name: 'test6'
        },
        {
          id: '17',
          name: 'test7'
        },
        {
          id: '18',
          name: 'test1'
        },
        {
          id: '19',
          name: 'test2'
        },
        {
          id: '20',
          name: 'test3'
        },
        {
          id: '21',
          name: 'test4'
        },
        {
          id: '22',
          name: 'test5'
        },
        {
          id: '23',
          name: 'test6'
        },
        {
          id: '24',
          name: 'test7'
        }
      ],
      musicPlayListContentShowStatus: false
    }
  },

  mounted () {
    this.musicSource = document.getElementById('homeMusicSource')
    this.musicSource.volume = this.musicVolumeLevel

    this.musicSource.addEventListener('timeupdate', this._currentTime)
    this.musicSource.addEventListener('canplay', this._durationTime)
    this.musicSource.addEventListener('canplay', this._musicBuffered)
  },

  beforeDestroy () {
    this.musicSource.removeEventListener('timeupdate', this._currentTime)
    this.musicSource.removeEventListener('canplay', this._durationTime)
    this.musicSource.removeEventListener('canplay', this._musicBuffered)
  },

  watch: {
    '$route' () {
      this.musicPlayListContentShowStatus = false
    },

    musicPlayListNowIndex () {
      setTimeout(() => {
        this.musicSource.play()
      }, 88)
    },

    musicVolumeLevel () {
      this.musicSource.volume = this.musicVolumeLevel
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
        this.musicBufferedRate = this.musicSource.buffered.end(0) / this.musicDTime
        if (this.musicBufferedRate === 1) {
          clearInterval(this.timer)
          this.timer = null
        }
      }, 368)
    },

    /**
     * 音乐播放 OR 停止
     */
    switchMusicPlay () {
      if (this.musicPlayList.length === 0) {
        return false
      }
      this.musicIsPlay = !this.musicIsPlay
      this.musicIsPlay ? this.musicSource.play() : this.musicSource.pause()
    },

    /**
     * 上一首播放
     */
    prevMusic () {
      if (this.musicPlayList.length === 0) {
        return false
      }
      if (this.musicPlayModel === 'random') {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.musicPlayList.length * Math.random())
        } while (indexTemp === this.musicPlayListNowIndex)
        this.changemusicPlayListNowIndex({nowIndexNum: indexTemp})
      } else {
        this.changemusicPlayListNowIndex({nowIndexNum: -1, prevOrNext: 'prev'})
      }
    },

    /**
     * 下一首播放
     */
    nextMusic () {
      if (this.musicPlayList.length === 0) {
        return false
      }
      if (this.musicPlayModel === 'random') {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.musicPlayList.length * Math.random())
        } while (indexTemp === this.musicPlayListNowIndex)
        this.changemusicPlayListNowIndex({nowIndexNum: indexTemp})
      } else {
        this.changemusicPlayListNowIndex()
      }
    },

    /**
     * 播放结束下一首
     */
    nowMusicEndNextPlay () {
      if (this.musicPlayModel === 'loop') {
        this.changemusicPlayListNowIndex()
      } else if (this.musicPlayModel === 'single-loop') {
        this.musicSource.play()
      } else {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.musicPlayList.length * Math.random())
        } while (indexTemp === this.musicPlayListNowIndex)
        this.changemusicPlayListNowIndex({nowIndexNum: indexTemp})
      }
    },

    /**
     * 切换播放列表中的歌曲
     * @param playIndex
     */
    playThisMusic (playIndex) {
      this.changemusicPlayListNowIndex({nowIndexNum: playIndex})
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
      this.musicVolumeStatus ? this.musicSource.volume = 0 : this.musicSource.volume = this.musicVolumeLevel
      this.musicVolumeStatus = !this.musicVolumeStatus
    },

    /**
     * 修改音量大小
     */
    changeMusicVolume (volume = 0) {
      if (volume < 0 || volume > 1) {
        return false
      }
      this.musicVolumeLevel = volume
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

    /**
     * 改变现在播放音乐在播放列表的索引号
     * @param option
     */
    changemusicPlayListNowIndex (option = {nowIndexNum: -1, prevOrNext: 'next'}) {
      this.musicIsPlay = true
      if (option.nowIndexNum === -1) {
        if ((option.prevOrNext === 'next') && ((this.musicPlayListNowIndex + 1) === this.musicPlayList.length)) {
          this.musicPlayListNowIndex = 0
        } else if ((option.prevOrNext === 'prev') && ((this.musicPlayListNowIndex - 1) === -1)) {
          this.musicPlayListNowIndex = this.musicPlayList.length - 1
        } else if ((option.prevOrNext === 'next') && ((this.musicPlayListNowIndex + 1) < this.musicPlayList.length)) {
          this.musicPlayListNowIndex++
        } else {
          this.musicPlayListNowIndex--
        }
      } else {
        this.musicPlayListNowIndex = option.nowIndexNum
      }
    },

    /**
     * 清空播放列表
     */
    clearMusicPlayList () {
      this.musicSource.pause()
      this.delMusicPlayList()
    },

    /**
     * 删除播放列表某项
     * @param delMusicListIndex
     */
    delMusicListItem (delMusicListIndex) {
      this.delMusicPlayList(delMusicListIndex)
      setTimeout(() => {
        this.musicIsPlay ? this.musicSource.play() : this.musicSource.pause()
      }, 88)
    },

    /**
     * 删除特定/清空播放列表
     * @param delMusicListIndex
     */
    delMusicPlayList (delMusicListIndex = -1) {
      if (delMusicListIndex === -1) {
        this.musicIsPlay = false
        this.musicPlayListNowIndex = 0
        this.musicPlayList = []
      } else {
        if (delMusicListIndex < this.musicPlayListNowIndex) {
          this.musicPlayListNowIndex--
        }
        this.musicPlayList.splice(delMusicListIndex, 1)
      }
      if (this.musicPlayList.length === 0) {
        this.musicSource.pause()
        this.musicSource.src = ''
        this.musicIsPlay = false
        this.musicDTime = 0
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
    }
  }
}
</script>

<style scoped>
  .mh-if {
    color:#999; text-shadow: 0 0 6px #000;
  }
  .mh-if:hover {
    cursor:pointer; color: #46dfff; text-shadow: 0 0 3px #666, 0 0 18px #000; opacity:1!important;
  }

  .music-play {
    width:100%; height:48px; left:0; bottom:0; position:fixed;
  }
  .music-play-controller {
    width:100%; height:100%; position:absolute; border-radius:0; background:rgba(24,24,24,0.985); z-index:9;
    transition: all 0.28s;
  }
  .music-play > .music-play-controller.show-unlock {
    bottom:-42px;
  }
  .music-play:hover > .music-play-controller.show-unlock {
    bottom:0;
  }

  #songResource {
    box-shadow:0 0.5px 3px -2px #FFF;
  }
  #songResource:hover {
    box-shadow:0 0.5px 3px -0.8px #FFF;
  }

  .controller-pointer {
    width:18px; height:18px; position:absolute; display:inline-block; border-radius:50%; line-height:12px; text-align:center;
    background:url(../../../../static/img/default/slide-pointer.png) no-repeat; background-size:100% 100%;
  }
  .controller-pointer:hover {
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727, 0 0 8px #2af1fc;
  }

  #volumeButton {
    display:inline-block;
  }
  #volumeBar {
    width:30px; height:133px; left:-20%; bottom:41.5px; position:absolute;
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

  .play-model > span {
    width:80px; height:28px; top:-43px; left:50%; padding-left:2px; position:absolute; transform:translate(-50%,0); display:none; text-align:center; font-size:15px; line-height:28px; letter-spacing:1.2px;
  }
  .play-model:hover > span {
    display: block;
  }

  .music-list-cell .play {
    opacity:0;
    color: #20dbfc;
  }
  .music-list-cell.active > .play {
    opacity:1;
  }
  .music-list-cell .music-cell-oper {
    width:15%;
    left:325px;
    opacity:0;
    display:inline-block;
  }
  .music-list-cell {
    padding:0 13px 0 0;
  }
  .music-list-cell:hover, .music-list-cell.active {
    color:#EEE;
  }
  .music-list-cell:hover {
    background:#0B0B0B;
  }
  .music-list-cell.active {
    background:#030303;
  }
  .music-list-cell:hover > .music-cell-oper {
    opacity:1;
  }
  .music-list-cell > p {
    top:0;
    position:absolute;
    z-index:9;
  }

  .question {
    right:38px; top:53px; position:fixed; font-size:25px; opacity:0.38; z-index:9;
  }
  .question a {
    color:#999;
    text-shadow:none;
  }
  .question > ul.glass-bg{
    width:76px; top:25px;  left:50%; padding:3px; position:absolute; transform:translate(-50%, 0); font-size:14px; text-align:center;
    display:none;
  }
  .question > ul.glass-bg > li{
    padding:6px 0;
  }
  .question:hover > ul.glass-bg{
    display:block;
  }
</style>
