<template>
  <div>
    <comment-cell v-for="n in 6" />
  </div>
</template>

<script>
import CommentCell from './CommentCell.vue'

export default {
  name: 'CommentGroup',

  components: {
    CommentCell
  }
}
</script>

<style scoped>

</style>
