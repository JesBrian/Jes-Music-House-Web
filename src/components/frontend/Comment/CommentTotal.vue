<template>
  <div class="comment-total">

    <div v-if="showTitle" class="comment-total-nav">
      <i class="comment-total-nav-icon mh-if feedback"></i>
      <span class="comment-total-nav-title">听友评论</span>
      <span class="comment-total-nav-label">共{{ commentNum }}条评论</span>
    </div>

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
  },

  props: {
    showTitle: {
      type: Boolean,
      default: false
    },
    commentNum: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="less" scoped>
  .comment {
    &-total {
      padding:0 3%; box-sizing:border-box;

      &-nav {
        width:100%; height:38px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:38px;
        &-icon {
          color:#00d8ff; font-size:30px;
        }
        &-title {
          margin:0 8px; font-size:22px; font-weight:700;
        }
        &-label {
          font-size:14px;
        }
      }
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
