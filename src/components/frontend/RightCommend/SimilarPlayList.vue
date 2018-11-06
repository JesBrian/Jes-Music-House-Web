<template>
  <div class="base-container">
    <div class="base-container-title">{{ title }}</div>

    <div v-for="item in dataSource" :key="item.id" class="similar-play-list box-show">
      <router-link :to="`/play-list/song-group/${item.id}`">
        <img v-lazy="'http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80'"
             class="similar-play-list-img"/>
      </router-link>
      <div class="similar-play-list-info">
        <router-link :to="`/play-list/song-group/${item.id}`" class="similar-play-list-title text-hidden">
          {{ item.title }}
        </router-link>
        <router-link to="/singer-detail/hot-song/1" class="similar-play-list-creator text-hidden">
          by JesBrian
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarPlayList',

  props: {
    title: {
      type: [String, Number],
      default: '相似的歌单推荐'
    },

    dataSource: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
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
    &-info {
      width:74%; display:flex; flex-direction:column; justify-content:center;
    }
    &-title {
      margin:6px 0; font-size:15px; font-weight:700;
      color:#BBB;
      &-link {
      }
    }
    &-creator {
      color:#888; font-size:13px;
    }
  }
</style>
