<template>
  <!-- 音乐播放器组件 -->
  <div class="glass-bg box-show" style="width:100%; height:48px; left:0; bottom:0; position:fixed; border-radius:0; opacity:0.9;">
    <audio>
      <source src="../../../music/test.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayer'
}
</script>

<style scoped>

</style>
