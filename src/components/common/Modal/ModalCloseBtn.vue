<template>
  <!-- 关闭按钮 -->
  <div @click="closeShowModal" class="close-btn super-btn-out">
    <div class="super-btn-in mh-if all-arrow"></div>
  </div>
</template>

<script>
export default {
  name: 'ModalCloseBtn'
}
</script>

<style lang="less" scoped>
  .close-btn {
    width:28px; height:28px; top:-6px; right:-6px; position:absolute;

    > .super-btn-in {
      width:21px; height:20.5px; top:48%; font-size:17px; font-weight:500; line-height:23px;
    }
  }
</style>
