<template>
  <div id="homeLayout">

    <div class="singer-detail-left box-show">
      <!-- 歌手信息 -->
      <div class="singer-info-container">
        <div class="singer-info-base">
          <p class="singer-info-base-name">The Name of the Singer</p>

          <div class="singer-info-base-poster box-show">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1464672532,2989234701&fm=26&gp=0.jpg" class="singer-info-base-poster-img" />
            <div class="super-btn-out">
              <span class="super-btn-in mh-if non-colloection">&nbsp;关注</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 歌手内容切换 -->
      <div class="singer-menu">
        <span @click="changeContent('hot-song')" :class="{'active': type === 'hot-song'}" class="singer-menu-cell">热门歌曲</span>
        <span @click="changeContent('all-disc')" :class="{'active': type === 'all-disc'}" class="singer-menu-cell">所有专辑</span>
        <span @click="changeContent('singer-description')" :class="{'active': type === 'singer-description'}" class="singer-menu-cell">艺人介绍</span>
      </div>

      <!-- 不同内容 -->
      <div class="singer-detail-container">
        <component :is="type" />
      </div>
    </div>

    <div class="singer-detail-right">
      <similar-singer :data-source="similarSingerList" />
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
      type: this.$route.params['type'],

      similarSingerList: [
        {id: 101, name: '相似歌手1'},
        {id: 102, name: '相似歌手2'},
        {id: 103, name: '相似歌手3'},
        {id: 104, name: '相似歌手4'},
        {id: 105, name: '相似歌手5'},
        {id: 106, name: '相似歌手6'}
      ]
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
    &-container {
      min-height:388px; margin:0 auto 28px;
    }
  }

  .singer-info {
    &-container {
      width:90%; margin:28px auto 0;
    }
    &-base {
      &-name {
        padding-top:8px; font-size:22px;
      }
      &-poster {
        width:100%; height:328px; margin:8px auto 0; padding:3px; box-sizing:border-box; position:relative;

        &-img {
          width:100%; height:100%;
        }

        .super-btn {
          &-out {
            width:73px; height:33px; right:18px; bottom:18px; position:absolute; opacity:0.8;
            &:hover {
              opacity:1;
            }
          }
          &-in {
            width:63px; height:22px;
          }
        }
      }
    }
  }

  .singer-menu {
    height:32px; margin:28px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;
    &-cell {
      margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
      &:hover {
        color:#EEE;
      }
      &.active {
        border-bottom:2px solid #20dbfc; color:#20dbfc
      }
    }
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
