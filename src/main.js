// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './config/router/router.js'

import geminiScrollbar from 'vue-gemini-scrollbar'

Vue.config.productionTip = false

Vue.use(geminiScrollbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

