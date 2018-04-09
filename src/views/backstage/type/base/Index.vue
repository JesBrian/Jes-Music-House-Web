<template>
  <div id="backstageLayout">
    <!--  -->
    <div class="cube-bg box-show" style="width:608px; height:52px; margin:28px auto 38px; position:relative; text-align:center; font-size:28px; line-height:45px; font-family:'Microsoft YaHei', '黑体', sans-serif; font-weight:700; color:#AAA; letter-spacing:1px;">
      <i class="mh-if double-arrow-left" style="font-size:22px; color:#24c9ff"></i>
      <a class="font-style" style="margin:0 28px;">Music House 后台管理系统主页</a>
      <i class="mh-if double-arrow-right" style="font-size:22px; color:#24c9ff"></i>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

  /* 控制文本渐变效果 */
  .font-style {
    font-weight: 900;
    background-image: -webkit-linear-gradient(left, #2ed8ff, #2d95e5 25%, #2ed8ff 50%, #2d95e5 75%, #2ed8ff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: masked-animation 1.68s infinite linear;
  }
  @-webkit-keyframes masked-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }

</style>
