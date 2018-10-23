<template>
  <div id="homeLayout">

    <div class="user-friend-event box-show">
    </div>

    <div class="user-self-info">
      <div style="width:86%; height:43px; margin:18px auto 0;">
        <img src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80" class="cube-bg box-show" style="width:43px; height:43px; margin-right:13px; padding:3px; float:left; border-radius:0;"/>
        <p style="padding-top:1px; font-size:18px;">JesBrian</p>
        <p class="text-hidden" style="width:68%; font-size:14px; line-height:2em; ">JesBrianJesBrianJesBrianJesBrian</p>
      </div>
      <div class="box-shadow" style="width:99%; height:43px; margin:16px auto 0; padding-bottom:12px; text-align:center; font-weight:700;">
        <router-link to="/user" style="width:33%; height:100%; float:left;">
          <p style="font-size:20px; color:#DDD;">0</p>
          <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">动态</p>
        </router-link>
        <router-link to="/user" style="width:34%; height:100%; float:left; box-sizing:border-box; border-left:1px solid #282828; border-right:1px solid #282828;">
          <p style="font-size:20px; color:#DDD;">0</p>
          <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">关注</p>
        </router-link>
        <router-link to="/user" style="width:33%; height:100%; float:left;">
          <p style="font-size:20px; color:#DDD;">0</p>
          <p style="margin-left:9px; line-height:1.5em; letter-spacing:8px;">粉丝</p>
        </router-link>
      </div>
      <div class="box-shadow"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Friend'
}
</script>

<style lang="less" scoped>
  #homeLayout {
    display:flex;
  }

  .user-friend-event {
    flex:1;
  }

  .user-self-info {
    width:30%; height:100%;
  }
</style>
