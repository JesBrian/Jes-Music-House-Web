<template>
  <div class="play-list-cell">
    <router-link to="/play-list/song-group/1" class="play-list-cell-post cube-bg box-show">
      <img v-lazy="'http://p1.music.126.net/7goVc5XONBxnSS5FiGtV9A==/18999560928548815.jpg?param=140y140'" class="play-list-cell-img"/>
      <div class="play-list-cell-num glass-bg">
        <i class="mh-if headphone"></i>5656
      </div>
    </router-link>
    <i @click="playThisPlayList" class="play-btn mh-if play"></i>
    <p class="play-list-cell-title text-hidden">
      <router-link to="/play-list/song-group/1" class="play-list-cell-title-link">{{ playList.title }}</router-link>
    </p>
    <p class="play-list-cell-singer text-hidden">
      <span class="play-list-cell-singer-label">by</span>
      <router-link to="/singer-detail/hot-song/1" class="play-list-cell-singer-link">JesBrian</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PlayListCell',

  props: {
    playList: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .play-list-cell {
    width:158px; height:188px; position:relative; display:inline-block;

    &-post {
      width:120px; height:120px; margin:0 auto 8px; padding:2px; position:relative; display:block;
    }
    &-img {
      width:100%; height:100%;
    }
    &-num {
      width:120px; height:24px; left:-1px; bottom:-1px; padding:0 8px; position:absolute; border-radius:0; opacity:0.9; line-height:21px; font-size:14px; color:#999;
      > .headphone {
        margin:1px 3px 0 0; float:left;
      }
    }
    &-title {
      width:120px; margin-left:23px; color:#DDD;
      &-link {
        color:#DDD;
      }
    }
    &-singer {
      width:118px; margin-left:23px; line-height:2em; color:#888; font-size:13.3px;
      &-label {
        float:left; margin:-1px 8px 0 0;
      }
      &-link {
        color:#AAA;
      }
    }

    > .play-btn {
      top:99px; left:120px; position:absolute; display:none;
    }
    &:hover > .play-btn {
      display:inline-block;
      &:hover {
        color:#20dbfc;
      }
    }
  }
</style>
