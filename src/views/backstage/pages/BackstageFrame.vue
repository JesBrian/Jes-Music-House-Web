<template>
  <div id="backstageFrame">

    <!-- 导航条 -->
    <navigation-bar />

    <!-- 左侧菜单 -->
    <menu-bar />

    <!-- 后台二级路由 -->
    <div id="backstageContainer" :class="{'active' : $store.state.View.showLeftMenu}">
      <div class="backstage-container glass-bg box-show">
        <router-view/>
      </div>
    </div>

    <!-- 拟态框组件 -->
    <backstage-modal />

  </div>
</template>

<script>
import NavigationBar from '../../../components/backstage/NavigationBar/NavigationBar.vue'
import MenuBar from '../../../components/backstage/MenuBar/MenuBar.vue'
import BackstageModal from '../../../components/common/Modal/BackstageModal.vue'

export default {
  name: 'BackstageFrame',

  components: {
    NavigationBar, MenuBar, BackstageModal
  },

  beforeCreate () {
    if (this.$store.state.Admin.id === '0') {
      // this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">
  #backstageFrame {
    background:#666;
  }

  #backstageContainer {
    width:100%; height:100%; top:0; left:0; padding:59px 6px 31px 35px; display:inline-block; position:fixed; box-sizing:border-box; background:#666;
    transition:all 1s;

    &.active {
      padding-left:215px;
    }

    > .backstage-container {
      width:100%; height:100%; padding:3px;
    }
  }

  #backstageLayout {
    min-width:988px; width:100%; margin:0 auto; padding:0 38px; box-sizing:border-box;
  }
</style>
