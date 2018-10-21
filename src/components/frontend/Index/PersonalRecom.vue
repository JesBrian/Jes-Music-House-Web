<template>
  <div>
    <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
      <i class="mh-if music-info" style="margin-right:8px; color:#00d8ff; font-size:29px;"></i><span style="font-size:23px; font-weight:700;">个性化推荐</span>
      <router-link to="/user/recommend" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
    </div>
    <div style="width:93%; height:188px; margin:0 auto;">
      <div style="width:208px; height:100%; float:left; text-align:center;">
        <router-link to="/user/recommend" style="width:100%; height:108px; margin-top:3px; display:inline-block; position:relative; line-height:103px;">
          <img v-lazy="require('../../../../static/img/default/calendar.png')" style="width:100%; height:100%;"/>
          <div style="width:50%; height:100%; top:-3px; left:0; position:absolute;">
            <b style="display:inline-block; transform:scaleY(1.2); font-size:56px; color:#666; text-shadow:rgb(0, 0, 0) 0.5px 0.5px 1px;">{{ getDateMonth }}</b>
          </div>
          <div style="width:50%; height:100%; top:-3px; right:0; position:absolute;">
            <b style="display:inline-block; transform:scaleY(1.2); font-size:56px; color:#666; text-shadow:rgb(0, 0, 0) 0.5px 0.5px 1px;">{{ getDateDay }}</b>
          </div>
        </router-link>
        <router-link to="user" style="color:#BBB; font-size:20px; font-weight:700; line-height:2.8em;">每日歌曲推荐</router-link>
      </div>
      <ul>
        <li v-for="n in 3" :key="n + 99" style="width:20%; height:208px; margin:0 0 0 18px; padding:0; position:relative; display:inline-block;">
          <router-link to="/play-list/song-group/1" class="cube-bg box-show" style="width:118px; height:118px; margin:0 0 8px 23px; padding:2px; position:relative; display:inline-block;">
            <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
            <div class="glass-bg" style="width:120px; height:24px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:21px; font-size:14px; color:#999;">
              <i class="mh-if headphone" style="margin:1px 3px 0 0; float:left;"></i>5656
            </div>
          </router-link>
          <i @click="playThisPlayList" class="mh-if play"></i>
          <p class="text-hidden" style="width:118px; margin-left:23px; color:#DDD;">
            <router-link to="/play-list/song-group/1" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
          </p>
          <p class="text-hidden" style="width:118px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
            <span style="float:left; margin:-1px 8px 0 0;">by</span><router-link to="singer" style="color:#AAA;">JesBrian</router-link>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalRecom',

  data () {
    return {
    }
  },

  computed: {
    getDateMonth () {
      return new Date().getMonth() + 1
    },
    getDateDay () {
      return new Date().getDate()
    }
  },

  methods: {
    playThisPlayList () {
    }
  }
}
</script>

<style scoped>
  li > .mh-if {
    top:97px; left:121px; position:absolute; display:none;
  }
  li:hover>.mh-if {
    display:inline-block;
  }
  li:hover>.mh-if:hover {
    color:#20dbfc;
  }

  .read-more {
    margin-top:46px; float:right; font-size:13px; color:#888; line-height:1em;
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
