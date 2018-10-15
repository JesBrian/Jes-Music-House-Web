<template>
  <div id="homeLayout">

    <div class="box-show" style="width:75%; height:100%; display:inline-block;">
      <!-- 歌手信息 -->
      <div style="width:96%; margin:28px auto 18px;">
        <div style="width:20%; height:100%; display:inline-block; text-align:center;">
          <img src="http://p3.music.126.net/Ic8mQm7XI1nxe8DL-O9Eog==/103354093028496.jpg?param=640y300" class="glass-bg box-show" style="width:128px; height:128px; margin-right:28px; padding:6px;"/>
        </div>
        <div style="width:80%; height:100%; float:right;">
          <p style="padding-top:8px; font-size:24px;">The Name of the Singer</p>
          <p style="line-height:3em;">
            <span style="margin-right:26px;">
              <i class="mh-if music-albu" style="margin-right:6px;"></i>单曲数：253
            </span>
            <span style="margin-right:26px;">
              <i class="mh-if redis" style="margin-right:6px;"></i>专辑数：63
            </span>
          </p>
          <div class="super-btn-out ripple" style="width:108px; height:38px;">
            <span class="super-btn-in mh-if non-colloection" style="width:95px; height:25px; top:48%; font-size:21px; line-height:26px;"> 关注</span>
          </div>
        </div>
      </div>

      <!-- 歌手内容切换 -->
      <div style="height:32px; margin:28px auto 0; padding:0 3%; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; color:#BBB; font-size:17px; font-weight:700; text-shadow:1px 1px 0.5px #000; line-height:28px;">
        <span @click="changeContent('hot-song')" :class="{'active': type === 'hot-song'}" class="singer-menu-cell">热门歌曲</span>
        <span @click="changeContent('play-list')" :class="{'active': type === 'play-list'}" class="singer-menu-cell">所有专辑</span>
        <span @click="changeContent('description')" :class="{'active': type === 'description'}" class="singer-menu-cell">艺人介绍</span>
      </div>

      <!-- 不同内容 -->
      <div style="margin:0 auto 28px;">
        <!--<component :is="type" />-->
        <div style="height:388px;"></div>
      </div>
    </div>

    <div style="width:25%; padding:34px 18px; float:right; box-sizing:border-box;">
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">相似歌手推荐</div>
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
          <div v-for="n in 6" :key="`${n}88`" style="margin-bottom:16px;">
            <img class="box-show" style="width:58px; height:58px; padding:2px;" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
            <p style="font-size:14px;">JesBrian</p>
          </div>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">网易云音乐多端下载</div>
        <div>
          <p>同步歌单，随时畅听云音乐</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SingerPage',

  components: {
  },

  data () {
    return {
      singerId: this.$route.params['id'],
      type: this.$route.params['type']
    }
  },

  created () {
  },

  methods: {
    changeContent (type) {
      this.type = type

      this.$router.push(`/singer-detail/${type}/${this.singerId}`)
    }
  }
}
</script>

<style scoped>
  .singer-menu-cell {
    margin:0 15px; padding:0 12px 6px 10px; cursor:pointer;
  }
  .singer-menu-cell:hover {
    color:#EEE;
  }
  .singer-menu-cell.active {
    border-bottom:2px solid #20dbfc; color:#20dbfc
  }

  .play-list-type {
    width:30px; height:30px;
  }
  .play-list-type > .super-btn-in {
    width:24px; height:24px; top:48%; font-size:19px; line-height:24px;
  }
  .play-list-type.active > .super-btn-in {
    top:50%;
  }
</style>
