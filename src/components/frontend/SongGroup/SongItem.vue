<template>
  <div class="song-item">
    <div class="song-item-index">{{ index }}</div>
    <div class="song-item-operation">
      <i class="mh-if play" style="margin:0 2px;"></i>
      <i class="mh-if non-colloection" style="margin:0 2px;"></i>
      <i class="mh-if download" style="margin:0 2px;"></i>
    </div>
    <div class="song-item-title">
      <router-link to="/song" class="song-item-link text-hidden">66</router-link>
    </div>
    <div class="song-item-singer">
      <router-link to="/singer-detail/hot-song/1" class="song-item-link text-hidden">66</router-link>
    </div>
    <div class="song-item-time">59:59</div>
  </div>
</template>

<script>

export default {
  name: 'SongItem',

  props: {
    index: Number
  },

  methods: {
    playThisSong () {
      alert('play this song')
    }
  }
}
</script>

<style lang="less" scoped>
  .song-item {
    width:100%; height:28px; display:flex; line-height:28px;

    &-index {
      width:4.5%; box-sizing:border-box; text-align:right; font-size:14px; line-height:30px;
    }
    &-operation {
      width:15%; text-align:center;
    }
    &-title {
      padding:0 18px 0 3px; flex:1; box-sizing:border-box;
    }
    &-singer {
      width:23%;
    }
    &-time {
      width:10%; text-align:center;
    }
    &-link {
      color:#CCC;
    }
  }
</style>
