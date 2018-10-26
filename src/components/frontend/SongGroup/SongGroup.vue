<template>
  <div>

    <song-title />

    <div v-for="(item, index) in songList" :key="item.id" class="song-item-container box-shadow">
      <song-item :index="index + 1" :song-data="item" />
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
  },

  props: {
    searchKey: '',

    songList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data () {
    return {
      tempSongList: [],
      timer: null
    }
  },

  watch: {
    searchKey (nVal) {
      if (this.timer === null) {
        this.songList.forEach((item) => {
          this.tempSongList.push(item)
        })
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        if (nVal === '') {
          this.songList = this.tempSongList
        } else {
          let tempData = []
          this.tempSongList.forEach(item => {
            if (item.name.includes(nVal) || item.singer.includes(nVal)) {
              tempData.push(item)
            }
          })
          this.songList = tempData
        }
      }, 100)
    }
  }
}
</script>

<style lang="less" scoped>
  .song-item-container {
    padding:2px 0;
  }
</style>
