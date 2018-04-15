<template>
  <div id="homeLayout">

    <!-- 各类榜单 -->
    <div class="box-show" style="width:20%; height:100%; float:left; position:absolute; box-sizing:border-box;">
      <ul>
        <li>
          <div class="box-show" style="width:100%; height:68px; font-size:22px; font-weight:700; line-height:75px; text-indent:1em;">云音乐特色榜</div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;"></div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;"></div>
        </li>
        <li class="box-shadow">
          <div class="active" style="width:100%; height:60px; background:#1A1A1A;"></div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;"></div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;"></div>
        </li>
        <li class="box-shadow">
          <div style="width:100%; height:60px;"></div>
        </li>
      </ul>
    </div>

    <!-- 榜单 -->
    <div style="width:80%; float:right; box-sizing:border-box;">
      <!-- 榜单信息 -->
      <div style="width:100%; height:188px;">
        <img v-lazy="'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150'" class="box-show" style="width:108px; height:108px; margin:36px 18px 0 56px; padding:6px; box-sizing:border-box; border-radius:4px;"/>
        <div class="super-btn-out" style="width:70px; height:28px;">
          <span class="super-btn-in mh-if play" style="width:61px; height:20px; line-height:22.8px;"> 播放</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:28px;">
          <span class="super-btn-in mh-if menu" style="width:61px; height:20px; line-height:22.8px;"> 添加</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:28px;">
          <span class="super-btn-in mh-if collection-music" style="width:61px; height:20px; line-height:22.8px;"> 收藏</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:28px;">
          <span class="super-btn-in mh-if share" style="width:61px; height:20px; line-height:22.8px;"> 分享</span>
        </div>
        <div class="super-btn-out" style="width:70px; height:28px;">
          <span class="super-btn-in mh-if feedback" style="width:61px; height:20px; line-height:22.8px;"> 留言</span>
        </div>
      </div>

      <div style="width:93%; margin:0 auto;">

        <div style="width:100%; height:68px; margin-bottom:28px; padding:0 68px; box-sizing:border-box; box-shadow:0 2px 3px -3px #FFF; line-height:80px;">
          <span style="float:left; font-size:26px; font-weight:700;">歌曲列表</span>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Rank'
}
</script>

<style scoped>

</style>
