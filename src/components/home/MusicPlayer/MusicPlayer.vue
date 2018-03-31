<template>
  <!-- 音乐播放器组件 -->
  <div style="width:100%; height:48px; left:0; bottom:0; position:fixed; background:lightblue;">
    <audio controls="controls">
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
