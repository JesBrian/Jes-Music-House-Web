<template>
  <div :class="{'active': this.$store.state.musicPlayListNowIndex === index}">
    <i class="mh-if play"></i>
    <p style="width:50%; display:inline-block;">12331 {{ index }}</p>
    <p id="musicCellOper">
      <i style="margin-left:3.5px;" class="mh-if non-colloection"></i>
      <i style="margin-left:3.5px;" class="mh-if share"></i>
      <i style="margin-left:3.5px;" class="mh-if download"></i>
      <i @click="delMusicListItem(index)" style="margin-left:3.5px;" class="mh-if trash-1"></i>
    </p>
    <p style="width:20%; display:inline-block;">
      <router-link to="/singer">{{ index }}</router-link>
    </p>
    <span style="width:6%; display:inline-block;">00:00</span>
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
    delMusicListItem (delMusicListIndex) {
      this.$store.commit('delMusicPlayList', delMusicListIndex)
      this.$emit('musicPlay')
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
    opacity:1!important;
  }

  .play {
    opacity:0;
    margin:0 6px 0 0;
    float:left;
    color: #20dbfc;
  }
  div.active > .play {
    opacity:1;
  }

  #musicCellOper {
    width:17%;
    opacity:0;
    display:inline-block;
  }
  div {
    padding:0 13px;
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
</style>
