<template>
  <div>
    <feedback-cell v-for="item in dataSource" :item-data="item" :key="item.id" />
  </div>
</template>

<script>
import FeedbackCell from './FeedbackCell.vue'

export default {
  name: 'FeedbackGroup',

  components: {
    FeedbackCell
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
