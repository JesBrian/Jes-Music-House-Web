<template>
  <div class="create-comment">
    <textarea v-model="comment" class="cube-bg box-show glow-input" placeholder="评论"></textarea>
    <div class="create-comment-operation">
      <emoji-button @sendEmoji="changeShowEmojiContent" />

      <div class="super-btn-out ripple">
        <span class="super-btn-in mh-if comment"> 评论</span>
      </div>

      <span class="create-comment-num">{{ commentNums }}</span>

      <emoji-content v-if="isShowEmojiContent" />
    </div>
  </div>
</template>

<script>
import EmojiButton from '../../common/Emoji/EmojiButton.vue'
import EmojiContent from '../../common/Emoji/EmojiContent.vue'

export default {
  name: 'CreateComment',

  components: {
    EmojiContent, EmojiButton
  },

  data () {
    return {
      isShowEmojiContent: false,
      comment: ''
    }
  },

  computed: {
    commentNums () {
      return 200 - this.comment.length
    }
  },

  watch: {
    commentNums (nVal) {
      if (nVal <= 0) {
        this.comment = this.comment.substr(0, 200)
      }
    }
  },

  methods: {
    changeShowEmojiContent () {
      this.isShowEmojiContent = !this.isShowEmojiContent
    },

    createComment () {
    }
  }
}
</script>

<style lang="less" scoped>
  .create-comment {
    width:100%;

    > .glow-input {
      width:100%; height:82px; resize:none;
    }

    &-operation {
      width:100%; height:38px; padding:0 0 0 8px; box-sizing:border-box; line-height:36px;

      .super-btn {
        &-out {
          width:68px; height:28px; margin:6px 8px 0 0; float:right;
        }
        &-in {
          width:60px; height:22px;
        }
      }
    }

    &-num {
      margin:3px 18px; float:right;
    }
  }
</style>
