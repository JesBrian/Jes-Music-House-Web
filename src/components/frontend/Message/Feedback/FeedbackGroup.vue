<template>
  <div>
    <feedback-cell v-for="n in 4" />
  </div>
</template>

<script>
import FeedbackCell from './FeedbackCell.vue'

export default {
  name: 'FeedbackGroup',

  components: {
    FeedbackCell
  }
}
</script>

<style scoped>

</style>
