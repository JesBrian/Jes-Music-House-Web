<template>
  <div id="floatBlock" @click="goPViewsTop" class="super-btn-out" style="width:42px; height:42px; bottom:113px; position:fixed;">
    <div class="super-btn-in mh-if convenient" style="width:31px; height:31px; font-size:28px; line-height:33px;"></div>
  </div>
</template>

<script>
export default {
  name: 'FloatBlock',

  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },

  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.changePosition()
          that.timer = false
        }, 388)
      }
    }
  },

  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
    this.changePosition()
  },

  methods: {
    /**
     * 依据窗口宽度[vuex]改变浮动游标的位置
     */
    changePosition () {
      document.getElementById('floatBlock').style.right = ((this.screenWidth - document.getElementById('homeLayout').clientWidth) / 2 - 56) + 'px'
    },

    goPViewsTop () {
      document.querySelector('.gm-scroll-view').scrollTop = 0
    }
  }
}
</script>

<style scoped>

</style>
