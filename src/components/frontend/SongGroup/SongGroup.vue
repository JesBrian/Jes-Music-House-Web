<template>
  <div>

    <song-title />

    <div v-for="n in 108" :key="n + '22'" class="song-item-container box-shadow">
      <song-item :index="n" />
    </div>

  </div>
</template>

<script>
import SongTitle from './SongTitle.vue'
import SongItem from './SongItem.vue'

export default {
  name: 'SongGroup',

  components: {
    SongTitle, SongItem
  }
}
</script>

<style lang="less" scoped>
  .song-item-container {
    padding:2px 0;
  }
</style>
