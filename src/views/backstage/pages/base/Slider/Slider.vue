<template>
  <div id="backstageLayout">
    <title-bar />

    <pagination />
  </div>
</template>

<script>
import TitleBar from '../../../../../components/backstage/TitleBar/TitleBar.vue'
import Pagination from '../../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'Slider',

  components: {
    TitleBar, Pagination
  },

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<style scoped>
</style>
