<template>
  <!-- 音乐播放器组件 -->
  <div style="width:100%; height:48px; left:0; bottom:0; position:fixed;">
    <!-- 音乐播放器资源 -->
    <audio id="homeMusicSource" @ended="changeIsPlay" :src="'/static/music/' + this.$store.state.musicPlayList[musicPlayListNowIndex] + '.mp3'" controls style="top:0px; position:absolute;"></audio>

    <div class="glass-bg box-show" style="width:100%; height:100%; border-radius:0; opacity:0.96; background:#181818; z-index:9;">
      <div style="width:1208px; height:88%; margin:3px auto; line-height:42px; color:#999;">
        <!-- 播放控制 -->
        <div style="width:98px; height:100%; display:inline-block; text-align:center;">
          <i class="mh-if ahead" style="float:left; font-size:23px;"></i>
          <i @click="switchMusicPlay" class="mh-if" :class="this.$store.state.musicIsPlay ? 'stop' : 'play'" style="font-size:33px;"></i>
          <i class="mh-if back" style="float:right; font-size:23px;"></i>
        </div>
        <!-- 其他控制 -->
        <div style="height:100%; margin-right:23px; display:inline-block; float:right;">
          <i class="mh-if volume-on" style="margin-right:8px; font-size:23px;"></i>
          <i @click="changeMusicPlayModel" class="mh-if" :class="this.$store.state.musicPlayModel" style="margin-right:8px; font-size:22px;"></i>
          <i @click="changeMusicPlayListContentShowStatus" class="mh-if menu" style="margin-right:8px; position:relative; z-index:2; font-size:24px;">
            <span style="width:38px; height:19px; top:3.2px; left:20px; padding:0 3px; position:absolute; z-index:-1; background:#181818; box-sizing:border-box; border:1px solid #000; border-radius:0 9px 9px 0; text-align:center; font-size:11.5px; line-height:19px; color:#666; text-shadow:2px 2px 6px #000;">
              9999
            </span>
          </i>
        </div>
      </div>
    </div>

    <div v-if="this.$store.state.musicPlayListContentShowStatus === true" class="glass-bg box-show" style="width:1028px; height:290px; left:50%; bottom:45px; position:absolute; transform:translate(-50%,0); z-index:-1; background:#181818; opacity:0.96; border-radius:8px 8px 0 0;">
      <div class="box-show" style="width:100%; height:38px; border-radius:8px 8px 0 0; line-height:40px;">
        <div style="width:62%; height:100%; padding:0 2%; float:left; box-sizing:border-box; color:#DDD;">
          <span>播放列表 [ 9999 ]</span>
          <div style="float:right;">
            <a style="font-size:14px;"><i class="mh-if collection-music" style="margin:0 3px 0 18px;"></i>收藏全部</a>
            <a style="font-size:14px;"><i class="mh-if trash-2" style="margin:0 3px 0 18px;"></i>清空列表</a>
          </div>
        </div>
        <div style="width:38%; height:100%; float:right; position:relative; text-align:center;">
          <p style="width:80%; height:100%; margin:0 auto; display:inline-block;">
            Name of the Song
          </p>
          <i @click="changeMusicPlayListContentShowStatus" class="mh-if all-arrow" style="top:-7px; right:3px; position:absolute; font-size:20px; color:#DDD;"></i>
        </div>
      </div>
      <div class="box-show" style="width:100%; height:250px; padding-bottom:2px; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
        <!-- 歌曲列表 -->
        <div style="width:62%; height:100%; float:left; display:inline-block; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
          <gemini-scrollbar>
            <ul style="width:100%; height:100%; line-height:29px;">
              <li v-for="n in 18" :key="n + n" class="box-shadow" style="width:100%; height:28px;">12331 {{n}}</li>
            </ul>
          </gemini-scrollbar>
        </div>
        <!-- 歌词滚动区域 -->
        <div style="width:38%; height:100%; float:right; display:inline-block; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;"></div>
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
    switchMusicPlay () {
      this.$store.commit('changeMusicIsPlayStatus')
      this.$store.state.musicIsPlay ? this.musicSource.play() : this.musicSource.pause()
    },

    changeIsPlay () {
      if (this.$store.state.musicPlayModel === 'loop') {
        this.$store.commit('changemusicPlayListNowIndex')
      } else if (this.$store.state.musicPlayModel === 'single-loop') {
        this.musicSource.play()
      } else {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.$store.state.musicPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.musicPlayListNowIndex)
        this.$store.commit('changemusicPlayListNowIndex', indexTemp)
      }
    },

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

    changeMusicPlayListContentShowStatus () {
      this.$store.commit('changeMusicPlayListContentShowStatus')
    }
  }
}
</script>

<style scoped>

</style>
