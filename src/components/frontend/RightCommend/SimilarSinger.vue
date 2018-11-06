<template>
  <div class="base-container">
    <div class="base-container-title">{{ title }}</div>

    <div class="similar-singer-container">
      <router-link v-for="item in dataSource" :key="item.id" :to="`/singer-detail/hot-song/${item.id}`" class="similar-singer-link">
        <img class="similar-singer-avatar box-show" src="http://p2.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=80y80"/>
        <p class="similar-singer-name text-hidden">{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimilarSinger',

  props: {
    title: {
      type: [String, Number],
      default: '相似的歌手推荐'
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

  .similar-singer {
    &-container {
      display:flex; justify-content:space-between; flex-wrap:wrap;
    }
    &-link {
      width:65px; margin-bottom:16px;
    }
    &-avatar {
      width:58px; height:58px; margin:0 2px; padding:2px;
    }
    &-name {
      font-size:14px; color:#BBB; text-align:center;
    }
  }
</style>
