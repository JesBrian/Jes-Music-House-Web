<template>
  <div id="homeLayout">
    <div class="disc-title">
      <span class="disc-title-label">热门新碟</span>
    </div>
    <disc-list-group />

    <div class="disc-title">
      <span class="disc-title-label">全部新碟</span>
    </div>
    <disc-list-group />

    <!-- 分页组件 -->
    <pagination />
  </div>
</template>

<script>
import DiscListGroup from '../../../../components/frontend/Disc/DiscListGroup.vue'
import Pagination from '../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'Disc',

  components: {
    DiscListGroup, Pagination
  },

  data () {
    return {}
  },

  methods: {
    playThisPlayList () {
    }
  }
}
</script>

<style lang="less" scoped>
  #homeLayout {
    padding:0 58px 28px; box-sizing:border-box;
  }
  .disc-title {
    width:100%; height:80px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:88px;
    &-label {
      float:left; font-size:32px; font-weight:700;
    }
  }
</style>
