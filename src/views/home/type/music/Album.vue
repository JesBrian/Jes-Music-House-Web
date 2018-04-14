<template>
  <div id="homeLayout">
    <div style="padding:0 58px 28px; box-sizing:border-box;">
      <div style="width:100%; height:80px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;">
        <span style="float:left; font-size:32px; font-weight:700;">全部</span>
        <div class="super-btn-out" style="width:128px; height:36px; margin:27px 28px 0;">
          <span class="super-btn-in" style="width:118px; height:27px; top:48%; line-height:30px;">选择分类 <i class="mh-if double-arrow-down"></i></span>
        </div>
        <div style="width:108px; height:32px; margin-top:30px; float:right; text-align:center; line-height:28.8px; font-weight:700; cursor:pointer;">
          <div class="glass-bg box-show" style="width:50%; height:100%; float:left; border-radius:5px 0 0 5px;">热门</div>
          <div class="glass-bg box-show" style="width:50%; height:100%; float:right; border-radius:0 5px 5px 0;">最新</div>
        </div>
      </div>

      <ul style="width:93%; margin:0 auto;">
        <li v-for="n in 30" style="width:20%; height:228px; margin:0; padding:0; display:inline-block;">
          <router-link to="/playList" class="cube-bg box-show" style="width:138px; height:138px; margin:0 23px; padding:2px; position:relative; display:inline-block;">
            <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%; border-radius:4px;"/>
            <div class="glass-bg" style="width:140px; height:30px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#666;">
              <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656<i class="mh-if play" style="float:right;"></i>
            </div>
          </router-link>
        </li>
      </ul>

      <!-- 分页组件 -->
      <pagination />
    </div>
  </div>
</template>

<script>
import Pagination from '../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'album',

  components: {
    Pagination
  }
}
</script>

<style scoped>

</style>
