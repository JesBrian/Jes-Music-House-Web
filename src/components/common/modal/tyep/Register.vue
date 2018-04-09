<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="cube-bg box-show" style="width:100%; height:42px; line-height:35px; text-align:center;">
      <img v-lazy="require('../../../../../static/img/icon/addUser.png')" style="width:30px; height:30px; margin:0 8px -5px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">用户注册</span>
    </div>

    <!-- 拟态框内容 -->
    <div style="width:100%; height:138px;"></div>

  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>

</style>
