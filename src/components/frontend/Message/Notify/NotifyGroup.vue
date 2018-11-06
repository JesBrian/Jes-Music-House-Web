<template>
  <div>
    <notify-cell v-for="item in dataSource" :item-data="item" :key="item.id" />
  </div>
</template>

<script>
import NotifyCell from './NotifyCell.vue'

export default {
  name: 'NotifyGroup',

  components: {
    NotifyCell
  },

  props: {
    dataSource: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
