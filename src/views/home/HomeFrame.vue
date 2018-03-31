<template>
  <div>

    <!-- 导航条 -->
    <navigation-bar />

    <!-- 前台二级路由 -->
    <div style="width:100%; height:100%; top:53px; left:0; padding:0 3px; display:inline-block; position:fixed; box-sizing:border-box; background:#2E2E2E; z-index:-1;">
      <gemini-scrollbar>
        <router-view />
        <div style="width:100%; height:168px; background:lightgreen;"></div>
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

<style>
  #homeLayout {
    width:1180px; height:1888px; margin:18px auto; background:lightcoral;
  }
</style>
