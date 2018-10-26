<template>
  <div class="play-list-container">

    <play-list-cell v-for="(item, index) in playListData" :key="`www${index}`" :play-list="item" />

  </div>
</template>

<script>
import PlayListCell from './PlayListCell.vue'

export default {
  name: 'PlayListGroup',

  props: {
    playListData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  components: {
    PlayListCell
  }
}
</script>

<style lang="less" scoped>
  .play-list-container {
    width:100%; margin:0 auto; display:flex; justify-content:space-between; flex-wrap:wrap;
  }
</style>
