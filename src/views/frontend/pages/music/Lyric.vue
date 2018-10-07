<template>
  <div id="homeLayout">
    <div style="width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;">
      <i class="mh-if comment" style="margin-right:8px; color:#00d8ff; font-size:32px;"></i>
      <span style="font-size:23px; font-weight:700;">歌词上传</span>
    </div>

    <div style="width:93%; height:888px; margin:0 auto;">
      <div class="glass-bg box-show" style="height:68px; margin:0 0 28px; position:relative;">
        <router-link to="/song" class="cube-bg box-show" style="width:50px; height:50px; margin:7px 12px; padding:4px; display:inline-block; border-radius:3px;">
          <img src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=180y180" style="width:100%; height:100%;" />
        </router-link>

        <i @click="playSong" class="mh-if play" style="top:50%; right:28px; position:absolute; transform:translateY(-50%); font-size:33px;"></i>
      </div>

      <div style="margin:0 0 28px;">
        歌词形式：
        <label>
          <input v-model="lyricType" type="radio" value="file" checked /> 歌词文件
        </label>
        <label>
          <input v-model="lyricType" type="radio" value="text" /> 编辑歌词
        </label>
      </div>

      <div style="margin:0 0 28px;">
        上传带时间轴的lrc歌词，将获得20积分！

        <div v-show="lyricType === 'file'" class="cube-bg box-show" style="width:328px; height:80px; margin:8px 0; position:relative;">
          <div @click="uploadLyricFile" class="super-btn-out ripple" style="width:108px; height:36px; top:48%; left:18px; position:absolute; transform:translateY(-50%);">
            <span class="super-btn-in" style="width:96px; height:25px; line-height:25px;">上传文件</span>
          </div>
          <span style="margin-right:18px; float:right; line-height:75px;">（支持lrc格式文件）</span>
        </div>

        <div v-show="lyricType === 'text'">
          <textarea class="cube-bg box-show" style="width:588px; height:188px; margin:8px 0; display:block; resize:none;"></textarea>
          示例：[00:33.490]Look at the stars
        </div>
      </div>

      <div style="margin:0 0 28px;">
        <div>
          <label>
            <input v-model="isAgree" type="checkbox" /> 同意《Music House内容发布须知》
          </label>
        </div>

        <div @click="uploadSongLyric" class="super-btn-out ripple" style="width:108px; height:36px;">
          <span class="super-btn-in" style="width:96px; height:25px; line-height:25px;">提交上传</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Lyric',

  data () {
    return {
      songId: 0,
      lyricType: 'file',
      isAgree: true
    }
  },

  methods: {
    playSong () {
    },

    uploadLyricFile () {
    },

    uploadSongLyric () {
    }
  }

}
</script>

<style scoped>

</style>
