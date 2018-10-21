<template>
  <div style="margin:18px 0 0; position:relative;">

    <img v-lazy="'http://p4.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=50y50'" class="box-show" style="width:42px; height:42px; margin:18px 28px 0 18px; padding:2px; float:left;" />
    <textarea v-model="comment" class="cube-bg box-show glow-input" style="width:86%; height:82px; resize:none;" placeholder="评论"></textarea>
    <div style="width:83%; height:38px; margin-left:16%; line-height:36px;">
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
  name: 'NewComment',

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
