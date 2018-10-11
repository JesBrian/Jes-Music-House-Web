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

        <comment-total />
      </div>
    </div>
  </div>
</template>

<script>
import CommentTotal from '../Comment/CommentTotal.vue'

export default {
  name: 'RankDetail',

  components: {
    CommentTotal
  }

}
</script>

<style scoped>

</style>
