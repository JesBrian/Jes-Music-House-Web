<template>
  <div>

    <song-title />

    <div v-for="n in 108" :key="n + '22'" class="box-shadow" style="padding:2px 0;">
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

<style scoped>

</style>
