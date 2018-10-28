<template>
  <div id="homeLayout">
    <div class="play-list-left box-show">
      <!-- 歌单基本信息 -->
      <div style="margin-top:28px;">
        <div style="width:32%; margin-top:12px; float:left; text-align:center;">
          <img class="cube-bg box-show" v-lazy="'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'" style="width:188px; height:188px; padding:8px; border-radius:6px;"/>
        </div>
        <div style="width:65%; margin-top:3px; display:inline-block; position:relative; color:#999;">
          <p style="font-size:23px; color:#EEE;">史克威尔艾尼克斯 · 游戏音乐编年史 ♪</p>
          <div style="height:32px; margin-top:18px; display:inline-block; line-height:32px;">

            <router-link to="/singer-detail/hot-song/1" style="width:26px; height:26px; margin:1px 12px 0 0; float:left; border-radius:50%;">
              <img class="box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" style="width:100%; height:100%; padding:1px; border-radius:50%;"/>
            </router-link>
            <router-link to="/singer-detail/hot-song/1" style="margin-right:38px; font-size:20px;">JesBrian</router-link>

            <span style="font-size:13.5px;">2018-09-23 创建</span>
          </div>

          <div style="margin:18px 0;">
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if play" style="width:64px; height:23px;">&nbsp;播放</span>
            </div>
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if play" style="width:64px; height:23px;">&nbsp;列表</span>
            </div>
            <div @click="showModal('Collection')" class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if collection-music" style="width:64px; height:23px;">&nbsp;收藏</span>
            </div>
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if download" style="width:64px; height:23px;">&nbsp;下载</span>
            </div>
            <div @click="showModal('Share')" class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if share" style="width:64px; height:23px;">&nbsp;分享</span>
            </div>
          </div>

          <div style="position:relative; letter-spacing:1px; font-size:14px;">
            <p style="margin-bottom:8px;">
              <span style="color:#DDD;">标签：</span>
              <router-link :to="'/album'" style="color:#00d8ff;">666</router-link>
              <i style="margin:0 3px; color:#FFF;">/</i>
              <router-link :to="'/album'" style="color:#00d8ff;">888</router-link>
              <i style="margin:0 3px; color:#FFF;">/</i>
              <router-link :to="'/album'" style="color:#00d8ff;">999</router-link>
            </p>
            <p ref="playListDescription" :style="isShowDescription ? 'height:100%;' : 'max-height:38px;'" style="width:92%; word-break:break-all; line-height:19px; overflow:hidden;">
              <span style="color:#DDD;">简介：</span>
              wsedjnm'fgvh测试jnkml,ws恐怕edjn4515gvhjnk486djnm相差谁vhjnkml,wsed场设jnm'fgvh4156jnkml,w现备和健康sedjnm'fgvhjnkml513vjv处理vhjnk产量数52edjnm急哦fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml
            </p>
            <i v-if="isShowDescriptionBtn" @click="isShowDescription = !isShowDescription" :class="['mh-if', isShowDescription ? 'double-arrow-up' : 'double-arrow-down']" class="show-description-btn"></i>
          </div>
        </div>
      </div>

      <!-- 歌单内容切换 -->
      <div style="height:32px; margin:32px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;">
        <span @click="changeContent('song-group')" :class="{'active': type === 'song-group'}" class="play-list-menu-cell">歌曲 [888]</span>
        <span @click="changeContent('comment-total')" :class="{'active': type === 'comment-total'}" class="play-list-menu-cell">评论 [666]</span>
        <label v-if="type === 'song-group'" class="super-btn-out active" style="width:268px; height:32px; margin:-2px 8px 0 0; float:right; position:relative; border:none; border-radius:16px;">
          <input v-model="searchKey" class="super-btn-in" placeholder="搜索本歌单音乐" style="width:258px; height:76%; top:50%; padding:0 12px; box-sizing:border-box; border-radius:12px; text-align:left; font-size:17px;"/>
          <i class="mh-if search" style="top:2px; right:14px; position:absolute;"></i>
        </label>
      </div>

      <!-- 歌单内容 [ 歌曲列表/评论 ] -->
      <div style="min-height:263px; margin:0 auto 28px;">
        <component :is="type" :search-key="searchKey" :song-list="songList" />
      </div>
    </div>

    <div class="play-list-right">
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">收藏这个歌单的人</div>
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
          <router-link v-for="n in 8" :key="`${n}8`" to="/user" style="width:43px; height:43px; margin-bottom:16px;">
            <img class="box-show" style="width:100%; height:100%; padding:2px;" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
          </router-link>
        </div>
      </div>
      <div style="margin-bottom:48px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">相关推荐</div>
        <div v-for="n in 5" :key="`${n}2288`" class="box-show" style="width:100%; height:48px; margin:0 0 12px; display:inline-block;">
          <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" style="width:40px; height:40px; margin:4px; float:left;"/>
          <router-link to="/play-list/song-group/1" style="font-size:15px; font-weight:700; line-height:2em; color:#BBB;">
            专辑 Play List 歌单
          </router-link>
          <router-link to="/singer-detail/hot-song/1" class="text-hidden" style="width:70%; color:#888; font-size:13px;">
            by JesBrian
          </router-link>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <download-client />
      </div>
    </div>
  </div>
</template>

<script>
import SongGroup from '../../../../components/frontend/SongGroup/SongGroup.vue'
import CommentTotal from '../../../../components/frontend/Comment/CommentTotal.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'

export default {
  name: 'PlayList',

  components: {
    DownloadClient, SongGroup, CommentTotal
  },

  data () {
    return {
      playListId: this.$route.params['id'],
      type: this.$route.params['type'],
      isShowDescriptionBtn: false,
      isShowDescription: false,

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

  mounted () {
    if (this.$refs['playListDescription'].scrollHeight > this.$refs['playListDescription'].clientHeight) {
      this.isShowDescriptionBtn = true
    }
  },

  methods: {
    changeContent (type) {
      this.type = type

      this.$router.push(`/play-list/${this.type}/${this.playListId}`)
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
  }

  .play-list {
    &-left {
      flex:1;
    }
    &-right {
      width:25%; padding:34px 18px; box-sizing:border-box;
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

  .show-description-btn {
    top:33px; right:8px; position:absolute; cursor:pointer;
  }
  .show-description-btn:hover {
    color: #00d8ff;
  }

</style>
