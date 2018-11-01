<template>
  <div>
    <friend-tip-cell v-for="n in 88" />
  </div>
</template>

<script>
import FriendTipCell from './FriendTipCell.vue'

export default {
  name: 'FriendTipGroup',

  components: {
    FriendTipCell
  }
}
</script>

<style lang="less" scoped>

</style>
