<template>
  <div>
    <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
      <i class="mh-if music-info" style="margin-right:8px; color:#00d8ff; font-size:29px;"></i><span style="font-size:23px; font-weight:700;">个性化推荐</span>
      <router-link to="/album" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
    </div>
    <div style="width:93%; height:208px; margin:0 auto;">
      <div style="width:238px; height:100%; float:left; text-align:center;">
        <router-link to="/user" style="width:100%; height:118px; margin-top:3px; display:inline-block; position:relative; line-height:103px;">
          <img v-lazy="require('../../../../static/img/default/calendar.png')" style="width:100%; height:100%;"/>
          <div style="width:50%; height:100%; top:0; left:0; position:absolute;">
            <b style="display:inline-block; transform:scaleY(1.2); font-size:56px; color:#666; text-shadow:rgb(0, 0, 0) 0.5px 0.5px 1px;">12</b>
          </div>
          <div style="width:50%; height:100%; top:0; right:0; position:absolute;">
            <b style="display:inline-block; transform:scaleY(1.2); font-size:56px; color:#666; text-shadow:rgb(0, 0, 0) 0.5px 0.5px 1px;">12</b>
          </div>
        </router-link>
        <router-link to="user" style="color:#BBB; font-size:20px; font-weight:700; line-height:2.8em;">每日歌曲推荐</router-link>
      </div>
      <ul style="float:right;">
        <li v-for="n in 3" style="height:208px; padding:0; position:relative; float:right;">
          <router-link to="/playList" class="cube-bg box-show" style="width:138px; height:138px; margin:0 0 8px 22px; padding:2px; position:relative; display:inline-block;">
            <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
            <div class="glass-bg" style="width:140px; height:30px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#999;">
              <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656
            </div>
          </router-link>
          <i @click="playThisPlayList" class="mh-if play"></i>
          <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
            <router-link to="/playList" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalRecom'
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
