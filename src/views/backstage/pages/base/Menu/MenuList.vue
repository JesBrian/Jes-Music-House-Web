<template>
  <div id="backstageLayout">
    <title-bar />

  </div>
</template>

<script>
import TitleBar from '../../../../../components/backstage/TitleBar/TitleBar.vue'

export default {
  name: 'MenuList',

  components: {
    TitleBar
  },

  created () {
    this.$http.post('getMenuListPagination').then(result => {
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
