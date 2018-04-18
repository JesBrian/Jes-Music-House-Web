<template>
  <div id="homeLayout">
    <div class="box-show" style="width:100%; height:328px; padding:2px 68px 0; position:relative;">
      <!-- 轮播图区域 -->
      <div class="" style="width:76%; height:100%; padding:0.5px 0 0; float:left; box-sizing:border-box;">
        <slide-box style="background:#FFF"/>
      </div>

      <!-- 下载区域 -->
      <div class="box-show" style="width:24%; height:100%; float:right; position:relative; z-index:9; background:url('../../../../../static/img/default/download.png') no-repeat; background-size:100% 100%;">
        <router-link to="/download/client" class="super-btn-out" style="width:148px; height:43px; margin:238px 52px 0;">
          <span class="super-btn-in mh-if download" style="width:135px; height:30px; line-height:32px; font-size:20px;"> 下载客户端</span>
        </router-link>
      </div>
    </div>

    <div class="box-show" style="width:100%; padding:0 68px;">
      <div class="box-show">
        <!-- 主页主体内容 -->
        <div class="box-show" style="width:76%; padding-bottom:38px; display:inline-block;">

          <div>
            <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
              <span style="float:left; font-size:23px; font-weight:700;">热门推荐</span>
              <router-link to="/album" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
            </div>
            <ul style="width:93%; margin:0 auto;">
              <li v-for="n in 8" style="width:25%; height:208px; margin:0; padding:0; position:relative; display:inline-block;">
                <router-link to="/playList" class="cube-bg box-show" style="width:138px; height:138px; margin:0 0 8px 23px; padding:2px; position:relative; display:inline-block;">
                  <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
                  <div class="glass-bg" style="width:140px; height:30px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#999;">
                    <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656
                  </div>
                </router-link>
                <i @click="playThisPlayList" class="mh-if play"></i>
                <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
                  <router-link to="/playList" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
                </p>
                <p class="text-hidden" style="width:138px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;">
                  <span style="float:left; margin:-1px 8px 0 0;">by</span><router-link to="singer" style="color:#AAA;">JesBrian</router-link>
                </p>
              </li>
            </ul>
          </div>

          <div>
            <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
              <span style="float:left; font-size:23px; font-weight:700;">个性化推荐</span>
              <router-link to="/album" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
            </div>
            <div style="width:93%; height:208px; margin:0 auto;">
              <div style="width:238px; height:100%; float:left; text-align:center;">
                <router-link to="/user" style="width:100%; height:118px; margin-top:3px; display:inline-block; position:relative; line-height:103px;">
                  <img v-lazy="require('../../../../../static/img/default/calendar.png')" style="width:100%; height:100%;"/>
                  <div style="width:50%; height:100%; top:0; left:0; position:absolute;">
                    <b style="display:inline-block; transform:scaleY(1.2); font-size:56px; color:#666; text-shadow:rgb(0, 0, 0) 0.5px 0.5px 1px;">12</b>
                  </div>
                  <div style="width:50%; height:100%; top:0; right:0; position:absolute;">
                    <b style="display:inline-block; transform:scaleY(1.2); font-size:56px; color:#666; text-shadow:rgb(0, 0, 0) 0.5px 0.5px 1px;">12</b>
                  </div>
                </router-link>
                <router-link to="user" style="color:#BBB; font-size:20px; font-weight:700; line-height:2.8em;">每日歌曲推荐</router-link>
              </div>
              <ul style="float:right;">
                <li v-for="n in 3" style="height:208px; padding:0; position:relative; float:right;">
                  <router-link to="/playList" class="cube-bg box-show" style="width:138px; height:138px; margin:0 0 8px 22px; padding:2px; position:relative; display:inline-block;">
                    <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" style="width:100%; height:100%;"/>
                    <div class="glass-bg" style="width:140px; height:30px; left:-2px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:28px; font-size:14px; color:#999;">
                      <i class="mh-if headphone" style="margin:1.5px 3px 0 0; float:left;"></i>5656
                    </div>
                  </router-link>
                  <i @click="playThisPlayList" class="mh-if play"></i>
                  <p class="text-hidden" style="width:138px; margin-left:23px; color:#DDD;">
                    <router-link to="/playList" style="color:#DDD;">c4s成8识vg删除yr54</router-link>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
              <span style="float:left; font-size:23px; font-weight:700;">新碟上架</span>
              <router-link to="/disc" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
            </div>
            <div class="glass-bg box-show" style="width:93%; height:138px; margin:0 auto 18px; position:relative;">
              <a class="p-n-btn prev-btn ban-select" style="width:23px; height:43px; top:48%; left:13px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
              <a class="p-n-btn next-btn ban-select" style="width:23px; height:43px; top:48%; right:13px; position:absolute; display:inline-block; transform:translate(0,-50%);"></a>
              <div style="width:100%; height:100%; padding:8px 43px; box-sizing:border-box;">
                <ul style="width:100%; height:100%;">
                  <li v-for="n in 5" style="width:20%; height:100%; float:left;">
                    <div class="new-disc-cell" style="width:100%; height:100%; position:relative; text-align:center;">
                      <router-link to="playList" style="margin:6px 0 0 6px; position:relative; display:inline-block;">
                        <img v-lazy="'http://p3.music.126.net/w_GpzV7fky3gOgIf4-gC4Q==/109951163241853988.jpg?param=130y130'" style="width:65px; height:65px; top:5px; left:5px; position:absolute;"/>
                        <img v-lazy="require('../../../../../static/img/default/disc.png')" style="width:88px; height:75px;"/>
                      </router-link>
                      <i @click="playThisPlayList" class="mh-if play"></i>
                      <p class="text-hidden" style="margin-left:26px; text-align:left;">
                        <router-link to="playList" style="font-size:14.5px;">cx城市规划s市规划s</router-link>
                      </p>
                      <router-link to="singer" style="font-size:12.5px;">JesBrian</router-link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
              <span style="float:left; font-size:23px; font-weight:700;">榜单</span>
              <router-link to="/rank" class="read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
            </div>

            <div style="width:93%; height:100%; margin:0 auto;">
              <div class="" style="width:33%; height:100%; float:left; box-sizing:border-box; border:1px solid #282828;">
                <div style="width:100%; height:114px;">
                  <router-link to="rank">
                    <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
                  </router-link>
                  <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                </div>
                <ul style="width:100%; line-height:32px;">
                  <li v-for="n in 10" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box;">
                    {{ n }}
                  </li>
                  <li class="rank-cell" style="width:100%; height:32px;">
                    <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
                  </li>
                </ul>
              </div>
              <div  style="width:34%; height:100%; float:left; box-sizing:border-box; border-top:1px solid #282828; border-bottom:1px solid #282828;">
                <div style="width:100%; height:114px;">
                  <router-link to="rank">
                    <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
                  </router-link>
                  <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                </div>
                <ul style="width:100%; line-height:32px;">
                  <li v-for="n in 10" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box;">
                    {{ n }}
                  </li>
                  <li class="rank-cell" style="width:100%; height:32px;">
                    <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
                  </li>
                </ul>
              </div>
              <div style="width:33%; height:100%; float:left; box-sizing:border-box; border:1px solid #282828;">
                <div style="width:100%; height:114px;">
                  <router-link to="rank">
                    <img class="box-show" v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" style="width:80px; height:80px; margin:16px 10px 0 16px; padding:3px; float:left;"/>
                  </router-link>
                  <p style="width:100%; line-height:3.3em; font-size:18px;"><router-link to="rank" style="color:#BBB;">XXXX飙升榜单</router-link></p>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if play" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if collection-music" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                  <div class="super-btn-out" style="width:33px; height:33px; top:-3px;">
                    <span class="super-btn-in mh-if share" style="width:25px; height:25px; top:48%; font-size:20px; line-height:27px;"></span>
                  </div>
                </div>
                <ul style="width:100%; line-height:32px;">
                  <li v-for="n in 10" class="rank-cell" style="width:100%; height:32px; padding:0 12px 0 18px; box-sizing:border-box;">
                    {{ n }}
                  </li>
                  <li class="rank-cell" style="width:100%; height:32px;">
                    <router-link to="rank" class="read-more" style="margin:0 23px; line-height:32px;">查看全部 <i class="mh-if double-arrow-right"></i></router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <!--  -->
        <div style="width:24%; height:100%; float:right;">

          <!-- 个人信息 -->
          <div style="width:100%; height:138px; border-bottom:2px solid #222; position:relative;">
            <router-link to="/user" style="float:left;">
              <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" class="box-show" style="width:60px; height:60px; margin:13px; padding:3px; box-sizing:border-box; border-radius:2px;"/>
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
              <li v-for="n in 6" :key="n" style="padding:0 8px 8px;">
                <router-link to="/singer" class="box-show" style="width:100%; height:58px; display:inline-block;">
                  <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" style="width:43px; height:43px; margin:7px 8px; float:left;"/>
                  <p style="line-height:1.8em; font-size:18px; font-weight:700; color:#BBB;">JesBrian</p>
                  <p class="text-hidden" style="width:70%; color:#888;">vghjbknlm;,.vdwjbknlm;,.vdwsvsd</p>
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

export default {
  name: 'index',

  components: {
    SlideBox
  }
}
</script>

<style scoped>
  li > .mh-if {
    top:116px; left:138px; position:absolute; display:none;
  }
  li:hover>.mh-if, .new-disc-cell:hover>i.mh-if {
    display:inline-block;
  }
  li:hover>.mh-if:hover, .new-disc-cell>i.mh-if:hover {
    color:#20dbfc;
  }

  .p-n-btn {
    background:url('../../../../../static/img/button/button.png') no-repeat;
    background-size:auto 103%;
  }
  .p-n-btn.prev-btn {
    background-position:0 0;
  }
  .p-n-btn.prev-btn:hover {
    background-position:-24px 0;
  }
  .p-n-btn.next-btn {
    background-position:-49px 0;
  }
  .p-n-btn.next-btn:hover {
    background-position:-73px 0;
  }

  .read-more {
    margin-top:38px; float:right; font-size:13px; color:#888; line-height:1em;
  }
  .read-more:hover {
    color:#EEE;
    text-decoration:underline;
  }
  .read-more > .mh-if {
    font-size:12.5px;
  }
  .read-more:hover > .mh-if {
    color: #20dbfc;
  }

  .new-disc-cell>i.mh-if {
    top:60px; left:78px; position:absolute; display:none;
  }

  li.rank-cell:nth-child(odd) {
    background:#181818;
  }
</style>
