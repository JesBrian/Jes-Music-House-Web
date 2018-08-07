<template>
  <div id="leftMenu" class="glass-bg box-show" style="width:208px; height:100%; top:0; left:0; padding:50px 0 28px; box-sizing:border-box; position:fixed; z-index:9;">
    <div style="width:100%; height:100%; padding:13px 0 0; overflow-y:auto; color:#DDD; box-sizing:border-box;">
      <gemini-scrollbar class="my-scroll-bar">
        <ul>
          <li v-for="n in 3" :key="`${n}3`" style="width:100%; margin:0 0 8px;">
            <div class="glass-bg box-show" style="width:93%; height:33px; margin:0 auto; position:relative; cursor:pointer;">
              <p class="text-hidden" style="line-height:30px; font-size:16px; display:inline-block;">
                <i class="mh-if menu-user" style="margin:0 8px 0 12px;"></i>用户模块
              </p>
              <div class="show-second-menu-btn cube-bg box-show">
                <i class="mh-if double-arrow-up" style="width:100%; height:100%; display:inline-block;"></i>
              </div>
            </div>
            <div style="width:100%; padding:6px 0;">
              <router-link v-for="n in 6" :key="`${n}2`" to="/backstage/userList" class="cube-bg box-show second-menu-link">
                <i class="mh-if all-user"></i>
                <p class="second-menu-link-label text-hidden">用户列表</p>
                <i class="mh-if double-arrow-left"></i>
              </router-link>

              <router-link to="/backstage/userList" class="cube-bg box-show second-menu-link active">
                <i class="mh-if all-user"></i>
                <p class="second-menu-link-label text-hidden">用户列表</p>
                <i class="mh-if double-arrow-left"></i>
              </router-link>
            </div>
          </li>
        </ul>
      </gemini-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style scoped>
  .show-second-menu-btn {
    width: 23px;
    height: 22px;
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
  .show-second-menu-btn > .mh-if {
    font-size: 14px;
    line-height: 16px;
    animation: menuSwitch 0.6s forwards;
    -webkit-animation: menuSwitch 0.6s forwards;
  }
  .show-second-menu-btn > .mh-if.active {
    animation: menuSwitchActive 0.6s forwards;
    -webkit-animation: menuSwitchActive 0.6s forwards;
  }

  .second-menu-link {
    width:85%; height:28px; margin:2px auto 6px; display:block; line-height:26px;
  }
  .second-menu-link-label {
    margin-left:8px; display:inline-block; font-size:15px; color:#AAA;
  }
  .second-menu-link > .double-arrow-left {
    display:none;
  }
  .second-menu-link.active {
    margin-left:23px;
  }
  .second-menu-link.active > .second-menu-link-label {
    color:#FFF;
  }
  .second-menu-link.active > .double-arrow-left {
    margin-right:5px; float:right; display:block; font-size:12px; color:#38daf0;
  }
</style>
