<template>

  <!-- 榜单详情 -->
  <div style="width:80%; margin:0 0 28px 20%; display:inline-block; box-sizing:border-box;">
    <!-- 榜单信息 -->
    <div style="width:100%; height:188px;">

      <div style="width:24%; height:100%; float:left; text-align:center;">
        <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" class="box-show" style="width:108px; height:108px; margin-top:45px; padding:6px; box-sizing:border-box; border-radius:4px;"/>
      </div>

      <div style="width:76%; height:100%; float:left;">

        <p style="margin-top:25px; font-size:28px; line-height:3em;">云音乐飙升榜</p>

        <div @click="playThisRank" class="super-btn-out" style="width:80px; height:35px; margin-right:18px;">
          <span class="super-btn-in mh-if play" style="width:68px; height:26px; line-height:28px;"> 播放</span>
        </div>
        <div class="super-btn-out" style="width:80px; height:35px; margin-right:18px;">
          <span class="super-btn-in mh-if menu" style="width:68px; height:26px; line-height:28px;"> 添加</span>
        </div>
        <div class="super-btn-out" style="width:80px; height:35px; margin-right:18px;">
          <span class="super-btn-in mh-if collection-music" style="width:68px; height:26px; line-height:28px;"> 收藏</span>
        </div>
        <div class="super-btn-out" style="width:80px; height:35px; margin-right:18px;">
          <span class="super-btn-in mh-if share" style="width:68px; height:26px; line-height:28px;"> 分享</span>
        </div>
        <div class="super-btn-out" style="width:80px; height:35px; margin-right:18px;">
          <span class="super-btn-in mh-if comment" style="width:68px; height:26px; line-height:28px;"> 留言</span>
        </div>
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
          <comment-group />

          <div style="width:100%; height:56px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF;">
            <span style="margin-top:30px; float:left; font-size:16px; font-weight:700;">最新评论</span>
          </div>
          <comment-group />
        </div>
        <pagination />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "../../common/pagination/Pagination";
import CommentGroup from '../Comment/CommentGroup.vue'

export default {
  name: 'RankDetail',

  components: {
    CommentGroup, Pagination
  }

}
</script>

<style scoped>

</style>
