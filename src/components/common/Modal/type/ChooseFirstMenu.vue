<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="modal-title cube-bg box-show">
      <img v-lazy="require('../../../../../static/img/icon/warning.png')" class="modal-title-icon" />
      <span class="modal-title-label">选择一级菜单</span>
    </div>

    <!-- 拟态框内容 -->
    <div class="modal-share-container">
    </div>

  </div>
</template>

<script>
export default {
  name: 'ChooseFirstMenu',

  props: {
  },

  created () {
    this.$http.post('getAllFirstMenuData').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },

  methods: {
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

    .modal-share {
      &-container {
        width:100%; text-align:center;
      }
    }
  }
</style>
