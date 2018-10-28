<template>
  <div id="homeLayout">

    <div class="user-music-category-container">
      <div class="box-shadow"></div>
      <div @click="changeType('collection-singer')"
           :class="{active: type === 'collection-singer'}"
           class="user-music-category-cell box-shadow">
        <i class="user-music-category-cell-logo mh-if singer" ></i>
        <span class="user-music-category-cell-label">收藏的歌手</span>
      </div>

      <div @click="showSecondMenu('create-play-list')"
           :class="{active: type === 'create-play-list'}"
           class="user-music-category-cell box-shadow">
        <i class="user-music-category-cell-logo mh-if redis" ></i>
        <span class="user-music-category-cell-label">创建的歌单</span>

        <div @click.stop="showModal('CreatePlayList')" class="super-btn-out">
          <i class="super-btn-in mh-if add-collection"></i>
        </div>

        <i :class="createActive ? 'double-arrow-down' : 'double-arrow-up'" class="show-btn mh-if"></i>
      </div>
      <div v-if="createActive" class="box-shadow">
        <div v-for="n in 4" :key="n + '881'" class="play-list-cell box-shadow" >
          <img class="play-list-cell-img" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
          <div class="play-list-cell-info" >
            <p class="play-list-cell-title">我喜欢的音乐</p>
            <p class="play-list-cell-other">66 首</p>
          </div>
        </div>
      </div>

      <div @click="showSecondMenu('collection-play-list')"
           :class="{active: type === 'collection-play-list'}"
           class="user-music-category-cell box-shadow">
        <i class="user-music-category-cell-logo mh-if add-collection" ></i>
        <span class="user-music-category-cell-label">收藏的歌单</span>
        <i :class="collectionActive ? 'double-arrow-down' : 'double-arrow-up'" class="show-btn mh-if"></i>
      </div>
      <div v-if="collectionActive" class="box-shadow">
        <div v-for="n in 108" :key="n + '882'" class="play-list-cell box-shadow" >
          <img class="play-list-cell-img" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" />
          <div class="play-list-cell-info" >
            <p class="play-list-cell-title">我喜欢的音乐</p>
            <p class="play-list-cell-other">66 首</p>
          </div>
        </div>
      </div>
      <div class="box-shadow"></div>
    </div>

    <div class="user-music-detail-container box-show">

      <!-- 歌单基本信息 -->
      <play-list-info class="play-list-info-container" />
      <!-- 歌单歌曲 -->
      <song-group :song-list="songList" />
    </div>

  </div>
</template>

<script>
import PlayListInfo from '../../../../components/frontend/PlayList/PlayListInfo.vue'
import SongGroup from '../../../../components/frontend/SongGroup/SongGroup.vue'

export default {
  name: 'Music',

  components: {
    PlayListInfo, SongGroup
  },

  data () {
    return {
      type: 'collection-singer',
      createActive: false,
      collectionActive: false,

      songList: [
        {id: 101, name: 'test1', singer: 'JesBrian', time: '00:58'},
        {id: 102, name: 'test2', singer: 'Jehfrian', time: '01:45'},
        {id: 103, name: 'test3', singer: '曾跟随', time: '01:30'},
        {id: 104, name: 'test4', singer: 'vsaguc', time: '11:30'},
        {id: 105, name: 'test5', singer: 'gqefyug', time: '03:33'},
        {id: 106, name: 'test6', singer: '参数部分', time: '12:05'},
        {id: 107, name: 'test7', singer: '二45幺', time: '08:45'},
        {id: 108, name: 'test8', singer: 'sxJcbh', time: '06:34'},
        {id: 109, name: 'test9', singer: '二45幺', time: '06:45'},
        {id: 110, name: 'test10', singer: 'ruqwoho', time: '06:45'},
        {id: 111, name: 'test11', singer: 'JesBrian', time: '00:58'},
        {id: 112, name: 'test12', singer: 'Jehfrian', time: '01:45'},
        {id: 113, name: 'test13', singer: '曾跟随', time: '01:30'},
        {id: 114, name: 'test14', singer: 'vsaguc', time: '11:30'},
        {id: 115, name: 'test15', singer: 'gqefyug', time: '03:33'},
        {id: 116, name: 'test16', singer: '参数部分', time: '12:05'},
        {id: 117, name: 'test17', singer: '二45幺', time: '08:45'},
        {id: 118, name: 'test18', singer: 'sxJcbh', time: '06:34'},
        {id: 119, name: 'test19', singer: '二45幺', time: '06:45'},
        {id: 120, name: 'test20', singer: 'ruqwoho', time: '18:45'}
      ]
    }
  },

  methods: {
    changeType (type = 'collection-singer') {
      this.type = type
    },

    showSecondMenu (type) {
      if (type === 'create-play-list') {
        this.createActive = !this.createActive
      } else {
        this.collectionActive = !this.collectionActive
      }
    },

    showModal (modalType) {
      this.$store.commit('CHANGE_MODAL_TYPE', modalType)
    }
  }
}
</script>

<style lang="less" scoped>

  #homeLayout {
    min-height:100%; display:flex;

    .play-list-cell {
      width:98%; height:38px; margin:0 auto; display:flex; align-items:center;

      &-img {
        width:28px; height:28px; margin:0 8px 0 3px; border-radius:3px;
      }
      &-info {
        box-sizing:border-box;
      }
      &-title {
        margin-bottom:2px; font-size:14px;
      }
      &-other {
        font-size:12px;
      }
    }
  }

  .user-music-category {
    &-container {
      width:20%; height:100%; padding:38px 0 3px;
    }

    &-cell {
      width:100%; height:43px; position:relative; display:flex; flex-direction:row; align-items:center; cursor:pointer;

      &-logo {
        margin:0 8px 0 13px; font-size:19px;
      }
      &-label {
        color:#AAA;
      }

      &:hover > .user-music-category-cell-label {
        color:#EEE;
      }
      &.active {
        > .user-music-category-cell-label {
          color:#00d8ff;
        }
        background:#1D1D1D;
      }

      > .super-btn-out {
        width:23px; height:23px; margin-left:18px;
        > .super-btn-in {
          width:18px; height:18px;
        }
      }

      > .show-btn {
        right:8px;
        position:absolute;
      }
    }
  }

  .user-music-detail-container {
    padding:0 0 18px; flex:1;
  }

  .play-list-info-container {
    margin-bottom:32px;
  }
</style>
