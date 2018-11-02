<template>
  <div class="create-comment">
    <textarea v-model="comment" @blur="markCursorPosition" ref="commentArea" class="cube-bg box-show glow-input" placeholder="请输入您的评论"></textarea>
    <div class="create-comment-operation">
      <emoji-button @sendEmoji="changeShowEmojiContent" />

      <div @click="saveComment" class="super-btn-out ripple">
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
      comment: '',
      cursurPosition: -1
    }
  },

  computed: {
    commentNums () {
      return 180 - this.comment.length
    }
  },

  watch: {
    commentNums (nVal) {
      if (nVal <= 0) {
        this.comment = this.comment.substr(0, 180)
      }
    }
  },

  methods: {
    changeShowEmojiContent () {
      this.isShowEmojiContent = !this.isShowEmojiContent
    },

    writeEmoji (emoji) {
      if (this.cursurPosition !== -1) {
        let pos = this.cursurPosition + emoji.length
        this.comment = `${this.comment.slice(0, this.cursurPosition)}[-${emoji}-]${this.comment.slice(this.cursurPosition)}`
      } else {
        this.comment += `[-${emoji}-]`
        this.$refs.commentArea.focus()
      }
    },

    saveComment () {
      alert(this.comment)
    },

    /**
     * 标记当前文本域光标位置
     */
    markCursorPosition () {
      let pTextArea = this.$refs.commentArea
      if (pTextArea.selectionStart) { // 非 IE 浏览器
        this.cursurPosition = pTextArea.selectionStart
      } else if (document.selection) { // IE
        let range = document.selection.createRange()
        range.moveStart('character', -pTextArea.value.length)
        this.cursurPosition = range.text.length
      } else {
        this.cursurPosition = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .create-comment {
    width:100%;

    > .glow-input {
      width:100%; height:88px; padding:3px 8px; box-sizing:border-box; color:#BBB; text-indent:2em; letter-spacing:1.2px; line-height:1.28em; resize:none;
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
