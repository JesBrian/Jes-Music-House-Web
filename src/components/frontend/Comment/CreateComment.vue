<template>
  <div class="create-comment">
    <textarea v-model="comment" @blur="markCursorPosition" ref="commentArea"
              class="cube-bg box-show glow-input" placeholder="请输入您的评论"></textarea>
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
      cursorPosition: -1,
      cursorPositionEnd: -1
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
      if ((this.cursorPosition !== -1) && (this.cursorPosition !== this.comment.length)) {
        if (this.cursorPosition !== this.cursorPositionEnd) {
          this.comment = `${this.comment.slice(0, this.cursorPosition)}[-${emoji}-]${this.comment.slice(this.cursorPositionEnd)}`
        } else {
          this.comment = `${this.comment.slice(0, this.cursorPosition)}[-${emoji}-]${this.comment.slice(this.cursorPosition)}`
        }
        let pos = this.cursorPosition + emoji.length + 4
        this.setCursorPosition(pos)
      } else {
        this.comment += `[-${emoji}-]`
        this.$refs.commentArea.focus()
      }
    },

    saveComment () {
      this.cursorPosition = -1
      this.cursorPositionEnd = -1
      alert(this.comment)
    },

    /**
     * 标记当前文本域光标位置 [ 开始 & 结束 ]
     */
    markCursorPosition () {
      let pTextArea = this.$refs.commentArea
      if (pTextArea.selectionStart) { // 非 IE 浏览器
        this.cursorPosition = pTextArea.selectionStart
        this.cursorPositionEnd = pTextArea.selectionEnd
      } else if (document.selection) { // IE
        let range = document.selection.createRange()
        range.moveStart('character', -pTextArea.value.length)
        this.cursorPosition = range.text.length
      } else {
        this.cursorPosition = 0
        this.cursorPositionEnd = 0
      }
    },

    /**
     * 设置文本域光标位置
     * @param pos
     */
    setCursorPosition (pos) {
      setTimeout(() => { // 设置延时保证添加完再定位光标位置
        let oTextarea = this.$refs.commentArea
        if (document.all) {
          let oTextRange = oTextarea.createTextRange()
          oTextRange.moveStart('character', pos)
          oTextRange.moveEnd('character', pos)
          oTextRange.select()
          oTextarea.focus()
        } else {
          oTextarea.select()
          oTextarea.selectionStart = pos
          oTextarea.selectionEnd = pos
        }
      }, 0)
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
