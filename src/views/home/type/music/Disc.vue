<template>
  <div id="homeLayout">
    <div style="padding:0 58px 28px; box-sizing:border-box;">

      <div style="width:100%; height:80px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;">
        <span style="float:left; font-size:32px; font-weight:700;">热门新碟</span>
      </div>

      <ul style="width:93%; margin:0 auto;">
        <li v-for="n in 15" style="width:20%; height:228px; margin:0; padding:0; position:relative; display:inline-block;">
          <router-link to="/playList" style="width:162px; height:138px; margin:0 20px; position:relative; display:inline-block;">
            <img v-lazy="'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130'" style="width:127px; height:127px; top:5px; left:6px; position:absolute;"/>
            <img :src="require('../../../../../static/img/default/disc.png')" style="width:100%; height:100%;"/>
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

      <div style="width:100%; height:80px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;">
        <span style="float:left; font-size:32px; font-weight:700;">全部新碟</span>
      </div>

      <ul style="width:93%; margin:0 auto 18px;">
        <li v-for="n in 25" style="width:20%; height:228px; margin:0; padding:0; position:relative; display:inline-block;">
          <router-link to="/playList" style="width:162px; height:138px; margin:0 20px; position:relative; display:inline-block;">
            <img v-lazy="'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130'" style="width:127px; height:127px; top:5px; left:6px; position:absolute;"/>
            <img v-lazy="require('../../../../../static/img/default/disc.png')" style="width:100%; height:100%;"/>
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

      <!-- 分页组件 -->
      <pagination />
    </div>
  </div>
</template>

<script>
import Pagination from '../../../../components/common/pagination/Pagination.vue'

export default {
  name: 'Disc',

  components: {
    Pagination
  }
}
</script>

<style scoped>
  li > .mh-if {
    top:105px; left:125px; position:absolute; font-size:25px; display:none;
  }
  li:hover > .mh-if {
    display:inline-block;
  }
  li:hover > .mh-if:hover {
    color:#20dbfc;
  }
</style>
