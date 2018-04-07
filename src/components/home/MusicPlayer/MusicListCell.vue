<template>
  <div :class="{'active': this.$store.state.musicPlayListNowIndex === index}" style="width:100%; height:100%; position:relative;">

    <!-- BEGIN 点击切换播放歌曲 BEGIN -->
    <div @click="playThisMusic(index)" style="width:100%; height:100%; position:relative; z-index:1;"></div>
    <!-- END 点击切换播放歌曲 END -->

    <!-- BEGIN 歌曲信息 OR 操作 BEGIN -->
    <p @click="playThisMusic(index)" class="mh-if play" style="width:23px; display:inline-block; text-align:right;"></p>
    <p @click="playThisMusic(index)" style="max-width:288px; left:33px; display:inline-block;">12331 {{ index }}</p>
    <p id="musicCellOper">
      <i style="margin-left:3.5px;" class="mh-if non-colloection"></i>
      <i style="margin-left:3.5px;" class="mh-if share"></i>
      <i style="margin-left:3.5px;" class="mh-if download"></i>
      <i @click="delMusicListItem(index)" style="margin-left:3.5px;" class="mh-if trash-1"></i>
    </p>
    <p style="max-width:18%; left:432px; display:inline-block;">
      <router-link to="/singer" style="color:#999;">{{ index }}</router-link>
    </p>
    <p @click="playThisMusic(index)" style="width:6%; left:568px; display:inline-block;">00:00</p>
    <!-- END 歌曲信息 OR 操作 END -->

  </div>
</template>

<script>
export default {
  name: 'MusicListCell',

  props: [
    'index',
    'content'
  ],

  methods: {
    /**
     * 删除播放列表某项
     * @param delMusicListIndex
     */
    delMusicListItem (delMusicListIndex) {
      this.$store.commit('delMusicPlayList', delMusicListIndex)
      this.$emit('musicPlay')
    },

    /**
     * 切换播放列表中的歌曲
     * @param playIndex
     */
    playThisMusic (playIndex) {
      this.$store.commit('changemusicPlayListNowIndex', {nowIndexNum: playIndex})
    }
  }
}
</script>

<style scoped>
  .mh-if {
    color:#999;
  }
  .mh-if:hover {
    cursor:pointer;
    color: #46dfff;
    text-shadow:0 0 1px #000, 0 0 3px #FFF;
  }

  .play {
    opacity:0;
    color: #20dbfc;
  }
  div.active > .play {
    opacity:1;
  }

  #musicCellOper {
    width:15%;
    left:325px;
    opacity:0;
    display:inline-block;
  }
  div {
    padding:0 13px 0 0;
  }
  div:hover {
    background:#111;
  }
  div.active {
    background:#0D0D0D;
  }
  div:hover > #musicCellOper {
    opacity:1;
  }
  div > p {
    top:0;
    position:absolute;
    z-index:9;
  }
</style>
