<template>
  <div style="background:#666;">

    <!-- 导航条 -->
    <navigation-bar />

    <!-- 左侧菜单 -->
    <menu-bar />

    <!-- 后台二级路由 -->
    <div style="width:100%; height:100%; top:0; left:0; padding:59px 6px 31px 215px; display:inline-block; position:fixed; box-sizing:border-box; background:#666;">
      <div class="glass-bg box-show" style="width:100%; height:100%; padding:3px;">
        <gemini-scrollbar>
          <router-view/>
        </gemini-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../../../components/backstage/NavigationBar/NavigationBar.vue'
import MenuBar from '../../../components/backstage/MenuBar/MenuBar.vue'

export default {
  name: 'BackstageFrame',

  components: {
    NavigationBar, MenuBar
  },

  beforeCreate () {
    if (this.$store.state.Admin.id === '0') {
      // this.$router.push('/login')
    }
  }
}
</script>

<style>
  #backstageLayout {
    width:1080px; margin:0 auto;
  }
</style>
