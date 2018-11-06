<template>
  <div id="homeLayout">
    <div class="musician">
      <div class="super-btn-out">
        <span class="super-btn-in">现在加入</span>
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

    .super-btn {
      &-out {
        width:188px; height:48px; top:328px; margin:0 auto; display:block;
      }
      &-in {
        width:173px; height:36px; letter-spacing:6px; font-size:20px;
      }
    }
  }
</style>
