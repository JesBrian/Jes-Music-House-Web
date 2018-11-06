<template>
  <div>
    <comment-cell v-for="item in dataSource" :item-data="item" :key="item.id" />
  </div>
</template>

<script>
import CommentCell from './CommentCell.vue'

export default {
  name: 'CommentGroup',

  components: {
    CommentCell
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

<style scoped>

</style>
