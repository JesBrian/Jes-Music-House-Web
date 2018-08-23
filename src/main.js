// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/router/frontendRouter.js'
import axios from 'axios'
import store from './config/vuex/frontend/index.js'
import vueLazyload from 'vue-lazyload'
import GeminiScrollbar from 'vue-gemini-scrollbar'

import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import './assets/plugins/myiconfont/iconfont.css'
import localForage from 'localforage'

Vue.config.productionTip = false

// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = store.state.Global.DEV_API_URL // 本地开发配置 API 路径
// axios.defaults.baseURL = store.state.Global.PROD_API_URL // 服务器生产配置 API 路径
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

Vue.use(vueLazyload, {
  error: require('./assets/img/loading.svg'),
  loading: require('./assets/img/loading.svg')
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
