<template>
  <div class="song-item">
    <div class="song-item-index">{{ index }}</div>
    <div class="song-item-operation">
      <i @click="playThisSong" class="song-item-operation-btn mh-if play"></i>
      <i @click="showModal('Collection')" class="song-item-operation-btn mh-if non-collection"></i>
      <i class="song-item-operation-btn mh-if download"></i>
    </div>
    <div class="song-item-title">
      <router-link :to="`/song/${songData.id}`" class="song-item-link text-hidden">{{ songData.name }}</router-link>
    </div>
    <div class="song-item-singer">
      <router-link to="/singer-detail/hot-song/1" class="song-item-link text-hidden">{{ songData.singer }}</router-link>
    </div>
    <div class="song-item-time">{{ songData.time }}</div>
  </div>
</template>

<script>

export default {
  name: 'SongItem',

  props: {
    index: Number,
    songData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },

  methods: {
    playThisSong () {
      alert('play this song')
    },

    showModal (modalType) {
      this.$store.commit('CHANGE_MODAL_TYPE', modalType)
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
      &-btn {
        margin:0 2px;
        &:hover {
          color:#00D8FF;
        }
      }
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
