<template>
  <gemini-scrollbar>
    <div id="backstageLayout">
      <title-bar />

    </div>
  </gemini-scrollbar>
</template>

<script>
import TitleBar from '../../../../../components/backstage/TitleBar/TitleBar.vue'
import Pagination from '../../../../../components/common/Pagination/Pagination.vue'

export default {
  name: 'Slide',

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
