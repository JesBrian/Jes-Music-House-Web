<template>
  <!-- 关闭按钮 -->
  <div @click="closeShowModal" class="close-btn super-btn-out">
    <div class="super-btn-in mh-if all-arrow"></div>
  </div>
</template>

<script>
export default {
  name: 'ModalCloseBtn',

  methods: {
    closeShowModal () {
      this.$store.commit('CHANGE_MODAL_TYPE')
    }
  }
}
</script>

<style lang="less" scoped>
  .close-btn {
    width:28px; height:28px; top:-6px; right:-6px; position:absolute;

    > .super-btn-in {
      width:21px; height:22px; top:50%; font-size:17px; font-weight:500;
    }
  }
</style>
