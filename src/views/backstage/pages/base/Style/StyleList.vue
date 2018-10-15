<template>
  <gemini-scrollbar>
    <div id="backstageLayout">

      <title-bar />

    </div>
  </gemini-scrollbar>
</template>

<script>
import TitleBar from '../../../../../components/backstage/TitleBar/TitleBar.vue'

export default {
  name: 'StyleList',

  components: {
    TitleBar
  },

  created () {
    this.$http.post('getStyleListPagination').then(result => {
      console.log(result)
    }).catch(error => {
      console.log(error)
    })
  },

  methods: {
  }
}
</script>

<style scoped>

</style>
