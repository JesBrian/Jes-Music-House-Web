<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="cube-bg box-show" style="width:100%; height:42px; line-height:35px; text-align:center;">
      <img v-lazy="require('../../../../../static/img/icon/addUser.png')" style="width:30px; height:30px; margin:0 8px -5px 0;"/>
      <span style="display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;">用户注册</span>
    </div>

    <!-- 拟态框内容 -->
    <div style="width:100%; height:138px; text-align:center;">
      <div @click="showWarningModal">Warning</div>
      <div @click="showUserLoginModal">用户登陆</div>

      <span @click="cancelRegister" class="super-btn-out" style="width:108px; height:38px; margin:0 168px 0 0;">
        <span class="super-btn-in mh-if cancel" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;"> 取消返回</span>
      </span>
      <span @click="sureRegister" class="super-btn-out" style="width:108px; height:38px; margin:0 0 0 168px;">
        <span class="super-btn-in mh-if makesure" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;"> 确认注册</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Register',

  methods: {
    showWarningModal () {
      this.$store.commit('changeModalType', 'warning')
    },

    showUserLoginModal () {
      this.$store.commit('changeModalType', 'login')
    },

    sureRegister () {
      console.log(8888)
    },

    /**
     * 取消注册返回
     */
    cancelRegister () {
      this.$parent.closeShowModal()
    }
  }
}
</script>

<style scoped>

</style>
