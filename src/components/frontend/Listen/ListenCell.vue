<template>
  <div class="listen-cell box-shadow">
    <div class="listen-cell-index">{{ index }}</div>
    <div class="listen-cell-operation">
      <i @click="playThisSong" class="listen-cell-operation-btn mh-if play"></i>
    </div>
    <div class="listen-cell-info">
      <router-link :to="`/song/${songData.id}`" class="listen-cell-link text-hidden">{{ songData.name }}</router-link>
      -
      <router-link to="/singer-detail/hot-song/1" class="listen-cell-link listen-cell-info-singer text-hidden">{{ songData.singer }}</router-link>
    </div>
    <div class="listen-cell-num">{{ songData.num }} 次</div>
  </div>
</template>

<script>
export default {
  name: 'ListenSongCell',

  props: {
    index: {
      type: Number
    },

    songData: {
      type: Object,
      default: () => {
        return null
      }
    }
  },

  methods: {
    playThisSong () {
      alert('play this song')
    }
  }
}
</script>

<style lang="less" scoped>
  .listen-cell {
    width:100%; height:28px; display:flex; line-height:28px;

    &-index {
      width:4.5%; box-sizing:border-box; text-align:right; font-size:14px; line-height:30px;
    }
    &-operation {
      width:11%; text-align:center;
      &-btn {
        margin:0 2px;
        &:hover {
          color:#00D8FF;
        }
      }
    }
    &-link {
      color:#CCC;
    }
    &-info {
      padding:0 18px 0 3px; flex:1; box-sizing:border-box;
      &-singer {
        font-size:13px; color:#888;
        &:hover {
          text-decoration:underline;
        }
      }
    }
    &-num {
      width:18%; padding-left:10px; box-sizing:border-box;
    }
  }
</style>
