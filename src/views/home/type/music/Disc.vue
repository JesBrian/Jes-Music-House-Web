<template>
  <div id="homeLayout">
    <div style="width:88%; height:80px; margin:0 auto; padding:0 38px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;">
      <span style="float:left; font-size:32px; font-weight:700;">热门新碟</span>
    </div>

    <div style="width:100%; height:388px;"></div>

    <div style="width:88%; height:80px; margin:0 auto; padding:0 38px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;">
      <span style="float:left; font-size:32px; font-weight:700;">全部新碟</span>
    </div>

    <table style="width:100%; height:888px;"></table>
    <pagination />

  </div>
</template>

<script>
import Pagination from '../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'Disc',

  components: {
    Pagination
  }
}
</script>

<style scoped>

</style>
