<template>
  <div id="homeLayout">
    <div class="box-show" style="width:100%; height:328px; padding:2px 68px 0; position:relative;">
      <!-- 轮播图区域 -->
      <div class="" style="width:76%; height:100%; padding:0.5px 0 0; float:left; box-sizing:border-box;">
        <slide-box style="background:#FFF"/>
      </div>

      <!-- 下载区域 -->
      <div class="box-show" style="width:24%; height:100%; float:right; position:relative; z-index:9; background:url('../../../../../static/img/default/download.png') no-repeat; background-size:100% 100%;">
        <router-link to="/download/client" class="super-btn-out" style="width:148px; height:43px; margin:238px 28px 0;">
          <span class="super-btn-in mh-if download" style="width:135px; height:30px; line-height:32px; font-size:20px;"> 下载客户端</span>
        </router-link>
      </div>
    </div>

    <div class="box-show" style="width:100%; padding:0;">
      <div class="box-show">
        <!-- 主页主体内容 -->
        <div class="box-show" style="width:72.5%; padding:13px 0 38px; display:inline-block;">

          <hot-album />

          <personal-recom />

          <new-disc />

          <recom-rank />
        </div>

        <!--  -->
        <div style="width:27.5%; height:100%; float:right;">

          <!-- 个人信息 -->
          <div style="width:100%; height:138px; border-bottom:2px solid #222; position:relative;">
            <router-link to="/user" style="float:left;">
              <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" class="box-show" style="width:60px; height:60px; margin:13px; padding:3px; box-sizing:border-box; border-radius:2px;"/>
            </router-link>
            <router-link to="/user" style="margin:14px 0 0; float:left; font-size:18px; color:#AAA;">JesBrian</router-link>
            <div class="super-btn-out" style="width:70px; height:28px; top:42px; left:86px; position:absolute;">
              <span class="super-btn-in mh-if sign-in" style="width:61px; height:20px; line-height:23px;"> 签到</span>
            </div>
            <div style="width:88%; height:40px; top:86px; left:50%; position:absolute; transform:translateX(-50%);">
              <div style="width:33%; height:100%; float:left; box-sizing:border-box; text-align:center;">
                <p style="line-height:1.5em; font-size:14px; color:#999;">1222</p>
                <p style="text-indent:12px; letter-spacing:8px; color:#DDD; font-weight:700;">动态</p>
              </div>
              <div style="width:34%; height:100%; float:left; box-sizing:border-box; border:1px solid #666; border-top:none; border-bottom:none; text-align:center;">
                <p style="line-height:1.5em; font-size:14px; color:#999;">1222</p>
                <p style="text-indent:12px; letter-spacing:8px; color:#DDD; font-weight:700;">关注</p>
              </div>
              <div style="width:33%; height:100%; float:left; box-sizing:border-box; text-align:center;">
                <p style="line-height:1.5em; font-size:14px; color:#999;">1222</p>
                <p style="text-indent:12px; letter-spacing:8px; color:#DDD; font-weight:700;">粉丝</p>
              </div>
            </div>
          </div>

          <!-- 推荐音乐人 -->
          <div style="width:100%;">
            <div style="width:96%; height:40px; margin:8px auto; padding:0 12px; box-sizing:border-box; box-shadow:0 1.5px 3px -2px #AAA; line-height:42px;">
              <span style="font-size:18px; font-weight:700;">推荐歌手</span>
              <router-link to="/singer" class="show-all-recom-singer">
                <i class="mh-if refresh"></i> 查看全部
              </router-link>
            </div>
            <ul>
              <li v-for="n in 6" :key="n" style="padding:0 8px 8px;">
                <router-link to="/singer" class="box-show" style="width:100%; height:58px; display:inline-block;">
                  <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" class="box-show" style="width:43px; height:43px; margin:7px 8px; padding:2px; float:left;"/>
                  <p style="padding-top:8px; font-size:18px; font-weight:700; color:#BBB;">JesBrian</p>
                  <p class="text-hidden" style="width:70%; color:#888; font-size:14px; line-height:1.8em;">vghjbknlm;,.vdwjbknlm;,.vdwsvsd</p>
                </router-link>
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
import NewDisc from '../../../../components/frontend/Index/NewDisc.vue'
import RecomRank from '../../../../components/frontend/Index/RecomRank.vue'
import PersonalRecom from '../../../../components/frontend/Index/PersonalRecom.vue'
import HotAlbum from '../../../../components/frontend/Index/HotAlbum.vue'

export default {
  name: 'index',

  components: {
    HotAlbum,
    PersonalRecom,
    RecomRank,
    NewDisc,
    SlideBox
  }
}
</script>

<style scoped>

  .show-all-recom-singer {
    margin-top:4px;
    float: right;
    color: #999;
    font-size: 16px;
    font-weight:700;
  }
  .show-all-recom-singer:hover {
    color: #DDD;
  }
  .show-all-recom-singer:hover > i.mh-if {
    color: #19D6E6;
  }
</style>
