<template>
  <div id="homeLayout">
    <div class="box-show" style="width:100%; height:328px; padding:2px 68px 0; position:relative;">
      <!-- 轮播图区域 -->
      <div class="" style="width:76%; height:100%; padding:0.5px 0 0; float:left; box-sizing:border-box;">
        <slide-box style="background:#FFF"/>
      </div>
      <a class="p-n-btn prev-btn ban-select" style="width:36px; height:68px; top:48%; left:15px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
      <a class="p-n-btn next-btn ban-select" style="width:36px; height:68px; top:48%; right:15px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>

      <!-- 下载区域 -->
      <div class="box-show" style="width:24%; height:100%; float:right; position:relative; z-index:9; background:url('../../../../../static/img/default/download.png') no-repeat; background-size:100% 100%;">
        <router-link to="/download/client" class="super-btn-out" style="width:148px; height:43px; margin:238px 52px 0;">
          <span class="super-btn-in mh-if download" style="width:135px; height:30px; line-height:32px; font-size:20px;"> 下载客户端</span>
        </router-link>
      </div>
    </div>

    <div class="box-show" style="width:100%; padding:0 68px;">
      <div class="box-show">
        <!--  -->
        <div style="width:76%; height:888px; display:inline-block; background:lightseagreen;"></div>

        <!--  -->
        <div style="width:24%; height:100%; float:right;">

          <!-- 个人信息 -->
          <div style="width:100%; height:138px; border-bottom:2px solid #222; position:relative;">
            <router-link to="/user" style="float:left;">
              <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" class="box-show" style="width:60px; height:60px; margin:13px; padding:3px; box-sizing:border-box; border-radius:2px;"/>
            </router-link>
            <router-link to="/user" style="margin:12px 0 0; float:left; font-size:18px;">JesBrian</router-link>
            <div class="super-btn-out" style="width:70px; height:28px; top:42px; left:86px; position:absolute;">
              <span class="super-btn-in mh-if sign-in" style="width:61px; height:20px; line-height:23px;"> 签到</span>
            </div>
          </div>

          <!-- 推荐音乐人 -->
          <div style="width:100%;">
            <div style="width:96%; height:40px; margin:8px auto; padding:0 12px; box-sizing:border-box; box-shadow:0 1.5px 3px -2px #AAA; line-height:42px;">
              <span style="font-size:18px; font-weight:700;">推荐歌手</span>
              <router-link to="/singer" style="float:right; margin-top:3px;">
                <i class="mh-if refresh"> 查看全部</i>
              </router-link>
            </div>
            <ul>
              <li v-for="n in 6" style="padding:0 8px 8px;">
                <router-link to="/singer" class="box-show" style="width:100%; height:58px; display:inline-block;"></router-link>
              </li>
            </ul>
            <router-link to="/musician" class="super-btn-out" style="width:138px; height:38px; left:20%; margin-top:8px;">
              <span class="super-btn-in" style="width:126px; height:28px; top:48%; line-height:30px;">申请入驻音乐人</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideBox from '../../../../components/common/SlideBox/SlideBox'

export default {
  name: 'index',

  components: {
    SlideBox
  }
}
</script>

<style scoped>
  .p-n-btn {
    background:url('../../../../../static/img/button/button.png') no-repeat;
    background-size:auto 103%;
  }
  .p-n-btn.prev-btn {
    background-position:0 0;
  }
  .p-n-btn.prev-btn:hover {
    background-position:-38px 0;
  }
  .p-n-btn.next-btn {
    background-position:-78px 0;
  }
  .p-n-btn.next-btn:hover {
    background-position:-116px 0;
  }
</style>
