<template>
  <!-- 音乐播放器组件 -->
  <div style="width:100%; height:48px; left:0; bottom:0; position:fixed;">
    <!-- 音乐播放器资源 -->
    <audio id="homeMusicSource" @ended="changeIsPlay" :src="'/static/music/' + this.$store.state.musicPlayList[musicPlayNowIndex] + '.mp3'" controls style="top:-128px; position:absolute;"></audio>

    <div class="glass-bg box-show" style="width:100%; height:100%; border-radius:0; opacity:0.96; background:#282828; z-index:9;">
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
          <i class="mh-if menu" style="margin-right:8px; position:relative; font-size:24px;">
          <span class="" style="width:38px; height:19px; top:3.2px; left:20px; padding:0 3px; position:absolute; z-index:-1; background:#181818; box-sizing:border-box; border:1px solid #000; border-radius:0 9px 9px 0; text-align:center; font-size:11.5px; line-height:19px; color:#666; text-shadow:2px 2px 6px #000;">
            9999
          </span>
          </i>
        </div>
      </div>
    </div>

    <div class="glass-bg box-show" style="width:1088px; height:290px; left:50%; bottom:45px; position:absolute; transform:translate(-50%,0); z-index:-1; opacity:0.96;">
      <div class="box-show" style="width:100%; height:38px;"></div>
      <div style="width:100%; height:243px; margin:3px 0;">
        <div class="box-show" style="width:62%; height:100%; margin-left:3px; float:left; display:inline-block;"></div>
        <div class="box-show" style="width:37.3%; height:100%; margin-right:3px; float:right; display:inline-block;"></div>
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
    musicPlayNowIndex () {
      setTimeout(() => {
        this.musicSource.play()
      }, 68)
    }
  },

  computed: {
    musicPlayNowIndex () {
      return this.$store.state.musicPlayNowIndex
    }
  },

  methods: {
    switchMusicPlay () {
      this.$store.commit('changeMusicIsPlayStatus')
      this.$store.state.musicIsPlay ? this.musicSource.play() : this.musicSource.pause()
    },

    changeIsPlay () {
      if (this.$store.state.musicPlayModel === 'loop') {
        this.$store.commit('changeMusicPlayNowIndex')
      } else if (this.$store.state.musicPlayModel === 'single-loop') {
        this.musicSource.play()
      } else {
        let indexTemp
        do {
          indexTemp = Number.parseInt(this.$store.state.musicPlayList.length * Math.random())
        } while (indexTemp === this.$store.state.musicPlayNowIndex)
        this.$store.commit('changeMusicPlayNowIndex', indexTemp)
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
    }
  }
}
</script>

<style scoped>

</style>
