<template>
  <div class="base-loading">
    <span class="base-loading-cell" v-for="n in 8" :key="n + 9999"></span>
  </div>
</template>

<script>
export default {
  name: 'BaseLoading'
}
</script>

<style lang="less" scoped>
  .base-loading {
    width:100px; height:100px; position:relative; margin:0 auto;

    &-cell {
      width:30px; height:8.5px; display:inline-block; position:absolute; border-radius:5px;
      background:linear-gradient(to right, #64E0FF, #33cdff, #2893ff); animation:load 1.04s ease infinite;

      &:nth-child(1) {
        top: 50%; left: 0; margin-top: -5px; animation-delay: 0.13s;
      }
      &:nth-child(2) {
        top: 20px; left: 10px; transform: rotate(45deg); animation-delay: 0.26s;
      }
      &:nth-child(3) {
        top: 10px; left: 50%; margin-left: -15px; transform: rotate(90deg); animation-delay: 0.39s;
      }
      &:nth-child(4) {
        top: 20px; right: 10px; transform: rotate(135deg); animation-delay: 0.52s;
      }
      &:nth-child(5) {
        top: 50%; right: 0; margin-top: -5px; transform: rotate(180deg); animation-delay: 0.65s;
      }
      &:nth-child(6) {
        right: 10px; bottom: 20px; transform: rotate(225deg); animation-delay: 0.78s;
      }
      &:nth-child(7) {
        left: 50%; bottom: 10px; margin-left: -15px; transform: rotate(270deg); animation-delay: 0.91s;
      }
      &:nth-child(8) {
        left: 10px; bottom: 20px; transform: rotate(315deg); animation-delay: 1.04s;
      }
    }
  }

  @keyframes load {
    0% {opacity: 1;}
    100% {opacity: 0.2;}
  }
</style>
