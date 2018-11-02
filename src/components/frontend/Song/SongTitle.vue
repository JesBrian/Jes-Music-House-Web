<template>
  <div class="song-title">
    <div class="song-title-index"></div>
    <div class="song-title-operation">操作</div>
    <div @click="changeOrder('titleOrder')" class="song-title-title">音乐标题</div>
    <div @click="changeOrder('singerOrder')" class="song-title-singer">歌手</div>
    <div @click="changeOrder('timeOrder')" class="song-title-time">时长</div>
  </div>
</template>

<script>
export default {
  name: 'SongTitle',

  data () {
    return {
      titleOrder: 'up-down',
      singerOrder: 'up-down',
      timeOrder: 'up-down'
    }
  },

  methods: {
    changeOrder (type) {
      if (this[type] === 'up-down') {
        this[type] = 'up'
      } else if (this[type] === 'up') {
        this[type] = 'down'
      } else {
        this[type] = 'up-down'
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .song-title {
    height:30px; margin:2px 0; padding:2px 0 0; display:flex; box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727; line-height:31px;

    &-index {
      width:6%; height:100%; box-sizing:border-box; border-right:1px solid #282828;
    }
    &-operation {
      width:12%; height:100%; box-sizing:border-box; border-right:1px solid #282828; text-align:center;
    }
    &-title {
      flex:1; padding-left:14px; position:relative; box-sizing:border-box; border-right:1px solid #282828;
    }
    &-singer {
      width:25%; height:100%; padding-left:16px; position:relative; box-sizing:border-box; border-right:1px solid #282828;
    }
    &-time {
      width:10%; height:100%; position:relative; box-sizing:border-box; border-right:1px solid #282828; text-align:center;
    }
  }
</style>
