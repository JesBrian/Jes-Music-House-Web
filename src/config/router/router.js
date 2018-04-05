import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from './homeRouter.js'
import BackstageRouter from './backstageRouter.js'

Vue.use(Router)

export default new Router({
  /**
   * 路由跳转配置
   */
  routes: [
    ...HomeRouter,
    ...BackstageRouter
  ]
})
