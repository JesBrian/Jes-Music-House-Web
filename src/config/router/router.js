import Vue from 'vue'
import Router from 'vue-router'
import FrontendRouter from './frontendRouter.js'
import BackstageRouter from './backstageRouter.js'

Vue.use(Router)

/**
 * 路由跳转配置
 */
export default new Router({
  routes: [
    ...FrontendRouter,
    ...BackstageRouter
  ]
})
