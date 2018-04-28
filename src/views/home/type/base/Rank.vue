<template>
  <div id="homeLayout">

    <!-- 各类榜单 -->
    <div class="box-show" style="width:20%; height:100%; float:left; position:absolute; box-sizing:border-box;">
      <ul>
        <li class="box-shadow">
          <div style="width:100%; height:68px; font-size:22px; font-weight:700; line-height:75px; text-indent:1em;">云音乐特色榜</div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px; background:#1D1D1D;">
            <img v-lazy="'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;">
            <img v-lazy="'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40'" style="width:38px; height:38px; margin:10px; float:left;" />
          </div>
        </li>
      </ul>
    </div>

    <!-- 榜单详情 -->
    <div style="width:80%; margin:0 0 28px 20%; display:inline-block; box-sizing:border-box;">
      <!-- 榜单信息 -->
      <div style="width:100%; height:188px;">
        <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" class="box-show" style="width:108px; height:108px; margin:36px 18px 0 56px; padding:6px; box-sizing:border-box; border-radius:4px;"/>
        <div class="super-btn-out" style="width:70px; height:31px;">
          <span class="super-btn-in mh-if play" style="width:61px; height:23px; line-height:25px;"> 播放</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:31px;">
          <span class="super-btn-in mh-if menu" style="width:61px; height:23px; line-height:25px;"> 添加</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:31px;">
          <span class="super-btn-in mh-if collection-music" style="width:61px; height:23px; line-height:25px;"> 收藏</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:31px;">
          <span class="super-btn-in mh-if share" style="width:61px; height:23px; line-height:25px;"> 分享</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:31px;">
          <span class="super-btn-in mh-if comment" style="width:61px; height:23px; line-height:25px;"> 留言</span>
        </div>
      </div>

      <div style="width:93%; margin:0 auto;">

        <div>
          <div style="width:100%; height:68px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:80px;">
            <span style="float:left; font-size:26px; font-weight:700;">歌曲列表</span>
          </div>
          <div style="width:100%; height:688px; background:lightgreen;"></div>
        </div>

        <div>
          <div style="width:100%; height:68px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:80px;">
            <span style="float:left; font-size:26px; font-weight:700;">听友评论</span>
          </div>
          <div>
            <img v-lazy="'http://p4.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=50y50'" class="box-show" style="width:42px; height:42px; margin:18px 28px; padding:2px; float:left;" />
            <textarea class="cube-bg box-show glow-input" style="width:86%; height:82px; resize:none;" placeholder="评论"></textarea>
            <div style="width:100%; height:38px; line-height:36px;">
              <i class="mh-if exciting" style="margin-left:128px;"></i>
              <a class="super-btn-out" style="width:68px; height:27px; margin:6px 56px 0 0; float:right;">
                <span class="super-btn-in mh-if comment" style="width:60px; height:20px; line-height:22px;"> 评论</span>
              </a>
              <span style="margin:3px 18px; float:right;">138</span>
            </div>
            <div style="width:100%; height:56px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF;">
              <span style="margin-top:30px; float:left; font-size:16px; font-weight:700;">精彩评论</span>
            </div>
            <ul>
              <li v-for="n in 5" class="box-shadow">
                <div style="width:100%; height:68px;"></div>
              </li>
            </ul>
            <div style="width:100%; height:56px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF;">
              <span style="margin-top:30px; float:left; font-size:16px; font-weight:700;">最新评论</span>
            </div>
            <ul>
              <li v-for="n in 20" class="box-shadow">
                <div style="width:100%; height:68px;"></div>
              </li>
            </ul>
          </div>
          <pagination />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Pagination from '../../../../components/common/pagination/Pagination.vue'

export default {
  name: 'Rank',

  components: {
    Pagination
  }
}
</script>

<style scoped>

</style>
