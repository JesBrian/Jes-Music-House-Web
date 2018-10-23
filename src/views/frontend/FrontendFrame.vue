<template>
  <div>
    <!-- 导航条 -->
    <navigation-bar />

    <!-- 前台二级路由 -->
    <div id="homeMainContainer" :class="{active: $store.state.View.topMenuIsShowSecond}">
      <gemini-scrollbar v-if="hackReset">

        <router-view class="glass-bg box-show" />

        <home-footer />
      </gemini-scrollbar>
    </div>

    <!-- 回到顶部组件 -->
    <float-block v-if="hackReset" />

    <!-- 拟态框组件 -->
    <home-modal />

    <!-- 操作提示条 -->
    <super-tips v-if="$store.state.View.tips" />

    <!-- 音乐播放器组件 -->
    <music-player />
  </div>
</template>

<script>
import NavigationBar from '../../components/frontend/NavigationBar/NavigationBar.vue'
import MusicPlayer from '../../components/frontend/MusicPlayer/MusicPlayer.vue'
import FloatBlock from '../../components/frontend/FloatBlock/FloatBlock'
import HomeModal from '../../components/common/Modal/HomeModal.vue'
import SuperTips from '../../components/common/Tips/SuperTips.vue'
import HomeFooter from '../../components/frontend/HomeFooter/HomeFooter.vue'

export default {
  name: 'FrontendFrame',

  components: {
    NavigationBar, HomeFooter, FloatBlock, HomeModal, SuperTips, MusicPlayer
  },

  data () {
    return {
      hackReset: true
    }
  },

  watch: {
    $route () {
      document.querySelector('.gm-scroll-view').scrollTop = 0
      this.hackReset = false
      this.$nextTick(() => {
        this.hackReset = true
      })
    }
  },

  created () {
    // 用户是否登录
    this.$localForage.getItem('user', (result, value) => {
      if (value) { // 如果用户已经登陆了
        // 检验 localForage 所存的用户信息是否正确
        this.$http.post('verifyUserLogin', {
          userId: value.id,
          username: value.username
        }).then((response) => {
          if (response.data.state === '200') {
            this.$store.commit('SAVE_LOGIN_USER_INFO', value)
          } else {
            this.$localForage.setItem('user', null)
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    })
  }
}
</script>

<style lang="less" >
  #homeMainContainer {
    width:100%; height:100%; left:0; padding:63px 3px 6px; display:inline-block; position:fixed; box-sizing:border-box; background:#2E2E2E; z-index:-1;

    &.active {
      padding-top:92px;
    }
  }

  #homeLayout {
    width:1000px; min-height:688px; margin:-5px auto; padding:0; position:relative; z-index:25;
  }
</style>
