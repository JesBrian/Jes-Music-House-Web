<template>
  <div id="homeLayout">

    <div class="user-info-left box-show">
      <div style="width:25%; padding:58px 28px 30px; display:inline-block; box-sizing:border-box;">
        <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="box-show" style="width:138px; height:138px; padding:5px; float:left;"/>
      </div>

      <div style="width:71%; min-height:188px; display:inline-block;">

        <div class="box-shadow" style="width:100%; height:48px;">
          <p style="float:left; text-indent:0.9em; font-size:26px; line-height:2em;">JesBrian</p>
          <router-link to="/level" class="super-btn-out" style="width:50px; height:26px; margin:11px 0 0 28px; float:left;">
            <span class="super-btn-in" style="width:44px; height:20px; line-height:20px;">Lv 9</span>
          </router-link>
          <router-link to="/update" class="super-btn-out" style="width:114px; height:30px; right:18px; margin-top:11px; float:right;">
            <span class="super-btn-in" style="width:106px; height:23px;"> 编辑个人信息</span>
          </router-link>
        </div>

        <div class="box-shadow" style="width:100%; height:38px; padding:8px 0 10px; clear:both; text-align:center;">
          <router-link to="/user-info/1" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">动态</p>
          </router-link>
          <router-link to="/user-info/1" style="width:88px; height:100%; float:left; border-left:1px solid #333; border-right:1px solid #333;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">关注</p>
          </router-link>
          <router-link to="/user-info/1" style="width:88px; height:100%; float:left;">
            <p style="font-size:20px; color:#DDD;">0</p>
            <p style="margin-left:9px; line-height:1.3em; letter-spacing:8px;">粉丝</p>
          </router-link>
        </div>

        <p class="box-shadow" style="float:left; margin-top:13px; word-break:break-all; line-height:1.2em;">
          个人简介：<span style="letter-spacing:0.8px; color:#AAA;">redctfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfghtfvygbhjrftvghjnkrdfgh</span>
        </p>
      </div>

      <div>
        <div class="user-info-nav">
          <i class="user-info-nav-icon mh-if exponential"></i>
          <span class="user-info-nav-title">听歌排行</span>
          <span style="margin-left:8px; font-size:14px;">累积听歌18547首</span>

          <div style="width:188px; height:32px; margin:23px -28px; float:right; display:flex; text-align:center; line-height:28.8px; font-weight:700; cursor:pointer;">
            <div @click="changeRankType('week')" :class="rankType === 'week' ? 'cube-bg' : 'glass-bg'" class="box-show" style="flex:1; border-radius:5px 0 0 5px; text-shadow:1px 1px 2px #000;">最近一周</div>
            <div @click="changeRankType('all')" :class="rankType === 'all' ? 'cube-bg' : 'glass-bg'" class="box-show" style="flex:1; border-radius:0 5px 5px 0; text-shadow:1px 1px 2px #000;">所有时间</div>
          </div>
        </div>

        <listen-group :show-nav="false" :list-data="listenList" style="width:93%; margin:-20px auto 18px;" />
      </div>

      <div>
        <div class="user-info-nav">
          <i class="user-info-nav-icon mh-if redis"></i>
          <span class="user-info-nav-title">创建的歌单</span>
        </div>
        <play-list-group :play-list-data="createPlayList" style="width:93%; margin:0 auto;" />
      </div>

      <div>
        <div class="user-info-nav">
          <i class="user-info-nav-icon mh-if music-box"></i>
          <span class="user-info-nav-title">收藏的歌单</span>
        </div>
        <play-list-group :play-list-data="collectionPlayList" style="width:93%; margin:0 auto;" />
      </div>

    </div>

    <div class="user-info-right">
      <download-client />
    </div>

  </div>
</template>

<script>
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'
import ListenGroup from '../../../../components/frontend/Listen/ListenGroup.vue'
import PlayListGroup from '../../../../components/frontend/PlayList/PlayListGroup.vue'

export default {
  name: 'UserInfo',

  components: {
    ListenGroup, PlayListGroup, DownloadClient
  },

  data () {
    return {
      rankType: 'week',

      listenList: [
        {id: 101, name: 'test1', singer: 'JesBrian', num: 45},
        {id: 102, name: 'test2', singer: 'Jehfrian', num: 4555},
        {id: 103, name: 'test3', singer: '曾56跟随', num: 235},
        {id: 104, name: 'test4', singer: 'vsaguc', num: 4},
        {id: 105, name: 'test5', singer: 'gqe8fyug', num: 78},
        {id: 106, name: 'test6', singer: '参数部分', num: 266},
        {id: 107, name: 'test7', singer: '二45幺', num: 12},
        {id: 108, name: 'test8', singer: 'sxJcbh', num: 554},
        {id: 109, name: 'test9', singer: '二45幺', num: 12},
        {id: 110, name: 'test10', singer: 'ruqwoho', num: 485},
        {id: 111, name: 'test11', singer: 'JesBrian', num: 78},
        {id: 112, name: 'test12', singer: 'Jehfrian', num: 21},
        {id: 113, name: 'test13', singer: '曾12跟随', num: 76},
        {id: 114, name: 'test14', singer: 'vsaguc', num: 762},
        {id: 115, name: 'test15', singer: 'gqefyug', num: 61},
        {id: 116, name: 'test16', singer: '参数55部分', num: 94},
        {id: 117, name: 'test17', singer: '二45幺', num: 456},
        {id: 118, name: 'test18', singer: 'sxJcbh', num: 3721},
        {id: 119, name: 'test19', singer: '二45幺', num: 216},
        {id: 120, name: 'test20', singer: 'ruqwoho', num: 48}
      ],
      createPlayList: [
        {id: 111, title: 'play-list-111'},
        {id: 222, title: 'play-list-222'},
        {id: 333, title: 'play-list-333'},
        {id: 444, title: 'play-list-444'},
        {id: 555, title: 'play-list-555'},
        {id: 666, title: 'play-list-666'},
        {id: 777, title: 'play-list-777'},
        {id: 888, title: 'play-list-888'},
        {id: 999, title: 'play-list-999'},
        {id: 101010, title: 'play-list-101010'},
        {id: 1111, title: 'play-list-1111'},
        {id: 1222, title: 'play-list-1222'}
      ],
      collectionPlayList: [
        {id: 1111, title: 'co-play-list-111'},
        {id: 1222, title: 'co-play-list-222'},
        {id: 1333, title: 'co-play-list-333'},
        {id: 1444, title: 'co-play-list-444'},
        {id: 1555, title: 'co-play-list-555'},
        {id: 1666, title: 'co-play-list-666'},
        {id: 1777, title: 'co-play-list-777'},
        {id: 1888, title: 'co-play-list-888'},
        {id: 1999, title: 'co-play-list-999'},
        {id: 1101010, title: 'co-play-list-101010'},
        {id: 11111, title: 'co-play-list-1111'},
        {id: 11222, title: 'co-play-list-1222'}
      ]
    }
  },

  methods: {
    changeRankType (type) {
      this.rankType = type
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .user-info {
    &-left {
      flex:1;
    }
    &-right {
      width:25%; padding:34px 18px; box-sizing:border-box;
    }

    &-nav {
      width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;
      &-icon {
        margin-right:8px; color:#00d8ff; font-size:32px;
      }
      &-title {
        font-size:23px; font-weight:700;
      }
    }
  }
</style>
