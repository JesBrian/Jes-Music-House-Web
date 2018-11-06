<template>
  <div id="homeLayout">

    <div class="song-left box-show">

      <!-- 歌曲基本信息 -->
      <div class="song-info-container">
        <div class="song-info-poster">
          <div class="song-info-poster-container box-show">
            <img v-lazy="'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'"
                 class="song-info-poster-img" />
          </div>
        </div>

        <div class="song-info-base">
          <p class="song-info-base-name">歌曲名称 song name 1561561</p>
          <div class="song-info-base-create">
            <p>
              歌手：<router-link to="/singer-detail/hot-song/1" class="song-info-base-link" >JesBrian</router-link>
            </p>
            <p>
              所属专辑：<router-link to="/play-list/song-group/1" class="song-info-base-link" >Play - List - Name</router-link>
            </p>
          </div>

          <div class="song-info-base-oper">
            <div class="super-btn-out ripple">
              <span class="super-btn-in mh-if play">&nbsp;播放</span>
            </div>
            <div class="super-btn-out ripple">
              <span class="super-btn-in mh-if menu">&nbsp;列表</span>
            </div>
            <div @click="showModal('Collection')" class="super-btn-out ripple">
              <span class="super-btn-in mh-if collection-music">&nbsp;收藏</span>
            </div>
            <div class="super-btn-out ripple">
              <span class="super-btn-in mh-if download">&nbsp;下载</span>
            </div>
            <div @click="showModal('Share')" class="super-btn-out ripple">
              <span class="super-btn-in mh-if share">&nbsp;分享</span>
            </div>
          </div>

          <div class="song-info-base-lyric">
            <p ref="playListDescription" :style="isShowDescription ? 'height:100%;' : 'max-height:135px;'" class="song-info-base-lyric-container">
              歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分 - 歌词部分
            </p>
            <p class="song-info-base-lyric-oper">
              <router-link to="/lyric" class="oper-link">上传歌词</router-link>
              <router-link to="/lyric" class="oper-link">歌词报错</router-link>
            </p>
            <i v-if="isShowDescriptionBtn" @click="isShowDescription = !isShowDescription" :class="['mh-if', isShowDescription ? 'double-arrow-up' : 'double-arrow-down']" class="show-description-btn"></i>
          </div>
        </div>
      </div>

      <comment-total show-title :comment-num="122" />
    </div>

    <div class="song-right">
      <similar-user :data-source="similarUserList" />
      <similar-play-list title="包含这首歌的歌单" :data-source="similarPlayListList" />
      <similar-song :data-source="similarSongList" />
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
      isShowDescription: false,

      similarUserList: [
        {id: 101, name: 'Jes'},
        {id: 103, name: '察使'},
        {id: 105, name: 'JesBrian'},
        {id: 108, name: 'yui tgb'}
      ],
      similarPlayListList: [
        {id: 111, title: '歌单1'},
        {id: 112, title: '歌单2歌单2'},
        {id: 112, title: '歌单33'}
      ],
      similarSongList: [
        {id: 121, name: '相似歌曲1'},
        {id: 122, name: '相似歌曲2'},
        {id: 123, name: '相似歌曲3'},
        {id: 124, name: '相似歌曲4'},
        {id: 125, name: '相似歌曲5'}
      ]
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

    &-info {
      &-container {
        margin:28px 0 18px;
      }

      &-poster {
        width:37%; margin-top:12px; float:left; text-align:center;
        &-container {
          width:188px; height:188px; margin:4px 33px; padding:33px; display:flex; justify-content:center; align-items:center; border-radius:50%; background:url('../../../../../static/img/default/disk.png') no-repeat; background-size:100% 100%;
        }
        &-img {
          border-radius:50%;
        }
      }

      &-base {
        width:63%; margin-top:3px; display:inline-block; position:relative; color:#999;
        &-name {
          font-size:23px; color:#EEE;
        }
        &-create {
          height:32px; margin-top:18px; display:inline-block; line-height:23px; font-size:15px;
        }
        &-link:hover {
          color:#DDD; text-decoration:underline;
        }
        &-oper {
          margin:18px 0;
          .super-btn {
            &-out {
              width:72px; height:31px; margin:10px 13px 0 0;
            }
            &-in {
              width:64px; height:23px;
            }
          }
        }
        &-lyric {
          width:88%; position:relative; letter-spacing:1px; font-size:14px;
          &-container {
            width:92%; min-height:68px; word-break:break-all; line-height:19px; overflow:hidden;
          }
          &-oper {
            margin:18px 0 0 ; text-align:right;
            > .oper-link {
              margin-left:12px;
              &:hover {
                color:#DDD; text-decoration:underline;
              }
            }
          }
        }
      }
    }
  }

  .show-description-btn {
    top:18px; right:6px; position:absolute; cursor:pointer;
    &:hover {
      color: #00d8ff;
    }
  }
</style>
