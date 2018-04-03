<template>
  <!-- 音乐播放器组件 -->
  <div class="glass-bg box-show" style="width:100%; height:48px; left:0; bottom:0; position:fixed; border-radius:0; opacity:0.96;">
    <audio id="homeMusicSource" @ended="changeIsPlay" controls>
      <source src="../../../music/test.mp3" type="audio/mpeg" />
    </audio>
    <a @click="switchMusicPlay" class="mh-if play"></a>
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

  methods: {
    switchMusicPlay () {
      this.$store.commit('changeMusicIsPlayStatus')
      this.$store.state.musicIsPlay ? this.musicSource.play() : this.musicSource.pause()
    },

    changeIsPlay () {
      this.$store.commit('changeMusicIsPlayStatus')
    }
  }
}
</script>

<style scoped>

</style>
