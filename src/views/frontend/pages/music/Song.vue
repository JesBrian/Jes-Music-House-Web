<template>
  <div id="homeLayout">

    <div class="box-show" style="width:75%; height:100%; display:inline-block;">

      <comment-total />
    </div>

    <div style="width:25%; padding:34px 18px; float:right; box-sizing:border-box;">
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">相似的歌曲</div>
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
          <router-link v-for="n in 4" to="/song" :key="`${n}2288`">
          </router-link>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">包含这首歌的歌单</div>
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
          <div v-for="n in 3" :key="`${n}2288`" class="box-show" style="width:100%; height:48px; margin:0 0 12px; display:inline-block;">
            <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'" style="width:40px; height:40px; margin:4px; float:left;"/>
            <router-link to="/play-list/song-group/1" style="font-size:15px; font-weight:700; line-height:2em; color:#BBB;">
              专辑 Play List 歌单
            </router-link>
            <router-link to="/singer-detail/hot-song/1" class="text-hidden" style="width:70%; color:#888; font-size:13px;">
              by JesBrian
            </router-link>
          </div>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">喜欢这首歌的人</div>
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
          <router-link v-for="n in 4" :key="`${n}88`" to="/user" style="margin-bottom:16px;">
            <img class="box-show" style="width:43px; height:43px; padding:2px;" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
          </router-link>
        </div>
      </div>
      <div style="margin-bottom:38px;">
        <div style="margin:0 0 12px; padding-left:13px; border-left:3px solid #00C4E1; font-size:15px;">客户端多端下载</div>
        <div>
          <p>同步歌单，随时畅听云音乐</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CommentTotal from '../../../../components/frontend/Comment/CommentTotal.vue'

export default {
  name: 'Song',

  components: {
    CommentTotal
  }
}
</script>

<style scoped>

</style>
