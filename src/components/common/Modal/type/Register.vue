<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/addUser.png')" class="modal-title-icon" />
      <span class="modal-title-label">用户注册</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-register-container">
      <div @click="showWarningModal">Warning</div>
      <div @click="showUserLoginModal">用户登陆</div>

      <span @click="cancelRegister" class="super-btn-out" style="width:108px; height:38px; margin:0 168px 0 0;">
        <span class="super-btn-in mh-if cancel" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;">&nbsp;取消返回</span>
      </span>
      <span @click="sureRegister" class="super-btn-out" style="width:108px; height:38px; margin:0 0 0 168px;">
        <span class="super-btn-in mh-if makesure" style="width:98px; height:28px; top:49%; left:50%; line-height:31px; font-size:16px;">&nbsp;确认注册</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Register',

  methods: {
    showWarningModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', 'warning')
    },

    showUserLoginModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', 'login')
    },

    sureRegister () {
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

<style lang="less" scoped>
  #modalType {
    .modal-title {
      width:100%; height:42px; line-height:35px; text-align:center;

      &-icon {
        width:30px; height:30px; margin:0 8px -5px 0;
      }
      &-label {
        display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;
      }
    }

    .modal-register-container {
      width:100%; height:138px; text-align:center;
    }
  }
</style>
