<template>
  <div class="comment-total">
    <new-comment />

    <div class="comment-container">
      <div class="comment-group-title">
        <span class="comment-group-title-label">精彩评论</span>
      </div>
      <comment-group />

      <div class="comment-group-title">
        <span class="comment-group-title-label">最新评论</span>
      </div>
      <comment-group />

      <pagination />
    </div>
  </div>
</template>

<script>
import NewComment from './NewComment.vue'
import CommentGroup from './CommentGroup.vue'
import Pagination from '../../common/Pagination/Pagination.vue'

export default {
  name: 'CommentTotal',

  components: {
    NewComment, CommentGroup, Pagination
  }
}
</script>

<style lang="less" scoped>
  .comment {
    &-total {
      padding:0 3%; box-sizing:border-box;
    }

    &-container {
      width:100%; margin-top:18px;
    }

    &-group-title {
      height:53px; margin:0 auto; padding:0 23px; box-sizing:border-box; box-shadow:0 3px 3px -3px #999; line-height:68px; text-shadow:1px 1px 0.5px #000;
      &-label {
        font-size:16px; color:#CCC;
      }
    }
  }
</style>
