<template>
  <div class="player-menu glass-bg box-show">
    <div class="player-menu-title box-show">
      <div class="player-menu-operation">
        <span class="player-menu-operation-label">播放列表 [ {{ $store.state.Music.nowPlayList.length }} ]</span>
        <div class="player-menu-operation-container">
          <a @click="showModal('Collection')"><i class="mh-if collection-music"></i>收藏全部</a>
          <a @click="clearMusicPlayList"><i class="mh-if trash-2"></i>清空列表</a>
        </div>
      </div>
      <div class="player-menu-now-song">
        <p class="player-menu-now-song-label">
          {{ $store.state.Music.nowPlayList.length === 0 ? '' : $store.state.Music.nowPlayList[$store.state.Music.nowIndex].name }}
        </p>
        <i @click="changeMusicPlayListContentShowStatus" class="player-menu-close mh-if all-arrow"></i>
      </div>
    </div>

    <div class="player-menu-container box-show">

      <!-- 歌曲列表 -->
      <music-player-list />

      <!-- 歌词滚动区域 -->
      <music-player-lyric />

    </div>
  </div>
</template>

<script>
import MusicPlayerList from './MusicPlayerList.vue'
import MusicPlayerLyric from './MusicPlayerLyric.vue'

export default {
  name: 'MusicPlayListContent',

  components: {
    MusicPlayerList, MusicPlayerLyric
  },

  methods: {
    /**
     * 清空播放列表
     */
    clearMusicPlayList () {
      this.$store.commit('CLEAR_PLAY_LIST')
    },

    changeMusicPlayListContentShowStatus () {
      this.$parent.changeMusicPlayListContentShowStatus()
    },

    showModal (type) {
      this.$parent.showModal(type)
    }
  }
}
</script>

<style lang="less" scoped>
  .player {
    &-menu {
      width:1028px; height:290px; left:50%; bottom:45px; position:absolute; transform:translate(-50%,0); z-index:-1; background:#151515; opacity:0.988; border-radius:8px 8px 0 0; color:#999;

      &-title {
        width:100%; height:38px; border-radius:8px 8px 0 0; line-height:40px; z-index:9;
      }
      &-operation {
        width:62%; height:100%; padding:0 2%; float:left; box-sizing:border-box;
        &-label {
          font-weight:700;
        }
        &-container {
          float:right; font-size:14px;
          .mh-if {
            margin:0 3px 0 18px;
          }
        }
      }
      &-now-song {
        width:38%; height:100%; float:right; position:relative; text-align:center;
        &-label {
          width:80%; height:100%; margin:0 auto; display:inline-block;
        }
      }
      &-close {
        top:-3px; right:5px; position:absolute; font-size:20px;
      }
      &-container {
        width:100%; height:250px; padding-bottom:2px; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727; font-size:14px;
      }
    }
  }
</style>
