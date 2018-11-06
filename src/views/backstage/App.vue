<template>
  <div id="backstage">
    <router-view />

    <!-- 操作提示条 -->
    <super-tips v-if="$store.state.View.tips" />

    <!-- 底部信息条 -->
    <footer class="backstage-footer glass-bg box-show">
      <!--©<span class="backstage-footer-label">2015 - 2020</span>Music House 所有版权归 JesBrian 个人所有-->
    </footer>
  </div>
</template>

<script>
import SuperTips from '../../components/common/Tips/SuperTips.vue'

export default {
  name: 'App',

  components: {
    SuperTips
  }
}
</script>

<style lang="less" scoped>

  .backstage-footer {
    width:100%; height: 25px; bottom:0; left:0; margin: 0; padding: 0 68px; position:fixed; z-index:98; box-sizing: border-box; border-radius: 0; font-size: 15px; color: #30CDFF; text-shadow: 1px 1px 1px; line-height: 22px; text-align: right;
    &-label {
       margin:0 18px 0 8px;
     }
  }
</style>
