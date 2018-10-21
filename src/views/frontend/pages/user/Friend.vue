<template>
  <div id="homeLayout">

    <div class="user-friend-event box-show">
    </div>

    <div class="user-self-info">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Friend'
}
</script>

<style lang="less" scoped>
  #homeLayout {
    display:flex;
  }

  .user-friend-event {
    flex:1;
  }

  .user-self-info {
    width:30%; height:100%;
  }
</style>
