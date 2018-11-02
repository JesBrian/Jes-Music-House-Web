<template>
  <div>
    <div v-if="showNav" style="height:30px; margin:2px 0; padding:2px 0 0; box-shadow:inset 0 2px 1px -1px rgba(255, 255, 255, 0.2), inset 0 -2px 1px -1px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.5), inset 0 0 0 1px #272727; line-height:28px;">
      <div style="width:6%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828;"></div>
      <div style="width:8%; height:100%; float:left; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">操作</div>
      <div @click="changeOrder('titleOrder')" style="width:68%; height:100%; padding-left:14px; position:relative; float:left; box-sizing:border-box; border-right:1px solid #282828;">
        音乐标题 - 歌手
      </div>
      <div @click="changeOrder('timeOrder')" style="width:18%; height:100%; position:relative; float:right; box-sizing:border-box; border-right:1px solid #282828; text-align:center;">
        次数
      </div>
    </div>

    <listen-cell v-for="(item, index) in listData" :key="item.id" :index="index + 1" :song-data="item" />
  </div>
</template>

<script>
import ListenCell from './ListenCell.vue'

export default {
  name: 'ListenGroup',

  components: {
    ListenCell
  },

  props: {
    showNav: {
      type: Boolean,
      default: true
    },

    listData: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
