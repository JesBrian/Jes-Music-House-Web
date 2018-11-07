<template>

  <!-- 榜单详情 -->
  <div class="rank-detail">
    <!-- 榜单信息 -->
    <div class="rank-detail-info">

      <div class="rank-detail-info-poster">
        <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" class="rank-detail-info-poster-img box-show" />
      </div>

      <div class="rank-detail-info-base">

        <p class="rank-detail-info-base-title">云音乐飙升榜</p>

        <div @click="playThisRank" class="super-btn-out">
          <span class="super-btn-in mh-if play">&nbsp;播放</span>
        </div>
        <div class="super-btn-out">
          <span class="super-btn-in mh-if menu">&nbsp;添加</span>
        </div>
        <div @click="showModal('Collection')" class="super-btn-out">
          <span class="super-btn-in mh-if collection-music">&nbsp;收藏</span>
        </div>
        <div @click="showModal('Share')" class="super-btn-out">
          <span class="super-btn-in mh-if share">&nbsp;分享</span>
        </div>
        <div class="super-btn-out">
          <span class="super-btn-in mh-if comment">&nbsp;留言</span>
        </div>
      </div>
    </div>

    <div class="rank-detail-container">
      <section class="rank-detail-container-section">
        <div class="rank-detail-container-nav">
          <span class="rank-detail-container-nav-label">歌曲列表</span>
        </div>
        <song-group :song-list="songList" />
      </section>

      <section class="rank-detail-container-section">
        <div class="rank-detail-container-nav">
          <span class="rank-detail-container-nav-label">听友评论</span>
        </div>
        <comment-total />
      </section>
    </div>
  </div>
</template>

<script>
import SongGroup from '../Song/SongGroup.vue'
import CommentTotal from '../Comment/CommentTotal.vue'

export default {
  name: 'RankDetail',

  components: {
    SongGroup, CommentTotal
  },

  data () {
    return {
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
    playThisRank () {
    },

    showModal (modalType) {
      this.$store.commit('CHANGE_MODAL_TYPE', modalType)
    }
  }
}
</script>

<style lang="less" scoped>
  .rank-detail {
    width:80%; margin:0 0 28px 20%; display:inline-block; box-sizing:border-box;

    &-info {
      height:188px;
      &-poster {
        width:24%; height:100%; float:left; text-align:center;
        &-img {
          width:108px; height:108px; margin-top:45px; padding:6px; box-sizing:border-box; border-radius:4px;
        }
      }
      &-base {
        width:76%; height:100%; float:left;
        &-title {
          margin-top:25px; font-size:28px; line-height:3em;
        }

        .super-btn {
          &-out {
            width:80px; height:35px; margin-right:18px;
          }
          &-in {
            width:68px; height:26px;
          }
        }
      }
    }
    &-container {
      width:93%; margin:0 auto;
      &-section {
        margin:18px 0 38px;
      }
      &-nav {
        width:100%; height:38px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF;
        &-label {
          float:left; font-size:26px; font-weight:700;
        }
      }
    }
  }
</style>
