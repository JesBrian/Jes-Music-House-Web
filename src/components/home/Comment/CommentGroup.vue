<template>
  <ul>
    <li v-for="n in 6" :key="n + 99" class="box-shadow">
      <comment-cell />
    </li>
  </ul>
</template>

<script>
import CommentCell from './CommentCell.vue'

export default {
  name: 'CommentGroup',

  components: {CommentCell}
}
</script>

<style scoped>

</style>
