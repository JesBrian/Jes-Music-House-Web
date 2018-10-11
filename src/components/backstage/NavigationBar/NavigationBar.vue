<template>
  <!-- 导航条 -->
  <div class="glass-bg box-show" style="width:100%; height:53px; top:0; left:0; position:fixed; z-index:99; border-radius:0;">
    <div style="min-width:1208px; width:100%; height:100%; margin:0 auto;">
      <router-link to="/" style="margin-left:28px; float:left; line-height:48px;">
        <img v-lazy="require('../../../../static/img/logo.png')" style="width:33px; height:33px; margin:8px 8px 0 0; float:left;"/>
        <span style="font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;">Music House 后台管理系统</span>
      </router-link>

      <div @click="changeShowLeftMenu" class="cube-bg left-menu-switch">
        <i class="mh-if" :class="$store.state.View.showLeftMenu ? 'double-arrow-left' : 'double-arrow-right'" style="margin-right:2px; line-height:31px; text-align:center; font-size:21px; color:#30cdff;"></i>
      </div>

      <!-- 用户登录/操作 -->
      <div id="navMenuUser" style="width:40px; height:38px; margin:6px 68px; position:relative; float:right;">
        <router-link to="/user" class="super-btn-out" style="width:100%; height:100%; display:inline-block;">
          <span class="super-btn-in" style="width:32px; height:29px; top:48%; line-height:29.5px; font-size:20px;">X</span>
        </router-link>
        <div class="nav-user-operation" style="top:32px; left:-68%; position:absolute;">
          <div class="super-btn-out" style="width:100px; margin:10px 0 0 -8px; padding:1px 4px 3px; text-align:center; line-height:30px;">
            <router-link to="/user"><i class="MyIF home"></i> 个人主页</router-link>
            <router-link to="/message"><i class="MyIF add-data"></i> 消息管理</router-link>
            <router-link to="/level"><i class="MyIF IDcard-1"></i> 我的等级</router-link>
            <router-link to="/vip"><i class="MyIF IDcard-1"></i> VIP会员</router-link>
            <router-link to="/update"><i class="MyIF gears"></i> 修改资料</router-link>
            <a @click="backstageLogout"><i class="mh-if exit-1"></i> 安全退出</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',

  methods: {
    changeShowLeftMenu () {
      this.$store.commit('CHANGE_SHOW_LEFT_MENU', !this.$store.state.View.showLeftMenu)
    },

    backstageLogout () {
    }
  }
}
</script>

<style scoped>
  .left-menu-switch {
    width:33px; height:33px; margin:9px 12px; display:inline-block; text-align:center; box-shadow:inset 0 0 0 1px #272727, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 3px 6px #000; cursor:pointer; opacity:0.8;
  }
  .left-menu-switch:hover {
    opacity:1;
  }

  .nav-user-operation {
    transform:scaleY(0); transition:all 0.48s; transform-origin:0 10px;
  }
  #navMenuUser:hover > .nav-user-operation {
    transform: scaleY(1);
  }
  .nav-user-operation a {
    width:100%;
    height:30px;
    margin:2px 0;
    display:inline-block;
    box-sizing: border-box;
    color: #AAA;
    background-image: linear-gradient(#2e3537, #424748);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(80, 80, 80, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(80, 80, 80, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);
  }
</style>
