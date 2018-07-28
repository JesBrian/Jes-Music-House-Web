<template>
  <div style="background:#666;">

    <!-- 导航条 -->
    <navigation-bar />

    <!-- 左侧菜单 -->
    <div id="leftMenu" class="glass-bg box-show" style="width:188px; height:100%; top:0; left:0; padding:50px 0 28px; box-sizing:border-box; position:fixed; z-index:9;">
      <div style="width:100%; height:100%; padding:6px 0 0; overflow-y:auto; color:#DDD; box-sizing:border-box;">
        <gemini-scrollbar class="my-scroll-bar">
          <ul>
            <li v-for="n in 3" :key="`${n}3`" style="width:100%; margin:0 0 8px;">
              <div class="glass-bg box-show" style="width:96%; height:30px; margin:0 auto; position:relative; cursor:pointer;">
                <p class="text-hidden" style="line-height:28px; font-size:16px; display:inline-block;">
                  <i class="mh-if menu-user" style="margin:0 8px 0 12px;"></i>用户模块
                </p>
                <div class="show-second-menu-btn cube-bg box-show">
                  <i class="mh-if double-arrow-up" style="width:100%; height:100%; display:inline-block;"></i>
                </div>
              </div>
              <ul style="width:100%; padding:2px 0 6px;">
                <li v-for="n in 3" :key="`${n}2`" style="width:83%; height:22px; margin:2px auto 8px; display:block; line-height:22px;">
                  <router-link to="/backstage/userList" class="cube-bg box-show menu-link" style="display:block;">
                    <i class="mh-if all-user"></i><span style="margin-left:8px; font-size:15px;">用户列表</span>
                    <i class="mh-if double-arrow-left" style="float:right; font-size:12px;"></i>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </gemini-scrollbar>
      </div>
    </div>

    <!-- 后台二级路由 -->
    <div style="width:100%; height:100%; top:0; left:0; padding:59px 6px 31px 195px; display:inline-block; position:fixed; box-sizing:border-box; background:#666;">
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

export default {
  name: 'BackstageFrame',

  components: {
    NavigationBar
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

  .show-second-menu-btn {
    width: 21px;
    height: 20px;
    top: 4px;
    right: 4px;
    display: inline-block;
    position: absolute;
    color: #30cdff;
    text-align: center;
    opacity: 0.68;
  }
  .show-second-menu-btn:hover {
    opacity: 1;
  }
  .show-second-menu-btn > i {
    font-size: 14px;
    line-height: 16px;
    animation: menuSwitch 0.6s forwards;
    -webkit-animation: menuSwitch 0.6s forwards;
  }
  .show-second-menu-btn > i.active {
    animation: menuSwitchActive 0.6s forwards;
    -webkit-animation: menuSwitchActive 0.6s forwards;
  }

</style>
