<template>
  <div style="width:38%; height:250px; float:right; display:inline-block; position:relative; box-shadow:inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 12px 12px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3), inset 0 0 0 1px #272727;">
    <!-- 歌词报错 -->
    <i class="mh-if question">
      <ul class="glass-bg box-show">
        <li class="box-shadow"><router-link to="/">上传歌词</router-link></li>
        <li class="box-shadow"><router-link to="/">歌词报错</router-link></li>
      </ul>
    </i>
    <!-- 滚动歌词区域 -->
    <div style="width:100%; height:250px; padding:12px 0 3px; box-sizing:border-box; overflow:auto; text-align:center; font-size:13px; line-height:1.5em; color:#777;">
      <gemini-scrollbar v-if="isShow">
        <ul style="width:100%; height:250px; padding:0 18px; box-sizing:border-box;">
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
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  .question {
    right:38px; top:53px; position:fixed; font-size:25px; opacity:0.38; z-index:9;
  }
  .question a {
    color:#999;
    text-shadow:none;
  }
  .question > ul.glass-bg{
    width:76px; top:25px;  left:50%; padding:3px; position:absolute; transform:translate(-50%, 0); font-size:14px; text-align:center;
    display:none;
  }
  .question > ul.glass-bg > li{
    padding:6px 0;
  }
  .question:hover > ul.glass-bg{
    display:block;
  }
</style>
