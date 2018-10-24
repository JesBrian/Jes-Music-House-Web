<template>
  <div>
    <textarea v-model="comment" class="cube-bg box-show glow-input" style="width:100%; height:82px; resize:none;" placeholder="评论"></textarea>
    <div style="width:100%; height:38px; padding:0 0 0 8px; box-sizing:border-box; line-height:36px;">
      <emoji-button @sendEmoji="changeShowEmojiContent" />

      <div class="super-btn-out ripple" style="width:68px; height:27px; margin:6px 8px 0 0; float:right;">
        <span class="super-btn-in mh-if comment" style="width:60px; height:20px; line-height:22px;"> 评论</span>
      </div>

      <span style="margin:3px 18px; float:right;">{{ commentNums }}</span>

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

<style scoped>

</style>
