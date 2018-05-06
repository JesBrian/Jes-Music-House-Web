import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from './homeRouter.js'
import BackstageRouter from './backstageRouter.js'

Vue.use(Router)

/**
 * 路由跳转配置
 */
export default new Router({
  routes: [
    ...HomeRouter,
    ...BackstageRouter
  ]
})
