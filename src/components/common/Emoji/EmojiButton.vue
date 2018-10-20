<template>
  <i class="mh-if exciting" @click="sendEmoji"></i>
</template>

<script>
export default {
  name: 'EmojiButton',

  methods: {
    sendEmoji () {
      this.$emit('sendEmoji')
    }
  }
}
</script>

<style lang="less" scoped>
  .exciting {
    margin-right:38px; color:#AAA;

    &:hover {
      color:#00d8ff;
    }
  }
</style>
