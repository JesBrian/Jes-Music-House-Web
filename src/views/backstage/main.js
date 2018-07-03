// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BackstageFrame from './BackstageFrame.vue'
import router from '../../config/router/backstageRouter.js'
import store from '../../config/vuex/index.js'
import vueLazyload from 'vue-lazyload'
import GeminiScrollbar from 'vue-gemini-scrollbar'

import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '../../assets/plugins/myiconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(vueLazyload, {
  error: require('../../assets/img/loading.svg'),
  loading: require('../../assets/img/loading.svg')
})
Vue.use(GeminiScrollbar)

/* eslint-disable no-new */
new Vue({
  el: '#backstage',
  router,
  store,
  components: { BackstageFrame },
  template: '<BackstageFrame/>'
})

// 每次路由跳转执行操作 - 重置 vuex 变量
router.beforeEach((to, from, next) => {
  next()
})