// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from '../../router/frontendRouter.js'
import store from '../../vuex/frontend/index.js'
import axios from 'axios'
import vueLazyload from 'vue-lazyload'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import localForage from 'localforage'
import { Global } from '../../config/global.js'

import '@/assets/styles/reset.less'
import '@/assets/styles/common.less'
import '@/assets/styles/mixin.less'
import '@/assets/styles/animation.less'
import '@/assets/fonts/iconfont.css'

Vue.config.productionTip = false

// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = Global.API_URL // 配置 API 路径
Vue.prototype.$http = axios

localForage.config({
  driver: localForage.INDEXEDDB, // Force WebSQL; same as using setDriver()
  name: 'Music House',
  version: 1.0,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: 'MH-localforage', // Should be alphanumeric, with underscores.
  description: 'Music House'
})
Vue.prototype.$localForage = localForage
Vue.global = Vue.prototype.$global = Global

Vue.use(vueLazyload, {
  error: require('../../assets/img/loading.svg'),
  loading: require('../../assets/img/loading.svg')
})
Vue.use(GeminiScrollbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 每次路由跳转执行操作 - 重置 vuex 变量
router.beforeEach((to, from, next) => {
  next()
})
