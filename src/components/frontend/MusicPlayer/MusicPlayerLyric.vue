<template>
  <div id="musicPlayerLyric">
    <!-- 歌词报错 -->
    <div class="mh-if question">
      <div class="glass-bg box-show">
        <router-link to="/lyric" class="question-link box-shadow">上传歌词</router-link>
        <router-link to="/lyric" class="question-link box-shadow">歌词报错</router-link>
      </div>
    </div>

    <!-- 滚动歌词区域 -->
    <div class="lyric-container">
      <gemini-scrollbar>
        <ul class="lyric-container-detail">
          <li>rdtGbuybjk</li><li>rbuyb</li><li>rdt非常需要他vsvdGbuybjk</li><li>vvsdv</li><li>rdt56bjk</li><li>rbuyb</li><li>rdtvGy尝试</li><li>vvsdv</li><li>rdtGbuybjGbuGbuybjGbuybjGbuybjk</li><li>rbuyb</li><li>rdt非常需要buybjk</li><li>vvsdv</li><li>r</li><li>r产生d生dt56bjk</li><li>rbuyb</li><li class="active" style="margin:23px 0; font-size:17px; color:#DDD;">rdbn超时vcnv嘎的基本chsia吉林省v从sj空casnl长沙，klfuicasctv试</li><li>vvscasdv</li><li>rbuyb</li><li>rdt非常需要他vsvdGbuybjk</li><li>vvsdv</li><li>rdt56bjk</li><li>rbuyb</li><li>rdGy尝vGy尝ty尝vGy尝tv试</li><li>vvsdv</li><li>rdtGbuybjk</li><li>rbuybrbuybrbuybrbuybrbuyb</li><li>rdt非常需要buybjk</li><li>vvsdv</li><li>r产生dt56bjk</li><li>rbuyb</li><li>rdtvGy尝试</li><li>vvscasdv</li>
        </ul>
      </gemini-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicPlayerLyric',

  components: {
  },

  props: {
  },

  computed: {
    nowPlayMusicId () {
      return this.$store.state.Music.nowPlayList[this.$store.state.Music.nowIndex].id
    }
  },

  watch: {
    nowPlayMusicId: {
      handler (nVal) {
        // console.log(nVal)
      }
    },
    deep: true,
    immediate: true
  }
}
</script>

<style lang="less" scoped>
  #musicPlayerLyric {
    width:38%; height:250px; float:right; display:inline-block; position:relative; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;
  }

  .question {
    right:38px; top:53px; position:fixed; display:inline-block; font-size:25px; z-index:9; color:rgba(255, 255, 255, 0.28);

    > .glass-bg{
      width:76px; top:25px;  left:50%; padding:3px; position:absolute; transform:translate(-50%, 0); font-size:14px; text-align:center;
      display:none;
    }

    &:hover > .glass-bg{
      display:block;
    }

    &-link {
      padding:6px 0; display:block; color:#999; text-shadow:none;
    }
  }

  .lyric-container {
    height:250px; padding:12px 0 3px; box-sizing:border-box; overflow:auto; text-align:center; font-size:13px; line-height:1.5em; color:#777;

    &-detail {
      width:100%; height:250px; padding:0 18px; box-sizing:border-box;
    }
  }
</style>
