<template>
  <div>
    <!-- 导航条 -->
    <navigation-bar />

    <!-- 前台二级路由 -->
    <div style="width:100%; height:100%; left:0; padding:0 3px; display:inline-block; position:fixed; box-sizing:border-box; background:#2E2E2E; z-index:-1;">
      <gemini-scrollbar>
        <router-view class="glass-bg box-show" />
        <div CLASS="glass-bg box-show" style="width:1238px; height:103px; margin:-3px auto 0;"></div>
      </gemini-scrollbar>
    </div>

    <!-- 回到顶部 -->
    <float-block />

    <!-- 音乐播放器组件 -->
    <music-player />
  </div>
</template>

<script>
import NavigationBar from '../../components/home/NavigationBar/NavigationBar.vue'
import MusicPlayer from '../../components/home/MusicPlayer/MusicPlayer.vue'
import FloatBlock from '../../components/home/FloatBlock/FloatBlock'

export default {
  name: 'HomeFrame',

  components: {
    FloatBlock,
    NavigationBar,
    MusicPlayer
  },

  watch: {
    $route () {
      document.querySelector('.gm-scroll-view').scrollTop = 0
    }
  }
}
</script>

<style>
  #homeLayout {
    width:1180px; min-height:668px; margin:auto; padding:80px 0;
  }
</style>
