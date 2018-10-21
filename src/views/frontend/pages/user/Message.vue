<template>
  <div id="homeLayout">

    <div class="user-message-category">
    </div>

    <div class="user-message-container box-show">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Message'
}
</script>

<style lang="less" scoped>
  #homeLayout {
    min-height:100%; display:flex;
  }

  .user-message-category {
    width:20%; height:100%;
  }

  .user-message-container {
    flex:1;
  }
</style>
