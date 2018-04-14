<template>
  <div id="homeLayout">
    <div style="width:88%; height:80px; margin:0 auto; padding:0 38px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;">
      <span style="float:left; font-size:32px; font-weight:700;">全部</span>
      <div class="super-btn-out" style="width:128px; height:36px; margin:27px 28px 0;">
        <span class="super-btn-in" style="width:118px; height:27px; top:48%; line-height:30px;">选择分类 <i class="mh-if double-arrow-down"></i></span>
      </div>
      <div style="width:108px; height:32px; margin-top:30px; float:right; text-align:center; line-height:28.8px; font-weight:700; cursor:pointer;">
        <div class="glass-bg box-show" style="width:50%; height:100%; float:left; border-radius:5px 0 0 5px;">热门</div>
        <div class="glass-bg box-show" style="width:50%; height:100%; float:right; border-radius:0 5px 5px 0;">最新</div>
      </div>
    </div>

    <table style="width:88%; height:688px; margin:0 auto;">

    </table>

    <pagination />
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
