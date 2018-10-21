<template>
  <div id="homeLayout">

    <div class="box-show" style="width:75%; height:100%; min-height:608px; display:inline-block;">

      <div style="margin-top:48px; padding:0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:38px;">
        <i class="mh-if hot" style="float:left; color:#00d8ff; font-size:32px;"></i>
        <span style="margin:0 8px; font-size:23px; font-weight:700;">推荐列表</span>
        <span style="font-size:14px;">30 首歌曲</span>

        <div style="margin-top:-8px; float:right; cursor:pointer;">
          <div class="super-btn-out ripple" style="width:71px; height:31px;">
            <span class="super-btn-in mh-if play" style="width:63px; height:24px;">&nbsp;播放</span>
          </div>
          <div class="super-btn-out ripple" style="width:71px; height:31px;">
            <span class="super-btn-in mh-if menu" style="width:63px; height:24px;">&nbsp;列表</span>
          </div>
          <div class="super-btn-out ripple" style="width:71px; height:31px;">
            <span class="super-btn-in mh-if non-colloection" style="width:63px; height:24px;">&nbsp;收藏</span>
          </div>
        </div>
      </div>
      <song-group />
    </div>

    <div style="width:25%; padding:34px 18px; float:right; box-sizing:border-box;">

      <div style="width:100%; margin-bottom:48px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">客户端多端下载</div>
      </div>
    </div>

  </div>
</template>

<script>
import SongGroup from '../../../../components/frontend/SongGroup/SongGroup.vue'

export default {
  name: 'Recommend',

  components: {
    SongGroup
  }
}
</script>

<style scoped>

</style>
