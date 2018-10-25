<template>
  <div class="disc-list-cell">
    <router-link to="/play-list/song-group/1" style="width:139px; height:119px; margin:0 20px; position:relative; display:inline-block;">
      <img v-lazy="'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130'" style="width:108px; height:108px; top:5px; left:6px; position:absolute;"/>
      <img src="../../../../static/img/default/disc.png" style="width:100%; height:100%;"/>
    </router-link>
    <i @click="playThisPlayList" class="play-btn mh-if play"></i>
    <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
      <router-link to="/play-list/song-group/1" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
    </p>
    <p class="text-hidden" style="width:138px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
      <span style="float:left; margin:-1px 8px 0 0;">by</span><router-link to="singer" style="color:#AAA;">JesBrian</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DiscListCell'
}
</script>

<style lang="less" scoped>
  .disc-list-cell {
    width:20%; height:228px; margin:0; padding:0; position:relative; display:inline-block;

    > .play-btn {
      top:88px; left:110px; position:absolute; font-size:25px; display:none;
    }
    &:hover > .play-btn {
      display:inline-block;
      &:hover {
        color:#20dbfc;
      }
    }
  }
</style>
