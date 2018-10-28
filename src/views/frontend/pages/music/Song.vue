<template>
  <div id="homeLayout">

    <div class="song-left box-show">

      <!-- 歌曲基本信息 -->
      <div style="margin:28px 0 18px;">
        <div style="width:32%; margin-top:12px; float:left; text-align:center;">
          <div class="box-show" style="width:188px; height:188px; margin:4px 23px; padding:33px; display:flex; justify-content:center; align-items:center; border-radius:50%; background:url('../../../../../static/img/default/disk.png') no-repeat; background-size:100% 100%;">
            <img v-lazy="'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'" style="width:100%; height:100%; border-radius:50%;"/>
          </div>
        </div>

        <div style="width:68%; margin-top:3px; display:inline-block; position:relative; color:#999;">
          <p style="font-size:23px; color:#EEE;">歌曲名称 song name 1561561</p>
          <div style="height:32px; margin-top:18px; display:inline-block; line-height:23px; font-size:15px;">
            <p>
              歌手：<router-link to="/singer-detail/hot-song/1">JesBrian</router-link>
            </p>
            <p>
              所属专辑：<router-link to="/singer-detail/hot-song/1">Play - List - Name</router-link>
            </p>
          </div>

          <div style="margin:18px 0;">
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if play" style="width:64px; height:23px;">&nbsp;播放</span>
            </div>
            <div class="super-btn-out ripple" style="width:72px; height:31px; margin:10px 13px 0 0;">
              <span class="super-btn-in mh-if menu" style="width:64px; height:23px;">&nbsp;列表</span>
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

          <div style="width:88%; position:relative; letter-spacing:1px; font-size:14px;">
            <p ref="playListDescription" :style="isShowDescription ? 'height:100%;' : 'max-height:135px;'" style="width:92%; min-height:68px; word-break:break-all; line-height:19px; overflow:hidden;">
              歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分
            </p>
            <p style="margin:18px 0 0 ; text-align:right;">
              <router-link to="/lyric" style="margin-left:12px;">上传歌词</router-link>
              <router-link to="/lyric" style="margin-left:12px;">歌词报错</router-link>
            </p>
            <i v-if="isShowDescriptionBtn" @click="isShowDescription = !isShowDescription" :class="['mh-if', isShowDescription ? 'double-arrow-up' : 'double-arrow-down']" class="show-description-btn"></i>
          </div>
        </div>
      </div>

      <comment-total show-title :comment-num="122" />
    </div>

    <div class="song-right">
      <similar-song />
      <similar-play-list />
      <similar-user />
      <download-client />
    </div>

  </div>
</template>

<script>
import CommentTotal from '../../../../components/frontend/Comment/CommentTotal.vue'
import SimilarSong from '../../../../components/frontend/RightCommend/SimilarSong.vue'
import SimilarPlayList from '../../../../components/frontend/RightCommend/SimilarPlayList.vue'
import SimilarUser from '../../../../components/frontend/RightCommend/SimilarUser.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'

export default {
  name: 'Song',

  components: {
    CommentTotal, DownloadClient, SimilarUser, SimilarPlayList, SimilarSong
  },

  data () {
    return {
      isShowDescriptionBtn: false,
      isShowDescription: false
    }
  },

  mounted () {
    if (this.$refs['playListDescription'].scrollHeight > this.$refs['playListDescription'].clientHeight) {
      this.isShowDescriptionBtn = true
    }
  },

  methods: {
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

  .song {
    &-left {
      flex:1;
    }
    &-right {
      width:25%; padding:34px 18px; box-sizing:border-box;
    }
  }

  .show-description-btn {
    top:18px; right:6px; position:absolute; cursor:pointer;
  }
  .show-description-btn:hover {
    color: #00d8ff;
  }
</style>
