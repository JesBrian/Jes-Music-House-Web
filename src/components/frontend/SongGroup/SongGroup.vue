<template>
  <div>
    <div style="margin:2px 0; padding:2px 0 0; box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727; line-height:31px;">
      <div style="height:30px;">
        <div style="width:6%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828;"></div>
        <div style="width:12%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">操作</div>
        <div @click="changeOrder('titleOrder')" style="width:46%; height:100%; padding-left:14px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">
          音乐标题<i :class="titleOrder" class="mh-if" style="top:0; right:10px; position:absolute; font-size:13px; color:#888;"></i>
        </div>
        <div @click="changeOrder('singerOrder')" style="width:25%; height:100%; padding-left:16px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">
          歌手<i :class="singerOrder" class="mh-if" style="top:0; right:10px; position:absolute; font-size:13px; color:#888;"></i>
        </div>
        <div @click="changeOrder('timeOrder')" style="width:11%; height:100%; padding-left:16px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828; cursor:pointer;">
          时长<i :class="timeOrder" class="mh-if" style="top:0; right:10px; position:absolute; font-size:13px; color:#888;"></i>
        </div>
      </div>
    </div>
    <div v-for="n in 108" :key="n + '22'" class="box-shadow" style="padding:2px 0;">
      <song-item :index="n" />
    </div>
  </div>
</template>

<script>
import SongItem from './SongItem.vue'

export default {
  name: 'SongGroup',

  components: {
    SongItem
  },

  data () {
    return {
      titleOrder: 'up-down',
      singerOrder: 'up-down',
      timeOrder: 'up-down'
    }
  },

  methods: {
    changeOrder (type) {
      if (this[type] === 'up-down') {
        this[type] = 'up'
      } else if (this[type] === 'up') {
        this[type] = 'down'
      } else {
        this[type] = 'up-down'
      }
    }
  }
}
</script>

<style scoped>

</style>
