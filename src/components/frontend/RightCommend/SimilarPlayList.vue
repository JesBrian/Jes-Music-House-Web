<template>
  <div class="base-container">
    <div class="base-container-title">包含这首歌的歌单</div>

    <div v-for="n in 3" :key="`${n}2288`" class="similar-play-list box-show">
      <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'"
           class="similar-play-list-img"/>
      <router-link to="/play-list/song-group/1" class="similar-play-list-title">
        专辑 Play List 歌单
      </router-link>
      <router-link to="/singer-detail/hot-song/1" class="similar-play-list-creator text-hidden">
        by JesBrian
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarPlayList'
}
</script>

<style lang="less" scoped>
  .base-container {
    margin-bottom:38px;
    &-title {
      margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;
    }
  }

  .similar-play-list {
    height:48px; margin:0 0 12px; display:block;
    &-img {
      width:40px; height:40px; margin:4px 8px 0 4px; float:left;
    }
    &-title {
      margin-top:6px; float:left; font-size:15px; font-weight:700; line-height:1.3em; color:#BBB;
    }
    &-creator {
      width:70%; line-height:1.3em; color:#888; font-size:13px;
    }
  }
</style>
