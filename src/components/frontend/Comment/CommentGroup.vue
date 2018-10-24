<template>
  <ul>
    <li v-for="n in 6" :key="n + 99" class="box-shadow">
      <comment-cell @hiddenOtherReplyContent="hiddenOtherReplyContent" />
    </li>
  </ul>
</template>

<script>
import CommentCell from './CommentCell.vue'

export default {
  name: 'CommentGroup',

  components: {
    CommentCell
  },

  data () {
    return {
      createCommentObj: null
    }
  },

  methods: {
    hiddenOtherReplyContent (obj) {
      if ((this.createCommentObj !== null) && (this.createCommentObj._uid !== obj._uid)) {
        this.createCommentObj.isShowReplyContent = false
      }
      this.createCommentObj = obj
    }
  }
}
</script>

<style scoped>

</style>
