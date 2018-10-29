<template>
  <div class="base-container">
    <div class="base-container-title">相似歌手推荐</div>

    <div class="similar-singer-container">
      <router-link v-for="n in 6" :key="`${n}88`" to="/singer-detail/hot-song/1" class="similar-singer-link">
        <img class="similar-singer-avatar box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
        <p class="similar-singer-name">JesBrian</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarSinger'
}
</script>

<style lang="less" scoped>
  .base-container {
    margin-bottom:38px;
    &-title {
      margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;
    }
  }

  .similar-singer {
    &-container {
      display:flex; justify-content:space-between; flex-wrap:wrap;
    }
    &-link {
      margin-bottom:16px;
    }
    &-avatar {
      width:58px; height:58px; padding:2px;
    }
    &-name {
      font-size:14px; color:#BBB;
    }
  }
</style>
