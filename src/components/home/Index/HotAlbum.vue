<template>
  <div>
    <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
      <span style="float:left; font-size:23px; font-weight:700;">热门推荐</span>
      <router-link to="/album" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
    </div>
    <ul style="width:93%; margin:0 auto;">
      <li v-for="n in 8" style="width:25%; height:208px; margin:0; padding:0; position:relative; display:inline-block;">
        <router-link to="/playList" class="cube-bg box-show" style="width:138px; height:138px; margin:0 0 8px 23px; padding:2px; position:relative; display:inline-block;">
          <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
          <div class="glass-bg" style="width:140px; height:30px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#999;">
            <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656
          </div>
        </router-link>
        <i @click="playThisPlayList" class="mh-if play"></i>
        <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
          <router-link to="/playList" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
        </p>
        <p class="text-hidden" style="width:138px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
          <span style="float:left; margin:-1px 8px 0 0;">by</span><router-link to="singer" style="color:#AAA;">JesBrian</router-link>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotAlbum'
}
</script>

<style scoped>

  li > .mh-if {
    top:116px; left:138px; position:absolute; display:none;
  }
  li:hover>.mh-if {
    display:inline-block;
  }
  li:hover>.mh-if:hover {
    color:#20dbfc;
  }

  .read-more {
    margin-top:38px; float:right; font-size:13px; color:#888; line-height:1em;
  }
  .read-more:hover {
    color:#EEE;
    text-decoration:underline;
  }
  .read-more > .mh-if {
    font-size:12.5px;
  }
  .read-more:hover > .mh-if {
    color: #20dbfc;
  }
</style>
