<template>
  <div id="floatBlock" @click="goPViewsTop" class="super-btn-out" :class="{'unshow': unshow}" style="width:42px; height:42px; bottom:113px; position:fixed;">
    <div class="super-btn-in mh-if convenient" style="width:31px; height:31px; font-size:28px; line-height:33px;"></div>
  </div>
</template>

<script>
export default {
  name: 'FloatBlock',

  data () {
    return {
      unshow: false,
      screenWidth: document.body.clientWidth
    }
  },

  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        setTimeout(() => {
          this.changePosition()
          this.timer = false
        }, 388)
      }
    }
  },

  mounted () {
    // 为了保证兼容性，这里取两个值，哪个有值取哪一个
    let scrollTop = document.querySelector('.gm-scroll-view').scrollTop
    // scrollTop就是触发滚轮事件时滚轮的高度
    if (scrollTop > 108) this.unshow = false
    else {
      this.unshow = true
    }
    this.changePosition()

    const that = this
    document.querySelector('.gm-scroll-view').onscroll = function () {
      // 为了保证兼容性，这里取两个值，哪个有值取哪一个
      let scrollTop = document.querySelector('.gm-scroll-view').scrollTop
      // scrollTop就是触发滚轮事件时滚轮的高度
      if (scrollTop > 108) that.unshow = false
      else {
        that.unshow = true
      }
    }
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
  },

  methods: {
    /**
     * 依据窗口宽度[vuex]改变浮动游标的位置
     */
    changePosition () {
      document.getElementById('floatBlock').style.right = ((this.screenWidth - document.getElementById('homeLayout').clientWidth) / 2 - 58) + 'px'
    },

    goPViewsTop () {
      let timer = null // 定时器、判断是否到达顶部
      timer = setInterval(() => {
        // 获取滚动条的滚动高度
        let osTop = document.querySelector('.gm-scroll-view').scrollTop
        // 用于设置速度差，产生缓动的效果
        let speed = Math.floor(-osTop / 6)
        document.querySelector('.gm-scroll-view').scrollTop = osTop + speed
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
    }
  }
}
</script>

<style scoped>
  #floatBlock.unshow {
    display: none;
  }
</style>
