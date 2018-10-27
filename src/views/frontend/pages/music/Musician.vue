<template>
  <div id="homeLayout">
    this is home musician
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

</style>
