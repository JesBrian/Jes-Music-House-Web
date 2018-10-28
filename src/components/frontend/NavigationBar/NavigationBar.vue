<template>
  <!-- 导航条 -->
  <div id="homeNavigationBar" class="glass-bg box-show">
    <div class="main-menu">

      <!-- 导航栏LOGO -->
      <router-link to="/" class="main-menu-logo">
        <img v-lazy="require('../../../../static/img/logo.png')" class="main-menu-logo-img" />
        <span class="main-menu-logo-label">Music House</span>
      </router-link>

      <!-- 导航菜单 -->
      <div class="first-menu-container">
        <!-- 一级菜单 -->
        <router-link to="/index" :class="{'active': menuType === 'find'}" class="first-menu-link" >
          发现音乐<div class="triangle-up"></div>
        </router-link>
        <router-link to="/user/music" :class="{'active': menuType === 'my'}" class="first-menu-link">
          我的音乐<div class="triangle-up"></div>
        </router-link>
        <router-link to="/friend/other" :class="{'active': menuType === 'friend'}" class="first-menu-link">
          消息动态<div class="triangle-up"></div>
        </router-link>
        <router-link to="/musician" :class="{'active': menuType === 'musician'}" class="first-menu-link">
          音乐人<div class="triangle-up"></div>
        </router-link>
        <router-link to="/download/client" :class="{'active': menuType === 'download'}" class="first-menu-link">
          下载客户端<div class="triangle-up"></div>
        </router-link>
      </div>

      <!-- 导航栏用户登录/操作 -->
      <div class="user-operation-container">
        <div v-if="$store.state.User.id === '0'" @click="showUserLoginModal" class="user-operation-login super-btn-out ripple">
          <span class="super-btn-in mh-if avatar"></span>
        </div>
        <div v-else class="user-operation-info-container">
          <router-link to="/user" class="user-operation-info super-btn-out ripple">
            <span class="super-btn-in">X</span>
          </router-link>
          <div class="user-operation-info-btn-container">
            <div class="super-btn-out">
              <router-link class="btn-cell" to="/user">
                <i class="mh-if avatar"></i> 个人主页
              </router-link>
              <router-link class="btn-cell" to="/message">
                <i class="mh-if feedback"></i> 消息管理
              </router-link>
              <router-link class="btn-cell" to="/level">
                <i class="mh-if level"></i> 我的等级
              </router-link>
              <router-link class="btn-cell" to="/vip">
                <i class="mh-if diamond"></i> VIP 会员
              </router-link>
              <router-link class="btn-cell" to="/update">
                <i class="mh-if gear"></i> 修改资料
              </router-link>
              <a @click="userLogout" class="btn-cell">
                <i class="mh-if exit-1"></i> 安全退出
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 导航栏搜索栏 -->
      <label class="search-bar-container" @keyup.enter="gotoSearch">
        <span class="search-bar-bg super-btn-out"></span>
        <input v-model="searchKey" class="search-bar-input super-btn-in" placeholder="搜索一下更精彩！" />
        <span @click="gotoSearch" class="search-bar-btn super-btn-out">
          <span class="super-btn-in mh-if search" ></span>
        </span>
      </label>

    </div>

    <!-- 二级菜单 -->
    <div class="second-menu super-btn-out">
      <div v-if="menuType === 'find'" class="second-menu-container">
        <router-link to="/index" :class="{active: $route.path.split('/')[1] === 'index'}" class="second-menu-link box-show">主页推荐</router-link>
        <router-link to="/rank" :class="{active: $route.path.split('/')[1] === 'rank'}" class="second-menu-link box-show">排行榜</router-link>
        <router-link to="/album" :class="{active: $route.path.split('/')[1] === 'album'}" class="second-menu-link box-show">歌单</router-link>
        <router-link to="/singer/11" :class="{active: $route.path.split('/')[1] === 'singer'}" class="second-menu-link box-show">歌手</router-link>
        <router-link to="/disc" :class="{active: $route.path.split('/')[1] === 'disc'}" class="second-menu-link box-show">新碟上架</router-link>
      </div>
      <div v-else-if="menuType === 'my'" class="second-menu-container">
        <router-link to="/user/music" :class="{active: $route.path.split('/')[2] === 'music'}" class="second-menu-link box-show">我的音乐</router-link>
        <router-link to="/user/recommend" :class="{active: $route.path.split('/')[2] === 'recommend'}" class="second-menu-link box-show">个人推荐</router-link>
        <router-link to="/user/rank" :class="{active: $route.path.split('/')[2] === 'rank'}" class="second-menu-link box-show">听歌排行</router-link>
      </div>
      <div v-else-if="menuType === 'friend'" class="second-menu-container">
        <router-link to="/friend/other" :class="{active: $route.path.split('/')[2] === 'other'}" class="second-menu-link box-show">朋友圈</router-link>
        <router-link to="/friend/self" :class="{active: $route.path.split('/')[2] === 'self'}" class="second-menu-link box-show">我的动态</router-link>
        <router-link to="/message" :class="{active: $route.path.split('/')[1] === 'message'}" class="second-menu-link box-show">我的消息</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',

  inject: [
    'reload'
  ],

  data () {
    return {
      menuType: '',
      searchKey: ''
    }
  },

  watch: {
    '$route' () {
      this.switchMenuType()
    }
  },

  mounted () {
    this.switchMenuType()
  },

  methods: {
    showUserLoginModal () {
      this.$store.commit('CHANGE_MODAL_TYPE', 'login')
    },

    switchMenuType () {
      switch (this.$route.path.split('/')[1]) {
        case 'user':
          this.menuType = 'my'
          this.$store.commit('changeTopMenuIsShowSecond', true)
          break
        case 'friend':
        case 'message':
          this.menuType = 'friend'
          this.$store.commit('changeTopMenuIsShowSecond', true)
          break
        case 'musician':
          this.menuType = 'musician'
          this.$store.commit('changeTopMenuIsShowSecond', false)
          break
        case 'download':
          this.menuType = 'download'
          this.$store.commit('changeTopMenuIsShowSecond', false)
          break
        case 'search':
          this.menuType = 'search'
          this.$store.commit('changeTopMenuIsShowSecond', false)
          break
        default:
          this.menuType = 'find'
          this.$store.commit('changeTopMenuIsShowSecond', true)
          break
      }
    },

    gotoSearch () {
      if (this.searchKey === '') {
        return false
      }
      this.$router.push('/search/song/' + this.searchKey)
    },

    userLogout () {
      this.$store.commit('RESET_USER_INFO')
      this.$localForage.setItem('user', null)
      this.reload()
    }
  }
}
</script>

<style lang="less" scoped>
  #homeNavigationBar {
    width:100%; height:53px; top:0; left:0; position:fixed; border-radius:0; opacity:0.98;
  }

  .main-menu{
    width:1088px; height:100%; margin:0 auto; position:relative; z-index:9;

    &-logo {
      margin-right:18px; float:left; line-height:48px;

      &-img {
        width:33px; height:33px; margin:8px 8px 0 0; float:left;
      }
      &-label {
        font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;
      }
    }

    .first-menu {
      &-container {
        line-height:52px; color:#999; font-weight:700; letter-spacing:1.2px;
      }

      &-link {
        padding:0 13px 0 18px; display:inline-block; float:left; cursor:pointer; color:#999; position:relative;

        &.active, &:hover {
          color:#DDD;
          background:#222;
          box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727;
          z-index:5;
        }
        &.active{
          background:#333;
          z-index:9;
          > .triangle-up {
            display:block;
          }
        }

        > .triangle-up {
          width: 0;
          height: 0;
          left:50%;
          bottom:-5px;
          position:absolute;
          transform:translate(-50%, 0);
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-bottom: 16px solid #27E0F3;
          display: none;
        }
      }
    }

    .user-operation {
      &-container {
        width:42px; height:38px; margin:6px -8px 0 0; position:relative; float:right;
      }
      &-info-container {
        width:100%; height:100%;

        > .user-operation-info-btn-container {
          top:32px; left:-65%; position:absolute;
          transform:scaleY(0); transition:all 0.48s; transform-origin:0 10px;

          > .super-btn-out {
            width:100px; margin:10px 0 0 -8px; padding:1px 4px 3px; text-align:center; line-height:24px;

            > .btn-cell {
              width:100%;
              height:23px;
              margin:2px 0;
              display:inline-block;
              box-sizing: border-box;
              color: #AAA;
              background-image: linear-gradient(#2e3537, #424748);
              box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(80, 80, 80, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(80, 80, 80, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);

              &:active {
                color: #20dbfc;
                box-shadow: 0 -0.1px 2px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3), inset 0 0 3px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6);
              }
            }
          }
        }
        &:hover > .user-operation-info-btn-container {
          transform: scaleY(1);
        }
      }
      &-login, &-info {
        width:100%; height:100%;
        > .super-btn-in {
          width:32px; height:29px; top:48%; line-height:29.5px; font-size:20px;
        }
      }
    }

    .search-bar {
      &-container {
        width:288px; height:38px; margin:6px 18px 0 0; float:right; position:relative;
      }
      &-bg {
        width:100%; height:100%;
      }
      &-input {
        width:240px; height:28px; left:127px; padding:0 8px; box-sizing:border-box; text-align:left; letter-spacing:1px; font-size:15px;
      }
      &-btn {
        width:28px; height:27px; top:5px; right:4px; position:absolute;
        > .super-btn-in {
          width:30px; height:28px; display:inline-block; float:right; font-size:21px; line-height:30px;
        }
      }
    }
  }

  .second-menu {
    width:100%; min-height:8px; top:52px; left:0; position:absolute; box-sizing:border-box; border-radius:0; cursor:default; font-size:15px; white-space:nowrap;

    &-container {
      width:1088px; margin:0 auto; padding-left:168px; box-sizing:border-box; display:flex; flex-wrap:nowrap;
    }

    &-link {
      height:24px;
      margin:6px 28px; padding:0 12px 0 13px; position:relative;
      float:left; border-radius:14px;
      text-align: center;
      font-weight: 700;
      background-image: linear-gradient(#2e3537, #424748);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(80, 80, 80, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(80, 80, 80, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);
      border: none;
      color: #AAA;
      line-height:24px;
      text-shadow: 2px 2px 5px #000;

      &:hover, &.active {
        margin-top:7px;
        height:23px;
        color: #20dbfc;
        line-height:22px;
        box-shadow: 0 -0.1px 2px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3), inset 0 0 3px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6);
      }
    }
  }
</style>
