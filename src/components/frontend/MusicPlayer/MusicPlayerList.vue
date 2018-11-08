<template>
  <div id="musicPlayerList">
    <gemini-scrollbar>
      <ul class="music-list-container">
        <li v-for="(item ,index) in $store.state.Music.nowPlayList" :key="index + 99" class="music-list-cell-container box-shadow">
          <div :class="{'active': $store.state.Music.nowIndex === index}" class="music-list-cell">

            <!-- BEGIN 点击切换播放歌曲 BEGIN -->
            <div @click="playThisMusic(index)" class="music-list-cell-player" ></div>
            <!-- END 点击切换播放歌曲 END -->

            <!-- BEGIN 歌曲信息 OR 操作 BEGIN -->
            <p @click="playThisMusic(index)" class="cell mh-if play"></p>
            <p @click="playThisMusic(index)" class="cell music-list-cell-label">{{ item.name }}</p>
            <p class="cell music-cell-oper">
              <i @click="showModal('Collection')" class="mh-if non-collection"></i>
              <i @click="showModal('Share')" class="mh-if share"></i>
              <i class="mh-if download"></i>
              <i @click="delMusicListItem(index)" class="mh-if trash-1"></i>
            </p>
            <p class="cell music-list-cell-singer text-hidden">
              <router-link v-for="singerItem in item.singer" :to="`/singer-detail/hot-song/${singerItem.id}`"
                           :key="singerItem.id" class="label">
                {{ singerItem.name }}
              </router-link>
            </p>
            <p @click="playThisMusic(index)" class="cell music-list-cell-time">{{ item.time }}</p>
            <!-- END 歌曲信息 OR 操作 END -->

          </div>
        </li>
      </ul>
    </gemini-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayerList',

  computed: {
    nowIndex () {
      return this.$store.state.Music.nowIndex
    }
  },

  watch: {
    nowIndex: {
      handler () {
        this.positionNowIndex() // 修改后重新定位
      },
      deep: true
    }
  },

  mounted () {
    this.positionNowIndex() // 初始化定位
  },

  methods: {
    /**
     * 定位当前播放的歌曲在列表中的位置
     */
    positionNowIndex () {
      let playListContainerDom = document.getElementById('musicPlayerList').querySelector('.gm-scroll-view')

      if (this.nowIndex < 4) {
        playListContainerDom.scrollTop = 0
      } else if (this.nowIndex + 4 > this.$store.state.Music.nowPlayList.length) {
        playListContainerDom.scrollTop = this.$store.state.Music.nowPlayList.length * 28
      } else {
        playListContainerDom.scrollTop = 28 * (this.nowIndex - 4)
      }
    },

    /**
     * 切换播放列表中的歌曲
     * @param index
     */
    playThisMusic (index) {
      this.$store.commit('GO_INDEX', index)
    },

    /**
     * 删除播放列表某项
     * @param delIndex
     */
    delMusicListItem (delIndex) {
      this.$store.commit('DEL_ITEM', delIndex)
    },

    showModal (type) {
      this.$parent.showModal(type)
    }
  }
}
</script>

<style lang="less" scoped>
  #musicPlayerList {
    width:62%; height:250px; padding-top:3px; float:left; box-sizing:border-box; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }

  .music-list {
    &-container {
      width:100%; padding-right:8px; box-sizing:border-box; line-height:27px; overflow:hidden;
    }

    &-cell {
      width:100%; height:100%; padding:0 13px 0 0; position:relative; box-sizing:border-box;

      > .cell {
        top:0; position:absolute; z-index:9;
      }

      &:hover, &.active {
        color:#EEE;
      }
      &:hover {
        background:#252525;

        > .music-cell-oper {
          opacity:1;
          > .mh-if {
            color:#999;
            &:hover {
              color:#EEE;
            }
            &:active {
              color:#00D8FF;
            }
          }
        }
      }
      &.active {
        background:#0A0A0A;
        > .play {
          opacity:1;
        }
      }

      &-player {
        width:100%; height:100%; position:relative; z-index:1;
      }

      > .play {
        width:23px; display:inline-block; text-align:right; opacity:0; color:#20dbfc;
      }

      &-label {
        max-width:238px; left:33px; display:inline-block;
      }

      > .music-cell-oper {
        width:15%; left:285px; display:flex; justify-content:space-around; opacity:0;
      }

      &-singer {
        max-width:24%; left:400px; display:inline-block; color:#999; font-size:13px;

        > .label {
          color:#999;
          &:hover {
            color:#DDD;
          }
          &::after {
            content:'/'; color:#999;
          }
          &:last-child::after {
            content:'';
          }
        }
      }

      &-time {
        width:6%; left:568px; display:inline-block;
      }

      &-container {
        width:100%; height:28px; padding:1px; box-sizing:border-box; z-index:2;
      }
    }
  }
</style>
