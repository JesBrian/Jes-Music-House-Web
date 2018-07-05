// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Login from '../login/Login.vue'

import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import '../../assets/plugins/myiconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#login',
  components: { Login },
  template: '<Login/>'
})
