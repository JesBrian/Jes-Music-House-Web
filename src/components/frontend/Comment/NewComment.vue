<template>
  <div style="margin:18px 0 0; display:flex; position:relative;">

    <img v-lazy="'http://p4.music.126.net/kaISxJU3yP0Qvw6H_vUyAQ==/18984167765401316.jpg?param=50y50'"
         class="box-show" style="width:42px; height:42px; margin:18px 28px 0 18px; padding:2px; float:left;" />

    <div style="flex:1;">
      <create-comment />
    </div>

  </div>
</template>

<script>
import CreateComment from './CreateComment.vue'

export default {
  name: 'NewComment',

  components: {
    CreateComment
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
