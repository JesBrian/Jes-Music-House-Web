// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/router/router.js'
import store from './config/vuex/store.js'
import vueLazyload from 'vue-lazyload'
import geminiScrollbar from 'vue-gemini-scrollbar'

import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import './assets/plugins/myiconfont/iconfont.css'

Vue.config.productionTip = false
Vue.use(vueLazyload, {
  error: require('./assets/img/loading.svg'),
  loading: require('./assets/img/loading.svg')
})
Vue.use(geminiScrollbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
