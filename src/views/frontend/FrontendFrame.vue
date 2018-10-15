<template>
  <div style="background:lightgreen">
    <!-- 导航条 -->
    <navigation-bar />

    <!-- 前台二级路由 -->
    <div style="width:100%; height:100%; left:0; padding:92px 3px 48px; display:inline-block; position:fixed; box-sizing:border-box; background:#2E2E2E; z-index:-1;">
      <gemini-scrollbar v-if="hackReset">
        <router-view class="glass-bg box-show" />
        <div class="glass-bg box-show" style="width:1120px; height:55px; margin:-3px auto -8px; position:relative; z-index:50;"></div>
      </gemini-scrollbar>
    </div>

    <!-- 回到顶部组件 -->
    <float-block />

    <!-- 拟态框组件 -->
    <home-modal />

    <!-- 音乐播放器组件 -->
    <music-player />
  </div>
</template>

<script>
import NavigationBar from '../../components/frontend/NavigationBar/NavigationBar.vue'
import MusicPlayer from '../../components/frontend/MusicPlayer/MusicPlayer.vue'
import FloatBlock from '../../components/frontend/FloatBlock/FloatBlock'
import HomeModal from '../../components/common/Modal/HomeModal.vue'

export default {
  name: 'FrontendFrame',

  components: {
    FloatBlock,
    NavigationBar,
    HomeModal,
    MusicPlayer
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

<style>
  #homeLayout {
    width:1000px; min-height:688px; margin:-5px auto; padding:0; position:relative; z-index:25;
  }
</style>
