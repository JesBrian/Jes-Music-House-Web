<template>
  <div style="margin-bottom:38px;">
    <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">喜欢这首歌的人</div>
    <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
      <router-link v-for="n in 4" :key="`${n}88`" to="/user" style="margin-bottom:16px;">
        <img class="box-show" style="width:43px; height:43px; padding:2px;" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarUser'
}
</script>

<style scoped>

</style>
