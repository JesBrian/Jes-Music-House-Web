<template>
  <div id="app">
    <a href="/backstage.html#/login" style="position:fixed; top:0; left:0; z-index:9999999999;">666</a>
    <a href="/backstage.html" style="position:fixed; top:0; left:18px; z-index:9999999999;">666</a>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  beforeCreate () {
    // 读取本地存储的当前播放歌曲的下标
    this.$localForage.getItem('playIndex', (result, value) => {
      if (value) {
        this.$store.commit('GO_INDEX', value)
      }
    })

    // 读取本地存储的播放列表数据
    this.$localForage.getItem('playList', (result, value) => {
      if (value) {
        this.$store.commit('INIT_PLAY_LIST', value)
      }
    })
  }
}
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
    position:relative;
    color:#CCC;
  }
</style>
