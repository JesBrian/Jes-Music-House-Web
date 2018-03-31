<template>
  <div>

    <!-- 导航条 -->
    <navigation-bar />

    <!-- 前台二级路由 -->
    <div style="width:100%; height:100%; top:55px; left:0; padding:0 3px 106px; display:inline-block; position:fixed; box-sizing:border-box;">
      <gemini-scrollbar>
        <router-view />
      </gemini-scrollbar>
    </div>

    <!-- 音乐播放器组件 -->
    <music-player />

  </div>
</template>

<script>
import NavigationBar from '../../components/home/NavigationBar/NavigationBar.vue'
import MusicPlayer from '../../components/home/MusicPlayer/MusicPlayer.vue'

export default {
  name: 'HomeFrame',

  components: {
    NavigationBar,
    MusicPlayer
  }
}
</script>

<style scoped>

</style>
