<template>
  <div id="homeLayout">

    <div class="user-music-category-container">
      收藏的歌手
      创建的歌单
      收藏的歌单
    </div>

    <div class="user-music-detail-container box-show">

      <!-- 歌单基本信息 -->
      <div style="margin:28px 0;">
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
            <p ref="playListDescription" :style="isShowDescription ? 'height:100%;' : 'height:38px;'" style="width:92%; word-break:break-all; line-height:19px; overflow:hidden;">
              <span style="color:#DDD;">简介：</span>
              wsedjnm'fgvh测试jnkml,ws恐怕edjn4515gvhjnk486djnm相差谁vhjnkml,wsed场设jnm'fgvh4156jnkml,w现备和健康sedjnm'fgvhjnkml513vjv处理vhjnk产量数52edjnm急哦fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml
            </p>
            <i v-if="isShowDescriptionBtn" @click="isShowDescription = !isShowDescription" :class="['mh-if', isShowDescription ? 'double-arrow-up' : 'double-arrow-down']" class="show-description-btn"></i>
          </div>
        </div>
      </div>

      <song-group />
    </div>

  </div>
</template>

<script>
import SongGroup from '../../../../components/frontend/SongGroup/SongGroup.vue'

export default {
  name: 'Music',

  components: {
    SongGroup
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

  .user-music-category-container {
    width:20%; height:100%;
  }

  .user-music-detail-container {
    padding:0 0 18px; flex:1;

    .show-description-btn {
      top:33px; right:8px; position:absolute; cursor:pointer;
      &:hover {
        color: #00d8ff;
      }
    }
  }
</style>
