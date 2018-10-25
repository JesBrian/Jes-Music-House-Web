<template>
  <div style="width:93%; margin:0 auto 18px;">

    <disc-list-cell v-for="n in 25" :key="n + 99" />

  </div>
</template>

<script>
import DiscListCell from './DiscListCell.vue'

export default {
  name: 'DiscListGroup',

  components: {
    DiscListCell
  }
}
</script>

<style scoped>

</style>
