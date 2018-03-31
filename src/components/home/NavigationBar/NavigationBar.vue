<template>
  <!-- 导航条 -->
  <div class="glass-bg box-show" style="width:100%; height:53px; top:0; left:0; position:fixed; border-radius:0;">
    <div style="width:1188px; height:100%; margin:0 auto;">
      <router-link to="/" style="display:inline-block; line-height:52px;">
        <img src="#" style="width:33px; height:33px; margin:9px 8px 0 0; background:lightcoral; float:left;"/>
        <span style="font-size:22px; font-weight:700; color:#22e8ff; text-shadow:1.5px 1.5px 6px #30cdff;">Music House</span>
      </router-link>

      <!-- 导航菜单 -->
      <ul style="float:left;"></ul>

      <!-- 用户登录/操作 -->
      <div id="navMenuUser" class="super-btn-out" style="width:40px; height:38px; margin-top:6px; position:relative; float:right;">
        <span class="super-btn-in" style="width:29.5px; height:28.5px; top:48.7%; line-height:29.5px; font-size:20px;">X</span>

        <div style="top:32px; left:-68%; position:absolute;">
          <div class="cube-bg box-show" style="width:100px; margin-top:10px; padding:0 4px; text-align:center; line-height:30px;">
            <ul>
              <li>
                <router-link to="user"><i class="MyIF home"></i> 个人信息</router-link>
              </li>
              <li>
                <router-link to="/write"><i class="MyIF IDcard-1"></i> 编写文章</router-link>
              </li>
              <li>
                <router-link to="/management"><i class="MyIF add-data"></i> 文章管理</router-link>
              </li>
              <li>
                <router-link to="/update"><i class="MyIF gears"></i> 修改资料</router-link>
              </li>
              <li>
                <a><i class="MyIF exit-1"></i> 安全退出</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 搜索栏 -->
      <div class="super-btn-out" style="width:228px; height:38px; margin:6px 28px 0 0; float:right;">
        <router-link to="/search" class="super-btn-in" style="width:29px; height:28.5px; top:48.6%; display:inline-block; float:right;" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
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
</style>
