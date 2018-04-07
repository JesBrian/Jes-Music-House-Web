<template>
  <div id="modalType" class="glass-bg">

    <slot />

    <!-- 拟态框标题 -->
    <div class="cube-bg box-show" style="width:100%; height:38px; margin-bottom:28px;"></div>

    <!-- 拟态框内容 -->
    <div style="width:100%; height:138px;"></div>

  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

</style>
