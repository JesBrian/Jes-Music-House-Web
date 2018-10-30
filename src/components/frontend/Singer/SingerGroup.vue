<template>
  <div class="singer-container">
    <singer-cell v-for="item in singerList" :key="item.id" :singer-data="item" />
  </div>
</template>

<script>
import SingerCell from './SingerCell.vue'

export default {
  name: 'SingerGroup',

  components: {
    SingerCell
  },

  props: {
    singerList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .singer-container {
    width:100%; margin:0 auto; display:flex; justify-content:space-between; flex-wrap:wrap;
  }
</style>
