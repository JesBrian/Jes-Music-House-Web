<template>
  <div id="homeLayout">
    <div class="box-show" style="width:100%; height:328px; padding:0 68px; position:relative;">
      <!-- 轮播图区域 -->
      <div style="width:76%; height:100%; padding:4px; float:left; box-sizing:border-box;">
        <slide-box style="background:#FFF"/>
      </div>
      <div style="width:68px; height:108px; top:48%; left:0; position:absolute; display:inline-block; transform:translate(0,-50%); background:lightgreen;"></div>
      <div style="width:68px; height:108px; top:48%; right:0; position:absolute; display:inline-block; transform:translate(0,-50%); background:lightgreen;"></div>

      <!-- 下载区域 -->
      <div class="box-show" style="width:24%; height:100%; float:right;">
        <router-link to="/download/client" class="super-btn-out" style="width:148px; height:43px; margin:238px 52px 0;">
          <span class="super-btn-in mh-if download" style="width:135px; height:30px; line-height:32px; font-size:20px;"> 下载客户端</span>
        </router-link>
      </div>
    </div>

    <div class="box-show" style="width:100%; height:688px; padding:0 68px;">
      <!--  -->
      <div style="width:76%; height:100%; float:left; background:#20dbfc"></div>

      <!--  -->
      <div class="box-show" style="width:24%; height:100%; float:right;">
        <div style="width:100%; height:158px; border-bottom:2px solid #1D1D1D; position:relative;">
          <router-link to="/user" style="float:left;">
            <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" class="box-show" style="width:60px; height:60px; margin:13px; padding:3px; box-sizing:border-box; border-radius:2px;"/>
          </router-link>
          <router-link to="/user" style="margin:12px 0 0; float:left; font-size:18px;">JesBrian</router-link>
          <div class="super-btn-out" style="width:80px; height:28px; top:42px; left:86px; position:absolute;">
            <span class="super-btn-in" style="width:70px; height:20px; line-height:21px;"> 签到</span>
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

</style>
