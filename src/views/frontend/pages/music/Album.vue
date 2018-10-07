<template>
  <div id="homeLayout">
    <div style="padding:0 58px 28px; box-sizing:border-box;">
      <div style="width:100%; height:80px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;">
        <span style="float:left; font-size:32px; font-weight:700;">{{ styleLabel }}</span>
        <div style="width:128px; height:36px; margin:15px 28px 0; position:relative; display:inline-block;">
          <div @click="changeShowPlayListStyleContent" class="super-btn-out ripple" style="width:100%; height:100%;">
            <span class="super-btn-in" style="width:118px; height:27px; line-height:27px;">选择分类 <i class="mh-if double-arrow-down"></i></span>
          </div>

          <IndexPlayListStyle v-if="showAlbumTypeContent" @changePlayListStyle="changePlayListStyle" />

        </div>

        <div style="width:108px; height:32px; margin-top:30px; float:right; text-align:center; line-height:28.8px; font-weight:700; cursor:pointer;">
          <div @click="changeContentType('hot')" :class="contentType === 'hot' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:left; border-radius:5px 0 0 5px; text-shadow:1px 1px 2px #000;">热门</div>
          <div @click="changeContentType('new')" :class="contentType === 'new' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:right; border-radius:0 5px 5px 0; text-shadow:1px 1px 2px #000;">最新</div>
        </div>
      </div>

      <ul style="width:93%; margin:0 auto;">
        <li v-for="n in 30" :key="n + 99" style="width:20%; height:188px; margin:0; padding:0; position:relative; display:inline-block;">
          <router-link to="/playList" class="cube-bg box-show" style="width:118px; height:118px; margin:0 0 8px 23px; padding:2px; position:relative; display:inline-block;">
            <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
            <div class="glass-bg" style="width:120px; height:24px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:21px; font-size:14px; color:#999;">
              <i class="mh-if headphone" style="margin:1px 3px 0 0; float:left;"></i>5656
            </div>
          </router-link>
          <i @click="playThisPlayList" class="mh-if play"></i>
          <p class="text-hidden" style="width:118px; margin-left:23px; color:#DDD;">
            <router-link to="/playList" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
          </p>
          <p class="text-hidden" style="width:118px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
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
import Pagination from '../../../../components/common/Pagination/Pagination.vue'
import IndexPlayListStyle from '../../../../components/frontend/style/IndexPlayListStyle.vue'

export default {
  name: 'album',

  components: {
    IndexPlayListStyle, Pagination
  },

  data () {
    return {
      styleId: 0,
      styleLabel: '全部',
      contentType: 'hot',
      showAlbumTypeContent: false
    }
  },

  methods: {
    playThisPlayList () {
      console.log(65666)
    },

    changeContentType (type) {
      this.contentType = type
    },

    changeShowPlayListStyleContent () {
      this.showAlbumTypeContent = !this.showAlbumTypeContent
    },

    changePlayListStyle (id, label) {
      this.styleId = id
      this.styleLabel = label
    }
  }
}
</script>

<style scoped>
  li > .mh-if {
    top:97px; left:121px; position:absolute; display:none;
  }
  li:hover > .mh-if {
    display:inline-block;
  }
  li:hover > .mh-if:hover {
    color:#20dbfc;
  }
</style>
