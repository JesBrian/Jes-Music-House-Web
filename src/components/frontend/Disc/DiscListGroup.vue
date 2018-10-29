<template>
  <div class="disc-list-group">

    <disc-list-cell v-for="item in discList" :key="item.id" :disc-data="item" />

  </div>
</template>

<script>
import DiscListCell from './DiscListCell.vue'

export default {
  name: 'DiscListGroup',

  components: {
    DiscListCell
  },

  props: {
    discList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .disc-list-group {
    width:93%; margin:0 auto 18px; display:flex; flex-wrap:wrap; justify-content:space-between;
  }
</style>
