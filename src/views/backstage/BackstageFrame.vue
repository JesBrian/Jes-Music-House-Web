<template>
  <div style="background:#666;">

    <!-- 导航条 -->
    <navigation-bar />

    <!-- 左侧菜单 -->
    <div class="glass-bg box-show" style="width:168px; height:100%; top:0; left:0; position:fixed; z-index:55; ">
    </div>

    <!-- 后台二级路由 -->
    <div style="width:100%; height:100%; top:0; left:0; padding:59px 6px 31px 175px; display:inline-block; position:fixed; box-sizing:border-box; background:#666;">
      <div class="glass-bg box-show" style="width:100%; height:100%; padding:3px;">
        <gemini-scrollbar>
          <router-view/>
        </gemini-scrollbar>
      </div>
    </div>

    <!-- 底部信息条 -->
    <footer class="glass-bg box-show" style="width:100%; bottom:0; left:0; position:fixed; z-index:98;">
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
  },

  created () {
    document.getElementById('titleId').innerHTML = 'MH - 后台管理系统'
  }
}
</script>

<style>
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

  #backstageLayout {
    width:1080px; margin:0 auto;
  }
</style>
