<template>
  <div class="all-disc-container">
    <disc-list-group />
  </div>
</template>

<script>
import DiscListGroup from '../Disc/DiscListGroup.vue'

export default {
  name: 'AllDisc',

  components: {
    DiscListGroup
  }
}
</script>

<style lang="less" scoped>
  .all-disc-container {
    margin-top:28px;
  }
</style>
