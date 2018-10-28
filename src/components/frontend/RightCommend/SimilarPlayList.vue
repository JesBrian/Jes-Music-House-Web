<template>
  <div style="margin-bottom:38px;">
    <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">包含这首歌的歌单</div>

    <div v-for="n in 3" :key="`${n}2288`" class="box-show" style="height:48px; margin:0 0 12px; display:block;">
      <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" style="width:40px; height:40px; margin:4px; float:left;"/>
      <router-link to="/play-list/song-group/1" style="font-size:15px; font-weight:700; line-height:2em; color:#BBB;">
        专辑 Play List 歌单
      </router-link>
      <router-link to="/singer-detail/hot-song/1" class="text-hidden" style="width:70%; color:#888; font-size:13px;">
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

<style scoped>

</style>
