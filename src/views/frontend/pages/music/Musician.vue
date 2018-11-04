<template>
  <div id="homeLayout">
    <div class="musician">
      <div style="width:100%; height:1px;"></div>
      <div class="super-btn-out" style="width:188px; height:48px; margin:328px auto 0; display:block;">
        <span class="super-btn-in" style="width:173px; height:36px;">现在加入</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Musician',

  beforeCreate () {
    if (this.$store.state.User.id !== '0') {
      // this.$http
      // if (this.$store.state.User.id === '1') {
      //   window.open('http://www.baidu.com')
      // }
    }
  }

}
</script>

<style lang="less" scoped>
  .musician {
    width:100%; height:608px; margin-top:23px; display:block;
    background:url('/static/img/default/musician.png') no-repeat;
    background-size:100% auto;
  }
</style>
