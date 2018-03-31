<template>
  <div>

    <!-- 导航条 -->
    <navigation-bar />

    <!-- 左侧菜单 -->
    <div style="width:168px; height:100%; top:0; left:0; position:fixed; z-index:55; background:lightgreen;">
    </div>

    <!-- 后台二级路由 -->
    <div style="width:100%; height:100%; top:55px; left:0; padding:0 3px 83px 170px; display:inline-block; position:fixed; box-sizing:border-box;">
      <gemini-scrollbar>
        <router-view />
      </gemini-scrollbar>
    </div>

    <!-- 底部信息条 -->
    <footer style="width:100%; bottom:0; left:0; position:fixed; background:#2E2E2E; z-index:98;">
      © 2015 - 2020 &nbsp;&nbsp;&nbsp;Music House 所有版权归 JesBrian 个人所有
    </footer>
  </div>
</template>

<script>
import NavigationBar from '../../components/backstage/NavigationBar/NavigationBar.vue'

export default {
  name: 'BackstageFrame',

  components: {
    NavigationBar
  }
}
</script>

<style scoped>
  footer {
    width: 100%;
    height: 25px;
    bottom: 0;
    margin: 0;
    padding: 0 68px;
    box-sizing: border-box;
    border-radius: 0;
    position: fixed;
    z-index: 99;
    font-size: 15px;
    color: #30CDFF;
    text-shadow: 1px 1px 1px;
    line-height: 22px;
    text-align: right;
  }
</style>
