<template>
  <div id="homeLayout">

    <div class="box-show" style="width:75%; height:100%; min-height:608px; padding-bottom:18px; display:inline-block;">
      <div style="margin-top:48px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:38px;">
        <i class="mh-if exponential" style="float:left; color:#00d8ff; font-size:32px;"></i>
        <span style="margin:0 8px; font-size:23px; font-weight:700;">听歌排行</span>
        <span style="font-size:14px;">累积听歌18547首</span>

        <div style="width:188px; height:32px; float:right; text-align:center; line-height:28.8px; font-weight:700; cursor:pointer;">
          <div @click="changeContentType('week')" :class="contentType === 'week' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:left; border-radius:5px 0 0 5px; text-shadow:1px 1px 2px #000;">最近一周</div>
          <div @click="changeContentType('all')" :class="contentType === 'all' ? 'cube-bg' : 'glass-bg'" class="box-show" style="width:50%; height:100%; float:right; border-radius:0 5px 5px 0; text-shadow:1px 1px 2px #000;">所有时间</div>
        </div>
      </div>

      <div style="margin:0 0 18px;">
        <div style="height:30px; margin:2px 0; padding:2px 0 0; box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727; line-height:28px;">
          <div style="width:6%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828;"></div>
          <div style="width:8%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">操作</div>
          <div @click="changeOrder('titleOrder')" style="width:64%; height:100%; padding-left:14px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828;">
            音乐标题 - 歌手
          </div>
          <div @click="changeOrder('timeOrder')" style="width:11%; height:100%; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">
            时长
          </div>
          <div @click="changeOrder('timeOrder')" style="width:11%; height:100%; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">
            次数
          </div>
        </div>
        <song-item v-for="n in 100" :key="n + '22'" class="box-shadow" style="padding:2px 0;" :index="n" />
      </div>
    </div>

    <div style="width:25%; padding:34px 18px; float:right; box-sizing:border-box;">

      <div style="width:100%; margin-bottom:48px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">客户端多端下载</div>
      </div>
    </div>
  </div>
</template>

<script>
import SongItem from '../../../../components/frontend/SongGroup/SongItem.vue'

export default {
  name: 'Rank',

  components: {
    SongItem
  },

  data () {
    return {
      contentType: 'week'
    }
  },

  methods: {
    changeContentType (type) {
      this.contentType = type
    }
  }
}
</script>

<style scoped>

</style>
