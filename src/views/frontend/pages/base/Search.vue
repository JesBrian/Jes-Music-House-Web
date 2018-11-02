<template>
  <div id="homeLayout">

    <div class="search-container box-show">
      <div class="search-type-container">
        <p class="search-result-tips">
          搜索 " <span class="search-result-tips-key">{{ searchKey }}</span> "，共找到 <span class="search-result-tips-num">2222</span> 首单曲
        </p>

        <div @click="changeSearchType('song')" :class="{'active' : searchType === 'song'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if music-albu-2">&nbsp;单曲</span>
        </div>
        <div @click="changeSearchType('play-list')" :class="{'active' : searchType === 'play-list'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if redis">&nbsp;歌单</span>
        </div>
        <div @click="changeSearchType('singer')" :class="{'active' : searchType === 'singer'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if singer">&nbsp;歌手</span>
        </div>
        <div @click="changeSearchType('user')" :class="{'active' : searchType === 'user'}" class="super-btn-out ripple">
          <span class="super-btn-in mh-if avatar">&nbsp;用户</span>
        </div>

        <label class="search-input-container super-btn-out active">
          <input v-model="searchKey" type="text" class="super-btn-in" placeholder="搜索本歌单音乐"/>
          <i @click="goSearch" class="mh-if search"></i>
        </label>
      </div>

      <div class="search-result-container">
        <component :is="`${searchType}-group`" :show-nav="false" :song-list="songList" :play-list-data="playListList" :singer-list="singerList" :user-list="userList" />
      </div>

      <pagination />
    </div>

    <div class="search-recommend-container">
      <download-client />
    </div>

  </div>
</template>

<script>
import SongGroup from '../../../../components/frontend/Song/SongGroup.vue'
import PlayListGroup from '../../../../components/frontend/PlayList/PlayListGroup.vue'
import SingerGroup from '../../../../components/frontend/Singer/SingerGroup.vue'
import UserGroup from '../../../../components/frontend/User/UserGroup.vue'
import Pagination from '../../../../components/common/Pagination/Pagination.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'

export default {
  name: 'search',

  components: {
    SongGroup, PlayListGroup, SingerGroup, UserGroup, Pagination, DownloadClient
  },

  data () {
    return {
      searchType: this.$route.params['searchType'],
      searchKey: this.$route.params['searchKey'],

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
      ],
      playListList: [
        {id: 111, title: 'play-list-111'},
        {id: 222, title: 'play-list-222'},
        {id: 333, title: 'play-list-333'},
        {id: 444, title: 'play-list-444'},
        {id: 555, title: 'play-list-555'},
        {id: 666, title: 'play-list-666'},
        {id: 777, title: 'play-list-777'},
        {id: 888, title: 'play-list-888'}
      ],
      singerList: [
        {id: 111, name: '歌手名称1'},
        {id: 112, name: 'The Name of the singer 2'},
        {id: 113, name: '歌手名称3'},
        {id: 114, name: 'xvagsyvcbhsdbchds'},
        {id: 115, name: '歌手名称1'},
        {id: 116, name: 'The Name of the singer 6'},
        {id: 117, name: 'The Name of the singer 7'},
        {id: 118, name: '歌手名称8'},
        {id: 119, name: '歌手名称9'},
        {id: 120, name: 'The Name of the singer 10'}
      ],
      userList: [
        {id: 111, name: '用户名称1'},
        {id: 112, name: 'The Name of the user 2'},
        {id: 113, name: '用户名称3'},
        {id: 114, name: 'xvagsyvcbhsdbchds'},
        {id: 115, name: '用户名称1'},
        {id: 116, name: 'The Name of the user 6'},
        {id: 117, name: 'The Name of the user 7'},
        {id: 118, name: '用户名称8'},
        {id: 119, name: '用户名称9'},
        {id: 120, name: 'The Name of the user 10'}
      ]
    }
  },

  watch: {
    searchType () {
      this.$router.push(`/search/${this.searchType}/${this.searchKey}`)
    }
  },

  methods: {
    changeSearchType (type = 'song') {
      this.searchType = type
    },

    goSearch () {
      if ((this.searchKey === this.$route.params['searchKey']) || (this.searchKey === '')) {
        return false
      }

      this.$router.push(`/search/${this.searchType}/${this.searchKey}`)
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    display:flex;
  }

  .search-container {
    flex:1;

    > .search-result-container {
      width:93%; margin:38px auto 0;
    }

    > .search-type-container {
      width:100%; margin:0 auto 10px; padding-top:28px; box-shadow:0 4px 3px -3px #00d8ff; text-align:center; border-bottom:1px solid #00d8ff; line-height:27px; font-weight:700;

      .search-result-tips {
        margin:0 8px 13px 0; text-align:right; color:#CCC; font-size:14px;
        &-key {
          color:#00d8ff; text-decoration:underline;
        }
        &-num {
          color:#00d8ff;
        }
      }

      .super-btn {
        &-out {
          width:88px; height:32px; margin:0 3px; display:inline-block;
        }
        &-in {
          width:79px; height:23px;
        }
      }

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
  }

  .search-recommend-container {
    width:25%; height:100%; padding:34px 18px;
  }
</style>
