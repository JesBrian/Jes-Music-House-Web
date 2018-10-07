<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="cube-bg box-show" style="width:100%; height:42px; margin-bottom:18px; line-height:35px; text-align:center;">
      <img v-lazy="require('../../../../../static/img/icon/warning.png')" style="width:30px; height:30px; margin:0 8px -5px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">操作警告</span>
    </div>

    <!-- 拟态框内容 -->
    <div style="width:100%; height:108px; text-align:center;">

      <div style="width:86%; height:48px; margin:0 auto 13px; text-align:left; font-size:22px; line-height:40px; letter-spacing:1.3px;">
        确定是否要执行该操作。
      </div>

      <span @click="cancelOperation" class="super-btn-out ripple" style="width:108px; height:38px; margin:0 168px 0 0;">
        <span class="super-btn-in mh-if cancel" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;"> 取消操作</span>
      </span>
      <span @click="sureOperation" class="super-btn-out ripple" style="width:108px; height:38px; margin:0 0 0 168px;">
        <span class="super-btn-in mh-if makesure" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;"> 确认操作</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Warning',

  methods: {
    sureOperation () {
      console.log(6666)
    },

    cancelOperation () {
      this.$parent.closeShowModal()
    }
  }
}
</script>

<style scoped>

</style>
