<template>
  <div id="homeLayout">

    <div class="play-list-left box-show">
      <!-- 歌单基本信息 -->
      <play-list-info />

      <!-- 歌单内容切换 -->
      <div class="play-list-category">
        <span @click="changeContent('song-group')" :class="{'active': type === 'song-group'}" class="play-list-menu-cell">歌曲 [888]</span>
        <span @click="changeContent('comment-total')" :class="{'active': type === 'comment-total'}" class="play-list-menu-cell">评论 [666]</span>

        <label v-if="type === 'song-group'" class="search-input-container super-btn-out active">
          <input v-model="searchKey" class="super-btn-in" placeholder="搜索本歌单音乐"/>
          <i class="mh-if search"></i>
        </label>
      </div>

      <!-- 歌单内容 [ 歌曲列表/评论 ] -->
      <div class="play-list-container">
        <component :is="type" :search-key="searchKey" :song-list="songList" />
      </div>
    </div>

    <div class="play-list-right">
      <similar-user />
      <similar-play-list />
      <download-client />
    </div>
  </div>
</template>

<script>
import PlayListInfo from '../../../../components/frontend/PlayList/PlayListInfo.vue'
import SongGroup from '../../../../components/frontend/Song/SongGroup.vue'
import CommentTotal from '../../../../components/frontend/Comment/CommentTotal.vue'
import SimilarUser from '../../../../components/frontend/RightCommend/SimilarUser.vue'
import SimilarPlayList from '../../../../components/frontend/RightCommend/SimilarPlayList.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'

export default {
  name: 'PlayList',

  components: {
    PlayListInfo, SongGroup, CommentTotal, SimilarUser, SimilarPlayList, DownloadClient
  },

  data () {
    return {
      playListId: this.$route.params['id'],
      type: this.$route.params['type'],

      searchKey: '',
      songList: [
        {id: 101, name: 'test1', singer: 'JesBrian', time: '00:58'},
        {id: 102, name: 'test2', singer: 'Jehfrian', time: '01:45'},
        {id: 103, name: 'test3', singer: '曾56跟随', time: '01:30'},
        {id: 104, name: 'test4', singer: 'vsaguc', time: '11:30'},
        {id: 105, name: 'test5', singer: 'gqe8fyug', time: '03:33'},
        {id: 106, name: 'test6', singer: '参数部分', time: '12:05'},
        {id: 107, name: 'test7', singer: '二45幺', time: '08:45'},
        {id: 108, name: 'test8', singer: 'sxJcbh', time: '06:34'},
        {id: 109, name: 'test9', singer: '二45幺', time: '06:45'},
        {id: 110, name: 'test10', singer: 'ruqwoho', time: '06:45'},
        {id: 111, name: 'test11', singer: 'JesBrian', time: '00:58'},
        {id: 112, name: 'test12', singer: 'Jehfrian', time: '01:45'},
        {id: 113, name: 'test13', singer: '曾12跟随', time: '01:30'},
        {id: 114, name: 'test14', singer: 'vsaguc', time: '11:30'},
        {id: 115, name: 'test15', singer: 'gqefyug', time: '03:33'},
        {id: 116, name: 'test16', singer: '参数55部分', time: '12:05'},
        {id: 117, name: 'test17', singer: '二45幺', time: '08:45'},
        {id: 118, name: 'test18', singer: 'sxJcbh', time: '06:34'},
        {id: 119, name: 'test19', singer: '二45幺', time: '06:45'},
        {id: 120, name: 'test20', singer: 'ruqwoho', time: '18:45'}
      ]
    }
  },

  methods: {
    changeContent (type) {
      this.type = type

      this.$router.push(`/play-list/${this.type}/${this.playListId}`)
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .play-list {
    &-left {
      flex:1;
    }
    &-right {
      width:25%; padding:34px 18px; box-sizing:border-box;
    }

    &-category {
      height:32px; margin:32px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;
      > .search-input-container {
        width:238px; height:32px; margin:-6px 8px 0; float:right; position:relative; border:none; border-radius:16px;
        > .super-btn-in {
          width:228px; height:76%; top:50%; padding:0 12px; box-sizing:border-box; border-radius:12px; text-align:left; font-size:17px;
        }
        > .search {
          top:2px; right:14px; position:absolute; z-index:5;
        }
      }
    }

    &-container {
      min-height:263px; margin:0 auto 28px;
    }
  }

  .play-list-menu-cell {
    margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
  }
  .play-list-menu-cell:hover {
    color:#EEE;
  }
  .play-list-menu-cell.active {
    border-bottom:2px solid #20dbfc; color:#20dbfc
  }
</style>
