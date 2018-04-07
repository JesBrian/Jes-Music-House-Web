<template>
  <!-- 导航条 -->
  <div class="glass-bg box-show" style="width:100%; height:53px; top:0; left:0; position:fixed; border-radius:0; opacity:0.98;">
    <div style="width:1238px; height:100%; margin:0 auto;">
      <router-link to="/" style="margin-right:38px; float:left; line-height:48px;">
        <img v-lazy="require('../../../../static/img/logo.png')" style="width:33px; height:33px; margin:8px 8px 0 0; float:left;"/>
        <span style="font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;">Music House</span>
      </router-link>

      <!-- 导航菜单 -->
      <ul style="display:inline-block; line-height:52px; color:#999; font-weight:700;">
        <li style="float:left;">
          <router-link to="/index" class="first-menu-link">
            发现音乐<div class="triangle-up"></div>
          </router-link>
        </li>
        <li style="float:left;">
          <router-link to="/user" class="first-menu-link">
            我的音乐<div class="triangle-up"></div>
          </router-link>
        </li>
        <li style="float:left;">
          <router-link to="/friend" class="first-menu-link">
            朋友动态<div class="triangle-up"></div>
          </router-link>
        </li>
        <li style="float:left;">
          <router-link to="/musician" class="first-menu-link">
            音乐人<div class="triangle-up"></div>
          </router-link>
        </li>
        <li style="float:left;">
          <router-link to="/download/client" class="first-menu-link">
            下载客户端<div class="triangle-up"></div>
          </router-link>
        </li>
      </ul>
      <div class="super-btn-out" style="width:100%; min-height:8px; top:52.3px; left:0; padding-left:268px; position:absolute; box-sizing:border-box; border-radius:0; cursor:default;">
        <div v-show="this.$route.path === '/index'" style="width:100%; height:100%; font-size:15px;">
          <router-link to="/index" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">主页推荐</router-link>
          <router-link to="/" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">排行榜</router-link>
          <router-link to="/" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">歌单</router-link>
          <router-link to="/" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">歌手</router-link>
          <router-link to="/" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">新碟上架</router-link>
        </div>
        <div v-show="this.$route.path === '/user'" style="width:100%; height:100%; font-size:15px;">
          <router-link to="/user/album" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">我的歌单</router-link>
          <router-link to="/user/recommend" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">个人推荐</router-link>
          <router-link to="/user/rank" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">听歌排行</router-link>
        </div>
        <div v-show="this.$route.path === '/friend'" style="width:100%; height:100%; font-size:15px;">
          <router-link to="/user/recommend" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">朋友圈</router-link>
          <router-link to="/user/album" class="second-menu-link box-show" style="margin:6px 38px 7px 18px; padding:3.5px 12px; display:inline-block; border-radius:12px;">消息动态</router-link>
        </div>
      </div>

      <!-- 用户登录/操作 -->
      <div id="navMenuUser" class="super-btn-out" style="width:40px; height:38px; margin-top:6px; position:relative; float:right;">
        <span @click="showUserLoginModal" class="super-btn-in" style="width:29.5px; height:28.5px; top:48.7%; line-height:29.5px; font-size:20px;">X</span>

        <div style="top:32px; left:-68%; position:absolute;">
          <div class="cube-bg box-show" style="width:100px; margin-top:10px; padding:0 4px; text-align:center; line-height:30px;">
            <ul>
              <li>
                <router-link to="user"><i class="MyIF home"></i> 个人主页</router-link>
              </li>
              <li>
                <router-link to="/message"><i class="MyIF add-data"></i> 消息管理</router-link>
              </li>
              <li>
                <router-link to="/level"><i class="MyIF IDcard-1"></i> 我的等级</router-link>
              </li>
              <li>
                <router-link to="/vip"><i class="MyIF IDcard-1"></i> VIP会员</router-link>
              </li>
              <li>
                <router-link to="/update"><i class="MyIF gears"></i> 修改资料</router-link>
              </li>
              <li>
                <a><i class="mh-if exit-1"></i> 安全退出</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 搜索栏 -->
      <div style="width:236px; height:38px; margin:6px 28px 0 0; float:right; position:relative;">
        <div class="super-btn-out" style="width:100%; height:100%;"></div>
        <input class="super-btn-in" type="text" style="width:190px; height:27px; left:43%; margin-top:1.2px; padding:2px 8px 0; box-sizing:border-box; text-align:left; letter-spacing:1px;"/>
        <div class="super-btn-out" style="width:28px; height:28px; top:5px; right:4px; position:absolute;">
          <router-link to="/search" class="super-btn-in mh-if search" style="width:30px; height:28.5px; display:inline-block; float:right; font-size:21px; line-height:30px;" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',

  methods: {
    showUserLoginModal () {
      this.$store.commit('changeModalType', 'login')
    }
  }
}
</script>

<style scoped>
  .first-menu-link {
    padding:0 18px; display:inline-block; float:left; cursor:pointer; color:#999; position:relative;
  }
  .first-menu-link.router-link-active, .first-menu-link:hover {
    color:#BBB;
    background:#222;
    box-shadow: inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727;
    z-index:5;
  }
  .first-menu-link.router-link-active{
    color:#DDD;
    background:#232323;
    z-index:9;
  }
  .first-menu-link > .triangle-up {
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
  .first-menu-link.router-link-active > .triangle-up {
    display:block;
  }

  #navMenuUser > div {
    display: none;
  }
  #navMenuUser:hover > div {
    display: block;
  }
  #navMenuUser li {
    width: 100%;
    height: 30px;
    margin: 4px 0;
    box-sizing: border-box;
  }
  #navMenuUser li a {
    width:100%;
    height:100%;
    display:inline-block;
    color: #AAA;
  }
  #navMenuUser li:hover {
    background: #333;
    box-shadow: inset 0 0 0 1px #222, 0 0 0 1px lightseagreen;
  }
  #navMenuUser li:hover a {
    color: #EEE;
  }
  #navMenuUser li:hover i.MyIF {
    color: #2DBEFF;
  }

  .second-menu-link {
    text-align: center;
    font-weight: 700;
    background-image: linear-gradient(#2e3537, #424748);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(80, 80, 80, 0.3), inset 0 0 0 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(80, 80, 80, 0.5), 0 2px 2px rgba(0, 0, 0, 0.4);
    border: none;
    color: #AAA;
    text-shadow: 2px 2px 5px #000;
  }
  .second-menu-link:hover, .second-menu-link.router-link-exact-active {
    color: #20dbfc;
    box-shadow: 0 -0.1px 2px rgba(0, 0, 0, 0.7), 0 0 2px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3), inset 0 0 3px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(0, 0, 0, 0.6);
  }
</style>
