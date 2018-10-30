<template>
  <div class="singer-cell">
    <router-link :to="`/singer-detail/hot-song/${singerData.id}`" class="singer-poster box-show">
      <img src="http://p1.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=180y180"/>
    </router-link>
    <p class="text-hidden">
      <router-link :to="`/singer-detail/hot-song/${singerData.id}`" class="singer-name">{{ singerData.name }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SingerCell',

  props: {
    singerData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .singer {
    &-cell {
      width:108px; height:158px; margin:0 8px; position:relative; display:inline-block;
    }

    &-poster {
      width:100%; height:108px; padding:4px; display:inline-block;
    }

    &-name {
      max-width:100%; line-height:1.38em;
      &:hover {
        color:#DDD;
      }
    }
  }
</style>
