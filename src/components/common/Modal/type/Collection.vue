<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/warning.png')" class="modal-title-icon" />
      <span class="modal-title-label">收藏歌单</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-collection-container">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Collection',

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

    .modal-collection {
      &-container {
        width:100%; text-align:center;
      }
    }
  }
</style>
