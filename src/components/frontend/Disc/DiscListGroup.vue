<template>
  <div class="disc-list-group">

    <disc-list-cell v-for="n in 25" :key="n + 99" />

  </div>
</template>

<script>
import DiscListCell from './DiscListCell.vue'

export default {
  name: 'DiscListGroup',

  components: {
    DiscListCell
  }
}
</script>

<style lang="less" scoped>
  .disc-list-group {
    width:93%; margin:0 auto 18px; display:flex; flex-wrap:wrap; justify-content:space-between;
  }
</style>
