<template>
  <div id="homeLayout">

    <div class="singer-detail-left box-show">
      <!-- 歌手信息 -->
      <div class="singer-info-container">
        <div class="singer-info-avatar">
          <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"
               class="singer-info-avatar-img glass-bg box-show"/>
        </div>
        <div class="singer-info-base">
          <p class="singer-info-base-name">The Name of the Singer</p>
          <p class="singer-info-base-publish">
            <span style="margin-right:26px;">
              <i class="mh-if music-albu-2" style="margin-right:6px;"></i>单曲数：253
            </span>
            <span style="margin-right:26px;">
              <i class="mh-if redis" style="margin-right:6px;"></i>专辑数：63
            </span>
          </p>
          <div class="super-btn-out ripple" style="width:108px; height:38px;">
            <span class="super-btn-in mh-if non-colloection" style="width:95px; height:25px; top:48%; font-size:21px; line-height:26px;"> 关注</span>
          </div>
        </div>
      </div>

      <!-- 歌手内容切换 -->
      <div style="height:32px; margin:28px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;">
        <span @click="changeContent('hot-song')" :class="{'active': type === 'hot-song'}" class="singer-menu-cell">热门歌曲</span>
        <span @click="changeContent('all-disc')" :class="{'active': type === 'all-disc'}" class="singer-menu-cell">所有专辑</span>
        <span @click="changeContent('singer-description')" :class="{'active': type === 'singer-description'}" class="singer-menu-cell">艺人介绍</span>
      </div>

      <!-- 不同内容 -->
      <div style="min-height:388px; margin:0 auto 28px;">
        <component :is="type" />
      </div>
    </div>

    <div class="singer-detail-right">
      <similar-singer />
      <download-client />
    </div>

  </div>
</template>

<script>
import HotSong from '../../../../components/frontend/SingerDetail/HotSong.vue'
import AllDisc from '../../../../components/frontend/SingerDetail/AllDisc.vue'
import SingerDescription from '../../../../components/frontend/SingerDetail/SingerDescription.vue'
import DownloadClient from '../../../../components/frontend/RightCommend/DownloadClient.vue'
import SimilarSinger from '../../../../components/frontend/RightCommend/SimilarSinger.vue'

export default {
  name: 'SingerPage',

  components: {
    SimilarSinger, HotSong, AllDisc, SingerDescription, DownloadClient
  },

  data () {
    return {
      singerId: this.$route.params['id'],
      type: this.$route.params['type']
    }
  },

  created () {
  },

  methods: {
    changeContent (type) {
      this.type = type

      this.$router.push(`/singer-detail/${type}/${this.singerId}`)
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .singer-detail {
    &-left {
      flex:1;
    }
    &-right {
      width:25%; padding:34px 18px; box-sizing:border-box;
    }
  }

  .singer-info {
    &-container {
      width:96%; margin:28px auto 18px;
    }
    &-avatar {
      width:20%; height:100%; display:inline-block; text-align:center;
      &-img {
        width:128px; height:128px; margin-right:28px; padding:6px;
      }
    }
    &-base {
      width:80%; height:100%; float:right;
      &-name {
        padding-top:8px; font-size:24px;
      }
      &-publish {
        line-height:3em;
      }
    }
  }

  .singer-menu-cell {
    margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
  }
  .singer-menu-cell:hover {
    color:#EEE;
  }
  .singer-menu-cell.active {
    border-bottom:2px solid #20dbfc; color:#20dbfc
  }

  .play-list-type {
    width:30px; height:30px;
  }
  .play-list-type > .super-btn-in {
    width:24px; height:24px; top:48%; font-size:19px; line-height:24px;
  }
  .play-list-type.active > .super-btn-in {
    top:50%;
  }
</style>
