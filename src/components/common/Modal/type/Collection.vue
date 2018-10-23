<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/warning.png')" class="modal-title-icon" />
      <span class="modal-title-label">收藏歌单</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-collection-container">
      <div @click="showModal('CreatePlayList')" class="new-play-list box-show">
        <i class="mh-if add"></i>
        <span class="new-play-list-label">创建新歌单</span>
      </div>
      <div v-for="item in playList" :key="item.id" @click="collectionSongToThisPlayList(item.id)" class="play-list-cell box-show">
        <img class="play-list-cell-img" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
        <div>
          <p class="play-list-cell-label">{{ item.title }}</p>
          <p class="play-list-cell-nums">{{ item.nums }} 首</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Collection',

  props: {
    label: {
      type: String,
      default: '确定要执行该操作 ?'
    }
  },

  data () {
    return {
      playList: [
        {id: 201, title: '歌单1111', nums: 35},
        {id: 202, title: '歌单2Bb', nums: 18},
        {id: 203, title: '歌 c 单3CCC', nums: 108},
        {id: 204, title: 'play list dddd dd', nums: 62}
      ]
    }
  },

  methods: {
    collectionSongToThisPlayList (playListId) {
      this.$store.commit('SHOW_TIPS', {msg: '歌曲收藏成功！' + playListId, type: 'info'})
      this.$parent.closeShowModal()
    },

    showModal (modalType) {
      this.$store.commit('CHANGE_MODAL_TYPE', modalType)
    }
  }
}
</script>

<style lang="less" scoped>
  #modalType {
    .modal-title {
      width:100%; line-height:35px; text-align:center;

      &-icon {
        width:30px; height:30px; margin:0 8px -5px 0;
      }
      &-label {
        display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;
      }
    }

    .modal-collection {
      &-container {
        width:100%; margin-top:28px; display:flex; flex-direction:row; justify-content:space-between; flex-wrap:wrap;

        .new-play-list {
          width:49.3%; height:50px; margin-bottom:10px; display:flex; align-items:center; border-radius:4px; cursor:pointer;

          > .add {
            margin:0 13px 0 5px; font-size:38px; color:#00D8FF;
          }
          &-label {
            font-size:18px;
          }
        }

        .play-list-cell {
          width:49.3%; height:50px; margin-bottom:10px; display:flex; align-items:center; border-radius:4px; cursor:pointer;

          &-img {
            width:38px; height:38px; margin:0 13px 0 5px; border-radius:3px;
          }
          &-label {
            margin-bottom:6px;
          }
          &-nums {
            font-size:13px;
          }
        }
      }
    }
  }
</style>
