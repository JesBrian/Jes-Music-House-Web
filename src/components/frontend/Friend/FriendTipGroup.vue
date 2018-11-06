<template>
  <div>
    <friend-tip-cell v-for="item in dataSource" :item-data="item" :key="item.id" />
  </div>
</template>

<script>
import FriendTipCell from './FriendTipCell.vue'

export default {
  name: 'FriendTipGroup',

  components: {
    FriendTipCell
  },

  props: {
    dataSource: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
