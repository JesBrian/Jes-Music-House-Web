<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/warning.png')" class="modal-title-icon" />
      <span class="modal-title-label">操作警告</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-warning-container">

      <div class="modal-warning-label">{{ label }}</div>

      <span @click="cancelOperation" class="btn-cancel super-btn-out ripple">
        <span class="super-btn-in mh-if cancel">&nbsp;取消操作</span>
      </span>
      <span @click="sureOperation" class="btn-sure super-btn-out ripple">
        <span class="super-btn-in mh-if makesure">&nbsp;确认操作</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Warning',

  props: {
    label: {
      type: String,
      default: '确定要执行该操作 ?'
    }
  },

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

<style lang="less" scoped>
  #modalType {
    .modal-title {
      width:100%; line-height:35px; text-align:center;

      &-icon {
        width:30px; height:30px; margin:0 8px -5px 0;
      }
      &-label {
        display:inline-block; font-size:27px; letter-spacing:3px; font-weight:700;
      }
    }

    .modal-warning {
      &-container {
        width:100%; text-align:center;

        .btn-cancel, .btn-sure {
          width:108px; height:38px; margin:0;

          > .super-btn-in {
            width:98px; height:28px; font-size:16px;
          }
        }

        .btn-cancel {
          margin-right:168px;
        }
        .btn-sure {
          margin-left:168px;
        }
      }

      &-label {
        width:86%; margin:13px auto; text-align:left; font-size:22px; line-height:40px; letter-spacing:1.3px;
      }
    }
  }
</style>
