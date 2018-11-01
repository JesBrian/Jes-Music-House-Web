<template>
  <div>
    <notify-cell v-for="n in 8" />
  </div>
</template>

<script>
import NotifyCell from './NotifyCell.vue'

export default {
  name: 'NotifyGroup',

  components: {
    NotifyCell
  }
}
</script>

<style scoped>

</style>
