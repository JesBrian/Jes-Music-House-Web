<template>
  <div @click="goPViewsTop" class="super-btn-out" style="width:42px; height:42px; right:123px; bottom:113px; position:fixed;">
    <div class="super-btn-in" style="width:31px; height:31px;"></div>
  </div>
</template>

<script>
export default {
  name: 'FloatBlock',

  methods: {
    goPViewsTop () {
      document.querySelector('.gm-scroll-view').scrollTop = 0
    }
  }
}
</script>

<style scoped>

</style>
