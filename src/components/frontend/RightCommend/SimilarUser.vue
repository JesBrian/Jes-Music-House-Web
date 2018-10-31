<template>
  <div class="base-container">
    <div class="base-container-title">喜欢这首歌的人</div>

    <div class="similar-user">
      <router-link v-for="n in 4" :key="`${n}88`" to="/user/1" class="similar-user-link">
        <img class="similar-user-avatar box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarUser'
}
</script>

<style lang="less" scoped>
  .base-container {
    margin-bottom:38px;
    &-title {
      margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;
    }
  }

  .similar-user {
    display:flex; justify-content:space-between; flex-wrap:wrap;
    &-link {
      margin-bottom:16px;
    }
    &-avatar {
      width:43px; height:43px; padding:2px;
    }
  }
</style>
