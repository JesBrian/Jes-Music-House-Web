<template>
  <!-- 导航条 -->
  <div id="backstageNavigationBar" class="glass-bg box-show">
    <router-link to="/" class="navigation-bar-logo">
      <img src="../../../../static/img/logo.png" class="navigation-bar-logo-img"/>
      <span class="navigation-bar-logo-label">Music House 后台管理系统</span>
    </router-link>

    <div @click="changeShowLeftMenu" class="cube-bg left-menu-switch">
      <i class="mh-if" :class="$store.state.View.showLeftMenu ? 'double-arrow-left' : 'double-arrow-right'"></i>
    </div>

    <!-- 用户登录/操作 -->
    <div class="navigation-bar-user">
      <router-link to="/user-info/1" class="navigation-bar-user-avatar super-btn-out">
        <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="navigation-bar-user-avatar-img super-btn-in"/>
      </router-link>
      <div class="navigation-bar-user-oper">
        <div class="super-btn-out">
          <router-link class="navigation-bar-user-oper-btn" to="/user-info/1"><i class="mh-if home"></i> 个人主页</router-link>
          <router-link class="navigation-bar-user-oper-btn" to="/message"><i class="mh-if add-data"></i> 消息管理</router-link>
          <router-link class="navigation-bar-user-oper-btn" to="/level"><i class="mh-if IDcard-1"></i> 我的等级</router-link>
          <router-link class="navigation-bar-user-oper-btn" to="/vip"><i class="mh-if IDcard-1"></i> VIP会员</router-link>
          <router-link class="navigation-bar-user-oper-btn" to="/update"><i class="mh-if gears"></i> 修改资料</router-link>
          <a @click="backstageLogout" class="navigation-bar-user-oper-btn"><i class="mh-if exit-1"></i> 安全退出</a>
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

<style lang="less" scoped>
  #backstageNavigationBar {
    width:100%; min-width:1208px; height:53px; top:0; left:0; position:fixed; z-index:99; border-radius:0;
  }

  .navigation-bar {
    &-logo {
      margin-left:28px; float:left; line-height:48px;
      &-img {
        width:33px; height:33px; margin:8px 8px 0 0; float:left;
      }
      &-label {
        font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;
      }
    }

    &-user {
      width:40px; height:38px; margin:6px 68px; position:relative; float:right;
      &-avatar {
        width:100%; height:100%; display:inline-block;
        &-img {
          width:31px; height:29px; top:49%; padding:1px;
        }
      }

      &-oper {
        top:32px; left:-68%; position:absolute; transform:scaleY(0); transition:all 0.48s; transform-origin:0 10px;
        > .super-btn-out {
          width:100px; margin:10px 0 0 -8px; padding:1px 4px 3px; text-align:center; line-height:26px;
        }
        &-btn {
          width:100%; height:26px; margin:2px 0; display:inline-block; box-sizing: border-box;
          color: #AAA; background-image: linear-gradient(#2e3537, #424748); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(80, 80, 80, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(80, 80, 80, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);
        }
      }
      &:hover > &-oper {
        transform: scaleY(1);
      }
    }
  }

  .left-menu-switch {
    width:33px; height:33px; margin:9px 12px; display:inline-block; text-align:center; box-shadow:inset 0 0 0 1px #272727, inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 3px 6px #000; cursor:pointer; opacity:0.8;
    &:hover {
      opacity:1;
    }
    > .mh-if {
      margin-right:2px; line-height:31px; text-align:center; font-size:21px; color:#30cdff;
    }
  }
</style>
