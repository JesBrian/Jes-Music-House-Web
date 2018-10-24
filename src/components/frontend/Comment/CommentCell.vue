<template>
  <div class="comment-cell">
    <router-link class="comment-cell-user box-show" to="/user">
      <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" class="comment-cell-user-img" />
    </router-link>

    <p class="comment-cell-content">
      <router-link to="/user" class="comment-cell-user-link">JesBrian</router-link>
      ：rdctfvygrdchjrdctfvygubhjrdctfvygrdchjrdctfvygubhj
    </p>

    <p class="comment-cell-info">
      <span class="comment-cell-info-time">2018-09-30 12:12</span>

      <span class="comment-cell-info-operation">
        <i class="mh-if horn"></i>举报</span>
      <span class="comment-cell-info-operation">
        <i class="mh-if add-collection"></i>123132
      </span>
      <span @click="showModal('Share')" class="comment-cell-info-operation">
        <i class="mh-if share"></i>分享</span>
      <span @click="replyComment" class="comment-cell-info-operation">
        <i class="mh-if feedback"></i>回复</span>
    </p>

    <div v-if="isShowReplyContent" style="margin-top:18px;">
      <create-comment />
    </div>

  </div>
</template>

<script>
import CreateComment from './CreateComment.vue'

export default {
  name: 'CommentCell',

  components: {
    CreateComment
  },

  data () {
    return {
      isShowReplyContent: false
    }
  },

  methods: {
    changeLike () {
    },

    showModal (modalType) {
      this.$store.commit('CHANGE_MODAL_TYPE', modalType)
    },

    replyComment () {
      this.$emit('hiddenOtherReplyContent', this)
      this.isShowReplyContent = !this.isShowReplyContent
    }
  }
}
</script>

<style lang="less" scoped>
  .comment-cell {
    color:#999; padding:13px 0 16px 68px; position:relative;

    &-user {
      width:40px; height:38px; top:16px; left:16px; padding:3px; position:absolute;
      &-img {
        width:100%; height:100%;
      }
      &-link {
        float:left; color:#00d8ff;
      }
    }

    &-content {
      word-break:break-all; line-height:1.38em; color:#CDD;
    }

    &-info {
      margin-top:10px; text-align:right; font-size:13px;

      &-time {
        float:left; font-size:15px;
      }
      &-operation {
        padding:0 10px 0 8px; border-right:1px solid #383838; cursor:pointer;

        > .mh-if {
          margin-right:2px; font-size:16px;
        }

        &:last-child {
          border:none;
        }
        &:hover {
          color:#DDD;
        }
        &:active, &.active {
          color:#00D8FF;
        }
      }
    }
  }
</style>
