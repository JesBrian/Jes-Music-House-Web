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
              <i @click="showModal('Collection')" class="mh-if non-colloection"></i>
              <i @click="showModal('Share')" class="mh-if share"></i>
              <i class="mh-if download"></i>
              <i @click="delMusicListItem(index)" class="mh-if trash-1"></i>
            </p>
            <p class="cell music-list-cell-singer">
              <router-link to="/singer/11" class="label">{{ index }}</router-link>
            </p>
            <p @click="playThisMusic(index)" class="cell music-list-cell-time">00:00</p>
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

  methods: {
    playThisMusic (index) {
      // this.$parent.playThisMusic(index)
    },

    /**
     * 删除播放列表某项
     * @param delMusicListIndex
     */
    delMusicListItem (delMusicListIndex) {
      this.$store.commit('DEL_PLAY_LIST_ITEM', delMusicListIndex)
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
        max-width:288px; left:33px; display:inline-block;
      }

      > .music-cell-oper {
        width:15%; left:325px; display:flex; justify-content:space-around; opacity:0;
      }

      &-singer {
        max-width:18%; left:432px; display:inline-block;

        > .label {
          color:#999;
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
