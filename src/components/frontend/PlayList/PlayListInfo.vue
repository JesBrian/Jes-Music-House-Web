<template>
  <div class="play-list-info">
    <div class="play-list-info-poster">
      <img class="play-list-info-poster-img cube-bg box-show" v-lazy="'http://p4.music.126.net/fNps5V_Auva93TgjLURyEw==/7960464187263772.jpg?param=200y200'"/>
    </div>
    <div class="play-list-info-base">
      <p class="play-list-info-base-title">史克威尔艾尼克斯 · 游戏音乐编年史 ♪</p>
      <div class="play-list-info-base-creator">
        <router-link to="/singer-detail/hot-song/1" class="play-list-info-base-creator-avatar">
          <img class="play-list-info-base-creator-avatar-img box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
        </router-link>
        <router-link to="/singer-detail/hot-song/1" class="play-list-info-base-creator-name">JesBrian</router-link>
        <span class="play-list-info-base-creator-date">2018-09-23 创建</span>
      </div>

      <div class="play-list-info-oper">
        <div class="super-btn-out ripple">
          <span class="super-btn-in mh-if play">&nbsp;播放</span>
        </div>
        <div class="super-btn-out ripple">
          <span class="super-btn-in mh-if play">&nbsp;列表</span>
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

      <div class="play-list-info-other">
        <p class="play-list-info-other-label">
          <span class="play-list-info-other-label-title">标签：</span>
          <router-link :to="'/album'" class="play-list-info-other-label-link">666</router-link>
          <i class="play-list-info-other-label-split">/</i>
          <router-link :to="'/album'" class="play-list-info-other-label-link">888</router-link>
          <i class="play-list-info-other-label-split">/</i>
          <router-link :to="'/album'" class="play-list-info-other-label-link">999</router-link>
        </p>
        <p ref="playListDescription" :style="isShowDescription ? 'height:100%;' : 'max-height:38px;'"
           class="play-list-info-other-desc">
          <span class="play-list-info-other-desc-title">简介：</span>
          wsedjnm'fgvh测试jnkml,ws恐怕edjn4515gvhjnk486djnm相差谁vhjnkml,wsed场设jnm'fgvh4156jnkml,w现备和健康sedjnm'fgvhjnkml513vjv处理vhjnk产量数52edjnm急哦fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml,wsedjnm'fgvhjnkml
        </p>
        <i v-if="isShowDescriptionBtn" @click="isShowDescription = !isShowDescription" :class="['mh-if', isShowDescription ? 'double-arrow-up' : 'double-arrow-down']" class="show-description-btn"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayListInfo',

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
  .play-list-info {
    margin-top:28px;
    &-poster {
      width:32%; margin-top:12px; float:left; text-align:center;
      &-img {
        width:188px; height:188px; padding:8px; border-radius:6px;
      }
    }
    &-base {
      width:65%; margin-top:3px; display:inline-block; position:relative; color:#999;
      &-title {
        font-size:23px; color:#EEE;
      }
      &-creator {
        height:32px; margin-top:18px; display:inline-block; line-height:32px;
        &-avatar {
          width:26px; height:26px; margin:1px 12px 0 0; float:left; border-radius:50%;
          &-img {
            width:100%; height:100%; padding:1px; border-radius:50%;
          }
        }
        &-name {
          margin-right:38px; font-size:20px;
        }
        &-date {
          font-size:13.5px;
        }
      }
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
    &-other {
      position:relative; letter-spacing:1px; font-size:14px;
      &-label {
        margin-bottom:8px;
        &-title {
          color:#DDD;
        }
        &-link {
          color:#00d8ff;
        }
        &-split {
          margin:0 3px; color:#FFF;
        }
      }
      &-desc {
        width:92%; word-break:break-all; line-height:19px; overflow:hidden;
        &-title {
          color:#DDD;
        }
      }
    }
  }

  .show-description-btn {
    top:33px; right:8px; position:absolute; cursor:pointer;
    &:hover {
      color: #00d8ff;
    }
  }
</style>
