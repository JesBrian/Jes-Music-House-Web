<template>
  <div class="hot-album">
    <div class="hot-album-nav">
      <i class="hot-album-nav-icon mh-if hot"></i>
      <span class="hot-album-nav-title">热门推荐</span>
      <p class="hot-album-nav-links">
        <router-link to="/album/华语/hot" class="hot-album-nav-link">华语</router-link>
        <i class="hot-album-nav-link-split">|</i>
        <router-link to="/album/流行/hot" class="hot-album-nav-link">流行</router-link>
        <i class="hot-album-nav-link-split">|</i>
        <router-link to="/album/摇滚/hot" class="hot-album-nav-link">摇滚</router-link>
        <i class="hot-album-nav-link-split">|</i>
        <router-link to="/album/民谣/hot" class="hot-album-nav-link">民谣</router-link>
        <i class="hot-album-nav-link-split">|</i>
        <router-link to="/album/电子/hot" class="hot-album-nav-link">电子</router-link>
      </p>
      <router-link to="/album" class="hot-album-nav-read-more">更多 <i class="mh-if double-arrow-right"></i></router-link>
    </div>

    <play-list-group :play-list-data="playList" />

  </div>
</template>

<script>
import PlayListGroup from '../PlayList/PlayListGroup.vue'

export default {
  name: 'HotAlbum',

  components: {
    PlayListGroup
  },

  data () {
    return {
      playList: [
        {id: 111, title: 'play-list-111'},
        {id: 222, title: 'play-list-222'},
        {id: 333, title: 'play-list-333'},
        {id: 444, title: 'play-list-444'},
        {id: 555, title: 'play-list-555'},
        {id: 666, title: 'play-list-666'},
        {id: 777, title: 'play-list-777'},
        {id: 888, title: 'play-list-888'}
      ]
    }
  },

  methods: {
    playThisPlayList () {
    }
  }
}
</script>

<style lang="less" scoped>

  .hot-album {
    &-nav {
      width:93%; height:68px; margin:0 auto 28px; padding:0 43px 0 28px; box-sizing:border-box; box-shadow:0 3px 3px -3px #20dbfc; line-height:80px;
      &-icon {
        margin-right:8px; color:#00d8ff; font-size:32px;
      }
      &-title {
        font-size:23px; font-weight:700;
      }
      &-links {
        margin:5px 0 0 28px; display:inline-block; font-size:14px;
      }
      &-link {
        color:#999;
        &:hover {
          color:#DDD;
        }
        &-split {
          margin:0 8px; color:#333;
        }
      }
      &-read-more {
        margin-top:46px; float:right; font-size:13px; color:#888; line-height:1em;
        &:hover {
          color:#EEE; text-decoration:underline;
          > .mh-if {
            color: #20dbfc;
          }
        }

        > .mh-if {
          font-size:12.5px;
        }
      }
    }
  }
</style>
